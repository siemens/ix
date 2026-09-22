/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime, Info } from 'luxon';

/**
 * Calendar vocabulary for the date components.
 *
 * A calendar position is carried as a `DateTime`, never as a bare unit number,
 * so neither Luxon's 1-based ordinals nor the 0-based `Info` arrays appear
 * outside this module. The exception is `weekStartIndex`, a plain `number` on
 * the public prop, branded on the way in by {@link weekStartFrom}.
 *
 * Everything is built in the system zone, matching dates parsed by
 * `DateTime.fromFormat` / `DateTime.fromISO`.
 */

declare const weekdayIndexBrand: unique symbol;

/**
 * 0-based weekday index, 0 = Monday. Matches `Info.weekdays()` ordering.
 *
 * Branded; {@link weekStartFrom} is the only way to make one.
 */
export type WeekdayIndex = number & { readonly [weekdayIndexBrand]: true };

export const MONTHS_IN_YEAR = 12;
export const DAYS_IN_WEEK = 7;

/** Monday, the default first column. */
const MONDAY = 0 as WeekdayIndex;

/**
 * Narrow the public `weekStartIndex` prop into a {@link WeekdayIndex}.
 *
 * The value is floored and wrapped into `[0, DAYS_IN_WEEK)`; anything
 * non-finite falls back to Monday.
 */
export function weekStartFrom(value: number): WeekdayIndex {
  if (!Number.isFinite(value)) {
    return MONDAY;
  }

  return normaliseColumn(Math.floor(value)) as WeekdayIndex;
}

/**
 * The twelve months of `year`, January first, each as the first of the month.
 */
export function monthsOfYear(year: number): DateTime[] {
  return Array.from({ length: MONTHS_IN_YEAR }, (_, offset) =>
    DateTime.local(year, offset + 1)
  );
}

/** The localised full name of `month`, e.g. `'July'`. */
export function monthNameOf(month: DateTime, locale?: string): string {
  return month.setLocale(locale ?? month.locale ?? 'en').toFormat('LLLL');
}

/**
 * The `day`th day of `month`, e.g. day 5 of July 2026 -> `2026-07-05`.
 *
 * `day` is a 1-based calendar day number, as rendered in the grid.
 */
export function dayOfMonth(month: DateTime, day: number): DateTime {
  return month.set({ day });
}

/**
 * The weekday names for a grid whose first column is `weekStart`, localised.
 *
 * `Info.weekdays()` is always Monday-first regardless of locale — only the
 * names localise — so the rotation is applied here.
 */
export function weekdayNamesFrom(
  weekStart: WeekdayIndex,
  locale?: string
): string[] {
  const names = Info.weekdays('long', { locale });

  return Array.from(
    { length: DAYS_IN_WEEK },
    (_, column) => names[(column + weekStart) % DAYS_IN_WEEK]
  );
}

/**
 * The column `date` occupies in a calendar grid whose first column is
 * `weekStart`. Locale-independent.
 */
export function weekdayColumnOf(
  date: DateTime,
  weekStart: WeekdayIndex = MONDAY
): number {
  return normaliseColumn(date.weekday - 1 - weekStart);
}

/** Wrap any integer into `[0, DAYS_IN_WEEK)`, including negatives. */
function normaliseColumn(value: number): number {
  return ((value % DAYS_IN_WEEK) + DAYS_IN_WEEK) % DAYS_IN_WEEK;
}

/**
 * Whether `date`'s day falls within `[min, max]`. Bounds are inclusive and
 * each is optional; an absent bound is unbounded in that direction.
 */
export function isDayWithinRange(
  date: DateTime,
  min?: DateTime,
  max?: DateTime
): boolean {
  const day = date.startOf('day');
  const isBefore = min ? day < min.startOf('day') : false;
  const isAfter = max ? day > max.startOf('day') : false;

  return !isBefore && !isAfter;
}

/**
 * Whether `month` contains any day within `[min, max]`. Bounds are inclusive
 * and each is optional; the year is part of the comparison.
 */
export function isMonthWithinRange(
  month: DateTime,
  min?: DateTime,
  max?: DateTime
): boolean {
  const monthStart = month.startOf('month');
  const isBefore = min ? monthStart < min.startOf('month') : false;
  const isAfter = max ? monthStart > max.startOf('month') : false;

  return !isBefore && !isAfter;
}

/**
 * Whether `year` contains any day within `[min, max]`. Bounds are inclusive
 * and each is optional.
 */
export function isYearWithinRange(
  year: number,
  min?: DateTime,
  max?: DateTime
): boolean {
  const isBefore = min ? year < min.year : false;
  const isAfter = max ? year > max.year : false;

  return !isBefore && !isAfter;
}
