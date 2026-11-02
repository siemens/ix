/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import { deepMerge } from '../src/mcp/deep-merge';

test('deepMerge merges nested objects', () => {
  const result = deepMerge(
    { servers: { a: { command: 'a' } }, keep: true },
    { servers: { b: { command: 'b' } } }
  );

  assert.deepEqual(result, {
    servers: { a: { command: 'a' }, b: { command: 'b' } },
    keep: true,
  });
});

test('deepMerge lets source values win', () => {
  const result = deepMerge(
    { server: { command: 'npx', env: { A: '1' } } },
    { server: { command: 'node', env: { B: '2' } } }
  );

  assert.deepEqual(result, {
    server: { command: 'node', env: { A: '1', B: '2' } },
  });
});

test('deepMerge overwrites arrays instead of concatenating', () => {
  const result = deepMerge(
    { server: { args: ['a', 'b'] } },
    { server: { args: ['c'] } }
  );

  assert.deepEqual(result, { server: { args: ['c'] } });
});

test('deepMerge replaces object with primitive and vice versa', () => {
  assert.deepEqual(deepMerge({ a: { b: 1 } }, { a: 'x' }), { a: 'x' });
  assert.deepEqual(deepMerge({ a: 'x' }, { a: { b: 1 } }), { a: { b: 1 } });
});

test('deepMerge does not mutate inputs', () => {
  const target = { nested: { a: 1 } };
  const source = { nested: { b: 2 } };

  const result = deepMerge(target, source);

  assert.deepEqual(target, { nested: { a: 1 } });
  assert.deepEqual(source, { nested: { b: 2 } });
  assert.notEqual(result.nested, target.nested);
  assert.notEqual(result.nested, source.nested);
});

test('deepMerge ignores prototype pollution keys', () => {
  const source = JSON.parse('{"__proto__": {"polluted": true}, "a": 1}');

  const result = deepMerge<Record<string, unknown>>({}, source);

  assert.deepEqual(result, { a: 1 });
  assert.equal(({} as Record<string, unknown>).polluted, undefined);
  assert.equal(Object.getPrototypeOf(result), Object.prototype);
});
