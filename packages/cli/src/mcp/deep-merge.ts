/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

type PlainObject = Record<string, unknown>;

const UNSAFE_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

function isPlainObject(value: unknown): value is PlainObject {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

/**
 * Recursively merges `source` into a copy of `target`.
 * Plain objects are merged, all other values (including arrays) from
 * `source` replace the value in `target`. Neither input is mutated.
 */
export function deepMerge<T extends PlainObject>(
  target: PlainObject,
  source: PlainObject
): T {
  const result: PlainObject = {};

  for (const [key, value] of Object.entries(target)) {
    if (UNSAFE_KEYS.has(key)) {
      continue;
    }
    result[key] = isPlainObject(value) ? deepMerge({}, value) : value;
  }

  for (const [key, value] of Object.entries(source)) {
    if (UNSAFE_KEYS.has(key)) {
      continue;
    }
    const existing = result[key];
    if (isPlainObject(value)) {
      result[key] = deepMerge(isPlainObject(existing) ? existing : {}, value);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}
