/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import assert from 'node:assert/strict';
import MiniSearch from 'minisearch';
import test from 'node:test';
import {
  clearDocumentationSearchCache,
  searchDocumentation,
  type DocumentationSearchMetadata,
} from '../src/documentation-search';

const fields = [
  'kind',
  'name',
  'tag',
  'description',
  'keywords',
  'relatedComponents',
  'figmaMainComponentIds',
  'apiMembers',
  'files',
  'sourceText',
];
const storeFields = [
  'id',
  'kind',
  'name',
  'tag',
  'description',
  'keywords',
  'framework',
  'path',
  'detailPath',
  'relatedComponents',
  'relatedExamples',
  'relatedBlocks',
  'documentation',
  'figmaMainComponentIds',
];

const documents: DocumentationSearchMetadata[] = [
  {
    id: 'component:ix-button',
    kind: 'component',
    name: 'ix-button',
    tag: 'ix-button',
    description: 'Button component',
    keywords: '123:456',
    path: 'llms/components/ix-button.md',
    detailPath: 'llms/components/ix-button.md',
    relatedComponents: ['ix-icon'],
    relatedExamples: ['button'],
    relatedBlocks: ['button-block'],
    documentation: ['https://ix.siemens.io/button'],
    figmaMainComponentIds: ['123:456'],
  },
  {
    id: 'component:ix-split-button',
    kind: 'component',
    name: 'ix-split-button',
    tag: 'ix-split-button',
    description: 'Split button component',
    keywords: 'button',
    path: 'llms/components/ix-split-button.md',
    detailPath: 'llms/components/ix-split-button.md',
    relatedComponents: ['ix-button'],
  },
  {
    id: 'example:react:button',
    kind: 'example',
    name: 'button',
    description: 'Button example',
    keywords: 'button',
    framework: 'react',
    path: 'examples/button.json',
    detailPath: 'examples/button.json',
    relatedComponents: ['ix-button'],
  },
  {
    id: 'example:vue:button',
    kind: 'example',
    name: 'button',
    description: 'Button example',
    keywords: 'button',
    framework: 'vue',
    path: 'examples/button.json',
    detailPath: 'examples/button.json',
    relatedComponents: ['ix-button'],
  },
  {
    id: 'block:react:button-block',
    kind: 'block',
    name: 'button-block',
    description: 'Button workflow',
    keywords: 'workflow',
    framework: 'react',
    path: 'blocks/button-block.json',
    detailPath: 'blocks/button-block.json',
    relatedComponents: ['ix-button'],
  },
];

