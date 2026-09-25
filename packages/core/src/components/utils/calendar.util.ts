/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime, Info } from 'luxon';

/**
 * Shared date-time and calendar logic for the date components.
 *
 * All date-time related logic should be in this file. This ensures consistency and
 * protects against bugs such as misaligned date indexes and incorrect week calculations.
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

/** One row of a calendar grid: its week number and its seven day cells. */
export interface CalendarRow {
  /** The ISO week number shown in the row header. */
  weekNumber: number;
  /**
   * Seven cells, one per column. A cell is the 1-based day of the month, or
   * `undefined` where the row runs outside the month.
   */
  dayNumbers: (number | undefined)[];
}

/** Thursday, the day ISO 8601 uses to decide which week a row belongs to. */
const ISO_WEEK_ANCHOR = 4;

/**
 * The ISO week number of the row starting at `rowStart`.
 *
 * A row is seven consecutive days, so it always contains exactly one Thursday,
 * and ISO 8601 assigns a week its number by the year its Thursday falls in.
 * Anchoring on that Thursday gets the year boundary right without any
 * corrections, and keeps the label meaningful when the row does not line up
 * with an ISO week — a Sunday-first row is labelled with the Monday-to-Sunday
 * week that covers six of its seven days, not the one holding only its Sunday.
 */
function weekNumberOfRow(rowStart: DateTime): number {
  const daysToThursday = normaliseColumn(ISO_WEEK_ANCHOR - rowStart.weekday);

  return rowStart.plus({ days: daysToThursday }).weekNumber;
}

/**
 * The calendar grid for the month containing `month`, as whole rows of seven.
 *
 * `month` may be any day of the target month.
 */
export function calendarRowsFor(
  month: DateTime,
  weekStart: WeekdayIndex = MONDAY
): CalendarRow[] {
  const monthStart = month.startOf('month');
  const daysInMonth = monthStart.daysInMonth ?? 0;
  /* Cells before the 1st, so the 1st lands in its column. */
  const leadingBlanks = weekdayColumnOf(monthStart, weekStart);
  const rows: CalendarRow[] = [];

  /* `offset` is the day the row opens on, counted from the 1st and negative
   * while the row reaches back into the previous month. */
  for (
    let offset = -leadingBlanks;
    offset < daysInMonth;
    offset += DAYS_IN_WEEK
  ) {
    const dayNumbers = Array.from({ length: DAYS_IN_WEEK }, (_, column) => {
      const day = offset + column + 1;

      return day >= 1 && day <= daysInMonth ? day : undefined;
    });

    rows.push({
      weekNumber: weekNumberOfRow(monthStart.plus({ days: offset })),
      dayNumbers,
    });
  }

  return rows;
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
