/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { convertToAbbreviationString } from '../rwd.util';

describe('convertToAbbreviationString', () => {
  it('abbreviates positive numbers', () => {
    expect(convertToAbbreviationString(1500)).toBe('1.5K');
    expect(convertToAbbreviationString(2000000)).toBe('2M');
  });

  it('moves to the next unit when rounding reaches 1000', () => {
    expect(convertToAbbreviationString(999949)).toBe('999.9K');
    expect(convertToAbbreviationString(999950)).toBe('1M');
    expect(convertToAbbreviationString(999999)).toBe('1M');
    expect(convertToAbbreviationString(-999999)).toBe('-1M');
    expect(convertToAbbreviationString(999999999)).toBe('1B');
  });

  it('keeps the sign of negative numbers', () => {
    expect(convertToAbbreviationString(-1500)).toBe('-1.5K');
    expect(convertToAbbreviationString(-2000000)).toBe('-2M');
  });
});
