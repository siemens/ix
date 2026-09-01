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
import MiniSearch from 'minisearch';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import {
  buildDocumentationSearchIndex,
  DOCUMENTATION_SEARCH_OPTIONS,
  type DocumentationSearchDocument,
} from '../src/search-index';

test('builds a deterministic central index for all documentation kinds', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-search-index-'));
  const distDir = path.join(root, 'dist');
  const blocksDir = path.join(distDir, 'blocks');
  const examplesDir = path.join(distDir, 'examples');
  const componentDocPath = path.join(root, 'component-doc.json');
  const relatedExamplesPath = path.join(root, 'related-examples.json');
  const relatedBlocksPath = path.join(root, 'related-blocks.json');
  const reactTypesPath = path.join(
    root,
    'packages',
    'react',
    'dist',
    'types',
    'components',
    'components.d.ts'
  );

  try {
    await fs.ensureDir(distDir);
    await fs.outputFile(
      reactTypesPath,
      'export declare const IxButton: unknown;\n'
    );
    await fs.outputJson(componentDocPath, {
      components: [
        {
          tag: 'ix-button',
          filePath: 'src/components/button/button.tsx',
          overview: 'A button for submitting forms.',
          docsTags: [
            {
              name: 'documentation',
              text: 'https://ix.siemens.io/docs/button',
            },
            { name: 'figma-main-component-id', text: '123-456' },
          ],
          dependencies: ['ix-icon'],
          dependents: ['ix-card'],
          props: [
            {
              name: 'variant',
              docs: 'Controls the button appearance.',
              signature: 'ButtonVariant',
            },
          ],
          methods: [{ name: 'focus', docs: 'Focuses the button.' }],
          events: [{ event: 'buttonClick', docs: 'Emitted on click.' }],
          slots: [{ name: 'icon', docs: 'Optional icon content.' }],
        },
      ],
    });
    await fs.outputJson(relatedExamplesPath, {
      'ix-button': ['button-basic'],
    });
    await fs.outputJson(relatedBlocksPath, {
      'ix-button': ['button-basic'],
    });

    await fs.outputJson(path.join(blocksDir, 'button-basic.json'), {
      name: 'button-basic',
      description: 'A workflow button block.',
      keywords: ['workflow', 'submit'],
      variants: {
        react: {
          files: [{ source: 'button.tsx', target: 'react/button.tsx' }],
        },
        html: {
          files: [{ source: 'button.html', target: 'html/button.html' }],
        },
      },
    });
    await fs.outputFile(
      path.join(blocksDir, 'button.tsx'),
      'export const button = <ix-button variant="primary" />;'
    );
    await fs.outputFile(
      path.join(blocksDir, 'button.html'),
      '<ix-button variant="primary"></ix-button>'
    );

    await fs.outputJson(path.join(examplesDir, 'button-basic.json'), {
      name: 'button-basic',
      variants: {
        vue: {
          files: [{ source: 'button.vue', target: 'vue/button.vue' }],
        },
        react: {
          files: [{ source: 'button.tsx', target: 'react/button.tsx' }],
        },
      },
    });
    await fs.outputFile(
      path.join(examplesDir, 'button.vue'),
      '<ix-button @buttonClick="submit" />'
    );
    await fs.outputFile(
      path.join(examplesDir, 'button.tsx'),
      "import { IxButton } from '@siemens/ix-react';\nexport const Button = () => <IxButton />;"
    );

    const firstFile = await buildDocumentationSearchIndex({
      distDir,
      blocksDir,
      examplesDir,
      componentDocPath,
      componentRelatedExamplesPath: relatedExamplesPath,
      componentRelatedBlocksPath: relatedBlocksPath,
      workspaceRoot: root,
    });
    const firstOutput = await fs.readFile(
      path.join(distDir, firstFile),
      'utf8'
    );

    await buildDocumentationSearchIndex({
      distDir,
      blocksDir,
      examplesDir,
      componentDocPath,
      componentRelatedExamplesPath: relatedExamplesPath,
      componentRelatedBlocksPath: relatedBlocksPath,
      workspaceRoot: root,
    });
    assert.equal(
      await fs.readFile(path.join(distDir, firstFile), 'utf8'),
      firstOutput
    );

    const index = JSON.parse(firstOutput) as {
      schemaVersion: number;
      fields: string[];
      storeFields: string[];
      payload: ReturnType<MiniSearch<DocumentationSearchDocument>['toJSON']>;
    };
    assert.equal(index.schemaVersion, 1);
    assert.deepEqual(index.fields, [
      'kind',
      'name',
      'tag',
      'aliases',
      'description',
      'keywords',
      'relatedComponents',
      'figmaMainComponentIds',
      'apiMembers',
      'files',
      'sourceText',
    ]);
    assert.ok(index.storeFields.includes('aliases'));
    assert.ok(index.storeFields.includes('reactExamples'));

    const search = MiniSearch.loadJSON<DocumentationSearchDocument>(
      JSON.stringify(index.payload),
      { fields: index.fields, storeFields: index.storeFields }
    );
    const options = {
      ...DOCUMENTATION_SEARCH_OPTIONS,
      filter: (result: DocumentationSearchDocument) =>
        result.kind === 'component',
    };

    assert.equal(
      search.search('buttonClick', options)[0]?.id,
      'component:ix-button'
    );
    assert.equal(
      search.search('src/components/button', options)[0]?.id,
      'component:ix-button'
    );
    assert.equal(
      search.search('primary', { ...DOCUMENTATION_SEARCH_OPTIONS })[0]?.id,
      'block:html:button-basic'
    );
    assert.equal(
      search.search('workflow', {
        ...DOCUMENTATION_SEARCH_OPTIONS,
        filter: (result) =>
          result.kind === 'block' && result.framework === 'react',
      })[0]?.id,
      'block:react:button-basic'
    );
    assert.equal(
      search.search('submit', {
        ...DOCUMENTATION_SEARCH_OPTIONS,
        filter: (result) =>
          result.kind === 'example' && result.framework === 'vue',
      })[0]?.id,
      'example:vue:button-basic'
    );

    const component = search.search('ix-button', options)[0];
    assert.ok(component);
    assert.deepEqual(component.relatedComponents, ['ix-card', 'ix-icon']);
    assert.deepEqual(component.aliases, ['ix-button', 'IxButton']);
    assert.deepEqual(component.relatedExamples, ['button-basic']);
    assert.deepEqual(component.reactExamples, [
      { name: 'button-basic', path: 'examples/button-basic.json' },
    ]);
    assert.deepEqual(component.relatedBlocks, ['button-basic']);
    assert.deepEqual(component.documentation, [
      'https://ix.siemens.io/docs/button',
    ]);
    assert.deepEqual(component.figmaMainComponentIds, ['123:456']);

    const localRegistry = {
      name: 'ix',
      'dist-tags': { latest: 'development' },
      versions: {
        development: {
          documentationSearchIndex: firstFile,
          blocks: [{ name: 'button-basic', path: 'blocks/button-basic.json' }],
          examples: [
            { name: 'button-basic', path: 'examples/button-basic.json' },
          ],
          components: {
            componentDoc: 'ix/component-doc.json',
            componentRelatedExamples: 'ix/component-related-examples.json',
          },
        },
      },
    };
    await fs.outputJson(path.join(distDir, 'registry.json'), localRegistry);
    assert.equal(
      await fs.pathExists(
        path.join(
          distDir,
          localRegistry.versions.development.documentationSearchIndex
        )
      ),
      true
    );

    const block = search.search('workflow', {
      ...DOCUMENTATION_SEARCH_OPTIONS,
      filter: (result) =>
        result.kind === 'block' && result.framework === 'react',
    })[0];
    const example = search.search('submit', {
      ...DOCUMENTATION_SEARCH_OPTIONS,
      filter: (result) =>
        result.kind === 'example' && result.framework === 'vue',
    })[0];
    assert.equal(await fs.pathExists(path.join(distDir, block.path)), true);
    assert.equal(await fs.pathExists(path.join(distDir, example.path)), true);
  } finally {
    await fs.remove(root);
  }
});
