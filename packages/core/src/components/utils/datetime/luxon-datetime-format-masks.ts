/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

/** Used when a format string has time tokens but no date prefix (e.g. time-only mask). */
export const LUXON_DEFAULT_DATE_ONLY_FORMAT = 'yyyy/LL/dd';

/** Used when a format string has no time tokens. */
export const LUXON_DEFAULT_TIME_ONLY_FORMAT = 'HH:mm:ss';

function firstLuxonTimeTokenIndex(format: string): number {
  return format.search(/[HhmsaSZ]/);
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
  while (end > 0 && " \t'T".includes(format[end - 1])) {
    end--;
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
