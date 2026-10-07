/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';
import {
  CalendarRow,
  MONTHS_IN_YEAR,
  calendarRowsFor,
  dayOfMonth,
  isDayWithinRange,
  isMonthWithinRange,
  isYearWithinRange,
  monthNameOf,
  monthsOfYear,
  weekdayColumnOf,
  weekdayNamesFrom,
  weekStartFrom,
} from '../calendar.util';

/** Luxon month ordinals, for readability in the expectations below. */
const JUNE = 6;
const JULY = 7;
const AUGUST = 8;
const SEPTEMBER = 9;

const monthOf = (year: number, ordinal: number) =>
  monthsOfYear(year)[ordinal - 1];

describe('monthsOfYear', () => {
  it('returns the twelve months of the year in order', () => {
    const months = monthsOfYear(2026);

    expect(months).toHaveLength(MONTHS_IN_YEAR);
    expect(months.map((month) => month.month)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });

  it('carries the year on every month', () => {
    monthsOfYear(2026).forEach((month) => {
      expect(month.year).toBe(2026);
    });
  });

  it('returns the first of each month, in the system zone', () => {
    const july = monthOf(2026, JULY);

    expect(july.toISODate()).toBe('2026-07-01');
    expect(july.zone.type).toBe('system');
  });
});

describe('monthNameOf', () => {
  it('localises the month name', () => {
    const july = monthOf(2026, JULY);

    expect(monthNameOf(july, 'en')).toBe('July');
    expect(monthNameOf(july, 'de')).toBe('Juli');
  });

  it('names every month distinctly', () => {
    const names = monthsOfYear(2026).map((month) => monthNameOf(month, 'en'));

    expect(new Set(names).size).toBe(MONTHS_IN_YEAR);
    expect(names[0]).toBe('January');
    expect(names[MONTHS_IN_YEAR - 1]).toBe('December');
  });
});

describe('dayOfMonth', () => {
  it('lands on the requested day', () => {
    expect(dayOfMonth(monthOf(2026, JULY), 5).toISODate()).toBe('2026-07-05');
  });

  it('matches the calendar day of a locally parsed date', () => {
    const parsed = DateTime.fromFormat('2026/07/05', 'yyyy/LL/dd');

    expect(dayOfMonth(monthOf(2026, JULY), 5).hasSame(parsed, 'day')).toBe(
      true
    );
  });

  it('reaches the last day of a leap February', () => {
    expect(dayOfMonth(monthOf(2024, 2), 29).toISODate()).toBe('2024-02-29');
  });
});

describe('month arithmetic via Luxon', () => {
  it('wraps forwards across the year boundary', () => {
    const next = monthOf(2026, 12).plus({ months: 1 });

    expect(next.year).toBe(2027);
    expect(next.month).toBe(1);
  });

  it('wraps backwards across the year boundary', () => {
    const previous = monthOf(2026, 1).minus({ months: 1 });

    expect(previous.year).toBe(2025);
    expect(previous.month).toBe(12);
  });

  it('reports the days in a month, accounting for leap years', () => {
    expect(monthOf(2024, 2).daysInMonth).toBe(29);
    expect(monthOf(2026, 2).daysInMonth).toBe(28);
    expect(monthOf(2026, JULY).daysInMonth).toBe(31);
  });
});

describe('isMonthWithinRange', () => {
  describe('range inside a single month (5-15 July 2026)', () => {
    const min = DateTime.local(2026, 7, 5);
    const max = DateTime.local(2026, 7, 15);

    it('includes July', () => {
      expect(isMonthWithinRange(monthOf(2026, JULY), min, max)).toBe(true);
    });

    it('excludes every other month of the same year', () => {
      monthsOfYear(2026)
        .filter((month) => month.month !== JULY)
        .forEach((month) => {
          expect(isMonthWithinRange(month, min, max)).toBe(false);
        });
    });

    it('excludes August, which sits directly after the range', () => {
      expect(isMonthWithinRange(monthOf(2026, AUGUST), min, max)).toBe(false);
    });
  });

  describe('range spanning two months (5 July - 15 August 2026)', () => {
    const min = DateTime.local(2026, 7, 5);
    const max = DateTime.local(2026, 8, 15);

    it('includes both months the range touches', () => {
      expect(isMonthWithinRange(monthOf(2026, JULY), min, max)).toBe(true);
      expect(isMonthWithinRange(monthOf(2026, AUGUST), min, max)).toBe(true);
    });

    it('excludes the months either side of the range', () => {
      expect(isMonthWithinRange(monthOf(2026, JUNE), min, max)).toBe(false);
      expect(isMonthWithinRange(monthOf(2026, SEPTEMBER), min, max)).toBe(
        false
      );
    });
  });

  describe('years outside the range', () => {
    const min = DateTime.local(2026, 7, 5);
    const max = DateTime.local(2026, 7, 15);

    it('excludes all months of an earlier year', () => {
      monthsOfYear(2025).forEach((month) => {
        expect(isMonthWithinRange(month, min, max)).toBe(false);
      });
    });

    it('excludes all months of a later year', () => {
      monthsOfYear(2027).forEach((month) => {
        expect(isMonthWithinRange(month, min, max)).toBe(false);
      });
    });
  });

  describe('the boundary month itself', () => {
    it('includes the month the minimum falls in', () => {
      const min = DateTime.local(2024, 10, 10);

      expect(isMonthWithinRange(monthOf(2024, 10), min, undefined)).toBe(true);
      expect(isMonthWithinRange(monthOf(2024, 9), min, undefined)).toBe(false);
    });

    it('excludes the month directly after the maximum', () => {
      const max = DateTime.local(2024, 10, 10);

      expect(isMonthWithinRange(monthOf(2024, 10), undefined, max)).toBe(true);
      expect(isMonthWithinRange(monthOf(2024, 11), undefined, max)).toBe(false);
    });
  });

  describe('open-ended ranges', () => {
    it('treats an absent minimum as unbounded', () => {
      const max = DateTime.local(2026, 7, 15);

      expect(isMonthWithinRange(monthOf(1999, 1), undefined, max)).toBe(true);
      expect(isMonthWithinRange(monthOf(2026, AUGUST), undefined, max)).toBe(
        false
      );
    });

    it('treats an absent maximum as unbounded', () => {
      const min = DateTime.local(2026, 7, 5);

      expect(isMonthWithinRange(monthOf(2099, 12), min, undefined)).toBe(true);
      expect(isMonthWithinRange(monthOf(2026, JUNE), min, undefined)).toBe(
        false
      );
    });

    it('treats both absent as unbounded', () => {
      monthsOfYear(2026).forEach((month) => {
        expect(isMonthWithinRange(month)).toBe(true);
      });
    });
  });
});

describe('isYearWithinRange', () => {
  const min = DateTime.local(2026, 7, 5);
  const max = DateTime.local(2028, 7, 15);

  it('includes the boundary years and everything between', () => {
    expect(isYearWithinRange(2026, min, max)).toBe(true);
    expect(isYearWithinRange(2027, min, max)).toBe(true);
    expect(isYearWithinRange(2028, min, max)).toBe(true);
  });

  it('excludes years outside the bounds', () => {
    expect(isYearWithinRange(2025, min, max)).toBe(false);
    expect(isYearWithinRange(2029, min, max)).toBe(false);
  });

  it('treats absent bounds as unbounded', () => {
    expect(isYearWithinRange(1900)).toBe(true);
  });
});

describe('isDayWithinRange', () => {
  const min = DateTime.local(2026, 7, 5);
  const max = DateTime.local(2026, 7, 15);

  it('includes both bounds', () => {
    expect(isDayWithinRange(DateTime.local(2026, 7, 5), min, max)).toBe(true);
    expect(isDayWithinRange(DateTime.local(2026, 7, 15), min, max)).toBe(true);
  });

  it('ignores the time of day', () => {
    expect(
      isDayWithinRange(DateTime.local(2026, 7, 15, 23, 59), min, max)
    ).toBe(true);
  });

  it('excludes days either side of the range', () => {
    expect(isDayWithinRange(DateTime.local(2026, 7, 4), min, max)).toBe(false);
    expect(isDayWithinRange(DateTime.local(2026, 7, 16), min, max)).toBe(false);
  });
});

describe('weekStartFrom', () => {
  it('passes every in-range index through unchanged', () => {
    for (let index = 0; index < 7; index++) {
      expect(weekStartFrom(index)).toBe(index);
    }
  });

  it('wraps an index past the end of the week', () => {
    expect(weekStartFrom(7)).toBe(0);
    expect(weekStartFrom(8)).toBe(1);
  });

  it('wraps a negative index', () => {
    expect(weekStartFrom(-1)).toBe(6);
    expect(weekStartFrom(-7)).toBe(0);
  });

  it('floors a fractional index rather than indexing between days', () => {
    expect(weekStartFrom(2.7)).toBe(2);
  });

  it('falls back to Monday for a non-finite index', () => {
    expect(weekStartFrom(NaN)).toBe(0);
    expect(weekStartFrom(Infinity)).toBe(0);
  });

  it('never yields an index that misses the weekday array', () => {
    [-10, -1, 0, 3, 6, 7, 99, NaN].forEach((value) => {
      expect(weekdayNamesFrom(weekStartFrom(value), 'en')).not.toContain(
        undefined
      );
    });
  });
});

describe('weekdayNamesFrom', () => {
  it('starts on Monday for index 0', () => {
    const names = weekdayNamesFrom(weekStartFrom(0), 'en');

    expect(names).toHaveLength(7);
    expect(names[0]).toBe('Monday');
    expect(names[6]).toBe('Sunday');
  });

  it('starts on Sunday for index 6', () => {
    const names = weekdayNamesFrom(weekStartFrom(6), 'en');

    expect(names[0]).toBe('Sunday');
    expect(names[1]).toBe('Monday');
    expect(names[6]).toBe('Saturday');
  });

  it('localises the names without reordering them', () => {
    expect(weekdayNamesFrom(weekStartFrom(0), 'de')[0]).toBe('Montag');
    expect(weekdayNamesFrom(weekStartFrom(6), 'de')[0]).toBe('Sonntag');
  });

  it('returns all seven days exactly once for every week start', () => {
    const mondayFirst = weekdayNamesFrom(weekStartFrom(0), 'en');

    for (let weekStart = 0; weekStart < 7; weekStart++) {
      expect(
        [...weekdayNamesFrom(weekStartFrom(weekStart), 'en')].sort()
      ).toEqual([...mondayFirst].sort());
    }
  });
});

describe('weekdayColumnOf', () => {
  // 2026-08-31 is a Monday, so this covers Monday through Sunday in order.
  const week = Array.from({ length: 7 }, (_, i) =>
    DateTime.local(2026, 8, 31).plus({ days: i })
  );

  it('is identity for a Monday-first grid', () => {
    week.forEach((date, index) => {
      expect(weekdayColumnOf(date, weekStartFrom(0))).toBe(index);
    });
  });

  it('defaults to a Monday-first grid', () => {
    expect(weekdayColumnOf(week[0])).toBe(0);
  });

  it('shifts every column for a Sunday-first grid', () => {
    // weekStart 6 = Sunday, so Sunday lands in column 0 and Monday in column 1.
    expect(weekdayColumnOf(week[6], weekStartFrom(6))).toBe(0);
    week.slice(0, 6).forEach((date, index) => {
      expect(weekdayColumnOf(date, weekStartFrom(6))).toBe(index + 1);
    });
  });

  it('returns a valid column for every weekday and every week start', () => {
    for (let weekStart = 0; weekStart < 7; weekStart++) {
      const columns = week.map((date) =>
        weekdayColumnOf(date, weekStartFrom(weekStart))
      );

      expect([...columns].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    }
  });

  it('handles Sunday, whose Luxon weekday is 7', () => {
    const sunday = week[6];

    expect(sunday.weekday).toBe(7);
    expect(weekdayColumnOf(sunday, weekStartFrom(0))).toBe(6);
  });

  it('agrees with the column the header names imply', () => {
    for (let weekStart = 0; weekStart < 7; weekStart++) {
      const headers = weekdayNamesFrom(weekStartFrom(weekStart), 'en');

      week.forEach((date) => {
        const column = weekdayColumnOf(date, weekStartFrom(weekStart));

        expect(headers[column]).toBe(date.setLocale('en').toFormat('cccc'));
      });
    }
  });
});

describe('calendarRowsFor', () => {
  const rowsOf = (year: number, ordinal: number, weekStart = 0) =>
    calendarRowsFor(monthOf(year, ordinal), weekStartFrom(weekStart));

  const daysOf = (rows: CalendarRow[]) =>
    rows.flatMap((row) => row.dayNumbers).filter((day) => day !== undefined);

  it('gives every row seven cells, whatever the week start', () => {
    for (let weekStart = 0; weekStart < 7; weekStart++) {
      for (let ordinal = 1; ordinal <= MONTHS_IN_YEAR; ordinal++) {
        rowsOf(2026, ordinal, weekStart).forEach((row) => {
          expect(row.dayNumbers).toHaveLength(7);
        });
      }
    }
  });

  it('lists every day of the month exactly once, in order', () => {
    const rows = rowsOf(2026, JULY);

    expect(daysOf(rows)).toEqual(
      Array.from({ length: 31 }, (_, index) => index + 1)
    );
  });

  it('pads only at the two ends', () => {
    const cells = rowsOf(2026, JULY).flatMap((row) => row.dayNumbers);
    const first = cells.findIndex((day) => day !== undefined);
    const last = cells.length - 1 - [...cells].reverse().findIndex((d) => d);

    expect(cells.slice(first, last + 1).every((day) => day)).toBe(true);
  });

  it('puts the first of the month in the column its weekday implies', () => {
    for (let weekStart = 0; weekStart < 7; weekStart++) {
      const monthStart = monthOf(2026, JULY);
      const column = rowsOf(2026, JULY, weekStart)[0].dayNumbers.indexOf(1);

      expect(column).toBe(
        weekdayColumnOf(monthStart, weekStartFrom(weekStart))
      );
    }
  });

  it('shifts the grid when the week starts on Sunday', () => {
    // 1 July 2026 is a Wednesday: column 2 Monday-first, column 3 Sunday-first.
    expect(rowsOf(2026, JULY, 0)[0].dayNumbers.indexOf(1)).toBe(2);
    expect(rowsOf(2026, JULY, 6)[0].dayNumbers.indexOf(1)).toBe(3);
  });

  it('covers a leap February with no spare row', () => {
    const rows = rowsOf(2024, 2);

    expect(daysOf(rows)).toHaveLength(29);
    expect(rows.at(-1)?.dayNumbers.some((day) => day)).toBe(true);
  });

  it('fits a February that starts on the first column exactly', () => {
    // February 2021 starts on a Monday and has 28 days: four full rows.
    const rows = rowsOf(2021, 2);

    expect(rows).toHaveLength(4);
    expect(rows[0].dayNumbers[0]).toBe(1);
    expect(rows.at(-1)?.dayNumbers.at(-1)).toBe(28);
  });

  describe('week numbers', () => {
    it('numbers the rows of a mid-year month consecutively', () => {
      const rows = rowsOf(2026, JULY);

      expect(rows.map((row) => row.weekNumber)).toEqual([27, 28, 29, 30, 31]);
    });

    it('carries the old year into a January that opens mid-week', () => {
      // 1 January 2026 is a Thursday, so its row is still ISO week 1 of 2026,
      // but January 2021 opens on a Friday inside ISO week 53 of 2020.
      expect(rowsOf(2021, 1)[0].weekNumber).toBe(53);
      expect(rowsOf(2026, 1)[0].weekNumber).toBe(1);
    });

    it('wraps to week 1 in a December that runs into the new year', () => {
      const rows = rowsOf(2025, 12);

      expect(rows.at(-1)?.weekNumber).toBe(1);
      expect(rows.at(-2)?.weekNumber).toBe(52);
    });

    it('never repeats a week number within a month', () => {
      for (let year = 2019; year <= 2030; year++) {
        for (let ordinal = 1; ordinal <= MONTHS_IN_YEAR; ordinal++) {
          const numbers = rowsOf(year, ordinal).map((row) => row.weekNumber);

          expect(new Set(numbers).size).toBe(numbers.length);
        }
      }
    });

    it('labels a Sunday-first row with the week covering most of it', () => {
      // The Sunday-first row opening 28 June 2026 runs Mon 29 June onwards,
      // so it is week 27, not the week 26 its lone Sunday belongs to.
      const sundayFirst = rowsOf(2026, JULY, 6);

      expect(sundayFirst[0].weekNumber).toBe(27);
    });
  });
});
