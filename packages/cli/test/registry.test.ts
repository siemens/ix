/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getExampleCode,
  fetchValidatedRegistryIndex,
  fetchValidatedPatternDefinition,
  resolveManifestFileUrl,
  resolveRegistryResourceUrl,
} from '../src/registry';
import { assertValidPatternName } from '../src/validation';

test('resolves valid nested registry and manifest file paths', () => {
  assert.equal(
    resolveRegistryResourceUrl(
      'https://registry.example/root',
      'v1/patterns/card.json'
    ),
    'https://registry.example/root/v1/patterns/card.json'
  );
  assert.equal(
    resolveManifestFileUrl(
      'https://registry.example/root',
      'v1/patterns/card.json',
      'react/card.tsx'
    ),
    'https://registry.example/root/v1/patterns/react/card.tsx'
  );
});

test('rejects registry and manifest file traversal', () => {
  assert.throws(
    () => assertValidPatternName('../card'),
    /Invalid pattern name/
  );
  assert.throws(
    () =>
      resolveRegistryResourceUrl(
        'https://registry.example/root',
        '../registry.json'
      ),
    /Invalid registry resource path/
  );
  assert.throws(
    () =>
      resolveManifestFileUrl(
        'https://registry.example/root',
        'v1/patterns/card.json',
        '../secrets.txt'
      ),
    /Invalid manifest file path/
  );
  assert.throws(
    () =>
      resolveManifestFileUrl(
        'https://registry.example/root',
        'v1/patterns/card.json',
        '%2e%2e/secrets.txt'
      ),
    /Invalid manifest file path/
  );
  assert.throws(
    () =>
      resolveManifestFileUrl(
        'https://registry.example/root',
        'v1/patterns/card.json',
        'https://evil.example/file'
      ),
    /Invalid manifest file path/
  );
});

