#!/usr/bin/env node
/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import process from 'node:process';

const packageDirectory = process.cwd();
const temporaryDirectory = mkdtempSync(
  path.join(tmpdir(), 'ix-search-bundle-')
);
const expectedBundle = path.resolve(
  packageDirectory,
  '../../skills/ix/scripts/search.mjs'
);
const expectedThirdPartyLicenses = path.resolve(
  packageDirectory,
  '../../skills/ix/THIRD_PARTY_LICENSES.md'
);

const artifacts = [
  {
    name: 'skills/ix/scripts/search.mjs',
    expected: expectedBundle,
    generated: path.join(temporaryDirectory, 'scripts', 'search.mjs'),
  },
  {
    name: 'skills/ix/THIRD_PARTY_LICENSES.md',
    expected: expectedThirdPartyLicenses,
    generated: path.join(temporaryDirectory, 'THIRD_PARTY_LICENSES.md'),
  },
];

try {
  execFileSync(process.execPath, ['scripts/build-ix-search-bundle.mjs'], {
    cwd: packageDirectory,
    env: {
      ...process.env,
      IX_SEARCH_OUT_DIR: temporaryDirectory,
    },
    stdio: 'inherit',
  });

  const staleArtifacts = artifacts.filter(
    ({ expected, generated }) =>
      !existsSync(expected) ||
      !readFileSync(expected).equals(readFileSync(generated))
  );
  if (staleArtifacts.length > 0) {
    process.stderr.write(
      `IX search artifact(s) out of date: ${staleArtifacts
        .map(({ name }) => name)
        .join(', ')}. Run \`pnpm bundle:ix-search\` to regenerate them.\n`
    );
    process.exitCode = 1;
  } else {
    process.stdout.write(
      'IX search bundle and third-party notice are up to date.\n'
    );
  }
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
