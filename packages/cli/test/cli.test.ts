/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const packageRoot = fileURLToPath(new URL('..', import.meta.url));

test('exposes the ix executable with the package metadata version', async () => {
  const packageMetadata = JSON.parse(
    await fs.readFile(path.join(packageRoot, 'package.json'), 'utf8')
  );
  assert.deepEqual(packageMetadata.bin, { ix: 'dist/cli.mjs' });
  assert.equal(packageMetadata.private, true);

  const tsx = path.join(packageRoot, 'node_modules', '.bin', 'tsx');
  const cli = path.join(packageRoot, 'src', 'cli.ts');
  const version = await execFileAsync(tsx, [cli, '--version'], {
    cwd: packageRoot,
  });
  assert.equal(version.stdout.trim(), packageMetadata.version);

  const help = await execFileAsync(tsx, [cli, '--help'], {
    cwd: packageRoot,
  });
  assert.match(help.stdout, /^Usage: ix /);
});
