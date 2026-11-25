/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime } from 'luxon';

export function formatWithLocale(
  dt: DateTime,
  format: string,
  locale?: string
): string {
  return locale ? dt.toFormat(format, { locale }) : dt.toFormat(format);
}

export function parseWithLocale(
  value: string,
  format: string,
  locale?: string
): DateTime {
  return DateTime.fromFormat(value, format, { locale });
}

/**
 * Parse a date string like {@link parseWithLocale}, but return `undefined`
 * instead of an invalid `DateTime` if the value does not match the format.
 *
 * @param outputError Log the reason to the console when the value cannot be parsed.
 */
export function tryParseWithLocale(
  value: string,
  format: string,
  locale?: string,
  outputError: boolean = true
): DateTime | undefined {
  const date = parseWithLocale(value, format, locale);

  if (!date.isValid) {
    if (outputError) {
      console.error(date.invalidExplanation);
    }

    return undefined;
  }

  return date;
}

/**
 * Convert a date string from one format to another, e.g. from a value format
 * to a display format. The value is returned unchanged if both formats are
 * identical or if it does not match `sourceFormat`.
 */
export function convertDateFormat(
  value: string,
  sourceFormat: string,
  targetFormat: string,
  locale?: string
): string {
  if (!value || sourceFormat === targetFormat) {
    return value;
  }

  const date = parseWithLocale(value, sourceFormat, locale);

  return date.isValid ? formatWithLocale(date, targetFormat, locale) : value;
}

export function toISODate(dt: DateTime | undefined): string | undefined {
  return dt?.isValid ? (dt.toISODate() ?? undefined) : undefined;
}

export function toISOTime(dt: DateTime | undefined): string | undefined {
  return dt?.isValid ? (dt.toISOTime() ?? undefined) : undefined;
}
