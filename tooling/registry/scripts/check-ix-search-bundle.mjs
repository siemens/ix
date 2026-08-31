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
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import process from 'node:process';

const packageDirectory = process.cwd();
const temporaryDirectory = mkdtempSync(
  path.join(tmpdir(), 'ix-search-bundle-')
);
const expectedBundle = path.resolve(
  packageDirectory,
  '../../.agents/skills/ix/search.mjs'
);
const generatedBundle = path.join(temporaryDirectory, 'search.mjs');

try {
  execFileSync(
    'pnpm',
    ['exec', 'tsdown', '--config', 'tsdown.ix-search.config.ts'],
    {
      cwd: packageDirectory,
      env: {
        ...process.env,
        IX_SEARCH_OUT_DIR: temporaryDirectory,
      },
      stdio: 'inherit',
    }
  );

  const expected = readFileSync(expectedBundle);
  const generated = readFileSync(generatedBundle);
  if (!expected.equals(generated)) {
    process.stderr.write(
      'IX search bundle is out of date. Run `pnpm bundle:ix-search` to regenerate it.\n'
    );
    process.exitCode = 1;
  } else {
    process.stdout.write('IX search bundle is up to date.\n');
  }
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
