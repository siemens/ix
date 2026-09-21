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
} from '../date-time-locale';

describe('formatWithLocale', () => {
  const dt = DateTime.fromObject({ year: 2023, month: 3, day: 5 });

  it('formats without locale using en-US defaults', () => {
    expect(formatWithLocale(dt, 'yyyy/LL/dd')).toBe('2023/03/05');
  });

  it('formats numeric tokens identically regardless of locale', () => {
    expect(formatWithLocale(dt, 'yyyy/LL/dd', 'de')).toBe('2023/03/05');
    expect(formatWithLocale(dt, 'yyyy/LL/dd', 'ja')).toBe('2023/03/05');
    expect(formatWithLocale(dt, 'yyyy/LL/dd', 'ru')).toBe('2023/03/05');
  });

  it('formats locale-dependent tokens in the target locale', () => {
    const germanMonth = formatWithLocale(dt, 'MMMM', 'de');
    expect(germanMonth.toLowerCase()).toContain('märz');

    const englishMonth = formatWithLocale(dt, 'MMMM');
    expect(englishMonth).toBe('March');
  });

  it('formats full date with locale-dependent month name', () => {
    const result = formatWithLocale(dt, 'dd MMMM yyyy', 'de');
    expect(result).toMatch(/^05 .+ 2023$/);
    expect(result.toLowerCase()).toContain('märz');
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
    const result = parseWithLocale('05 März 2023', 'dd MMMM yyyy', 'de');
    expect(result.isValid).toBe(true);
    expect(result.year).toBe(2023);
    expect(result.month).toBe(3);
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

describe('formatWithLocale — time values', () => {
  // 14:30:05 on an arbitrary date; only the time part matters here.
  const dt = DateTime.fromObject(
    { year: 2024, month: 1, day: 1, hour: 14, minute: 30, second: 5 },
    { zone: 'UTC' }
  );

  it('24h numeric format is locale-independent (regression: no locale)', () => {
    expect(formatWithLocale(dt, 'HH:mm:ss')).toBe('14:30:05');
  });

  it('24h numeric format is locale-independent with de locale', () => {
    expect(formatWithLocale(dt, 'HH:mm:ss', 'de')).toBe('14:30:05');
  });

  it('24h numeric format is locale-independent with ja locale', () => {
    expect(formatWithLocale(dt, 'HH:mm:ss', 'ja')).toBe('14:30:05');
  });

  it('HH:mm zero-pads single-digit minute regardless of locale', () => {
    const dtEarly = DateTime.fromObject(
      { year: 2024, month: 1, day: 1, hour: 9, minute: 5 },
      { zone: 'UTC' }
    );
    expect(formatWithLocale(dtEarly, 'HH:mm')).toBe('09:05');
    expect(formatWithLocale(dtEarly, 'HH:mm', 'de')).toBe('09:05');
  });

  it('midnight formats as 00:00:00 regardless of locale', () => {
    const midnight = DateTime.fromObject(
      { year: 2024, month: 1, day: 1, hour: 0, minute: 0, second: 0 },
      { zone: 'UTC' }
    );
    expect(formatWithLocale(midnight, 'HH:mm:ss')).toBe('00:00:00');
    expect(formatWithLocale(midnight, 'HH:mm:ss', 'de')).toBe('00:00:00');
  });
});

describe('parseWithLocale — time values', () => {
  it('parses 24h time string without locale', () => {
    const result = parseWithLocale('14:30:05', 'HH:mm:ss');
    expect(result.isValid).toBe(true);
    expect(result.hour).toBe(14);
    expect(result.minute).toBe(30);
    expect(result.second).toBe(5);
  });

  it('parses 24h time string with de locale (locale-independent for numeric tokens)', () => {
    const result = parseWithLocale('14:30:05', 'HH:mm:ss', 'de');
    expect(result.isValid).toBe(true);
    expect(result.hour).toBe(14);
    expect(result.minute).toBe(30);
    expect(result.second).toBe(5);
  });

  it('parses midnight correctly without locale', () => {
    const result = parseWithLocale('00:00:00', 'HH:mm:ss');
    expect(result.isValid).toBe(true);
    expect(result.hour).toBe(0);
    expect(result.minute).toBe(0);
    expect(result.second).toBe(0);
  });

  it('round-trips 24h time through parse + format without locale (regression)', () => {
    const original = '09:15:30';
    const parsed = parseWithLocale(original, 'HH:mm:ss');
    const formatted = formatWithLocale(parsed, 'HH:mm:ss');
    expect(formatted).toBe(original);
  });

  it('round-trips 24h time through parse + format with de locale', () => {
    const original = '09:15:30';
    const parsed = parseWithLocale(original, 'HH:mm:ss', 'de');
    const formatted = formatWithLocale(parsed, 'HH:mm:ss', 'de');
    expect(formatted).toBe(original);
  });

  it('round-trips 24h time with HH:mm format regardless of locale', () => {
    for (const locale of [undefined, 'de', 'ja', 'fr']) {
      const parsed = parseWithLocale('23:59', 'HH:mm', locale);
      expect(parsed.isValid).toBe(true);
      expect(formatWithLocale(parsed, 'HH:mm', locale)).toBe('23:59');
    }
  });

  it('returns invalid DateTime for a mismatched time format', () => {
    expect(parseWithLocale('2:30 PM', 'HH:mm:ss').isValid).toBe(false);
    expect(parseWithLocale('not-a-time', 'HH:mm').isValid).toBe(false);
  });

  it('returns invalid DateTime for empty string', () => {
    expect(parseWithLocale('', 'HH:mm').isValid).toBe(false);
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
