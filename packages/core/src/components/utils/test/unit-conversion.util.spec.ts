/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { normalizeCssDimension } from '../unit-conversion.util';

describe('normalizeCssDimension', () => {
  it('keeps supported units', () => {
    expect(normalizeCssDimension('200px')).toBe('200px');
    expect(normalizeCssDimension('10rem')).toBe('10rem');
    expect(normalizeCssDimension('8em')).toBe('8em');
    expect(normalizeCssDimension('50%')).toBe('50%');
    expect(normalizeCssDimension(' 1.5 rem ')).toBe('1.5rem');
  });

  it('converts unitless values to pixels', () => {
    expect(normalizeCssDimension('52')).toBe('52px');
    expect(normalizeCssDimension('0')).toBe('0px');
  });

  it('accepts units in any case', () => {
    expect(normalizeCssDimension('200PX')).toBe('200px');
    expect(normalizeCssDimension('10Rem')).toBe('10rem');
    expect(normalizeCssDimension('8EM')).toBe('8em');
  });

  it('rejects empty, negative and unsupported values', () => {
    expect(normalizeCssDimension(undefined)).toBeUndefined();
    expect(normalizeCssDimension('')).toBeUndefined();
    expect(normalizeCssDimension('-10px')).toBeUndefined();
    expect(normalizeCssDimension('10vh')).toBeUndefined();
    expect(normalizeCssDimension('abc')).toBeUndefined();
  });
});
