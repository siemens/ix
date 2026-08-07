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
  withProjectLock,
} from '../src/config';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const workRoot = path.join(packageRoot, '.test-work', 'config');

test.beforeEach(async () => {
  await fs.rm(workRoot, { recursive: true, force: true });
  await fs.mkdir(workRoot, { recursive: true });
});

test.after(async () => {
  await fs.rm(workRoot, { recursive: true, force: true });
});

test('reports actionable Zod 4 config issues', async () => {
  await fs.writeFile(
    path.join(workRoot, CONFIG_FILE_NAME),
    JSON.stringify({ targetFolder: '../outside', blocks: [] })
  );

  await assert.rejects(
    loadConfig(workRoot),
    (error: Error) =>
      error.message.includes('Invalid ix-blocks-lock.json') &&
      error.message.includes('targetFolder') &&
      error.message.includes('before running the CLI again')
  );
});

test('reports malformed JSON separately', async () => {
  await fs.writeFile(path.join(workRoot, CONFIG_FILE_NAME), '{"blocks":');

  await assert.rejects(
    loadConfig(workRoot),
    /Invalid JSON in ix-blocks-lock\.json/
  );
});

test('atomically saves and loads valid nested paths', async () => {
  await saveConfig(workRoot, {
    targetFolder: 'src/features/blocks',
    blocks: [],
  });

  assert.deepEqual(await loadConfig(workRoot), {
    targetFolder: 'src/features/blocks',
    blocks: [],
  });
  assert.deepEqual(
    (await fs.readdir(workRoot)).filter((entry) => entry.endsWith('.tmp')),
    []
  );
});

test('serializes commands that operate on the same project', async () => {
  let releaseLock!: () => void;
  let signalAcquired!: () => void;
  const holdLock = new Promise<void>((resolve) => {
    releaseLock = resolve;
  });
  const acquired = new Promise<void>((resolve) => {
    signalAcquired = resolve;
  });
  const firstCommand = withProjectLock(workRoot, async () => {
    signalAcquired();
    await holdLock;
  });
  await acquired;

  await assert.rejects(
    withProjectLock(workRoot, async () => undefined),
    /Another ix command is already running/
  );

  releaseLock();
  await firstCommand;
  await withProjectLock(workRoot, async () => undefined);
});

test('reclaims a lock left by a terminated process', async () => {
  const lockPath = path.join(workRoot, '.ix-cli.lock');
  await fs.mkdir(lockPath);
  await fs.writeFile(
    path.join(lockPath, 'owner.json'),
    JSON.stringify({
      pid: 2_147_483_647,
      token: 'abandoned-lock',
      createdAt: new Date().toISOString(),
    })
  );

  let actionRan = false;
  await withProjectLock(workRoot, async () => {
    actionRan = true;
  });

  assert.equal(actionRan, true);
  await assert.rejects(fs.access(lockPath));
  assert.equal(
    (await fs.readdir(workRoot)).some((entry) =>
      entry.startsWith('.ix-cli.lock.reclaimed-')
    ),
    true
  );
});
