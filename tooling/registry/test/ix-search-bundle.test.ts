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
import {
  cpSync,
  existsSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { createRequire } from 'node:module';
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

const require = createRequire(import.meta.url);

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
  scriptPath: string,
  directory: string,
  ...arguments_: string[]
): SearchDocument[] {
  const result = spawnSync(
    process.execPath,
    [
      scriptPath,
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

function findPackageRoot(modulePath: string): string {
  let directory = path.dirname(modulePath);
  while (true) {
    const packageJsonPath = path.join(directory, 'package.json');
    if (
      existsSync(packageJsonPath) &&
      JSON.parse(readFileSync(packageJsonPath, 'utf8')).name === 'minisearch'
    ) {
      return directory;
    }
    const parentDirectory = path.dirname(directory);
    if (parentDirectory === directory) break;
    directory = parentDirectory;
  }
  throw new Error(
    `Could not locate MiniSearch package root from '${modulePath}'`
  );
}

function findLicenseFile(packageRoot: string): string {
  const licenseName = readdirSync(packageRoot)
    .filter((name) => /^license(?:\.[^.]+)?$/i.test(name))
    .filter((name) => statSync(path.join(packageRoot, name)).isFile())
    .sort()[0];
  assert.ok(
    licenseName,
    `Could not locate MiniSearch license in ${packageRoot}`
  );
  return path.join(packageRoot, licenseName);
}

test('generated third-party notice uses the installed MiniSearch metadata and license', () => {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'ix-search-license-'));
  const repositoryRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../../..'
  );
  const registryRoot = path.join(repositoryRoot, 'tooling/registry');
  const buildScript = path.join(
    registryRoot,
    'scripts/build-ix-search-bundle.mjs'
  );

  try {
    const result = spawnSync(process.execPath, [buildScript], {
      cwd: registryRoot,
      env: {
        ...process.env,
        IX_SEARCH_OUT_DIR: directory,
      },
      encoding: 'utf8',
    });
    assert.equal(result.status, 0, result.stderr);

    const packageRoot = findPackageRoot(require.resolve('minisearch'));
    const metadata = JSON.parse(
      readFileSync(path.join(packageRoot, 'package.json'), 'utf8')
    ) as { name: string; version: string; license: string };
    const licenseText = readFileSync(
      findLicenseFile(packageRoot),
      'utf8'
    ).replace(/\r\n?/g, '\n');
    const notice = readFileSync(
      path.join(directory, 'THIRD_PARTY_LICENSES.md'),
      'utf8'
    );

    assert.match(notice, /GENERATED FILE - DO NOT EDIT/);
    assert.match(notice, new RegExp(`## MiniSearch ${metadata.version}`));
    assert.match(notice, new RegExp(`Package: ${metadata.name}`));
    assert.match(notice, new RegExp(`License: ${metadata.license}`));
    const licenseMarker = '```text\n';
    const licenseMarkerIndex = notice.indexOf(licenseMarker);
    assert.notEqual(licenseMarkerIndex, -1);
    const licenseStart = licenseMarkerIndex + licenseMarker.length;
    const licenseEnd = notice.indexOf('```', licenseStart);
    assert.equal(notice.slice(licenseStart, licenseEnd), licenseText);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('bundled IX search runs outside the repository without MiniSearch resolution', () => {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'ix-search-runtime-'));
  const skillDirectory = path.join(directory, 'ix');
  const repositoryRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../../..'
  );

  try {
    cpSync(path.join(repositoryRoot, 'skills/ix'), skillDirectory, {
      recursive: true,
    });
    assert.ok(existsSync(path.join(skillDirectory, 'SKILL.md')));
    assert.ok(existsSync(path.join(skillDirectory, 'scripts/search.mjs')));
    assert.ok(existsSync(path.join(skillDirectory, 'THIRD_PARTY_LICENSES.md')));
    assert.equal(existsSync(path.join(skillDirectory, 'search.mjs')), false);
    writeFileSync(
      path.join(skillDirectory, 'documentation-search-index.json'),
      JSON.stringify(createIndex())
    );

    assert.equal(
      runSearch(
        'scripts/search.mjs',
        skillDirectory,
        '--query',
        'ix-button',
        '--kind',
        'component'
      )[0]?.name,
      'ix-button'
    );
    assert.equal(
      runSearch(
        'scripts/search.mjs',
        skillDirectory,
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
        'scripts/search.mjs',
        skillDirectory,
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
        'scripts/search.mjs',
        skillDirectory,
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
