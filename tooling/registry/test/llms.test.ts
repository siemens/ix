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
import { test } from 'node:test';
import {
  extractUsedComponents,
  generateLlmsArtifacts,
  humanizeName,
  normalizeDocumentationUrl,
} from '../src/llms';

test('extracts kebab-case and PascalCase iX component usages', () => {
  const tags = new Set(['ix-button', 'ix-date-picker', 'ix-icon']);
  const source = `
    import { IxButton, IxDatePicker, IxUnknown } from '@siemens/ix-react';
    <ix-icon name="star"></ix-icon>
    <IxButton>Save</IxButton>
    <IxDatePicker />
    <ix-unknown-thing></ix-unknown-thing>
    <IxUnknown />
  `;

  assert.deepEqual(extractUsedComponents(source, tags), [
    'ix-button',
    'ix-date-picker',
    'ix-icon',
  ]);
});

test('humanizes example names', () => {
  assert.equal(humanizeName('date-picker-range'), 'Date picker range');
  assert.equal(humanizeName('button'), 'Button');
});

test('normalizes duplicate slashes in documentation URLs', () => {
  assert.equal(
    normalizeDocumentationUrl('https://ix.siemens.io//docs//components/a.md'),
    'https://ix.siemens.io/docs/components/a.md'
  );
});

test('generates compact catalog, Figma, example index and detail artifacts', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-llms-'));
  const distDir = path.join(root, 'dist');
  const patternsDir = path.join(distDir, 'patterns');
  const examplesDir = path.join(distDir, 'examples');
  const componentDocPath = path.join(root, 'component-doc.json');
  const relatedExamplesPath = path.join(root, 'related-examples.json');
  const relatedPatternsPath = path.join(root, 'related-patterns.json');

  try {
    await fs.outputFile(
      path.join(root, 'packages/react/dist/types/components/components.d.ts'),
      'export declare const IxButton: unknown;\n'
    );
    await fs.outputJson(componentDocPath, {
      components: [
        {
          tag: 'ix-button',
          docs: 'Clickable button | action trigger.',
          docsTags: [
            {
              name: 'documentation',
              text: 'https://ix.siemens.io//docs/components/button.md',
            },
            { name: 'figma-main-component-id', text: '123-456' },
          ],
          dependencies: ['ix-icon'],
          dependents: [],
          props: [{ name: 'variant', type: 'string', docs: 'Appearance.' }],
          methods: [
            {
              name: 'focusButton',
              signature: 'focusButton() => Promise<void>',
              docs: 'Focuses the button.',
            },
          ],
          events: [],
          slots: [],
        },
        {
          tag: 'ix-icon',
          docs: 'Displays an icon.',
          docsTags: [],
          dependents: ['ix-button'],
        },
      ],
    });
    await fs.outputJson(relatedExamplesPath, {
      'ix-button': ['button-basic'],
    });
    await fs.outputJson(relatedPatternsPath, {});
    await fs.ensureDir(patternsDir);

    await fs.outputJson(path.join(examplesDir, 'button-basic.json'), {
      name: 'button-basic',
      variants: {
        html: { files: [{ path: 'html/button-basic.html' }] },
        vue: { files: [{ path: 'vue/button-basic.vue' }] },
      },
    });
    await fs.outputJson(path.join(examplesDir, 'icon-list.json'), {
      name: 'icon-list',
      variants: {
        react: {
          files: [
            { path: 'react/icon-list.tsx' },
            { path: 'react/shared.css' },
          ],
        },
      },
    });
    await fs.outputFile(
      path.join(examplesDir, 'html/button-basic.html'),
      '<ix-button>Save</ix-button>'
    );
    await fs.outputFile(
      path.join(examplesDir, 'vue/button-basic.vue'),
      '<IxButton>Save</IxButton>'
    );
    await fs.outputFile(
      path.join(examplesDir, 'react/icon-list.tsx'),
      'export default () => <IxIcon name="star" />;'
    );

    const artifacts = await generateLlmsArtifacts({
      distDir,
      componentDocPath,
      componentRelatedExamplesPath: relatedExamplesPath,
      componentRelatedPatternsPath: relatedPatternsPath,
      patternsDir,
      examplesDir,
      workspaceRoot: root,
      warn: () => undefined,
    });

    assert.equal(artifacts.catalog, 'llms/catalog.md');
    assert.equal(artifacts.figma, 'llms/figma.md');
    assert.deepEqual(artifacts.exampleIndexes, {
      html: 'llms/examples/html.md',
      react: 'llms/examples/react.md',
      vue: 'llms/examples/vue.md',
    });

    const catalog = await fs.readFile(
      path.join(distDir, artifacts.catalog),
      'utf8'
    );
    assert.match(
      catalog,
      /^ix-button\|Clickable button \/ action trigger\.\|react:IxButton\|figma:123:456$/m
    );
    assert.match(catalog, /^ix-icon\|Displays an icon\.$/m);

    const figma = await fs.readFile(
      path.join(distDir, artifacts.figma),
      'utf8'
    );
    assert.match(figma, /^123:456\|ix-button$/m);

    const reactIndex = await fs.readFile(
      path.join(distDir, artifacts.exampleIndexes.react),
      'utf8'
    );
    assert.match(
      reactIndex,
      /^icon-list\|Icon list\|ix-icon\|\.tsx,shared\.css$/m
    );

    const vueIndex = await fs.readFile(
      path.join(distDir, artifacts.exampleIndexes.vue),
      'utf8'
    );
    assert.match(vueIndex, /^button-basic\|Button basic\|ix-button\|\.vue$/m);

    const buttonDetail = await fs.readFile(
      path.join(distDir, 'llms/components/ix-button.md'),
      'utf8'
    );
    assert.match(buttonDetail, /`IxButton` from `@siemens\/ix-react`/);
    assert.match(
      buttonDetail,
      /https:\/\/ix\.siemens\.io\/docs\/components\/button\.md/
    );
    assert.match(
      buttonDetail,
      /## Methods\n\n- `focusButton\(\) => Promise<void>`/
    );
    assert.match(buttonDetail, /Renders: `ix-icon`/);
    assert.match(buttonDetail, /^- button-basic \(html, vue\)$/m);

    const iconDetail = await fs.readFile(
      path.join(distDir, 'llms/components/ix-icon.md'),
      'utf8'
    );
    assert.match(iconDetail, /^- icon-list \(react\)$/m);

    const entrypoint = await fs.readFile(
      path.join(distDir, artifacts.entrypoint),
      'utf8'
    );
    assert.match(entrypoint, /llms\/catalog\.md/);
    assert.match(entrypoint, /llms\/examples\/react\.md/);
  } finally {
    await fs.remove(root);
  }
});
