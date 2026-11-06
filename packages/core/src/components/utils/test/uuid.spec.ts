/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { describe, expect, it, vi } from 'vitest';
import { generateUUID } from '../uuid';

describe('generateUUID', () => {
  it('returns an alphanumeric id', () => {
    expect(generateUUID()).toMatch(/^[a-z0-9]+$/);
  });

  it('returns unique ids', () => {
    const ids = new Set(Array.from({ length: 1000 }, () => generateUUID()));
    expect(ids.size).toBe(1000);
  });

  it('uses crypto.getRandomValues', () => {
    const spy = vi.spyOn(globalThis.crypto, 'getRandomValues');
    generateUUID();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
