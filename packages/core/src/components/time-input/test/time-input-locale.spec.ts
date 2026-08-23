/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Tests for the locale-aware parse/format pipeline as used by ix-time-input.
 *
 * ix-time-input routes every incoming value through parseWithLocale() (in
 * validateNonEmptyValue and syncPickerTimeFromValue) and emits the original
 * string unchanged when it is valid.  Constraints (minTime / maxTime) are
 * parsed via getTimePickerConstraintBounds which also calls parseWithLocale.
 *
 * These tests verify:
 *   - Input validation accepts a localized 12-hour value (Japanese 午後).
 *   - An invalid value (wrong locale meridiem) is correctly rejected.
 *   - Picker synchronization: a valid localized value survives the parse step
 *     that syncPickerTimeFromValue uses before forwarding to ix-time-picker.
 *   - Emitted values retain the localized string exactly.
 *   - 12-hour constraints (minTime / maxTime) are parsed locale-awarely.
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

// ---------------------------------------------------------------------------
// Helpers — mirror the private methods of TimeInput
// ---------------------------------------------------------------------------

/**
 * Mirrors TimeInput.validateNonEmptyValue: parse and return validity.
 * Returns null when format is empty (same guard as the component).
 */
function validateNonEmptyValue(
  value: string,
  format: string,
  locale?: string,
  minTime?: string,
  maxTime?: string
): { isInputInvalid: boolean; invalidReason: string | undefined } | null {
  if (!format) return null;
  const time = parseWithLocale(value, format, locale);
  if (time.isValid) {
    const baseDay = time.startOf('day');
    const { min, max } = getTimePickerConstraintBounds(
      minTime,
      maxTime,
      format,
      baseDay,
      locale
    );
    const inBounds = isWithinTimePickerConstraints(time, min, max);
    if (inBounds) return { isInputInvalid: false, invalidReason: undefined };
    return { isInputInvalid: true, invalidReason: 'customError' };
  }
  return {
    isInputInvalid: true,
    invalidReason: time.invalidReason ?? undefined,
  };
}

/**
 * Mirrors TimeInput.syncPickerTimeFromValue: returns the string to forward to
 * ix-time-picker, or null when the value is not parsable.
 */
function syncPickerTimeFromValue(
  value: string,
  format: string,
  locale?: string
): string | null {
  const trimmed = value?.trim() ?? '';
  if (!trimmed) return null;
  const parsed = parseWithLocale(trimmed, format, locale);
  return parsed.isValid ? trimmed : null;
}

/**
 * Mirrors the emit path: ix-time-input emits the raw value string when valid.
 * Format it back through formatWithLocale to confirm the round-trip.
 */
function emitValue(
  value: string,
  format: string,
  locale?: string
): string | null {
  const parsed = parseWithLocale(value, format, locale);
  if (!parsed.isValid) return null;
  return formatWithLocale(parsed, format, locale);
}

// ---------------------------------------------------------------------------
// Reference value used throughout: 2:30 PM in Japanese (午後)
// ---------------------------------------------------------------------------

const FMT_12H = 'hh:mm a';
const JA_PM_VALUE = '02:30 午後';
const JA_AM_VALUE = '09:30 午前';

// ---------------------------------------------------------------------------
// Input validation — validateNonEmptyValue
// ---------------------------------------------------------------------------

