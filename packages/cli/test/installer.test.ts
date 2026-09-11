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
import { IxBlocksConfig, loadConfig, saveConfig } from '../src/config';
import {
  applyInstallPlan,
  prepareBlockInstall,
  reportInstallPlan,
} from '../src/installer';
import { BlockDefinition } from '../src/registry';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const workRoot = path.join(packageRoot, '.test-work', 'installer');
const baseUrl = 'https://registry.example/root';
const blockEntryPath = 'v1/blocks/card.json';

function blockDefinition(
  files: Array<{ source: string; target: string }> = [
    { source: 'payload/card.tsx', target: 'react/card.tsx' },
  ]
): BlockDefinition {
  return {
    name: 'card',
    variants: { react: { files } },
  };
}

function fetchFiles(values: Record<string, string | number>): typeof fetch {
  return (async (input: string | URL | Request) => {
    const url = String(input);
    const value = values[url];
    if (typeof value === 'string') return new Response(value);
    return new Response('failed', { status: value ?? 404 });
  }) as typeof fetch;
}

async function createProject(name: string): Promise<{
  cwd: string;
  config: IxBlocksConfig;
}> {
  const cwd = path.join(workRoot, name);
  await fs.mkdir(cwd, { recursive: true });
  await fs.writeFile(path.join(cwd, 'package.json'), '{}\n');
  const config: IxBlocksConfig = {
    targetFolder: 'src/features/blocks',
    blocks: [],
  };
  await saveConfig(cwd, config);
  return { cwd, config };
}

async function prepare(
  cwd: string,
  config: IxBlocksConfig,
  content: string,
  options: {
    force?: boolean;
    definition?: BlockDefinition;
    fetchImpl?: typeof fetch;
  } = {}
) {
  const definition = options.definition ?? blockDefinition();
  return prepareBlockInstall({
    cwd,
    baseUrl,
    blockEntryPath,
    blockDef: definition,
    expectedBlockName: 'card',
    framework: 'react',
    tokens: {},
    targetFolder: config.targetFolder,
    previousFiles: config.blocks.find((block) => block.name === 'card')?.files,
    force: options.force,
    fetchImpl:
      options.fetchImpl ??
      fetchFiles({
        [`${baseUrl}/v1/blocks/payload/card.tsx`]: content,
      }),
  });
}

test.beforeEach(async () => {
  await fs.rm(workRoot, { recursive: true, force: true });
  await fs.mkdir(workRoot, { recursive: true });
});

test.after(async () => {
  await fs.rm(workRoot, { recursive: true, force: true });
});

test('performs a clean install and clean tracked update', async () => {
  const { cwd, config } = await createProject('clean');
  const firstPlan = await prepare(cwd, config, 'first');
  const firstConfig = await applyInstallPlan(firstPlan, config, 'v1');
  const output = path.join(cwd, 'src/features/blocks/card/card.tsx');
  assert.equal(await fs.readFile(output, 'utf8'), 'first');
  assert.equal(firstConfig.blocks[0].files?.length, 1);

  const updatePlan = await prepare(cwd, firstConfig, 'second');
  assert.deepEqual(updatePlan.conflicts, []);
  await applyInstallPlan(updatePlan, firstConfig, 'v2');
  assert.equal(await fs.readFile(output, 'utf8'), 'second');
  assert.equal((await loadConfig(cwd)).blocks[0].version, 'v2');
});

test('rejects a customized tracked file and preserves it', async () => {
  const { cwd, config } = await createProject('customized');
  const installedConfig = await applyInstallPlan(
    await prepare(cwd, config, 'original'),
    config,
    'v1'
  );
  const output = path.join(cwd, 'src/features/blocks/card/card.tsx');
  await fs.writeFile(output, 'user edit');

  const plan = await prepare(cwd, installedConfig, 'registry update');
  assert.deepEqual(plan.conflicts, [
    {
      path: 'src/features/blocks/card/card.tsx',
      type: 'modified',
    },
  ]);
  await assert.rejects(
    applyInstallPlan(plan, installedConfig, 'v2'),
    /rerun with --force/
  );
  assert.equal(await fs.readFile(output, 'utf8'), 'user edit');
  assert.equal((await loadConfig(cwd)).blocks[0].version, 'v1');
});

