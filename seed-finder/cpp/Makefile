# Makefile — Build C++ RNG to WebAssembly via Emscripten
#
# Prerequisites
# ─────────────
#  Install Emscripten SDK:
#    git clone https://github.com/emscripten-core/emsdk.git
#    cd emsdk && ./emsdk install latest && ./emsdk activate latest
#    source ./emsdk_env.sh
#
# Targets
# ───────
#  make          — build wasm + JS glue (default)
#  make clean    — remove build output
#  make help     — show this message

CXX      := em++
CXXFLAGS := -std=c++17 -O2

SRC      := rng.cpp
OUT_JS   := ../wasm/rng.js
OUT_WASM := ../wasm/rng.wasm

# Functions exported to JavaScript
EXPORTS := _wasm_generate,_wasm_free

EMFLAGS := \
  -s MODULARIZE=1 \
  -s EXPORT_NAME=RNGModule \
  -s EXPORTED_FUNCTIONS='["$(EXPORTS)"]' \
  -s EXPORTED_RUNTIME_METHODS='["HEAPF64"]' \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s ENVIRONMENT=web \
  --no-entry

.PHONY: all clean help

all: $(OUT_JS)

$(OUT_JS): $(SRC)
	@mkdir -p ../wasm
	$(CXX) $(CXXFLAGS) $(EMFLAGS) $< -o $@
	@echo "✅  Built $(OUT_JS) and $(OUT_WASM)"

clean:
	rm -f $(OUT_JS) $(OUT_WASM)
	@echo "🧹  Cleaned wasm output."

help:
	@echo ""
	@echo "  make        Build rng.wasm + rng.js (requires Emscripten)"
	@echo "  make clean  Remove build artefacts"
	@echo "  make help   Show this help"
	@echo ""
	@echo "  Emscripten install docs:"
	@echo "  https://emscripten.org/docs/getting_started/downloads.html"
	@echo ""
