/**
 * Seeded PRNG for JavaScript — Mulberry32
 *
 * Mulberry32 is a simple, fast, high-quality 32-bit seeded PRNG well-suited
 * for game use.  It is a "Fisher-style" stateful generator: given the same
 * seed it always produces the same sequence, so you can reproduce or share
 * any run just by sharing the seed number.
 *
 * Usage:
 *   const rng = createRNG(12345);
 *   rng.next();       // → float in [0, 1)
 *   rng.nextInt(min, max); // → integer in [min, max]
 *   rng.reset();      // reset to original seed
 */

export function createRNG(seed) {
    let s = seed >>> 0; // coerce to unsigned 32-bit int

    function next() {
        s = (s + 0x6d2b79f5) >>> 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 0x100000000;
    }

    function nextInt(min, max) {
        return Math.floor(next() * (max - min + 1)) + min;
    }

    function reset() {
        s = seed >>> 0;
    }

    /** Generate `count` floats in [0,1) */
    function generate(count) {
        const out = [];
        for (let i = 0; i < count; i++) out.push(next());
        return out;
    }

    return { next, nextInt, reset, generate };
}
