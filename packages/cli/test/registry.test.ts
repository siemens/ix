/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import {
  fetchValidatedRegistryIndex,
  resolveBlockSourceUrl,
  resolveRegistryResourceUrl,
} from '../src/registry';
import { assertValidBlockName } from '../src/validation';

test('resolves valid nested registry and block source paths', () => {
  assert.equal(
    resolveRegistryResourceUrl(
      'https://registry.example/root',
      'v1/blocks/card.json'
    ),
    'https://registry.example/root/v1/blocks/card.json'
  );
  assert.equal(
    resolveBlockSourceUrl(
      'https://registry.example/root',
      'v1/blocks/card.json',
      'payload/react/card.tsx'
    ),
    'https://registry.example/root/v1/blocks/payload/react/card.tsx'
  );
});

test('rejects registry and source traversal', () => {
  assert.throws(() => assertValidBlockName('../card'), /Invalid block name/);
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
      resolveBlockSourceUrl(
        'https://registry.example/root',
        'v1/blocks/card.json',
        '%2e%2e/secrets.txt'
      ),
    /Invalid block source path/
  );
  assert.throws(
    () =>
      resolveBlockSourceUrl(
        'https://registry.example/root',
        'v1/blocks/card.json',
        'https://evil.example/file'
      ),
    /Invalid block source path/
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