test('accepts and preserves loose extension fields without weakening path validation', async () => {
  const originalFetch = globalThis.fetch;
  const index = {
    name: 'ix',
    'dist-tags': { latest: 'v1' },
    versions: {
      v1: {
        patterns: [],
        examples: [],
        components: { componentDoc: 'ix/component-doc.json' },
        documentationSearchIndex: 'documentation-search-index.json',
      },
    },
    extension: { supported: true },
  };
  const pattern = {
    name: 'card',
    variants: { react: { files: [{ path: 'react/card.tsx' }] } },
    extension: { supported: true },
  };
  globalThis.fetch = (async (input: string | URL | Request) =>
    new Response(
      JSON.stringify(
        input.toString().endsWith('/registry.json') ? index : pattern
      )
    )) as typeof fetch;
  try {
    assert.deepEqual(
      (
        (await fetchValidatedRegistryIndex(
          'https://registry.example/root'
        )) as typeof index
      ).extension,
      { supported: true }
    );
    assert.deepEqual(
      (
        (await fetchValidatedPatternDefinition(
          'https://registry.example/root',
          'patterns/card.json'
        )) as typeof pattern
      ).extension,
      { supported: true }
    );
    pattern.variants.react.files[0].path = '../secrets.txt';
    await assert.rejects(
      fetchValidatedPatternDefinition(
        'https://registry.example/root',
        'patterns/card.json'
      ),
      /Invalid pattern definition/
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects duplicate pattern public paths', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () =>
    new Response(
      JSON.stringify({
        name: 'card',
        variants: {
          react: {
            files: [{ path: 'react/card.tsx' }, { path: 'react/card.tsx' }],
          },
        },
      })
    )) as typeof fetch;
  try {
    await assert.rejects(
      fetchValidatedPatternDefinition(
        'https://registry.example/root',
        'patterns/card.json'
      ),
      /duplicate public file path 'react\/card.tsx'/
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects duplicate example public paths before fetching source files', async () => {
  const originalFetch = globalThis.fetch;
  const requests: string[] = [];
  globalThis.fetch = (async (input: string | URL | Request) => {
    requests.push(input.toString());
    return new Response(
      JSON.stringify({
        name: 'card',
        variants: {
          react: {
            files: [{ path: 'react/card.tsx' }, { path: 'react/card.tsx' }],
          },
        },
      })
    );
  }) as typeof fetch;
  try {
    await assert.rejects(
      getExampleCode(
        'https://registry.example/root',
        'examples/card.json',
        'react'
      ),
      /duplicate public file path 'react\/card.tsx'/
    );
    assert.deepEqual(requests, [
      'https://registry.example/root/examples/card.json',
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('keeps failed example file fetches as per-file fallback content', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (input: string | URL | Request) =>
    input.toString().endsWith('/examples/card.json')
      ? new Response(
          JSON.stringify({
            name: 'card',
            variants: { react: { files: [{ path: 'react/card.tsx' }] } },
          })
        )
      : new Response('missing', { status: 404 })) as typeof fetch;
  const originalError = console.error;
  console.error = () => undefined;
  try {
    const result = await getExampleCode(
      'https://registry.example/root',
      'examples/card.json',
      'react'
    );
    assert.deepEqual(result.files, [
      {
        path: 'react/card.tsx',
        content:
          '// Error loading file: Failed to fetch https://registry.example/root/examples/react/card.tsx: 404',
      },
    ]);
  } finally {
    console.error = originalError;
    globalThis.fetch = originalFetch;
  }
});

test('rejects redirected registry responses without following them', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (
    _input: string | URL | Request,
    init?: RequestInit
  ) => {
    assert.equal(init?.redirect, 'error');
    const response = new Response('{}');
    Object.defineProperties(response, {
      redirected: { value: true },
      url: { value: 'http://127.0.0.1/internal' },
    });
    return response;
  }) as typeof fetch;

  try {
    await assert.rejects(
      fetchValidatedRegistryIndex('https://registry.example/root'),
      /Registry request was redirected/
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects LLM metadata without the patterns entry', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () =>
    new Response(
      JSON.stringify({
        name: 'ix',
        'dist-tags': { latest: 'v1.0.0' },
        versions: {
          'v1.0.0': {
            patterns: [{ name: 'card', path: 'v1.0.0/patterns/card.json' }],
            examples: [{ name: 'card', path: 'v1.0.0/examples/card.json' }],
            components: {
              componentDoc: 'v1.0.0/ix/component-doc.json',
            },
            documentationSearchIndex: 'v1.0.0/documentation-search-index.json',
            llms: {
              entrypoint: 'v1.0.0/llms.txt',
              components: 'v1.0.0/llms/components.md',
            },
          },
        },
      })
    )) as typeof fetch;

  try {
    await assert.rejects(
      fetchValidatedRegistryIndex('https://registry.example/root'),
      /Invalid registry index/
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('fetches example files relative to the example manifest and returns canonical paths', async () => {
  const originalFetch = globalThis.fetch;
  const requests: string[] = [];
  globalThis.fetch = (async (input: string | URL | Request) => {
    const url = input.toString();
    requests.push(url);
    if (url.endsWith('/v1/examples/card.json')) {
      return new Response(
        JSON.stringify({
          name: 'card',
          variants: { react: { files: [{ path: 'react/card.tsx' }] } },
        })
      );
    }
    if (url.endsWith('/v1/examples/react/card.tsx')) {
      return new Response('export const Card = () => null;');
    }
    return new Response('not found', { status: 404 });
  }) as typeof fetch;

  try {
    const result = await getExampleCode(
      'https://registry.example/root',
      'v1/examples/card.json',
      'react'
    );
    assert.deepEqual(requests, [
      'https://registry.example/root/v1/examples/card.json',
      'https://registry.example/root/v1/examples/react/card.tsx',
    ]);
    assert.deepEqual(result.files, [
      {
        path: 'react/card.tsx',
        content: 'export const Card = () => null;',
      },
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('does not read legacy example source and target entries', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (input: string | URL | Request) => {
    if (input.toString().endsWith('/examples/card.json')) {
      return new Response(
        JSON.stringify({
          name: 'card',
          variants: {
            react: {
              files: [
                {
                  source: 'react-examples/src/card.tsx',
                  target: 'react/card.tsx',
                },
              ],
            },
          },
        })
      );
    }
    return new Response('unexpected', { status: 500 });
  }) as typeof fetch;

  try {
    await assert.rejects(
      getExampleCode(
        'https://registry.example/root',
        'examples/card.json',
        'react'
      ),
      /Invalid example definition/
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects example files that are not prefixed with their framework', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (input: string | URL | Request) => {
    if (input.toString().endsWith('/examples/card.json')) {
      return new Response(
        JSON.stringify({
          name: 'card',
          variants: {
            react: {
              files: [{ path: 'angular/card.tsx' }],
            },
          },
        })
      );
    }
    return new Response('unexpected', { status: 500 });
  }) as typeof fetch;

  try {
    await assert.rejects(
      getExampleCode(
        'https://registry.example/root',
        'examples/card.json',
        'react'
      ),
      /Invalid example definition/
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});
