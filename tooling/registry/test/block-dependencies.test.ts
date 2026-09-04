/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import os from 'node:os';
import path from 'node:path';
import fs from 'fs-extra';
import { generateBlockDefinitions } from '../src/block-dependencies';

const temporaryDirectories: string[] = [];

async function temporaryWorkspace(): Promise<string> {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-registry-'));
  temporaryDirectories.push(directory);
  return directory;
}

async function writeJson(filePath: string, value: unknown): Promise<void> {
  await fs.outputJson(filePath, value, { spaces: 2 });
}

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map((directory) => fs.remove(directory))
  );
});

test('generates deterministic React dependency metadata', async () => {
  const root = await temporaryWorkspace();
  await writeJson(path.join(root, 'packages/react/package.json'), {
    name: '@siemens/ix-react',
    version: '5.1.1',
    dependencies: { '@siemens/ix': '~5.1.1' },
    peerDependencies: { '@siemens/ix-icons': '^3.4.0' },
  });
  await writeJson(path.join(root, 'packages/core/package.json'), {
    name: '@siemens/ix',
    version: '5.1.1',
  });
  await writeJson(path.join(root, 'blocks/react-blocks/package.json'), {
    name: 'react-blocks',
    dependencies: { '@siemens/ix-icons': '^3.3.0' },
  });
  await fs.outputFile(
    path.join(root, 'blocks/react-blocks/src/block.tsx'),
    "import { IxButton } from '@siemens/ix-react';\nimport { iconAdd } from '@siemens/ix-icons/icons';"
  );
  await writeJson(path.join(root, 'blocks/example.json'), {
    name: 'example',
    variants: {
      react: {
        files: [
          {
            source: 'react-blocks/src/block.tsx',
            target: 'react/block.tsx',
          },
        ],
      },
    },
  });

  await generateBlockDefinitions({
    blocksDir: path.join(root, 'blocks'),
    outputDir: path.join(root, 'dist'),
    registryVersion: 'v5.2.0',
    workspaceRoot: root,
  });

  const generated = await fs.readJson(path.join(root, 'dist/example.json'));
  assert.deepEqual(generated.variants.react.dependencies, [
    { name: '@siemens/ix', version: '^5.2.0' },
    { name: '@siemens/ix-icons', version: '^3.4.0' },
    { name: '@siemens/ix-react', version: '^5.2.0' },
  ]);
});

test('omits dependency metadata when a variant has no Siemens imports', async () => {
  const root = await temporaryWorkspace();
  await fs.outputFile(
    path.join(root, 'blocks/react-blocks/src/block.tsx'),
    "import React from 'react';"
  );
  await writeJson(path.join(root, 'blocks/example.json'), {
    name: 'example',
    variants: {
      react: {
        files: [
          {
            source: 'react-blocks/src/block.tsx',
            target: 'react/block.tsx',
          },
        ],
      },
    },
  });

  await generateBlockDefinitions({
    blocksDir: path.join(root, 'blocks'),
    outputDir: path.join(root, 'dist'),
    registryVersion: 'main',
    workspaceRoot: root,
  });

  const generated = await fs.readJson(path.join(root, 'dist/example.json'));
  assert.equal(generated.variants.react.dependencies, undefined);
});

test('generates Angular standalone dependencies from package metadata', async () => {
  const root = await temporaryWorkspace();
  await writeJson(path.join(root, 'packages/angular/package.json'), {
    name: '@siemens/ix-angular',
    version: '5.1.1',
    dependencies: { '@siemens/ix': '~5.1.1' },
    peerDependencies: { '@siemens/ix-icons': '^3.4.0' },
  });
  await writeJson(path.join(root, 'packages/core/package.json'), {
    name: '@siemens/ix',
    version: '5.1.1',
  });
  await writeJson(
    path.join(root, 'blocks/angular-standalone-blocks/package.json'),
    {
      name: 'angular-standalone-blocks',
      dependencies: { '@siemens/ix-icons': '^3.3.0' },
    }
  );
  await fs.outputFile(
    path.join(root, 'blocks/angular-standalone-blocks/src/block.ts'),
    "import { IxButton } from '@siemens/ix-angular/standalone';"
  );
  await writeJson(path.join(root, 'blocks/example.json'), {
    name: 'example',
    variants: {
      angular: {
        files: [
          {
            source: 'angular-standalone-blocks/src/block.ts',
            target: 'angular/block.ts',
          },
        ],
      },
    },
  });

  await generateBlockDefinitions({
    blocksDir: path.join(root, 'blocks'),
    outputDir: path.join(root, 'dist'),
    registryVersion: 'v5.2.0',
    workspaceRoot: root,
  });

  const generated = await fs.readJson(path.join(root, 'dist/example.json'));
  assert.deepEqual(generated.variants.angular.dependencies, [
    { name: '@siemens/ix', version: '^5.2.0' },
    { name: '@siemens/ix-angular', version: '^5.2.0' },
    { name: '@siemens/ix-icons', version: '^3.4.0' },
  ]);
});

test('rejects block sources outside the blocks directory', async () => {
  const root = await temporaryWorkspace();
  await fs.outputFile(path.join(root, 'outside.ts'), 'export {};');
  await writeJson(path.join(root, 'blocks/example.json'), {
    name: 'example',
    variants: {
      react: {
        files: [
          {
            source: '../outside.ts',
            target: 'react/block.ts',
          },
        ],
      },
    },
  });

  await assert.rejects(
    generateBlockDefinitions({
      blocksDir: path.join(root, 'blocks'),
      outputDir: path.join(root, 'dist'),
      registryVersion: 'main',
      workspaceRoot: root,
    }),
    /escapes the blocks directory/
  );
});
