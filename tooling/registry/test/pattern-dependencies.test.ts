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
import { generatePatternDefinitions } from '../src/pattern-dependencies';

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
  await writeJson(path.join(root, 'patterns/react-patterns/package.json'), {
    name: 'react-patterns',
    dependencies: { '@siemens/ix-icons': '^3.3.0' },
  });
  await fs.outputFile(
    path.join(root, 'patterns/react-patterns/src/pattern.tsx'),
    "import { IxButton } from '@siemens/ix-react';\nimport { iconAdd } from '@siemens/ix-icons/icons';"
  );
  await writeJson(path.join(root, 'patterns/example.json'), {
    name: 'example',
    variants: {
      react: {
        files: [
          {
            sourcePath: 'react-patterns/src/pattern.tsx',
          },
        ],
      },
    },
  });

  await generatePatternDefinitions({
    patternsDir: path.join(root, 'patterns'),
    outputDir: path.join(root, 'dist'),
    registryVersion: 'v5.2.0',
    workspaceRoot: root,
  });

  const generated = await fs.readJson(path.join(root, 'dist/example.json'));
  assert.equal(generated.$schema, '../schemas/pattern.schema.json');
  assert.equal(
    await fs.readFile(path.join(root, 'dist/react/pattern.tsx'), 'utf8'),
    "import { IxButton } from '@siemens/ix-react';\nimport { iconAdd } from '@siemens/ix-icons/icons';"
  );
  assert.deepEqual(generated.variants.react.files, [
    { path: 'react/pattern.tsx' },
  ]);
  assert.deepEqual(generated.variants.react.dependencies, [
    { name: '@siemens/ix', version: '^5.2.0' },
    { name: '@siemens/ix-icons', version: '^3.4.0' },
    { name: '@siemens/ix-react', version: '^5.2.0' },
  ]);
  const firstOutput = await fs.readFile(
    path.join(root, 'dist/example.json'),
    'utf8'
  );
  await generatePatternDefinitions({
    patternsDir: path.join(root, 'patterns'),
    outputDir: path.join(root, 'dist'),
    registryVersion: 'v5.2.0',
    workspaceRoot: root,
  });
  assert.equal(
    await fs.readFile(path.join(root, 'dist/example.json'), 'utf8'),
    firstOutput
  );
});

test('omits dependency metadata when a variant has no Siemens imports', async () => {
  const root = await temporaryWorkspace();
  await fs.outputFile(
    path.join(root, 'patterns/react-patterns/src/pattern.tsx'),
    "import React from 'react';"
  );
  await writeJson(path.join(root, 'patterns/example.json'), {
    name: 'example',
    variants: {
      react: {
        files: [
          {
            sourcePath: 'react-patterns/src/pattern.tsx',
          },
        ],
      },
    },
  });

  await generatePatternDefinitions({
    patternsDir: path.join(root, 'patterns'),
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
    path.join(root, 'patterns/angular-standalone-patterns/package.json'),
    {
      name: 'angular-standalone-patterns',
      dependencies: { '@siemens/ix-icons': '^3.3.0' },
    }
  );
  await fs.outputFile(
    path.join(root, 'patterns/angular-standalone-patterns/src/pattern.ts'),
    "import { IxButton } from '@siemens/ix-angular/standalone';"
  );
  await writeJson(path.join(root, 'patterns/example.json'), {
    name: 'example',
    variants: {
      angular: {
        files: [
          {
            sourcePath: 'angular-standalone-patterns/src/pattern.ts',
          },
        ],
      },
    },
  });

  await generatePatternDefinitions({
    patternsDir: path.join(root, 'patterns'),
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

test('rejects pattern sources outside the patterns directory', async () => {
  const root = await temporaryWorkspace();
  await writeJson(path.join(root, 'patterns/example.json'), {
    name: 'example',
    variants: {
      react: {
        files: [
          {
            sourcePath: '../outside.ts',
          },
        ],
      },
    },
  });

  await assert.rejects(
    generatePatternDefinitions({
      patternsDir: path.join(root, 'patterns'),
      outputDir: path.join(root, 'dist'),
      registryVersion: 'main',
      workspaceRoot: root,
    }),
    /escapes the patterns directory/
  );
});

test('rejects duplicate canonical pattern paths without overwriting', async () => {
  const root = await temporaryWorkspace();
  await fs.outputFile(
    path.join(root, 'patterns/react-patterns/src/first.tsx'),
    'first'
  );
  await fs.outputFile(
    path.join(root, 'patterns/other-patterns/src/first.tsx'),
    'second'
  );
  await writeJson(path.join(root, 'patterns/first.json'), {
    name: 'first',
    variants: {
      react: { files: [{ sourcePath: 'react-patterns/src/first.tsx' }] },
    },
  });

  await writeJson(path.join(root, 'patterns/second.json'), {
    name: 'second',
    variants: {
      react: { files: [{ sourcePath: 'other-patterns/src/first.tsx' }] },
    },
  });

  await assert.rejects(
    generatePatternDefinitions({
      patternsDir: path.join(root, 'patterns'),
      outputDir: path.join(root, 'dist'),
      registryVersion: 'main',
      workspaceRoot: root,
    }),
    /Duplicate public pattern path 'react\/first\.tsx'/
  );
  assert.equal(
    await fs.pathExists(path.join(root, 'dist/react/first.tsx')),
    false
  );
});

test('preflights pattern collisions before materializing any canonical file', async () => {
  const root = await temporaryWorkspace();
  await fs.outputFile(
    path.join(root, 'patterns/react-patterns/src/first.tsx'),
    'first'
  );
  await fs.outputFile(
    path.join(root, 'patterns/react-patterns/src/second.tsx'),
    'second from registry'
  );
  await writeJson(path.join(root, 'patterns/example.json'), {
    name: 'example',
    variants: {
      react: {
        files: [
          { sourcePath: 'react-patterns/src/first.tsx' },
          { sourcePath: 'react-patterns/src/second.tsx' },
        ],
      },
    },
  });
  await fs.outputFile(
    path.join(root, 'dist/react/second.tsx'),
    'unrelated content'
  );

  await assert.rejects(
    generatePatternDefinitions({
      patternsDir: path.join(root, 'patterns'),
      outputDir: path.join(root, 'dist'),
      registryVersion: 'main',
      workspaceRoot: root,
    }),
    /already exists at canonical public path 'react\/second\.tsx'/
  );
  assert.equal(
    await fs.pathExists(path.join(root, 'dist/react/first.tsx')),
    false
  );
});

test('rejects a canonical pattern path outside the output directory', async () => {
  const root = await temporaryWorkspace();
  await fs.outputFile(
    path.join(root, 'patterns/react-patterns/src/pattern.tsx'),
    'pattern'
  );
  await writeJson(path.join(root, 'patterns/example.json'), {
    name: 'example',
    variants: {
      '../outside': {
        files: [{ sourcePath: 'react-patterns/src/pattern.tsx' }],
      },
    },
  });

  await assert.rejects(
    generatePatternDefinitions({
      patternsDir: path.join(root, 'patterns'),
      outputDir: path.join(root, 'dist'),
      registryVersion: 'main',
      workspaceRoot: root,
    }),
    /Pattern public path escapes the output directory/
  );
  assert.equal(
    await fs.pathExists(path.join(root, 'outside/pattern.tsx')),
    false
  );
});
