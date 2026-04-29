/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { isFormat12Hour, LUXON_FORMAT_PATTERNS } from '../time-picker-format';

describe('isFormat12Hour', () => {
  it('detects 24h token H without 12h tokens', () => {
    expect(isFormat12Hour('HH:mm')).toBe(false);
  });

  it('detects lowercase h as 12h', () => {
    expect(isFormat12Hour('hh:mm a')).toBe(true);
  });

  it('detects a as 12h', () => {
    expect(isFormat12Hour('HH:mm a')).toBe(true);
  });

  it('ignores h inside quoted literals', () => {
    expect(isFormat12Hour("'h' HH:mm")).toBe(false);
  });

  it('detects h outside quotes when mixed', () => {
    expect(isFormat12Hour("'x' hh:mm")).toBe(true);
  });
});

describe('LUXON_FORMAT_PATTERNS', () => {
  it('TT includes hours, minutes, and seconds columns', () => {
    expect(LUXON_FORMAT_PATTERNS.hours.test('TT')).toBe(true);
    expect(LUXON_FORMAT_PATTERNS.minutes.test('TT')).toBe(true);
    expect(LUXON_FORMAT_PATTERNS.seconds.test('TT')).toBe(true);
  });

  it('HH:mm hides seconds and milliseconds', () => {
    expect(LUXON_FORMAT_PATTERNS.seconds.test('HH:mm')).toBe(false);
    expect(LUXON_FORMAT_PATTERNS.milliseconds.test('HH:mm')).toBe(false);
  });

  it('detects two-digit fractional S and composite ttt for milliseconds column', () => {
    expect(LUXON_FORMAT_PATTERNS.milliseconds.test('HH:mm:ss.SS')).toBe(true);
    expect(LUXON_FORMAT_PATTERNS.milliseconds.test('ttt')).toBe(true);
  });
});
