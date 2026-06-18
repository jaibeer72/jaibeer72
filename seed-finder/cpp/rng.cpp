/**
 * rng.cpp — Seeded RNG for WebAssembly
 *
 * Uses std::mt19937 (Mersenne Twister) — the same generator available in
 * <random> for game code.  Exported functions are callable from JavaScript
 * via the Emscripten-generated rng.js glue.
 *
 * Exported API
 * ─────────────
 *  double* wasm_generate(uint32_t seed, int count)
 *      Allocates and returns a heap array of `count` doubles in [0, 1).
 *      The caller must free the pointer with wasm_free().
 *
 *  void wasm_free(double* ptr)
 *      Releases memory allocated by wasm_generate.
 *
 * Build
 * ─────
 *  See the Makefile in this directory.
 */

#include <cstdint>
#include <cstdlib>
#include <random>

extern "C" {

/**
 * Generate `count` uniform doubles in [0, 1) using mt19937 seeded with
 * `seed`.  Returns a newly-allocated array; free with wasm_free().
 */
double* wasm_generate(uint32_t seed, int count) {
    if (count <= 0) return nullptr;

    std::mt19937 engine(seed);
    std::uniform_real_distribution<double> dist(0.0, 1.0);

    double* out = static_cast<double*>(std::malloc(static_cast<std::size_t>(count) * sizeof(double)));
    if (!out) return nullptr;

    for (int i = 0; i < count; ++i) {
        out[i] = dist(engine);
    }
    return out;
}

/** Free memory returned by wasm_generate. */
void wasm_free(double* ptr) {
    std::free(ptr);
}

} // extern "C"
