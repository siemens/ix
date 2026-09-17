/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  CONFIG_FILE_NAME,
  loadConfig,
  saveConfig,
} from '../src/config';
import { runAdd } from '../src/commands/add';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const workRoot = path.join(packageRoot, '.test-work', 'add');
const registry = 'https://registry.example/root';
const registryIndexUrl = `${registry}/registry.json`;
const blockDefinitionUrl = `${registry}/v1/blocks/upload.json`;
const blockSourceUrl = `${registry}/v1/blocks/react/upload.tsx`;

const registryIndex = {
  name: 'test-registry',
  'dist-tags': { latest: 'v1' },
  versions: {
    v1: {
      blocks: [{ name: 'upload', path: 'v1/blocks/upload.json' }],
      examples: [],
      components: {
        componentDoc: 'component-doc.json',
      },
      documentationSearchIndex: 'documentation-search-index.json',
    },
  },
};

const blockDefinition = {
  name: 'upload',
  variants: {
    react: {
      files: [{ path: 'react/upload.tsx' }],
    },
  },
};

function installFetchMock(): () => void {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (
    input: string | URL | Request,
    init?: RequestInit
  ) => {
    assert.equal(init?.redirect, 'error');
    const url = String(input);
    if (url === registryIndexUrl) {
      return new Response(JSON.stringify(registryIndex));
    }
    if (url === blockDefinitionUrl) {
      return new Response(JSON.stringify(blockDefinition));
    }
    if (url === blockSourceUrl) {
      return new Response('export const upload = true;\n');
    }
    return new Response('not found', { status: 404 });
  }) as typeof fetch;

  return () => {
    globalThis.fetch = originalFetch;
  };
}

function addOptions(dryRun = false): Parameters<typeof runAdd>[1] {
  return {
    registry,
    tag: 'latest',
    framework: 'react',
    dryRun,
    force: false,
    tokens: '{}',
  };
}

async function createProject(name: string): Promise<string> {
  const cwd = path.join(workRoot, name);
  await fs.mkdir(cwd, { recursive: true });
  await fs.writeFile(path.join(cwd, 'package.json'), '{}\n');
  return cwd;
}

test.beforeEach(async () => {
  await fs.rm(workRoot, { recursive: true, force: true });
  await fs.mkdir(workRoot, { recursive: true });
});

test.after(async () => {
  await fs.rm(workRoot, { recursive: true, force: true });
});

test('add initializes the default config and installs the block', async () => {
  const cwd = await createProject('default');
  const output: string[] = [];
  const originalLog = console.log;
  console.log = (...args: unknown[]) => output.push(args.join(' '));
  const restoreFetch = installFetchMock();

  try {
    await runAdd('upload', addOptions(), cwd);
  } finally {
    restoreFetch();
    console.log = originalLog;
  }

  const config = await loadConfig(cwd);
  assert.equal(config.targetFolder, 'src/blocks');
  assert.equal(config.blocks[0]?.name, 'upload');
  assert.equal(config.blocks[0]?.version, 'v1');
  assert.equal(
    config.blocks[0]?.files?.[0]?.path,
    'src/blocks/upload/upload.tsx'
  );
  assert.equal(
    await fs.readFile(
      path.join(cwd, 'src/blocks/upload/upload.tsx'),
      'utf8'
    ),
    'export const upload = true;\n'
  );
  assert.ok(
    output.some((line) => line === `✅ Initialized ${CONFIG_FILE_NAME}`)
  );
});

test('add dry-run uses the default config without writing project files', async () => {
  const cwd = await createProject('dry-run');
  const restoreFetch = installFetchMock();

  try {
    await runAdd('upload', addOptions(true), cwd);
  } finally {
    restoreFetch();
  }

  await assert.rejects(fs.access(path.join(cwd, CONFIG_FILE_NAME)));
  assert.deepEqual(await fs.readdir(cwd), ['package.json']);
  await assert.rejects(
    fs.access(path.join(cwd, 'src/blocks/upload/upload.tsx'))
  );
});

test('add respects an existing custom target folder', async () => {
  const cwd = await createProject('custom-target');
  await saveConfig(cwd, {
    targetFolder: 'src/features/blocks',
    blocks: [],
  });
  const restoreFetch = installFetchMock();

  try {
    await runAdd('upload', addOptions(), cwd);
  } finally {
    restoreFetch();
  }

  assert.equal(
    await fs.readFile(
      path.join(cwd, 'src/features/blocks/upload/upload.tsx'),
      'utf8'
    ),
    'export const upload = true;\n'
  );
  assert.equal(
    (await loadConfig(cwd)).targetFolder,
    'src/features/blocks'
  );
});

test('add does not replace an invalid existing config', async () => {
  const cwd = await createProject('invalid-config');
  const invalidConfig = '{"targetFolder":"../outside","blocks":[]}\n';
  await fs.writeFile(path.join(cwd, CONFIG_FILE_NAME), invalidConfig);

  await assert.rejects(
    runAdd('upload', addOptions(), cwd),
    /Invalid ix-blocks-lock\.json/
  );
  assert.equal(
    await fs.readFile(path.join(cwd, CONFIG_FILE_NAME), 'utf8'),
    invalidConfig
  );
});

test(
  'add does not replace an existing broken config symlink',
  { skip: process.platform === 'win32' },
  async () => {
    const cwd = await createProject('broken-config-symlink');
    const configPath = path.join(cwd, CONFIG_FILE_NAME);
    await fs.symlink('missing-config.json', configPath);

    await assert.rejects(
      runAdd('upload', addOptions(), cwd),
      /Config file not found/
    );
    assert.equal((await fs.lstat(configPath)).isSymbolicLink(), true);
  }
);
