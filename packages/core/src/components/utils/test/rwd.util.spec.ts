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

  it('keeps the sign of negative numbers', () => {
    expect(convertToAbbreviationString(-1500)).toBe('-1.5K');
    expect(convertToAbbreviationString(-2000000)).toBe('-2M');
  });
});
