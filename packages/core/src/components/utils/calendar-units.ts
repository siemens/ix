/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime, Info } from 'luxon';

/**
 * Calendar vocabulary for the date components.
 *
 * Luxon's `DateTime` fields are 1-based ISO ordinals (`.month` 1-12,
 * `.weekday` 1-7 with Monday = 1) while `Info.months()` / `Info.weekdays()`
 * return plain arrays, which are 0-based. Mixing the two silently produces
 * off-by-one bugs, so the rule here is that a calendar position is carried as
 * a `DateTime` and never as a bare unit number: pass the month itself, not its
 * number. Neither base then appears outside this module.
 *
 * The one index that survives is `weekStartIndex`, which is public API and so
 * cannot change. It is consumed only by {@link weekdayNamesFrom} and
 * {@link weekdayColumnOf}, both below.
 *
 * Everything is built in the system zone so it compares cleanly against dates
 * parsed by `DateTime.fromFormat` / `DateTime.fromISO`, which are zone-local
 * too: `hasSame` and the ordering operators resolve the other operand into the
 * receiver's zone, so a UTC midnight would land on the previous day for any
 * negative offset.
 */

/** 0-based weekday index, 0 = Monday. Matches `Info.weekdays()` ordering. */
export type WeekdayIndex = number;

export const MONTHS_IN_YEAR = 12;
export const DAYS_IN_WEEK = 7;

/**
 * The twelve months of `year`, January first, each as the first of the month.
 *
 * Built by iterating rather than by indexing `Info.months()`, so the result
 * carries the year with it and nothing downstream has to know which base the
 * month came from.
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
 * `day` is a calendar day number and so is genuinely 1-based; it is the number
 * rendered in the grid, not an index into anything.
 */
export function dayOfMonth(month: DateTime, day: number): DateTime {
  return month.set({ day });
}

/**
 * The weekday names for a grid whose first column is `weekStart`, localised.
 *
 * `Info.weekdays()` is always Monday-first regardless of locale — only the
 * names localise — so the rotation is applied here rather than inferred.
 */
export function weekdayNamesFrom(
  weekStart: WeekdayIndex,
  locale?: string
): string[] {
  const names = Info.weekdays('long', { locale });
  const offset = normaliseColumn(weekStart);

  return Array.from(
    { length: DAYS_IN_WEEK },
    (_, column) => names[(column + offset) % DAYS_IN_WEEK]
  );
}

/**
 * The column `date` occupies in a calendar grid whose first column is
 * `weekStart`.
 *
 * Pure arithmetic on positions — no weekday-name lookup — so it cannot be
 * thrown off by the locale used to render the column headers.
 */
export function weekdayColumnOf(
  date: DateTime,
  weekStart: WeekdayIndex = 0
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
 * and each is optional.
 *
 * Because `month` is a `DateTime`, the year is always part of the comparison:
 * a month in a year outside the range is correctly excluded even when its
 * month number sits between the bounds.
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