describe('time-input locale validation — 12h Japanese meridiem', () => {
  it('accepts "02:30 午後" with locale "ja" as valid', () => {
    const result = validateNonEmptyValue(JA_PM_VALUE, FMT_12H, 'ja');
    expect(result).not.toBeNull();
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.isInputInvalid).toBe(false);
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.invalidReason).toBeUndefined();
  });

  it('accepts "09:30 午前" with locale "ja" as valid', () => {
    const result = validateNonEmptyValue(JA_AM_VALUE, FMT_12H, 'ja');
    expect(result).not.toBeNull();
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.isInputInvalid).toBe(false);
  });

  it('rejects "02:30 午後" when no locale is supplied', () => {
    // Without "ja" locale, Luxon cannot interpret 午後
    const result = validateNonEmptyValue(JA_PM_VALUE, FMT_12H);
    expect(result).not.toBeNull();
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.isInputInvalid).toBe(true);
  });

  it('rejects "02:30 午後" when parsed as English ("en")', () => {
    const result = validateNonEmptyValue(JA_PM_VALUE, FMT_12H, 'en');
    expect(result).not.toBeNull();
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.isInputInvalid).toBe(true);
  });

  it('rejects a completely invalid string with locale "ja"', () => {
    const result = validateNonEmptyValue('not-a-time', FMT_12H, 'ja');
    expect(result).not.toBeNull();
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.isInputInvalid).toBe(true);
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.invalidReason).toBeDefined();
  });

  it('returns null when format is empty', () => {
    expect(validateNonEmptyValue(JA_PM_VALUE, '', 'ja')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Picker synchronization — syncPickerTimeFromValue
// ---------------------------------------------------------------------------

describe('time-input picker sync — localized 12h value forwarded correctly', () => {
  it('returns the original string for a valid Japanese PM value', () => {
    const pickerTime = syncPickerTimeFromValue(JA_PM_VALUE, FMT_12H, 'ja');
    expect(pickerTime).toBe(JA_PM_VALUE);
  });

  it('returns the original string for a valid Japanese AM value', () => {
    const pickerTime = syncPickerTimeFromValue(JA_AM_VALUE, FMT_12H, 'ja');
    expect(pickerTime).toBe(JA_AM_VALUE);
  });

  it('returns null for "02:30 午後" when locale is missing (unparsable)', () => {
    expect(syncPickerTimeFromValue(JA_PM_VALUE, FMT_12H)).toBeNull();
  });

  it('returns null for an empty string', () => {
    expect(syncPickerTimeFromValue('', FMT_12H, 'ja')).toBeNull();
  });

  it('trims whitespace before forwarding', () => {
    const padded = `  ${JA_PM_VALUE}  `;
    // syncPickerTimeFromValue trims the value before parsing, but returns the
    // trimmed string (matching the component's this.time = trimmed assignment)
    const pickerTime = syncPickerTimeFromValue(padded, FMT_12H, 'ja');
    expect(pickerTime).toBe(JA_PM_VALUE);
  });
});

// ---------------------------------------------------------------------------
// Emitted value integrity — the localized string is preserved
// ---------------------------------------------------------------------------

describe('time-input emitted value — localized string retained', () => {
  it('emitting "02:30 午後" with locale "ja" round-trips to the same string', () => {
    const emitted = emitValue(JA_PM_VALUE, FMT_12H, 'ja');
    expect(emitted).toBe(JA_PM_VALUE);
  });

  it('emitting "09:30 午前" with locale "ja" round-trips to the same string', () => {
    const emitted = emitValue(JA_AM_VALUE, FMT_12H, 'ja');
    expect(emitted).toBe(JA_AM_VALUE);
  });

  it('the parsed DateTime for "02:30 午後" has hour=14 and minute=30', () => {
    const dt = parseWithLocale(JA_PM_VALUE, FMT_12H, 'ja');
    expect(dt.isValid).toBe(true);
    expect(dt.hour).toBe(14);
    expect(dt.minute).toBe(30);
  });

  it('cross-locale emit: Japanese PM value re-formatted in English yields "02:30 PM"', () => {
    const dt = parseWithLocale(JA_PM_VALUE, FMT_12H, 'ja');
    expect(dt.isValid).toBe(true);
    const enFormatted = formatWithLocale(dt, FMT_12H, 'en');
    expect(enFormatted).toBe('02:30 PM');
  });

  it('returns null for an unparsable value', () => {
    expect(emitValue('bad-value', FMT_12H, 'ja')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Constraint validation — minTime / maxTime with Japanese meridiem
// ---------------------------------------------------------------------------

describe('time-input constraint validation — Japanese 12h minTime/maxTime', () => {
  const baseDay = DateTime.fromObject({ year: 2000, month: 1, day: 1 });

  it('accepts "02:30 午後" when within Japanese 12h constraints', () => {
    // minTime: 12:00 PM (noon), maxTime: 05:00 PM
    const result = validateNonEmptyValue(
      JA_PM_VALUE,
      FMT_12H,
      'ja',
      '12:00 午後',
      '05:00 午後'
    );
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.isInputInvalid).toBe(false);
  });

  it('rejects "02:30 午後" when below minTime "03:00 午後" in Japanese locale', () => {
    const result = validateNonEmptyValue(
      JA_PM_VALUE,
      FMT_12H,
      'ja',
      '03:00 午後',
      '06:00 午後'
    );
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.isInputInvalid).toBe(true);
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.invalidReason).toBe('customError');
  });

  it('rejects "02:30 午後" when above maxTime "02:00 午後" in Japanese locale', () => {
    const result = validateNonEmptyValue(
      JA_PM_VALUE,
      FMT_12H,
      'ja',
      '12:00 午後',
      '02:00 午後'
    );
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.isInputInvalid).toBe(true);
    // eslint-disable-next-line no-restricted-syntax
    expect(result!.invalidReason).toBe('customError');
  });

  it('parses Japanese minTime constraint correctly via getTimePickerConstraintBounds', () => {
    const { min } = getTimePickerConstraintBounds(
      '09:00 午前',
      undefined,
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(min).not.toBeNull();
    // eslint-disable-next-line no-restricted-syntax
    expect(min!.hour).toBe(9);
    // eslint-disable-next-line no-restricted-syntax
    expect(min!.minute).toBe(0);
  });

  it('parses Japanese maxTime constraint correctly via getTimePickerConstraintBounds', () => {
    const { max } = getTimePickerConstraintBounds(
      undefined,
      '05:30 午後',
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(max).not.toBeNull();
    // eslint-disable-next-line no-restricted-syntax
    expect(max!.hour).toBe(17);
    // eslint-disable-next-line no-restricted-syntax
    expect(max!.minute).toBe(30);
  });

  it('min constraint < max constraint for Japanese PM bounds', () => {
    const { min, max } = getTimePickerConstraintBounds(
      '12:00 午後',
      '05:00 午後',
      FMT_12H,
      baseDay,
      'ja'
    );
    expect(min).not.toBeNull();
    expect(max).not.toBeNull();
    // eslint-disable-next-line no-restricted-syntax
    expect(min! < max!).toBe(true);
  });

  it('midnight (12:00 午前) constraint parses to hour 0 in Japanese locale', () => {
    const { min } = getTimePickerConstraintBounds(
      '12:00 午前',
      undefined,
      FMT_12H,
      baseDay,
      'ja'
    );
    // eslint-disable-next-line no-restricted-syntax
    expect(min!.hour).toBe(0);
  });

  it('noon (12:00 午後) constraint parses to hour 12 in Japanese locale', () => {
    const { min } = getTimePickerConstraintBounds(
      '12:00 午後',
      undefined,
      FMT_12H,
      baseDay,
      'ja'
    );
    // eslint-disable-next-line no-restricted-syntax
    expect(min!.hour).toBe(12);
  });
});
