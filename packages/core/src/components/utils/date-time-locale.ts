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

export function toISODate(dt: DateTime | undefined): string | undefined {
  return dt?.isValid ? (dt.toISODate() ?? undefined) : undefined;
}

export function toISOTime(dt: DateTime | undefined): string | undefined {
  return dt?.isValid ? (dt.toISOTime() ?? undefined) : undefined;
}
