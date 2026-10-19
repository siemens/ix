/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

/** Used when a format string has time tokens but no date prefix (e.g. time-only mask). */
export const LUXON_DEFAULT_DATE_ONLY_FORMAT = 'yyyy/LL/dd';

/** Used when a format string has no time tokens. */
export const LUXON_DEFAULT_TIME_ONLY_FORMAT = 'HH:mm:ss';

/**
 * Index of the first time token in `format`, ignoring text inside single
 * quotes, which Luxon treats as literal (e.g. `'at'`, `'um'`).
 */
function firstLuxonTimeTokenIndex(format: string): number {
  let inQuote = false;

  for (let i = 0; i < format.length; i++) {
    const char = format[i];

    if (char === "'") {
      inQuote = !inQuote;
    } else if (!inQuote && /[HhmsaSZ]/.test(char)) {
      return i;
    }
  }

  return -1;
}

/**
 * Luxon date mask: substring of `format` before the first time token, trimmed.
 * Matches splitting used for `ix-datetime-input` / `ix-datetime-picker` embedded date column.
 */
export function getLuxonDateOnlyFormatMask(
  format: string,
  fallback: string = LUXON_DEFAULT_DATE_ONLY_FORMAT
): string {
  const timeTokenIndex = firstLuxonTimeTokenIndex(format);

  if (timeTokenIndex === -1) {
    return format;
  }

  let end = timeTokenIndex;
  while (end > 0) {
    const char = format[end - 1];

    if (char === "'") {
      // Drop the whole quoted literal that joins date and time, e.g. 'T' or 'at'
      const openingQuote = format.lastIndexOf("'", end - 2);
      end = openingQuote === -1 ? end - 1 : openingQuote;
    } else if (' \tT'.includes(char)) {
      end--;
    } else {
      break;
    }
  }

  const prefix = format.slice(0, end).trimEnd();

  return prefix === '' ? fallback : prefix;
}

/**
 * Luxon time mask: substring of `format` from the first time token through the end.
 */
export function getLuxonTimeFormatMask(
  format: string,
  fallback: string = LUXON_DEFAULT_TIME_ONLY_FORMAT
): string {
  const timeTokenIndex = firstLuxonTimeTokenIndex(format);

  if (timeTokenIndex === -1) {
    return fallback;
  }

  return format.slice(timeTokenIndex);
}
