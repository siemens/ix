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