function searchIndex(): unknown {
  const miniSearch = new MiniSearch<DocumentationSearchMetadata>({
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

function registry(): unknown {
  const entry = {
    blocks: [{ name: 'button-block', path: 'blocks/button-block.json' }],
    examples: [{ name: 'button', path: 'examples/button.json' }],
    components: { componentDoc: 'component-doc.json' },
    documentationSearchIndex: 'documentation-search-index.json',
  };
  return {
    name: 'ix',
    'dist-tags': { latest: 'v2.0.0' },
    versions: {
      '1.0.0': {
        ...entry,
        documentationSearchIndex: '1.0.0/documentation-search-index.json',
      },
      '2.0.0': {
        ...entry,
        documentationSearchIndex: '2.0.0/documentation-search-index.json',
      },
    },
  };
}

test('loads one central index, filters results, and scopes result paths by version', async () => {
  const originalFetch = globalThis.fetch;
  const requests: string[] = [];
  const index = searchIndex();
  globalThis.fetch = (async (input: string | URL | Request) => {
    const url = input.toString();
    requests.push(url);
    if (url.endsWith('/registry.json')) {
      return new Response(JSON.stringify(registry()));
    }
    return new Response(JSON.stringify(index));
  }) as typeof fetch;

  try {
    clearDocumentationSearchCache();
    const componentResults = await searchDocumentation({
      baseUrl: 'https://registry.example/ix',
      query: 'ix-button',
      kind: 'component',
      version: 'v1.0.0',
    });
    assert.equal(componentResults[0]?.id, 'component:ix-button');
    assert.equal(
      componentResults[0]?.path,
      '1.0.0/llms/components/ix-button.md'
    );
    assert.deepEqual(componentResults[0]?.relatedExamples, ['button']);
    assert.deepEqual(componentResults[0]?.figmaMainComponentIds, ['123:456']);

    const reactExamples = await searchDocumentation({
      baseUrl: 'https://registry.example/ix',
      query: 'button',
      kind: 'example',
      framework: 'react',
      version: '1.0.0',
    });
    assert.deepEqual(
      reactExamples.map((result) => result.id),
      ['example:react:button']
    );

    const blocks = await searchDocumentation({
      baseUrl: 'https://registry.example/ix',
      query: 'workflow',
      kind: 'block',
      framework: 'react',
    });
    assert.deepEqual(
      blocks.map((result) => result.id),
      ['block:react:button-block']
    );
    assert.equal(blocks[0]?.path, '2.0.0/blocks/button-block.json');

    // The registry and each versioned central index are cached independently.
    assert.deepEqual(requests, [
      'https://registry.example/ix/registry.json',
      'https://registry.example/ix/1.0.0/documentation-search-index.json',
      'https://registry.example/ix/2.0.0/documentation-search-index.json',
    ]);
  } finally {
    globalThis.fetch = originalFetch;
    clearDocumentationSearchCache();
  }
});

test('surfaces malformed central index envelopes', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (input: string | URL | Request) => {
    if (input.toString().endsWith('/registry.json')) {
      return new Response(JSON.stringify(registry()));
    }
    return new Response(JSON.stringify({ schemaVersion: 99, payload: {} }));
  }) as typeof fetch;

  try {
    clearDocumentationSearchCache();
    await assert.rejects(
      searchDocumentation({
        baseUrl: 'https://registry.example/ix-malformed',
        query: 'button',
      }),
      /Unsupported documentation search index schema version/
    );
  } finally {
    globalThis.fetch = originalFetch;
    clearDocumentationSearchCache();
  }
});

test('keeps unprefixed paths followable for a locally served registry', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (input: string | URL | Request) => {
    if (input.toString().endsWith('/registry.json')) {
      const localRegistry = registry() as {
        name: string;
        'dist-tags': { latest: string };
        versions: Record<string, unknown>;
      };
      localRegistry['dist-tags'].latest = 'development';
      localRegistry.versions.development = {
        blocks: [{ name: 'button-block', path: 'blocks/button-block.json' }],
        examples: [{ name: 'button', path: 'examples/button.json' }],
        components: { componentDoc: 'ix/component-doc.json' },
        documentationSearchIndex: 'documentation-search-index.json',
      };
      return new Response(JSON.stringify(localRegistry));
    }
    return new Response(JSON.stringify(searchIndex()));
  }) as typeof fetch;

  try {
    clearDocumentationSearchCache();
    const results = await searchDocumentation({
      baseUrl: 'http://127.0.0.1:8080',
      query: 'workflow',
      kind: 'block',
      framework: 'react',
    });
    assert.equal(results[0]?.path, 'blocks/button-block.json');
  } finally {
    globalThis.fetch = originalFetch;
    clearDocumentationSearchCache();
  }
});

test('retries registry loading after a transient failure', async () => {
  const originalFetch = globalThis.fetch;
  let registryAttempts = 0;
  globalThis.fetch = (async (input: string | URL | Request) => {
    if (input.toString().endsWith('/registry.json')) {
      registryAttempts += 1;
      if (registryAttempts === 1) {
        return new Response('temporary failure', { status: 503 });
      }
      return new Response(JSON.stringify(registry()));
    }
    return new Response(JSON.stringify(searchIndex()));
  }) as typeof fetch;

  try {
    clearDocumentationSearchCache();
    await assert.rejects(
      searchDocumentation({
        baseUrl: 'https://registry.example/retry-registry',
        query: 'button',
      }),
      /503/
    );
    const results = await searchDocumentation({
      baseUrl: 'https://registry.example/retry-registry',
      query: 'button',
      kind: 'component',
    });
    assert.equal(results[0]?.id, 'component:ix-button');
    assert.equal(registryAttempts, 2);
  } finally {
    globalThis.fetch = originalFetch;
    clearDocumentationSearchCache();
  }
});

test('retries index loading after a transient failure', async () => {
  const originalFetch = globalThis.fetch;
  let indexAttempts = 0;
  globalThis.fetch = (async (input: string | URL | Request) => {
    if (input.toString().endsWith('/registry.json')) {
      return new Response(JSON.stringify(registry()));
    }
    indexAttempts += 1;
    if (indexAttempts === 1) {
      return new Response('temporary failure', { status: 503 });
    }
    return new Response(JSON.stringify(searchIndex()));
  }) as typeof fetch;

  try {
    clearDocumentationSearchCache();
    await assert.rejects(
      searchDocumentation({
        baseUrl: 'https://registry.example/retry-index',
        query: 'button',
      }),
      /503/
    );
    const results = await searchDocumentation({
      baseUrl: 'https://registry.example/retry-index',
      query: 'button',
      kind: 'component',
    });
    assert.equal(results[0]?.id, 'component:ix-button');
    assert.equal(indexAttempts, 2);
  } finally {
    globalThis.fetch = originalFetch;
    clearDocumentationSearchCache();
  }
});
