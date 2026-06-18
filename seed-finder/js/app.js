/**
 * app.js — Seed Finder application logic
 *
 * Handles:
 *  - Reading UI inputs (seed, count, min, max, threshold)
 *  - Generating numbers via the JS RNG (rng.js / mulberry32)
 *  - Loading and calling the optional C++ WASM RNG when available
 *  - Rendering / updating the Chart.js chart
 *  - Highlighting bars that pass the threshold filter
 */

import { createRNG } from './rng.js';

// ── Chart.js instance ────────────────────────────────────────────────────────
let chart = null;

function buildChart(canvas, jsValues, wasmValues, threshold, min, max) {
    const labels = jsValues.map((_, i) => `Turn ${i + 1}`);
    const range = max - min;

    // Normalise raw [0,1) floats back to the [min,max] display range
    const toDisplay = (v) => +(min + v * range).toFixed(4);
    const jsDisplay = jsValues.map(toDisplay);
    const wasmDisplay = wasmValues.map(toDisplay);

    // Threshold line value
    const thresholdValue = min + threshold * range;

    // Bar colours: above threshold → accent green, below → muted blue
    const jsColors = jsDisplay.map((v) =>
        v >= thresholdValue ? 'rgba(52, 211, 153, 0.85)' : 'rgba(99, 179, 237, 0.6)'
    );
    const wasmColors = wasmDisplay.map((v) =>
        v >= thresholdValue ? 'rgba(52, 211, 153, 0.55)' : 'rgba(245, 158, 11, 0.45)'
    );

    const datasets = [
        {
            label: 'JS (mulberry32)',
            data: jsDisplay,
            backgroundColor: jsColors,
            borderColor: jsColors.map((c) => c.replace('0.85', '1').replace('0.6', '1')),
            borderWidth: 1,
            order: 2,
        },
    ];

    if (wasmDisplay.length > 0) {
        datasets.push({
            label: 'C++ WASM (mt19937)',
            data: wasmDisplay,
            backgroundColor: wasmColors,
            borderColor: wasmColors.map((c) => c.replace('0.55', '0.9').replace('0.45', '0.9')),
            borderWidth: 1,
            order: 3,
        });
    }

    // Threshold annotation line dataset
    datasets.push({
        label: `Threshold (${thresholdValue.toFixed(4)})`,
        data: Array(jsValues.length).fill(thresholdValue),
        type: 'line',
        borderColor: 'rgba(239, 68, 68, 0.9)',
        borderWidth: 2,
        borderDash: [6, 4],
        pointRadius: 0,
        fill: false,
        order: 1,
    });

    const config = {
        type: 'bar',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { color: '#e2e8f0' } },
                tooltip: {
                    callbacks: {
                        label: (ctx) => {
                            if (ctx.dataset.type === 'line') return `Threshold: ${thresholdValue.toFixed(4)}`;
                            const raw = ctx.raw;
                            const pass = raw >= thresholdValue;
                            return `${ctx.dataset.label}: ${raw} — ${pass ? '✅ PASS' : '❌ FAIL'}`;
                        },
                    },
                },
            },
            scales: {
                x: { ticks: { color: '#94a3b8', maxTicksLimit: 20 }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: {
                    min: min,
                    max: max,
                    ticks: { color: '#94a3b8' },
                    grid: { color: 'rgba(255,255,255,0.08)' },
                },
            },
        },
    };

    if (chart) {
        chart.destroy();
    }
    chart = new Chart(canvas, config);
}

// ── Stats summary ─────────────────────────────────────────────────────────────
function updateStats(jsValues, threshold, min, max) {
    const range = max - min;
    const thresholdValue = min + threshold * range;
    const passing = jsValues.filter((v) => min + v * range >= thresholdValue);
    const passPct = ((passing.length / jsValues.length) * 100).toFixed(1);
    const avg = (jsValues.reduce((a, b) => a + (min + b * range), 0) / jsValues.length).toFixed(4);

    document.getElementById('stat-count').textContent = jsValues.length;
    document.getElementById('stat-pass').textContent = `${passing.length} (${passPct}%)`;
    document.getElementById('stat-avg').textContent = avg;
    document.getElementById('stat-threshold').textContent = thresholdValue.toFixed(4);
}

// ── WASM loader ───────────────────────────────────────────────────────────────
let wasmModule = null;
let wasmLoadAttempted = false;

async function tryLoadWasm() {
    if (wasmLoadAttempted) return wasmModule;
    wasmLoadAttempted = true;

    try {
        // Resolve wasm/rng.js relative to this module file (app.js → ../wasm/rng.js)
        // using import.meta.url so the path works regardless of how the app is served.
        const wasmJsUrl = new URL('../wasm/rng.js', import.meta.url).href;
        const script = document.createElement('script');
        script.src = wasmJsUrl;
        await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });

        // The Emscripten module initialises asynchronously
        wasmModule = await new Promise((resolve) => {
            // eslint-disable-next-line no-undef
            RNGModule().then(resolve);
        });

        document.getElementById('wasm-status').textContent = '✅ C++ WASM loaded';
        document.getElementById('wasm-status').className = 'wasm-ok';
    } catch {
        document.getElementById('wasm-status').textContent = '⚠️ C++ WASM not available (run make in cpp/)';
        document.getElementById('wasm-status').className = 'wasm-warn';
    }
    return wasmModule;
}

// ── Main generate handler ─────────────────────────────────────────────────────
async function onGenerate() {
    const seed = parseInt(document.getElementById('seed').value, 10) || 0;
    const count = Math.min(Math.max(parseInt(document.getElementById('count').value, 10) || 50, 1), 500);
    const min = parseFloat(document.getElementById('min').value) || 0;
    const max = parseFloat(document.getElementById('max').value);
    const effectiveMax = isNaN(max) || max <= min ? min + 1 : max;
    const thresholdPct = parseFloat(document.getElementById('threshold').value) / 100;

    // JS generation
    const rng = createRNG(seed);
    const jsValues = rng.generate(count);

    // WASM generation (best-effort)
    let wasmValues = [];
    const mod = await tryLoadWasm();
    if (mod) {
        try {
            const ptr = mod._wasm_generate(seed, count);
            const view = new Float64Array(mod.HEAPF64.buffer, ptr, count);
            wasmValues = Array.from(view);
            mod._wasm_free(ptr);
        } catch {
            // WASM call failed silently — chart will only show JS data
        }
    }

    buildChart(
        document.getElementById('chart'),
        jsValues,
        wasmValues,
        thresholdPct,
        min,
        effectiveMax
    );
    updateStats(jsValues, thresholdPct, min, effectiveMax);

    // Update pass/fail turn list
    const range = effectiveMax - min;
    const thresholdValue = min + thresholdPct * range;
    const passTurns = jsValues
        .map((v, i) => ({ turn: i + 1, value: +(min + v * range).toFixed(4) }))
        .filter((t) => t.value >= thresholdValue);

    const list = document.getElementById('pass-list');
    list.innerHTML = passTurns.length
        ? passTurns.map((t) => `<li>Turn ${t.turn} → <strong>${t.value}</strong></li>`).join('')
        : '<li>No turns pass the threshold.</li>';
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-btn').addEventListener('click', onGenerate);

    // Auto-generate on load with defaults
    onGenerate();
});
