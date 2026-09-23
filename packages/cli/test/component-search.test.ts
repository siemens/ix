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
import {
  getComponentDetails,
  listAllComponents,
} from '../src/component-search';

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
        patterns: [{ name: 'example', path: '2.0.0/patterns/example.json' }],
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

test('falls back to the remote registry when local version resolution fails', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-local-fallback-'));
  const requests: string[] = [];
  try {
    process.chdir(root);
    await fs.writeFile(
      path.join(root, 'registry.json'),
      JSON.stringify({
        name: 'local',
        'dist-tags': { latest: 'missing' },
        versions: {
          v1: { components: { componentDoc: 'ix/component-doc.json' } },
        },
      })
    );
    globalThis.fetch = (async (input: string | URL | Request) => {
      const url = input.toString();
      requests.push(url);
      if (url.endsWith('/registry.json')) {
        return new Response(
          JSON.stringify({
            name: 'remote',
            'dist-tags': { latest: 'v2' },
            versions: {
              v2: {
                patterns: [],
                examples: [],
                components: { componentDoc: 'v2/ix/component-doc.json' },
                documentationSearchIndex: 'v2/documentation-search-index.json',
              },
            },
          })
        );
      }
      return new Response(
        JSON.stringify({
          components: [{ tag: 'ix-remote', docs: 'Remote metadata' }],
        })
      );
    }) as typeof fetch;
    assert.deepEqual(await listAllComponents(), [
      { tag: 'ix-remote', description: 'Remote metadata' },
    ]);
    await fs.writeFile(
      path.join(root, 'registry.json'),
      JSON.stringify({
        name: 'local',
        'dist-tags': { latest: { malformed: true } },
        versions: {
          v1: { components: { componentDoc: 'ix/component-doc.json' } },
        },
      })
    );
    assert.deepEqual(await listAllComponents(), [
      { tag: 'ix-remote', description: 'Remote metadata' },
    ]);
    await fs.writeFile(path.join(root, 'registry.json'), '{ malformed');
    assert.deepEqual(await listAllComponents(), [
      { tag: 'ix-remote', description: 'Remote metadata' },
    ]);
    assert.equal(requests.length, 6);
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('rejects local artifact traversal and unsafe version segments before reading files', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-local-traversal-'));
  const project = path.join(root, 'project');
  let remoteRequests = 0;
  try {
    await fs.mkdir(project);
    await fs.writeFile(
      path.join(root, 'secrets.txt'),
      JSON.stringify({ components: [{ tag: 'ix-secret' }] })
    );
    process.chdir(project);
    console.error = () => undefined;
    globalThis.fetch = (async () => {
      remoteRequests++;
      throw new Error('Unexpected remote request');
    }) as typeof fetch;

    await fs.writeFile(
      path.join(project, 'registry.json'),
      JSON.stringify({
        name: 'unsafe',
        'dist-tags': { latest: 'v1' },
        versions: {
          v1: { components: { componentDoc: '../secrets.txt' } },
        },
      })
    );
    await assert.rejects(
      listAllComponents(),
      /Invalid local registry artifact path/
    );

    await fs.writeFile(
      path.join(project, 'registry.json'),
      JSON.stringify({
        name: 'unsafe',
        'dist-tags': { latest: 'v1' },
        versions: {
          v1: { components: { componentDoc: '/secrets.txt' } },
        },
      })
    );
    await assert.rejects(
      listAllComponents(),
      /Invalid local registry artifact path/
    );

    await fs.writeFile(
      path.join(project, 'registry.json'),
      JSON.stringify({
        name: 'unsafe',
        'dist-tags': { latest: '../outside' },
        versions: {
          '../outside': { components: { componentDoc: 'secrets.txt' } },
        },
      })
    );
    await assert.rejects(listAllComponents(), /Invalid local registry version/);
    assert.equal(remoteRequests, 0);
  } finally {
    console.error = originalError;
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('rejects a local component artifact symlink escaping the registry without fetching remotely', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-local-symlink-'));
  const project = path.join(root, 'project');
  const artifact = path.join(project, 'v1', 'ix', 'component-doc.json');
  let remoteRequests = 0;
  try {
    await fs.mkdir(path.dirname(artifact), { recursive: true });
    const externalArtifact = path.join(root, 'external-component-doc.json');
    await fs.writeFile(
      externalArtifact,
      JSON.stringify({ components: [{ tag: 'ix-external' }] })
    );
    await fs.symlink(externalArtifact, artifact, 'file');
    await fs.writeFile(
      path.join(project, 'registry.json'),
      JSON.stringify({
        name: 'local',
        'dist-tags': { latest: 'v1' },
        versions: {
          v1: { components: { componentDoc: 'v1/ix/component-doc.json' } },
        },
      })
    );
    process.chdir(project);
    console.error = () => undefined;
    globalThis.fetch = (async () => {
      remoteRequests++;
      throw new Error('Unexpected remote request');
    }) as typeof fetch;

    await assert.rejects(
      listAllComponents(),
      /Local registry artifact path 'v1\/ix\/component-doc\.json' resolves outside the registry/
    );
    await assert.rejects(
      getComponentDetails('ix-external'),
      /Local registry artifact path 'v1\/ix\/component-doc\.json' resolves outside the registry/
    );
    assert.equal(remoteRequests, 0);
  } finally {
    console.error = originalError;
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('allows a symlinked registry root and falls back when artifact candidates are missing', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-registry-root-'));
  const project = path.join(root, 'project');
  const registryDir = path.join(root, 'real-registry');
  const scopedArtifact = path.join(
    registryDir,
    'v1',
    'ix',
    'component-doc.json'
  );
  const unscopedArtifact = path.join(registryDir, 'ix', 'component-doc.json');
  const requests: string[] = [];
  try {
    await fs.mkdir(path.join(project, 'tooling'), { recursive: true });
    await fs.mkdir(path.dirname(scopedArtifact), { recursive: true });
    await fs.symlink(
      registryDir,
      path.join(project, 'tooling', 'registry'),
      'dir'
    );
    await fs.writeFile(
      path.join(registryDir, 'registry.json'),
      JSON.stringify({
        name: 'local',
        'dist-tags': { latest: 'v1' },
        versions: {
          v1: { components: { componentDoc: 'ix/component-doc.json' } },
        },
      })
    );
    await fs.writeFile(
      scopedArtifact,
      JSON.stringify({ components: [{ tag: 'ix-scoped' }] })
    );
    process.chdir(project);
    globalThis.fetch = (async (input: string | URL | Request) => {
      const url = input.toString();
      requests.push(url);
      if (url.endsWith('/registry.json')) {
        return new Response(
          JSON.stringify({
            name: 'remote',
            'dist-tags': { latest: 'v1' },
            versions: {
              v1: {
                patterns: [],
                examples: [],
                components: { componentDoc: 'v1/ix/component-doc.json' },
                documentationSearchIndex: 'v1/documentation-search-index.json',
              },
            },
          })
        );
      }
      return new Response(
        JSON.stringify({ components: [{ tag: 'ix-remote' }] })
      );
    }) as typeof fetch;

    assert.deepEqual(await listAllComponents(), [
      { tag: 'ix-scoped', description: '' },
    ]);
    await fs.rm(scopedArtifact);
    await fs.mkdir(path.dirname(unscopedArtifact), { recursive: true });
    await fs.writeFile(
      unscopedArtifact,
      JSON.stringify({ components: [{ tag: 'ix-unscoped' }] })
    );
    assert.deepEqual(await listAllComponents(), [
      { tag: 'ix-unscoped', description: '' },
    ]);
    assert.equal(requests.length, 0);

    await fs.rm(unscopedArtifact);
    assert.deepEqual(await listAllComponents(), [
      { tag: 'ix-remote', description: '' },
    ]);
    assert.equal(requests.length, 2);
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});