test('rejects an untracked collision unless forced', async () => {
  const { cwd, config } = await createProject('collision');
  const output = path.join(cwd, 'src/features/blocks/card/card.tsx');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, 'untracked');

  const blocked = await prepare(cwd, config, 'registry');
  assert.equal(blocked.conflicts[0].type, 'untracked');
  await assert.rejects(applyInstallPlan(blocked, config, 'v1'));

  const forced = await prepare(cwd, config, 'registry', { force: true });
  await applyInstallPlan(forced, config, 'v1');
  assert.equal(await fs.readFile(output, 'utf8'), 'registry');
});

test('leaves zero project writes when any fetch fails', async () => {
  const { cwd, config } = await createProject('fetch-failure');
  const lockBefore = await fs.readFile(
    path.join(cwd, 'ix-blocks-lock.json'),
    'utf8'
  );
  const definition = blockDefinition([
    { source: 'payload/card.tsx', target: 'react/card.tsx' },
    { source: 'payload/card.css', target: 'react/card.css' },
  ]);

  await assert.rejects(
    prepare(cwd, config, '', {
      definition,
      fetchImpl: fetchFiles({
        [`${baseUrl}/v1/blocks/payload/card.tsx`]: 'ok',
        [`${baseUrl}/v1/blocks/payload/card.css`]: 503,
      }),
    }),
    /503/
  );
  await assert.rejects(
    fs.access(path.join(cwd, 'src/features/blocks/card/card.tsx'))
  );
  assert.equal(
    await fs.readFile(path.join(cwd, 'ix-blocks-lock.json'), 'utf8'),
    lockBefore
  );
});

test('rolls back applied files and lock state when config save fails', async () => {
  const { cwd, config } = await createProject('rollback');
  const lockBefore = await fs.readFile(
    path.join(cwd, 'ix-blocks-lock.json'),
    'utf8'
  );
  const plan = await prepare(cwd, config, 'new');

  await assert.rejects(
    applyInstallPlan(plan, config, 'v1', {
      saveConfigImpl: async () => {
        throw new Error('simulated config failure');
      },
    }),
    /simulated config failure/
  );
  await assert.rejects(
    fs.access(path.join(cwd, 'src/features/blocks/card/card.tsx'))
  );
  assert.equal(
    await fs.readFile(path.join(cwd, 'ix-blocks-lock.json'), 'utf8'),
    lockBefore
  );
  assert.equal(
    (await fs.readdir(cwd)).some((entry) =>
      entry.startsWith('.ix-cli-transaction-')
    ),
    false
  );
});

test('rolls back earlier writes when applying a later file fails', async () => {
  const { cwd, config } = await createProject('apply-rollback');
  const lockBefore = await fs.readFile(
    path.join(cwd, 'ix-blocks-lock.json'),
    'utf8'
  );
  const definition = blockDefinition([
    { source: 'payload/card.tsx', target: 'react/card.tsx' },
    { source: 'payload/card.css', target: 'react/card.css' },
  ]);
  const plan = await prepare(cwd, config, '', {
    definition,
    fetchImpl: fetchFiles({
      [`${baseUrl}/v1/blocks/payload/card.tsx`]: 'component',
      [`${baseUrl}/v1/blocks/payload/card.css`]: 'styles',
    }),
  });

  await assert.rejects(
    applyInstallPlan(plan, config, 'v1', {
      beforeApplyFile: (_file, index) => {
        if (index === 1) throw new Error('simulated apply failure');
      },
    }),
    /simulated apply failure/
  );
  await assert.rejects(
    fs.access(path.join(cwd, 'src/features/blocks/card/card.tsx'))
  );
  await assert.rejects(
    fs.access(path.join(cwd, 'src/features/blocks/card/card.css'))
  );
  assert.equal(
    await fs.readFile(path.join(cwd, 'ix-blocks-lock.json'), 'utf8'),
    lockBefore
  );
});

test('does not overwrite a file changed after planning', async () => {
  const { cwd, config } = await createProject('changed-after-plan');
  const output = path.join(cwd, 'src/features/blocks/card/card.tsx');
  const plan = await prepare(cwd, config, 'registry');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, 'late user edit');

  await assert.rejects(
    applyInstallPlan(plan, config, 'v1'),
    /changed after installation planning/
  );
  assert.equal(await fs.readFile(output, 'utf8'), 'late user edit');
  assert.deepEqual((await loadConfig(cwd)).blocks, []);
});

