/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { listAllComponents } from '../src/component-search';

test('does not use installed component metadata for a different requested version', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-component-search-'));
  const packageRoot = path.join(root, 'node_modules', '@siemens', 'ix');
  const registry = {
    name: 'ix',
    'dist-tags': { latest: '2.0.0' },
    versions: {
      '2.0.0': {
        blocks: [{ name: 'example', path: '2.0.0/blocks/example.json' }],
        examples: [{ name: 'example', path: '2.0.0/examples/example.json' }],
        components: {
          componentDoc: '2.0.0/ix/component-doc.json',
          componentRelatedExamples: '2.0.0/ix/component-related-examples.json',
        },
        documentationSearchIndex: '2.0.0/documentation-search-index.json',
      },
    },
  };

  try {
    await fs.mkdir(packageRoot, { recursive: true });
    await fs.writeFile(
      path.join(packageRoot, 'package.json'),
      JSON.stringify({ version: '1.0.0' })
    );
    await fs.writeFile(
      path.join(packageRoot, 'component-doc.json'),
      JSON.stringify({
        components: [{ tag: 'ix-installed', docs: 'Installed metadata' }],
      })
    );
    process.chdir(root);
    globalThis.fetch = (async (input: string | URL | Request) => {
      const url = input.toString();
      if (url.endsWith('/registry.json')) {
        return new Response(JSON.stringify(registry));
      }
      if (url.endsWith('/2.0.0/ix/component-doc.json')) {
        return new Response(
          JSON.stringify({
            components: [{ tag: 'ix-remote', docs: 'Remote metadata' }],
          })
        );
      }
      return new Response('not found', { status: 404 });
    }) as typeof fetch;

    const components = await listAllComponents({ version: '2.0.0' });
    assert.deepEqual(components, [
      { tag: 'ix-remote', description: 'Remote metadata' },
    ]);
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});
