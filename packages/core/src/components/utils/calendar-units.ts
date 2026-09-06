/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime } from 'luxon';

/**
 * Luxon and the UI disagree about where calendar units start counting:
 *
 * | Unit    | Luxon                     | `Info.months()` / `Info.weekdays()` |
 * | ------- | ------------------------- | ----------------------------------- |
 * | Month   | `.month` is 1-12          | index 0-11, 0 = January             |
 * | Weekday | `.weekday` is 1-7, Mon=1  | index 0-6, 0 = Monday               |
 *
 * Mixing the two silently produces off-by-one bugs, so this module is the only
 * place allowed to convert between them. Everything crossing its boundary is
 * either a `DateTime` or a 0-based index, never a raw Luxon unit number.
 */

/** 0-based month index, 0 = January. Matches `Info.months()` ordering. */
export type MonthIndex = number;

/** 0-based weekday index, 0 = Monday. Matches `Info.weekdays()` ordering. */
export type WeekdayIndex = number;

export const MONTHS_IN_YEAR = 12;
export const DAYS_IN_WEEK = 7;

/** The 0-based month index of `date`, e.g. `2026-07-05` -> `6`. */
export function monthIndexOf(date: DateTime): MonthIndex {
  return date.month - 1;
}

/** The 0-based weekday index of `date`, e.g. a Monday -> `0`, a Sunday -> `6`. */
export function weekdayIndexOf(date: DateTime): WeekdayIndex {
  return date.weekday - 1;
}

/**
 * Build a UTC `DateTime` from a 0-based `month` index.
 *
 * Use instead of `new Date(year, month, day)`, which is 0-based *and* resolves
 * in local time — mixing it with the UTC dates used elsewhere shifts days
 * across the midnight boundary for non-UTC offsets.
 */
export function fromMonthIndex(
  year: number,
  month: MonthIndex,
  day = 1
): DateTime {
  return DateTime.utc(year, month + 1, day);
}

/**
 * Build a system-zone `DateTime` from a 0-based `month` index.
 *
 * Use for days that are compared against dates parsed with
 * `DateTime.fromFormat` / `DateTime.fromISO`, which are zone-local: `hasSame`
 * and the ordering operators resolve the other operand into the receiver's
 * zone, so a UTC midnight lands on the previous day for any negative offset.
 * Prefer {@link fromMonthIndex} for pure calendar arithmetic.
 */
export function localFromMonthIndex(
  year: number,
  month: MonthIndex,
  day = 1
): DateTime {
  return DateTime.local(year, month + 1, day);
}

/**
 * Move `delta` months from `year`/`month`, wrapping the year as needed.
 * `month` is 0-based in and out.
 */
export function addMonths(
  year: number,
  month: MonthIndex,
  delta: number
): { year: number; month: MonthIndex } {
  const target = fromMonthIndex(year, month).plus({ months: delta });

  return { year: target.year, month: monthIndexOf(target) };
}

/**
 * Number of days in the given 0-based `month`, accounting for leap years.
 */
export function daysInMonth(year: number, month: MonthIndex): number {
  return fromMonthIndex(year, month).daysInMonth ?? 0;
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
 * Whether the given 0-based `month` in `year` contains any day within
 * `[min, max]`. Bounds are inclusive and each is optional.
 *
 * The comparison runs on real `DateTime`s rather than bare month numbers, so
 * the year is always part of it — a month in a year outside the range is
 * correctly excluded even when its month number sits between the bounds.
 */
export function isMonthWithinRange(
  year: number,
  month: MonthIndex,
  min?: DateTime,
  max?: DateTime
): boolean {
  const monthStart = fromMonthIndex(year, month);
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

/**
 * The column `date` occupies in a calendar grid whose first column is
 * `weekStart` (a 0-based weekday index, 0 = Monday).
 *
 * Pure arithmetic on indices — no weekday-name lookup — so it cannot be thrown
 * off by the locale used to render the column headers.
 */
export function weekdayColumnOf(
  date: DateTime,
  weekStart: WeekdayIndex = 0
): number {
  return (
    (((weekdayIndexOf(date) - weekStart) % DAYS_IN_WEEK) + DAYS_IN_WEEK) %
    DAYS_IN_WEEK
  );
}
