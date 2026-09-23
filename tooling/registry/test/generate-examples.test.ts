/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import assert from 'node:assert/strict';
import fs from 'fs-extra';
import os from 'node:os';
import path from 'node:path';
import { afterEach, test } from 'node:test';
import { generateExampleDefinitions } from '../src/generate-examples';

const temporaryDirectories: string[] = [];

async function temporaryWorkspace(): Promise<string> {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-examples-'));
  temporaryDirectories.push(directory);
  return directory;
}

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map((directory) => fs.remove(directory))
  );
});

test('generates path-only example manifests and materializes canonical files', async () => {
  const root = await temporaryWorkspace();
  const examplesDir = path.join(root, 'examples');
  const outputDir = path.join(root, 'dist', 'examples');
  await fs.outputFile(
    path.join(examplesDir, 'react-examples/src/preview-examples/card.tsx'),
    'export const Card = () => null;'
  );
  await fs.outputFile(
    path.join(
      examplesDir,
      'react-examples/src/preview-examples/card.scoped.css'
    ),
    '.card { color: red; }'
  );
  await fs.outputFile(
    path.join(examplesDir, 'html-examples/src/preview-examples/card.html'),
    '<ix-card></ix-card>'
  );

  const count = await generateExampleDefinitions(outputDir, examplesDir);
  assert.equal(count, 1);
  assert.deepEqual(await fs.readJson(path.join(outputDir, 'card.json')), {
    $schema: '../schemas/example.schema.json',
    name: 'card',
    variants: {
      html: { files: [{ path: 'html/card.html' }] },
      react: {
        files: [{ path: 'react/card.scoped.css' }, { path: 'react/card.tsx' }],
      },
    },
  });
  assert.equal(
    await fs.readFile(path.join(outputDir, 'react/card.tsx'), 'utf8'),
    'export const Card = () => null;'
  );
  assert.equal(
    await fs.readFile(path.join(outputDir, 'react/card.scoped.css'), 'utf8'),
    '.card { color: red; }'
  );
  assert.equal(
    await fs.readFile(path.join(outputDir, 'html/card.html'), 'utf8'),
    '<ix-card></ix-card>'
  );

  const firstOutput = await fs.readFile(
    path.join(outputDir, 'card.json'),
    'utf8'
  );
  await generateExampleDefinitions(outputDir, examplesDir);
  assert.equal(
    await fs.readFile(path.join(outputDir, 'card.json'), 'utf8'),
    firstOutput
  );
});

test('rejects an existing canonical example file collision', async () => {
  const root = await temporaryWorkspace();
  const examplesDir = path.join(root, 'examples');
  const outputDir = path.join(root, 'dist', 'examples');
  await fs.outputFile(
    path.join(examplesDir, 'react-examples/src/preview-examples/card.tsx'),
    'registry content'
  );
  await fs.outputFile(
    path.join(examplesDir, 'react-examples/src/preview-examples/card.css'),
    '.card { color: red; }'
  );
  await fs.outputFile(
    path.join(outputDir, 'react/card.tsx'),
    'unrelated content'
  );

  await assert.rejects(
    generateExampleDefinitions(outputDir, examplesDir),
    /already exists at canonical public path 'react\/card\.tsx'/
  );
  assert.equal(
    await fs.pathExists(path.join(outputDir, 'react/card.css')),
    false
  );
});

test('rejects materializing examples through an output framework symlink', async () => {
  const root = await temporaryWorkspace();
  const examplesDir = path.join(root, 'examples');
  const outputDir = path.join(root, 'dist', 'examples');
  const linkedDirectory = path.join(root, 'linked-react');
  const reactDirectory = path.join(outputDir, 'react');
  await fs.outputFile(
    path.join(examplesDir, 'react-examples/src/preview-examples/card.tsx'),
    'export const Card = () => null;'
  );
  await fs.ensureDir(outputDir);
  await fs.ensureDir(linkedDirectory);
  await fs.symlink(
    linkedDirectory,
    reactDirectory,
    process.platform === 'win32' ? 'junction' : 'dir'
  );

  await assert.rejects(
    generateExampleDefinitions(outputDir, examplesDir),
    (error: unknown) => {
      assert.equal(
        (error as Error).message,
        `Cannot materialize example through symbolic link '${reactDirectory}'.`
      );
      return true;
    }
  );
  assert.equal(
    await fs.pathExists(path.join(linkedDirectory, 'card.tsx')),
    false
  );
});

test('rejects an unsafe canonical example path from a basename containing percent', async () => {
  const root = await temporaryWorkspace();
  const examplesDir = path.join(root, 'examples');
  const outputDir = path.join(root, 'dist', 'examples');
  await fs.outputFile(
    path.join(examplesDir, 'react-examples/src/preview-examples/card%.tsx'),
    'export const Card = () => null;'
  );

  await assert.rejects(
    generateExampleDefinitions(outputDir, examplesDir),
    /Invalid canonical example path 'react\/card%\.tsx'/
  );
  assert.equal(
    await fs.pathExists(path.join(outputDir, 'react/card%.tsx')),
    false
  );
});
