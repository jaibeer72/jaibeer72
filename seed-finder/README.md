# 🎲 Seed Finder — RNG Explorer

A client-side single-page application for finding and comparing random-number-generator seeds.

## What it does

| Feature | Detail |
|---------|--------|
| **Seeded JS RNG** | Mulberry32 — fast, high-quality, game-friendly seeded PRNG |
| **Seeded C++ WASM RNG** | `std::mt19937` compiled to WebAssembly via Emscripten |
| **Turn chart** | Bar chart of all generated values across N turns |
| **Threshold filter** | Red dashed line; bars above it are highlighted green (PASS) |
| **Stats summary** | Total turns, passing turns %, average value, threshold value |
| **Pass turn list** | Quick list of every turn that exceeds the threshold |

## Project layout

```
seed-finder/
├── index.html        ← main app (open this in a browser)
├── js/
│   ├── rng.js        ← mulberry32 seeded PRNG (ES module)
│   └── app.js        ← UI logic + Chart.js integration + WASM bridge
├── cpp/
│   ├── rng.cpp       ← C++ mt19937 RNG exported for Emscripten
│   └── Makefile      ← builds rng.wasm + rng.js glue
└── wasm/
    └── README.md     ← instructions for building the WASM artefacts
```

## Running

### JS-only (no build needed)

Serve the `seed-finder/` directory with any static file server:

```bash
# Python
python3 -m http.server 8080 --directory seed-finder

# Node (npx)
npx serve seed-finder
```

Then open [http://localhost:8080](http://localhost:8080).

The app works fully without building the C++ WASM — the C++ column is simply hidden until WASM is available.

### With C++ WASM comparison

```bash
# 1. Install Emscripten SDK (one-time)
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk && ./emsdk install latest && ./emsdk activate latest
source ./emsdk_env.sh

# 2. Build
cd seed-finder/cpp
make

# 3. Serve & open
cd ..
python3 -m http.server 8080
```

## Controls

| Control | Description |
|---------|-------------|
| **Seed** | Integer seed — same seed always produces the same sequence |
| **Turns** | How many random numbers to generate (1–500) |
| **Range Min / Max** | Output values are scaled to this range |
| **Threshold %** | Percentage of the range; turns above this value are highlighted |

## RNG details

### JS — Mulberry32

A simple 32-bit seeded PRNG by Tommy Ettinger.  Given the same seed it always produces the same sequence, making it ideal for reproducible game logic.  It is a stateful hash — there is no internal table or shuffle step, just fast bit mixing.

### C++ — `std::mt19937`

The Mersenne Twister (19937 variant) from `<random>`.  Standard in C++ game and simulation code.  Seeded identically it produces a deterministic sequence — the chart lets you compare it against the JS generator for the same seed.
