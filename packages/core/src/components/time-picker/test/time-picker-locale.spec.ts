/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Tests for the locale-aware parse/format pipeline used by ix-time-picker.
 *
 * The time-picker uses formatWithLocale() for all emitted values and
 * parseWithLocale() for all incoming `time`, `minTime`, and `maxTime` props.
 * These tests verify:
 *   - Regression: default (no locale / en-US) behaviour is unchanged.
 *   - Locale forwarding: a non-default locale is faithfully threaded through.
 *   - Round-trip contract: parse → format produces the original string.
 *   - 12-hour format: `h` and `a` tokens work in both parsing directions.
 */

import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';
import { formatWithLocale, parseWithLocale } from '../../utils/date-locale';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Simulate the time-picker's `watchTimePropHandler`: parse `time` prop. */
function parseProp(value: string, format: string, locale?: string): DateTime {
  return parseWithLocale(value, format, locale);
}

/** Simulate the time-picker's `getCurrentTime` / emit paths. */
function formatForEmit(dt: DateTime, format: string, locale?: string): string {
  return formatWithLocale(dt, format, locale);
}

// ---------------------------------------------------------------------------
// Regression – default (no locale) behaviour for 24h formats
// ---------------------------------------------------------------------------

describe('24h format — no locale regression', () => {
  const FMT = 'HH:mm:ss';

  it('parses a valid 24h time string', () => {
    const dt = parseProp('14:30:05', FMT);
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(14);
    expect(dt.minute).toBe(30);
    expect(dt.second).toBe(5);
  });

  it('formats a DateTime back to the same 24h string', () => {
    const dt = DateTime.fromObject({ hour: 14, minute: 30, second: 5 });
    expect(formatForEmit(dt, FMT)).toBe('14:30:05');
  });

  it('round-trips several representative times', () => {
    for (const time of ['00:00:00', '09:05:01', '12:00:00', '23:59:59']) {
      const dt = parseProp(time, FMT);
      expect(dt.isValid).toBe(true);
      expect(formatForEmit(dt, FMT)).toBe(time);
    }
  });

  it('round-trips HH:mm (no seconds)', () => {
    const parsed = parseProp('08:45', 'HH:mm');
    expect(parsed.isValid).toBe(true);
    expect(formatForEmit(parsed, 'HH:mm')).toBe('08:45');
  });

  it('rejects a mismatched time string as invalid', () => {
    expect(parseProp('not-a-time', FMT).isValid).toBe(false);
    expect(parseProp('25:00:00', FMT).isValid).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Locale forwarding – numeric 24h tokens are locale-independent
// ---------------------------------------------------------------------------

describe('24h format — locale is forwarded but does not alter numeric tokens', () => {
  const FMT = 'HH:mm:ss';
  const locales = ['de', 'fr', 'ja', 'zh', 'ar'];

  it('parseProp produces the same result for all locales', () => {
    for (const locale of locales) {
      const dt = parseProp('14:30:05', FMT, locale);
      expect(dt.isValid, `locale=${locale}`).toBe(true);
      expect(dt.hour, `locale=${locale}`).toBe(14);
      expect(dt.minute, `locale=${locale}`).toBe(30);
    }
  });

  it('formatForEmit produces the same string for all locales', () => {
    const dt = DateTime.fromObject({ hour: 14, minute: 30, second: 5 });
    for (const locale of locales) {
      expect(formatForEmit(dt, FMT, locale), `locale=${locale}`).toBe(
        '14:30:05'
      );
    }
  });

  it('round-trip holds for each locale', () => {
    for (const locale of locales) {
      const original = '09:15:30';
      const parsed = parseProp(original, FMT, locale);
      expect(parsed.isValid, `locale=${locale}`).toBe(true);
      expect(formatForEmit(parsed, FMT, locale), `locale=${locale}`).toBe(
        original
      );
    }
  });
});

// ---------------------------------------------------------------------------
// 12-hour format – h and a tokens
// ---------------------------------------------------------------------------

describe('12h format — locale-independent numeric path', () => {
  const FMT = 'hh:mm a';

  it('parses AM time without locale', () => {
    const dt = parseProp('09:30 AM', FMT);
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(9);
    expect(dt.minute).toBe(30);
  });

  it('parses PM time without locale', () => {
    const dt = parseProp('02:45 PM', FMT);
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(14);
    expect(dt.minute).toBe(45);
  });

  it('noon parses to hour 12', () => {
    const dt = parseProp('12:00 PM', FMT);
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(12);
  });

  it('midnight (12:00 AM) parses to hour 0', () => {
    const dt = parseProp('12:00 AM', FMT);
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(0);
  });

  it('formats PM time without locale', () => {
    const dt = DateTime.fromObject({ hour: 14, minute: 45 });
    // Luxon formats 'a' as 'PM' in the default (en) locale
    expect(formatForEmit(dt, FMT)).toMatch(/02:45 PM/i);
  });

  it('round-trip AM without locale', () => {
    const original = '09:30 AM';
    const parsed = parseProp(original, FMT);
    expect(parsed.isValid).toBe(true);
    const emitted = formatForEmit(parsed, FMT);
    // Re-parse the emitted value to confirm it carries the same time
    const reparsed = parseProp(emitted, FMT);
    expect(reparsed.isValid).toBe(true);
    expect(reparsed.hour).toBe(9);
    expect(reparsed.minute).toBe(30);
  });
});

// ---------------------------------------------------------------------------
// 12-hour format — locale DOES change the meridiem token (a)
// ---------------------------------------------------------------------------

describe('12h format — locale changes meridiem (a token)', () => {
  const FMT = 'hh:mm a';
  const pm = DateTime.fromObject({ hour: 14, minute: 30 });
  const am = DateTime.fromObject({ hour: 9, minute: 30 });

  const meridiemCases = [
    { locale: 'en', pm: '02:30 PM', am: '09:30 AM' },
    { locale: 'ja', pm: '02:30 午後', am: '09:30 午前' },
    { locale: 'zh', pm: '02:30 下午', am: '09:30 上午' },
  ];

  it('locale changes the formatted meridiem string', () => {
    for (const { locale, pm: pmStr, am: amStr } of meridiemCases) {
      expect(formatForEmit(pm, FMT, locale), `${locale} PM`).toBe(pmStr);
      expect(formatForEmit(am, FMT, locale), `${locale} AM`).toBe(amStr);
    }
  });

  it('locale-formatted meridiem round-trips through parse with the same locale', () => {
    for (const { locale, pm: pmStr, am: amStr } of meridiemCases) {
      const parsedPm = parseProp(pmStr, FMT, locale);
      expect(parsedPm.isValid, `${locale} PM`).toBe(true);
      expect(parsedPm.hour, `${locale} PM hour`).toBe(14);

      const parsedAm = parseProp(amStr, FMT, locale);
      expect(parsedAm.isValid, `${locale} AM`).toBe(true);
      expect(parsedAm.hour, `${locale} AM hour`).toBe(9);
    }
  });

  it('locale-formatted meridiem does NOT parse correctly with a different locale', () => {
    // Japanese meridiem string should not be valid when parsed as English
    const jaPm = '02:30 午後';
    const parsedAsEn = parseProp(jaPm, FMT, 'en');
    expect(parsedAsEn.isValid).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Millisecond format
// ---------------------------------------------------------------------------

describe('millisecond format — locale-independent', () => {
  const FMT = 'HH:mm:ss.SSS';

  it('round-trips a time with milliseconds without locale', () => {
    const original = '10:20:30.456';
    const parsed = parseProp(original, FMT);
    expect(parsed.isValid).toBe(true);
    expect(parsed.millisecond).toBe(456);
    expect(formatForEmit(parsed, FMT)).toBe(original);
  });

  it('round-trips a time with milliseconds with de locale', () => {
    const original = '10:20:30.456';
    const parsed = parseProp(original, FMT, 'de');
    expect(parsed.isValid).toBe(true);
    expect(formatForEmit(parsed, FMT, 'de')).toBe(original);
  });
});

// ---------------------------------------------------------------------------
// Constraint value parsing (minTime / maxTime follow the same code path)
// ---------------------------------------------------------------------------

describe('constraint values — same parse path as time prop', () => {
  const FMT = 'HH:mm';

  it('parses a valid minTime constraint', () => {
    const dt = parseProp('09:00', FMT);
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(9);
  });

  it('parses a valid maxTime constraint with locale', () => {
    const dt = parseProp('17:30', FMT, 'de');
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(17);
    expect(dt.minute).toBe(30);
  });

  it('returns invalid DateTime for a malformed constraint', () => {
    expect(parseProp('not-a-time', FMT).isValid).toBe(false);
    expect(parseProp('25:00', FMT).isValid).toBe(false);
  });

  it('constraint comparison is valid after locale-aware parse', () => {
    const min = parseProp('09:00', FMT, 'de');
    const max = parseProp('17:00', FMT, 'de');
    expect(min.isValid).toBe(true);
    expect(max.isValid).toBe(true);
    expect(min < max).toBe(true);

    const inverted = parseProp('18:00', FMT, 'de');
    expect(inverted > max).toBe(true);
  });
});
