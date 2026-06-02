#!/bin/bash

#
# SPDX-FileCopyrightText: 2026 Siemens AG
#
# SPDX-License-Identifier: MIT
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
#

set -euo pipefail

WATCHED_PATHS=(packages/core packages/storybook-docs)

build() {
  exit 1
}

skip() {
  exit 0
}

if [[ "${CONTEXT:-}" == "deploy-preview" && "${PULL_REQUEST:-}" == "true" ]]; then
  BASE_BRANCH="${BASE_BRANCH:-main}"
  BASE_REF="refs/remotes/origin/${BASE_BRANCH}"
  COMMIT="${COMMIT_REF:-HEAD}"

  if ! git fetch --quiet --no-tags --depth=100 origin "${BASE_BRANCH}:${BASE_REF}"; then
    echo "Could not fetch base branch '${BASE_BRANCH}'. Continuing Netlify deploy."
    build
  fi

  if MERGE_BASE=$(git merge-base "${BASE_REF}" "${COMMIT}" 2>/dev/null); then
    DIFF_BASE="${MERGE_BASE}"
  else
    echo "Could not find merge base for '${BASE_BRANCH}'. Comparing with '${BASE_REF}'."
    DIFF_BASE="${BASE_REF}"
  fi

  if git diff --quiet "${DIFF_BASE}" "${COMMIT}" -- "${WATCHED_PATHS[@]}"; then
    echo "No deploy-preview changes in ${WATCHED_PATHS[*]}. Skipping Netlify deploy."
    skip
  fi

  echo "Deploy-preview changes detected in ${WATCHED_PATHS[*]}. Continuing Netlify deploy."
  build
fi

if [[ -z "${CACHED_COMMIT_REF:-}" || -z "${COMMIT_REF:-}" ]]; then
  echo "Missing commit metadata. Continuing Netlify deploy."
  build
fi

if git diff --quiet "${CACHED_COMMIT_REF}" "${COMMIT_REF}" -- "${WATCHED_PATHS[@]}"; then
  echo "No changes in ${WATCHED_PATHS[*]}. Skipping Netlify deploy."
  skip
fi

echo "Changes detected in ${WATCHED_PATHS[*]}. Continuing Netlify deploy."
build
