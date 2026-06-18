# wasm/

This directory is the output target for the Emscripten build.

After running `make` inside `../cpp/` you will find:

| File       | Description |
|------------|-------------|
| `rng.js`   | Emscripten JS glue — loaded by `index.html` at runtime |
| `rng.wasm` | Compiled WebAssembly binary |

The files are **not committed** to the repository because they are build artefacts.
Add them to `.gitignore` or generate them locally before serving the app.

## Quick start

```bash
# 1. Install Emscripten (one-time)
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk && ./emsdk install latest && ./emsdk activate latest
source ./emsdk_env.sh

# 2. Build
cd ../cpp
make

# 3. Serve seed-finder/ with any static HTTP server, e.g.:
cd ..
python3 -m http.server 8080
# then open http://localhost:8080
```

Without the WASM build the app still works fully using the JS (mulberry32) RNG —
the C++ comparison column is simply omitted from the chart.
