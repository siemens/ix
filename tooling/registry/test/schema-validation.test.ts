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
import path from 'node:path';
import { compileJsonSchema } from '../src/schema-validation';

const schemaPath = path.resolve(
  import.meta.dirname,
  '../schemas/block.schema.json'
);

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
