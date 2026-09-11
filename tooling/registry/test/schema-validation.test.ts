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
import fs from 'node:fs/promises';
import MiniSearch from 'minisearch';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileJsonSchema } from '../src/schema-validation';

const schemaDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../schemas'
);
const schemaPath = path.join(schemaDirectory, 'pattern.schema.json');
const exampleSchemaPath = path.join(schemaDirectory, 'example.schema.json');
const authoredPatternSchemaPath = path.join(
  schemaDirectory,
  'authored-pattern.schema.json'
);

test('keeps deployment and distributable registry schemas in sync', async () => {
  const deploymentSchema = JSON.parse(
    await fs.readFile(
      path.join(schemaDirectory, '../registry.schema.json'),
      'utf8'
    )
  );
  const distributableSchema = JSON.parse(
    await fs.readFile(
      path.join(schemaDirectory, 'registry.schema.json'),
      'utf8'
    )
  );

  assert.deepEqual(deploymentSchema, distributableSchema);
});

test('accepts dependency metadata and safe relative paths', async () => {
  const validate = await compileJsonSchema(schemaPath);
  assert.equal(
    validate({
      name: 'example',
      description: 'Example pattern',
      keywords: ['example'],
      preview: 'react-patterns/dist/example',
      variants: {
        react: {
          files: [
            {
              path: 'react/example.tsx',
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
  for (const pathValue of [
    '../../../../outside.ts',
    'example.tsx',
    'react/./card.ts',
    'react//card.ts',
    'react/card.ts?raw',
    'react/%2e%2e/card.ts',
    'C:/outside.ts',
  ]) {
    assert.equal(
      validate({
        name: 'example',
        description: 'Example pattern',
        keywords: ['example'],
        preview: 'react-patterns/dist/example',
        variants: {
          react: {
            files: [
              {
                path: pathValue,
              },
            ],
          },
        },
      }),
      false,
      `expected '${pathValue}' to be rejected`
    );
  }
});

test('public schemas require path-only file entries', async () => {
  const validatePattern = await compileJsonSchema(schemaPath);
  const validateExample = await compileJsonSchema(exampleSchemaPath);
  const pattern = {
    name: 'example',
    description: 'Example pattern',
    keywords: ['example'],
    preview: 'react-patterns/dist/example',
    variants: { react: { files: [{ path: 'react/example.tsx' }] } },
  };
  const example = {
    name: 'example',
    variants: { react: { files: [{ path: 'react/example.tsx' }] } },
  };

  assert.equal(validatePattern(pattern), true);
  assert.equal(validateExample(example), true);
  assert.equal(
    validatePattern({
      ...pattern,
      variants: {
        react: {
          files: [
            {
              source: 'react-patterns/src/example.tsx',
              target: 'react/example.tsx',
            },
          ],
        },
      },
    }),
    false
  );
  assert.equal(
    validateExample({
      ...example,
      variants: {
        react: {
          files: [
            {
              source: 'react-examples/src/example.tsx',
              target: 'react/example.tsx',
            },
          ],
        },
      },
    }),
    false
  );
  assert.equal(
    validateExample({
      ...example,
      variants: {
        react: {
          files: [{ path: '../outside.ts' }],
        },
      },
    }),
    false
  );
  assert.equal(
    validatePattern({
      ...pattern,
      variants: {
        react: {
          files: [{ path: 'angular/example.tsx' }],
        },
      },
    }),
    false
  );
  assert.equal(
    validateExample({
      ...example,
      variants: {
        react: {
          files: [{ path: 'examples/example.tsx' }],
        },
      },
    }),
    false
  );
  assert.equal(
    validatePattern({
      ...pattern,
      variants: {
        react: {
          files: [{ path: 'react/example.tsx' }, { path: 'react/example.tsx' }],
        },
      },
    }),
    false
  );
  assert.equal(
    validateExample({
      ...example,
      variants: {
        react: {
          files: [{ path: 'react/example.tsx' }, { path: 'react/example.tsx' }],
        },
      },
    }),
    false
  );
});

test('authored pattern schema keeps repository source metadata private', async () => {
  const validateAuthored = await compileJsonSchema(authoredPatternSchemaPath);
  assert.equal(
    validateAuthored({
      name: 'example',
      description: 'Example pattern',
      keywords: ['example'],
      preview: 'react-patterns/dist/example',
      variants: {
        react: {
          files: [{ sourcePath: 'react-patterns/src/example.tsx' }],
        },
      },
    }),
    true
  );
  assert.equal(
    validateAuthored({
      name: 'example',
      description: 'Example pattern',
      keywords: ['example'],
      preview: 'react-patterns/dist/example',
      variants: {
        react: {
          files: [{ source: 'react-patterns/src/example.tsx' }],
        },
      },
    }),
    false
  );
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
    patterns: [{ name: 'button', path: 'v1.0.0/patterns/button.json' }],
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
          patterns: versionEntry.patterns,
          examples: versionEntry.examples,
          components: {
            componentDoc: 'v1.0.0/ix/component-doc.json',
            componentIndex: 'v1.0.0/ix/component-index.json',
            componentSearchIndex: 'v1.0.0/ix/component-search-index.json',
            componentRelatedExamples:
              'v1.0.0/ix/component-related-examples.json',
          },
          searchIndex: {
            patterns: { react: 'v1.0.0/search-index-react.json' },
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
          searchIndex: { patterns: { react: 'search-index-react.json' } },
        },
      },
    }),
    false
  );
});
