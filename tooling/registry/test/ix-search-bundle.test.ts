/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import MiniSearch from 'minisearch';

type SearchDocument = {
  id: string;
  kind: 'component' | 'example' | 'block';
  name: string;
  tag?: string;
  description: string;
  framework?: 'html' | 'react' | 'angular' | 'angular-standalone' | 'vue';
  path: string;
  detailPath: string;
  figmaMainComponentIds?: string[];
};

const fields = ['kind', 'name', 'tag', 'description', 'figmaMainComponentIds'];
const storeFields = [
  'id',
  'kind',
  'name',
  'tag',
  'description',
  'framework',
  'path',
  'detailPath',
  'figmaMainComponentIds',
];
const documents: SearchDocument[] = [
  {
    id: 'component:ix-button',
    kind: 'component',
    name: 'ix-button',
    tag: 'ix-button',
    description: 'Button component',
    path: 'llms/components/ix-button.md',
    detailPath: 'llms/components/ix-button.md',
    figmaMainComponentIds: ['123:456'],
  },
  {
    id: 'example:react:button',
    kind: 'example',
    name: 'button',
    description: 'React button example',
    framework: 'react',
    path: 'examples/button.json',
    detailPath: 'examples/button.json',
  },
  {
    id: 'block:vue:workflow',
    kind: 'block',
    name: 'workflow',
    description: 'Vue workflow block',
    framework: 'vue',
    path: 'blocks/workflow.json',
    detailPath: 'blocks/workflow.json',
  },
];

function createIndex(): object {
  const miniSearch = new MiniSearch<SearchDocument>({
    fields,
    storeFields,
  });
  miniSearch.addAll(documents);
  return {
    schemaVersion: 1,
    fields,
    storeFields,
    searchOptions: {
      boost: { name: 3, description: 2 },
      fuzzy: 0.2,
      prefix: true,
    },
    payload: miniSearch.toJSON(),
  };
}

function runSearch(
  bundlePath: string,
  directory: string,
  ...arguments_: string[]
): SearchDocument[] {
  const result = spawnSync(
    process.execPath,
    [
      bundlePath,
      '--local-index',
      path.join(directory, 'documentation-search-index.json'),
      ...arguments_,
    ],
    {
      cwd: directory,
      env: {
        PATH: '/usr/bin:/bin',
        NODE_PATH: path.join(directory, 'does-not-exist'),
      },
      encoding: 'utf8',
    }
  );
  assert.equal(result.status, 0, result.stderr);
  return JSON.parse(result.stdout) as SearchDocument[];
}

test('bundled IX search runs outside the repository without MiniSearch resolution', () => {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'ix-search-runtime-'));
  const bundlePath = path.join(directory, 'search.mjs');
  const repositoryRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../../..'
  );

  try {
    copyFileSync(
      path.join(repositoryRoot, '.agents/skills/ix/search.mjs'),
      bundlePath
    );
    writeFileSync(
      path.join(directory, 'documentation-search-index.json'),
      JSON.stringify(createIndex())
    );

    assert.equal(
      runSearch(
        bundlePath,
        directory,
        '--query',
        'ix-button',
        '--kind',
        'component'
      )[0]?.name,
      'ix-button'
    );
    assert.equal(
      runSearch(
        bundlePath,
        directory,
        '--query',
        'button',
        '--kind',
        'example',
        '--framework',
        'react'
      )[0]?.id,
      'example:react:button'
    );
    assert.equal(
      runSearch(
        bundlePath,
        directory,
        '--query',
        'workflow',
        '--kind',
        'block',
        '--framework',
        'vue'
      )[0]?.id,
      'block:vue:workflow'
    );
    assert.equal(
      runSearch(
        bundlePath,
        directory,
        '--query',
        '123-456',
        '--kind',
        'component',
        '--figma-id',
        '123-456'
      )[0]?.id,
      'component:ix-button'
    );
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