test('does not overwrite a post-plan edit when force was requested', async () => {
  const { cwd, config } = await createProject('forced-change-after-plan');
  const output = path.join(cwd, 'src/features/blocks/card/card.tsx');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, 'known collision');
  const plan = await prepare(cwd, config, 'registry', { force: true });
  await fs.writeFile(output, 'late user edit');

  await assert.rejects(
    applyInstallPlan(plan, config, 'v1'),
    /changed after installation planning/
  );
  assert.equal(await fs.readFile(output, 'utf8'), 'late user edit');
  assert.deepEqual((await loadConfig(cwd)).blocks, []);
});

test('rejects an install root replaced by a symlink after planning', async () => {
  const { cwd, config } = await createProject('symlink-after-plan');
  const outside = path.join(workRoot, 'outside');
  const installRoot = path.join(cwd, config.targetFolder);
  const plan = await prepare(cwd, config, 'registry');
  await fs.mkdir(path.dirname(installRoot), { recursive: true });
  await fs.mkdir(outside, { recursive: true });
  await fs.symlink(outside, installRoot, 'dir');

  await assert.rejects(
    applyInstallPlan(plan, config, 'v1'),
    /traverses a symbolic link/
  );
  await assert.rejects(fs.access(path.join(outside, 'card', 'card.tsx')));
  assert.deepEqual((await loadConfig(cwd)).blocks, []);
});

test('preserves transaction backups when rollback is incomplete', async () => {
  const { cwd, config } = await createProject('rollback-recovery');
  const output = path.join(cwd, 'src/features/blocks/card/card.tsx');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, 'original');
  const plan = await prepare(cwd, config, 'replacement', { force: true });

  await assert.rejects(
    applyInstallPlan(plan, config, 'v1', {
      saveConfigImpl: async () => {
        throw new Error('simulated config failure');
      },
      beforeRollbackFile: () => {
        throw new Error('simulated rollback failure');
      },
    }),
    /Recovery files were preserved at/
  );

  const transaction = (await fs.readdir(cwd)).find((entry) =>
    entry.startsWith('.ix-cli-transaction-')
  );
  assert.ok(transaction);
  assert.equal(
    await fs.readFile(path.join(cwd, transaction, 'backup', 'write-0'), 'utf8'),
    'original'
  );
});

test('does not follow a symlink introduced during rollback', async () => {
  const { cwd, config } = await createProject('rollback-symlink');
  const outside = path.join(workRoot, 'rollback-outside');
  const installRoot = path.join(cwd, config.targetFolder);
  const movedInstallRoot = path.join(cwd, 'original-install-root');
  const output = path.join(installRoot, 'card', 'card.tsx');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, 'original');
  await fs.mkdir(outside, { recursive: true });
  const outsideFile = path.join(outside, 'card.tsx');
  await fs.writeFile(outsideFile, 'outside');
  const plan = await prepare(cwd, config, 'replacement', { force: true });

  await assert.rejects(
    applyInstallPlan(plan, config, 'v1', {
      saveConfigImpl: async () => {
        throw new Error('simulated config failure');
      },
      beforeRollbackFile: async () => {
        await fs.rename(installRoot, movedInstallRoot);
        await fs.symlink(outside, installRoot, 'dir');
      },
    }),
    /Recovery files were preserved at/
  );

  assert.equal(await fs.readFile(outsideFile, 'utf8'), 'outside');
});

test('rejects redirected block payload responses', async () => {
  const { cwd, config } = await createProject('redirected-source');
  const redirectedFetch = (async (
    _input: string | URL | Request,
    init?: RequestInit
  ) => {
    assert.equal(init?.redirect, 'error');
    const response = new Response('internal data');
    Object.defineProperties(response, {
      redirected: { value: true },
      url: { value: 'http://127.0.0.1/internal' },
    });
    return response;
  }) as typeof fetch;

  await assert.rejects(
    prepare(cwd, config, '', { fetchImpl: redirectedFetch }),
    /Registry request was redirected/
  );
});

test('dry-run reporting never mutates files or lock state', async () => {
  const { cwd, config } = await createProject('dry-run');
  const output = path.join(cwd, 'src/features/blocks/card/card.tsx');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, 'existing untracked file');
  const lockBefore = await fs.readFile(
    path.join(cwd, 'ix-blocks-lock.json'),
    'utf8'
  );
  const plan = await prepare(cwd, config, 'planned');
  assert.equal(plan.conflicts[0].type, 'untracked');

  reportInstallPlan(plan, true);

  assert.equal(await fs.readFile(output, 'utf8'), 'existing untracked file');
  assert.equal(
    await fs.readFile(path.join(cwd, 'ix-blocks-lock.json'), 'utf8'),
    lockBefore
  );
});
