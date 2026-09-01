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
  mkdirSync,
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
  aliases?: string[];
  description: string;
  framework?: 'html' | 'react' | 'angular' | 'angular-standalone' | 'vue';
  path: string;
  detailPath: string;
  relatedExamples?: string[];
  reactExamples?: Array<{ name: string; path: string }>;
  documentation?: string[];
  figmaMainComponentIds?: string[];
};

type SearchResponse = {
  status: string;
  version: string | null;
  source: string;
  results: SearchDocument[];
  unmatched?: Array<{
    type: string;
    value: string;
    status: string;
  }>;
};

const fields = [
  'kind',
  'name',
  'tag',
  'aliases',
  'description',
  'figmaMainComponentIds',
];
const storeFields = [
  'id',
  'kind',
  'name',
  'tag',
  'aliases',
  'description',
  'framework',
  'path',
  'detailPath',
  'relatedExamples',
  'reactExamples',
  'documentation',
  'figmaMainComponentIds',
];
const documents: SearchDocument[] = [
  {
    id: 'component:ix-button',
    kind: 'component',
    name: 'ix-button',
    tag: 'ix-button',
    aliases: ['ix-button', 'IxButton'],
    description: 'Button component',
    path: 'llms/components/ix-button.md',
    detailPath: 'llms/components/ix-button.md',
    relatedExamples: ['button'],
    reactExamples: [{ name: 'button', path: 'examples/button.json' }],
    documentation: ['https://docs.example/button'],
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
): SearchResponse {
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
  return JSON.parse(result.stdout) as SearchResponse;
}

function runSearchWithProject(
  scriptPath: string,
  directory: string,
  projectDirectory: string,
  ...arguments_: string[]
): SearchResponse {
  const result = spawnSync(
    process.execPath,
    [
      scriptPath,
      '--project-dir',
      projectDirectory,
      '--registry-url',
      'http://127.0.0.1:1',
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
  return JSON.parse(result.stdout) as SearchResponse;
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

    const defaultComponentSearch = runSearch(
      'scripts/search.mjs',
      skillDirectory,
      '--query',
      'ix-button'
    );
    assert.equal(defaultComponentSearch.status, 'ok');
    assert.equal(defaultComponentSearch.source, 'local-index');
    assert.ok(
      defaultComponentSearch.results.every(({ kind }) => kind === 'component')
    );
    assert.equal(defaultComponentSearch.results[0]?.name, 'ix-button');
    assert.deepEqual(defaultComponentSearch.results[0]?.aliases, [
      'ix-button',
      'IxButton',
    ]);
    assert.deepEqual(defaultComponentSearch.results[0]?.reactExamples, [
      { name: 'button', path: 'examples/button.json' },
    ]);
    assert.deepEqual(defaultComponentSearch.results[0]?.documentation, [
      'https://docs.example/button',
    ]);
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
      ).results[0]?.id,
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
      ).results[0]?.id,
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
      ).results[0]?.id,
      'component:ix-button'
    );

    const composedSearch = runSearch(
      'scripts/search.mjs',
      skillDirectory,
      '--figma-id',
      '123-456',
      '--figma-id',
      '999:1',
      '--component-name',
      'Button',
      '--component-name',
      'Avatar'
    );
    assert.equal(composedSearch.status, 'ok');
    assert.deepEqual(
      composedSearch.results.map(({ id }) => id),
      ['component:ix-button']
    );
    assert.deepEqual(
      composedSearch.unmatched?.map(({ type, value, status }) => ({
        type,
        value,
        status,
      })),
      [
        {
          type: 'figma-id',
          value: '999:1',
          status: 'figma_main_id_unregistered',
        },
        { type: 'component-name', value: 'Avatar', status: 'no_match' },
      ]
    );

    const noMatch = runSearch(
      'scripts/search.mjs',
      skillDirectory,
      '--query',
      'zzzzzz'
    );
    assert.equal(noMatch.status, 'no_match');
    assert.deepEqual(noMatch.results, []);

    const unregisteredFigma = runSearch(
      'scripts/search.mjs',
      skillDirectory,
      '--figma-id',
      '999:1'
    );
    assert.equal(unregisteredFigma.status, 'figma_main_id_unregistered');
    assert.deepEqual(unregisteredFigma.results, []);

    const projectDirectory = path.join(directory, 'consumer-project');
    mkdirSync(
      path.join(projectDirectory, 'node_modules/@siemens/ix/dist/types'),
      {
        recursive: true,
      }
    );
    writeFileSync(
      path.join(projectDirectory, 'node_modules/@siemens/ix/package.json'),
      JSON.stringify({ name: '@siemens/ix', version: '9.9.9' })
    );
    writeFileSync(
      path.join(
        projectDirectory,
        'node_modules/@siemens/ix/component-doc.json'
      ),
      JSON.stringify({
        components: [
          {
            tag: 'ix-button',
            docs: 'A button',
            filePath: 'src/components/button/button.tsx',
            docsTags: [
              {
                name: 'documentation',
                text: 'https://docs.example/button',
              },
              {
                name: 'figma-main-component-id',
                text: '225-5535',
              },
            ],
            props: [{ name: 'variant', docs: 'Button variant' }],
          },
        ],
      })
    );
    const componentDocFallback = runSearchWithProject(
      'scripts/search.mjs',
      skillDirectory,
      projectDirectory,
      '--figma-id',
      '225:5535'
    );
    assert.equal(componentDocFallback.source, 'installed-component-doc');
    assert.equal(componentDocFallback.status, 'ok');
    assert.deepEqual(componentDocFallback.results[0]?.figmaMainComponentIds, [
      '225:5535',
    ]);
    assert.deepEqual(componentDocFallback.results[0]?.documentation, [
      'https://docs.example/button',
    ]);
    rmSync(
      path.join(projectDirectory, 'node_modules/@siemens/ix/component-doc.json')
    );
    writeFileSync(
      path.join(
        projectDirectory,
        'node_modules/@siemens/ix/dist/types/components.d.ts'
      ),
      [
        'export namespace Components {',
        '  interface IxButton { variant?: "primary"; }',
        '  interface IxButtonComponent { internal?: boolean; }',
        '  interface IxFormComponent { internal?: boolean; }',
        '}',
        'interface HTMLElementTagNameMap {',
        '  "ix-button": HTMLIxButtonElement;',
        '}',
      ].join('\n')
    );
    mkdirSync(
      path.join(projectDirectory, 'node_modules/@siemens/ix-react/dist/types'),
      { recursive: true }
    );
    writeFileSync(
      path.join(
        projectDirectory,
        'node_modules/@siemens/ix-react/package.json'
      ),
      JSON.stringify({ name: '@siemens/ix-react', version: '9.9.9' })
    );
    writeFileSync(
      path.join(
        projectDirectory,
        'node_modules/@siemens/ix-react/dist/types/components.d.ts'
      ),
      'export declare const IxButton: unknown;'
    );

    const declarationsFallback = runSearchWithProject(
      'scripts/search.mjs',
      skillDirectory,
      projectDirectory,
      '--query',
      'variant'
    );
    assert.equal(declarationsFallback.source, 'installed-declarations');
    assert.equal(declarationsFallback.version, '9.9.9');
    assert.deepEqual(declarationsFallback.results[0]?.aliases, [
      'ix-button',
      'IxButton',
    ]);
    assert.deepEqual(declarationsFallback.results[0]?.documentation, []);

    const internalDeclaration = runSearchWithProject(
      'scripts/search.mjs',
      skillDirectory,
      projectDirectory,
      '--component-name',
      'IxFormComponent'
    );
    assert.equal(internalDeclaration.status, 'no_match');
    assert.deepEqual(internalDeclaration.results, []);

    const unavailableMapping = runSearchWithProject(
      'scripts/search.mjs',
      skillDirectory,
      projectDirectory,
      '--figma-id',
      '123:456'
    );
    assert.equal(unavailableMapping.status, 'figma_mapping_unavailable');
    assert.equal(
      unavailableMapping.unmatched?.[0]?.status,
      'figma_mapping_unavailable'
    );

    const unavailableVersion = runSearchWithProject(
      'scripts/search.mjs',
      skillDirectory,
      projectDirectory,
      '--version',
      '1.0.0',
      '--query',
      'variant'
    );
    assert.equal(unavailableVersion.status, 'version_unavailable');
    assert.deepEqual(unavailableVersion.results, []);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
