#!/usr/bin/env bash
set -euo pipefail

# Simulates the registry deployment flow locally for:
# 1) main branch
# 2) release-registry/<version> branch
#
# Usage:
#   tooling/registry/scripts/simulate-gh-pages-branches.sh [release-version] [out-dir]
#
# Examples:
#   tooling/registry/scripts/simulate-gh-pages-branches.sh
#   tooling/registry/scripts/simulate-gh-pages-branches.sh v4.3.0 /tmp/ix-gh-pages-sim

RELEASE_VERSION="${1:-v4.3.0}"
SIM_ROOT="${2:-/tmp/ix-gh-pages-sim}"

ROOT_DIR="$(git rev-parse --show-toplevel)"
REGISTRY_DIR="${ROOT_DIR}/tooling/registry"
DIST_DIR="${REGISTRY_DIR}/dist"
PAGES_DIR="${SIM_ROOT}/pages"
OUT_DIR="${SIM_ROOT}/out"

if [[ ! -d "${REGISTRY_DIR}" ]]; then
  echo "❌ Could not find tooling/registry. Run this script inside the ix repository."
  exit 1
fi

LATEST_TAG="${RELEASE_VERSION}"
if [[ "${RELEASE_VERSION}" =~ ^v([0-9]+\.[0-9]+\.[0-9]+)$ ]]; then
  LATEST_TAG="${BASH_REMATCH[1]}"
fi

UPDATE_LATEST="false"
if [[ "${RELEASE_VERSION}" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  UPDATE_LATEST="true"
fi

print_summary() {
  local target_dir="$1"
  node -e '
const fs = require("fs");
const path = process.argv[1];
const reg = JSON.parse(fs.readFileSync(path + "/registry.json", "utf8"));
const ex = JSON.parse(fs.readFileSync(path + "/examples-registry.json", "utf8"));
const regVersions = Object.keys(reg.versions || {}).sort();
const exVersions = Object.keys(ex.versions || {}).sort();
const firstRegVersion = regVersions[regVersions.length - 1];
const firstExVersion = exVersions[exVersions.length - 1];
const firstBlockPath = reg.versions[firstRegVersion]?.blocks?.[0]?.path;
const firstExamplePath = ex.versions[firstExVersion]?.examples?.[0]?.path;
console.log("registry.latest:", reg["dist-tags"]?.latest);
console.log("examples.latest:", ex["dist-tags"]?.latest);
console.log("registry.versions:", regVersions.join(", "));
console.log("examples.versions:", exVersions.join(", "));
console.log("sample.block.path:", firstBlockPath || "(none)");
console.log("sample.example.path:", firstExamplePath || "(none)");
' "$target_dir"
}

run_build() {
  local version="$1"
  local latest_tag="$2"
  local path_prefix="$3"

  echo ""
  echo "🔧 Building registry for version='${version}', latestTag='${latest_tag}', pathPrefix='${path_prefix}'"
  (
    cd "${ROOT_DIR}"
    REGISTRY_VERSION="${version}" \
    REGISTRY_LATEST_TAG="${latest_tag}" \
    REGISTRY_PATH_PREFIX="${path_prefix}" \
    NO_REGISTRY_MINIFY=1 \
    pnpm --filter registry build
  )
}

run_merge() {
  local version="$1"
  local latest_tag="$2"
  local update_latest="$3"

  echo "🔀 Merging into simulated gh-pages: version='${version}', update_latest='${update_latest}'"
  (
    cd "${REGISTRY_DIR}"
    pnpm exec tsx src/merge-pages-registry.ts \
      --dist-dir "${DIST_DIR}" \
      --pages-dir "${PAGES_DIR}" \
      --out-dir "${OUT_DIR}" \
      --version "${version}" \
      --latest-tag "${latest_tag}" \
      --update-latest "${update_latest}"
  )

  rm -rf "${PAGES_DIR}"
  mkdir -p "${PAGES_DIR}"
  cp -R "${OUT_DIR}"/. "${PAGES_DIR}"/
}

echo "🧪 Simulating registry deployment to gh-pages"
echo "   repo: ${ROOT_DIR}"
echo "   release version: ${RELEASE_VERSION}"
echo "   simulated gh-pages dir: ${SIM_ROOT}"

rm -rf "${SIM_ROOT}"
mkdir -p "${PAGES_DIR}" "${OUT_DIR}"

# 1) Simulate push to main
run_build "main" "main" "main"
run_merge "main" "main" "false"

echo ""
echo "📍 State after main deployment"
print_summary "${PAGES_DIR}"

# 2) Simulate push to release-registry/<version>
run_build "${RELEASE_VERSION}" "${LATEST_TAG}" "${RELEASE_VERSION}"
run_merge "${RELEASE_VERSION}" "${LATEST_TAG}" "${UPDATE_LATEST}"

echo ""
echo "📍 State after release-registry/${RELEASE_VERSION} deployment"
print_summary "${PAGES_DIR}"

echo ""
echo "✅ Done"
echo "   Inspect files in: ${PAGES_DIR}"
echo "   - ${PAGES_DIR}/registry.json"
echo "   - ${PAGES_DIR}/examples-registry.json"
