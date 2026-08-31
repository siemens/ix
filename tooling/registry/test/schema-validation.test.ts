/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import MiniSearch from 'minisearch';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileJsonSchema } from '../src/schema-validation';

const schemaDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../schemas'
);
const schemaPath = path.join(schemaDirectory, 'block.schema.json');

test('accepts dependency metadata and safe relative paths', async () => {
  const validate = await compileJsonSchema(schemaPath);
  assert.equal(
    validate({
      name: 'example',
      description: 'Example block',
      keywords: ['example'],
      preview: 'react-blocks/dist/example',
      variants: {
        react: {
          files: [
            {
              source: 'react-blocks/src/example.tsx',
              target: 'react/example.tsx',
            },
          ],
          dependencies: [{ name: '@siemens/ix-react', version: '^5.2.0' }],
        },
      },
    }),
    true
  );
});

test('rejects paths that the CLI cannot safely consume', async () => {
  const validate = await compileJsonSchema(schemaPath);
  for (const target of [
    '../../../../outside.ts',
    'react/./card.ts',
    'react//card.ts',
    'react/card.ts?raw',
    'react/%2e%2e/card.ts',
    'C:/outside.ts',
  ]) {
    assert.equal(
      validate({
        name: 'example',
        description: 'Example block',
        keywords: ['example'],
        preview: 'react-blocks/dist/example',
        variants: {
          react: {
            files: [
              {
                source: 'react-blocks/src/example.ts',
                target,
              },
            ],
          },
        },
      }),
      false,
      `expected '${target}' to be rejected`
    );
  }
});

test('accepts a self-describing documentation search index', async () => {
  const validate = await compileJsonSchema(
    path.join(schemaDirectory, 'documentation-search-index.schema.json')
  );
  const miniSearch = new MiniSearch<{ id: string; name: string }>({
    fields: ['name'],
    storeFields: ['id', 'name'],
  });
  miniSearch.add({ id: 'component:ix-button', name: 'ix-button' });

  assert.equal(
    validate({
      schemaVersion: 1,
      fields: ['name'],
      storeFields: ['id', 'name'],
      searchOptions: {
        boost: { name: 3 },
        fuzzy: 0.2,
        prefix: true,
      },
      payload: miniSearch.toJSON(),
    }),
    true
  );
});

test('requires the central index for new entries and preserves historical entries', async () => {
  const validate = await compileJsonSchema(
    path.join(schemaDirectory, 'registry.schema.json')
  );
  const versionEntry = {
    blocks: [{ name: 'button', path: 'v1.0.0/blocks/button.json' }],
    examples: [{ name: 'button', path: 'v1.0.0/examples/button.json' }],
    components: {
      componentDoc: 'v1.0.0/ix/component-doc.json',
      componentRelatedExamples: 'v1.0.0/ix/component-related-examples.json',
    },
    documentationSearchIndex: 'v1.0.0/documentation-search-index.json',
  };
  const manifest = {
    name: 'ix',
    'dist-tags': { latest: 'v1.0.0' },
    versions: { 'v1.0.0': versionEntry },
  };

  assert.equal(validate(manifest), true);
  assert.equal(
    validate({
      ...manifest,
      versions: {
        'v1.0.0': {
          blocks: versionEntry.blocks,
          examples: versionEntry.examples,
          components: {
            componentDoc: 'v1.0.0/ix/component-doc.json',
            componentIndex: 'v1.0.0/ix/component-index.json',
            componentSearchIndex: 'v1.0.0/ix/component-search-index.json',
            componentRelatedExamples:
              'v1.0.0/ix/component-related-examples.json',
          },
          searchIndex: {
            blocks: { react: 'v1.0.0/search-index-react.json' },
            examples: { react: 'v1.0.0/examples-search-index-react.json' },
          },
        },
      },
    }),
    true
  );
  assert.equal(
    validate({
      ...manifest,
      versions: {
        'v1.0.0': {
          ...versionEntry,
          searchIndex: { blocks: { react: 'search-index-react.json' } },
        },
      },
    }),
    false
  );
});
