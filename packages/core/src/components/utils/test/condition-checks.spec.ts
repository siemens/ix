/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it } from 'vitest';
import { isSameStringOrUnset } from '../condition-checks';

describe('isSameStringOrUnset', () => {
  it('treats empty and undefined as unset', () => {
    expect(isSameStringOrUnset('', undefined)).toBe(true);
    expect(isSameStringOrUnset(undefined, undefined)).toBe(true);
  });

  it('compares set strings', () => {
    expect(isSameStringOrUnset('a', 'a')).toBe(true);
    expect(isSameStringOrUnset('a', 'b')).toBe(false);
    expect(isSameStringOrUnset('a', '')).toBe(false);
  });
});
