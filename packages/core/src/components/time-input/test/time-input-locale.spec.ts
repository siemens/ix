/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Pure-logic tests for the locale-aware parse/format/constraint utilities
 * that ix-time-input relies on.  Component-level locale tests (validation,
 * picker sync, event emission, constraints) live in time-input.ct.ts.
 */

import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';
import {
  formatWithLocale,
  parseWithLocale,
} from '../../utils/date-time-locale';
import {
  getTimePickerConstraintBounds,
  isWithinTimePickerConstraints,
} from '../../time-picker/time-picker-constraints';

const FMT_12H = 'hh:mm a';
const JA_PM_VALUE = '02:30 午後';
const JA_AM_VALUE = '09:30 午前';

// ---------------------------------------------------------------------------
// parseWithLocale — Japanese 12h meridiem
// ---------------------------------------------------------------------------

describe('parseWithLocale — Japanese 12h meridiem', () => {
  it('parses "02:30 午後" to hour=14, minute=30 with locale "ja"', () => {
    const dt = parseWithLocale(JA_PM_VALUE, FMT_12H, 'ja');
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(14);
    expect(dt.minute).toBe(30);
  });

  it('parses "09:30 午前" to hour=9, minute=30 with locale "ja"', () => {
    const dt = parseWithLocale(JA_AM_VALUE, FMT_12H, 'ja');
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(9);
    expect(dt.minute).toBe(30);
  });

  it('rejects "02:30 午後" without locale', () => {
    expect(parseWithLocale(JA_PM_VALUE, FMT_12H).isValid).toBe(false);
  });

  it('rejects "02:30 午後" with locale "en"', () => {
    expect(parseWithLocale(JA_PM_VALUE, FMT_12H, 'en').isValid).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// formatWithLocale — cross-locale round-trip
// ---------------------------------------------------------------------------

describe('formatWithLocale — Japanese 12h round-trip', () => {
  it('"02:30 午後" round-trips through parse+format with locale "ja"', () => {
    const parsed = parseWithLocale(JA_PM_VALUE, FMT_12H, 'ja');
    expect(formatWithLocale(parsed, FMT_12H, 'ja')).toBe(JA_PM_VALUE);
  });

  it('"09:30 午前" round-trips through parse+format with locale "ja"', () => {
    const parsed = parseWithLocale(JA_AM_VALUE, FMT_12H, 'ja');
    expect(formatWithLocale(parsed, FMT_12H, 'ja')).toBe(JA_AM_VALUE);
  });

  it('Japanese PM value re-formatted in English yields "02:30 PM"', () => {
    const dt = parseWithLocale(JA_PM_VALUE, FMT_12H, 'ja');
    expect(formatWithLocale(dt, FMT_12H, 'en')).toBe('02:30 PM');
  });
});

// ---------------------------------------------------------------------------
// getTimePickerConstraintBounds — Japanese 12h constraints
// ---------------------------------------------------------------------------

describe('getTimePickerConstraintBounds — Japanese 12h', () => {
  const baseDay = DateTime.fromObject({ year: 2000, month: 1, day: 1 });

  it('parses "09:00 午前" as minTime to hour=9', () => {
    const { min } = getTimePickerConstraintBounds(
      '09:00 午前',
      undefined,
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(min).toBeDefined();
    expect(min?.hour).toBe(9);
    expect(min?.minute).toBe(0);
  });

  it('parses "05:30 午後" as maxTime to hour=17, minute=30', () => {
    const { max } = getTimePickerConstraintBounds(
      undefined,
      '05:30 午後',
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(max).toBeDefined();
    expect(max?.hour).toBe(17);
    expect(max?.minute).toBe(30);
  });

  it('"12:00 午前" (midnight) parses to hour=0', () => {
    const { min } = getTimePickerConstraintBounds(
      '12:00 午前',
      undefined,
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(min?.hour).toBe(0);
  });

  it('"12:00 午後" (noon) parses to hour=12', () => {
    const { min } = getTimePickerConstraintBounds(
      '12:00 午後',
      undefined,
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(min?.hour).toBe(12);
  });

  it('min < max for Japanese PM bounds', () => {
    const { min, max } = getTimePickerConstraintBounds(
      '12:00 午後',
      '05:00 午後',
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(min).toBeDefined();
    expect(max).toBeDefined();
    if (min && max) {
      expect(min < max).toBe(true);
    }
  });

  it('value within Japanese bounds passes isWithinTimePickerConstraints', () => {
    const parsed = parseWithLocale(JA_PM_VALUE, FMT_12H, 'ja');
    const time = baseDay.set({
      hour: parsed.hour,
      minute: parsed.minute,
    });
    const { min, max } = getTimePickerConstraintBounds(
      '12:00 午後',
      '05:00 午後',
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(isWithinTimePickerConstraints(time, min, max)).toBe(true);
  });

  it('value below minTime fails isWithinTimePickerConstraints', () => {
    const parsed = parseWithLocale(JA_PM_VALUE, FMT_12H, 'ja');
    const time = baseDay.set({
      hour: parsed.hour,
      minute: parsed.minute,
    });
    const { min, max } = getTimePickerConstraintBounds(
      '03:00 午後',
      '06:00 午後',
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(isWithinTimePickerConstraints(time, min, max)).toBe(false);
  });
});
