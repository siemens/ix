/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';
import {
  formatWithLocale,
  parseWithLocale,
  toISODate,
  toISOTime,
} from '../date-locale';

describe('formatWithLocale', () => {
  const dt = DateTime.fromObject({ year: 2023, month: 9, day: 5 });

  it('formats without locale using en-US defaults', () => {
    expect(formatWithLocale(dt, 'yyyy/LL/dd')).toBe('2023/09/05');
  });

  it('formats numeric tokens identically regardless of locale', () => {
    expect(formatWithLocale(dt, 'yyyy/LL/dd', 'de')).toBe('2023/09/05');
    expect(formatWithLocale(dt, 'yyyy/LL/dd', 'ja')).toBe('2023/09/05');
    expect(formatWithLocale(dt, 'yyyy/LL/dd', 'ru')).toBe('2023/09/05');
  });

  it('formats locale-dependent tokens in the target locale', () => {
    const germanMonth = formatWithLocale(dt, 'MMMM', 'de');
    expect(germanMonth.toLowerCase()).toContain('september');

    const englishMonth = formatWithLocale(dt, 'MMMM');
    expect(englishMonth).toBe('September');
  });

  it('formats full date with locale-dependent month name', () => {
    const result = formatWithLocale(dt, 'dd MMMM yyyy', 'de');
    expect(result).toMatch(/^05 .+ 2023$/);
    expect(result.toLowerCase()).toContain('september');
  });
});

describe('parseWithLocale', () => {
  it('parses a date string without locale', () => {
    const result = parseWithLocale('2023/09/05', 'yyyy/LL/dd');
    expect(result.isValid).toBe(true);
    expect(result.year).toBe(2023);
    expect(result.month).toBe(9);
    expect(result.day).toBe(5);
  });

  it('parses a date string with a locale that does not affect numeric tokens', () => {
    const result = parseWithLocale('2023/09/05', 'yyyy/LL/dd', 'de');
    expect(result.isValid).toBe(true);
    expect(result.year).toBe(2023);
    expect(result.month).toBe(9);
    expect(result.day).toBe(5);
  });

  it('parses a locale-dependent format with the correct locale', () => {
    const result = parseWithLocale('05 September 2023', 'dd MMMM yyyy', 'de');
    expect(result.isValid).toBe(true);
    expect(result.year).toBe(2023);
    expect(result.month).toBe(9);
    expect(result.day).toBe(5);
  });

  it('returns an invalid DateTime for a mismatched format', () => {
    const result = parseWithLocale('Aug 6, 2014', 'yyyy/LL/dd');
    expect(result.isValid).toBe(false);
  });
});

describe('toISODate', () => {
  it('returns the ISO date string for a valid DateTime', () => {
    const dt = DateTime.fromObject({ year: 2023, month: 9, day: 5 });
    expect(toISODate(dt)).toBe('2023-09-05');
  });

  it('returns undefined for undefined input', () => {
    expect(toISODate(undefined)).toBeUndefined();
  });

  it('returns undefined for an invalid DateTime', () => {
    const invalid = DateTime.fromFormat('not-a-date', 'yyyy/LL/dd');
    expect(toISODate(invalid)).toBeUndefined();
  });

  it('zero-pads month and day', () => {
    const dt = DateTime.fromObject({ year: 2023, month: 1, day: 7 });
    expect(toISODate(dt)).toBe('2023-01-07');
  });
});

describe('toISOTime', () => {
  it('returns the ISO time string for a valid DateTime', () => {
    const dt = DateTime.fromObject(
      { year: 2023, month: 9, day: 5, hour: 14, minute: 30, second: 0 },
      { zone: 'UTC' }
    );
    expect(toISOTime(dt)).toBe('14:30:00.000Z');
  });

  it('returns undefined for undefined input', () => {
    expect(toISOTime(undefined)).toBeUndefined();
  });

  it('returns undefined for an invalid DateTime', () => {
    const invalid = DateTime.fromFormat('bad', 'HH:mm');
    expect(toISOTime(invalid)).toBeUndefined();
  });
});
