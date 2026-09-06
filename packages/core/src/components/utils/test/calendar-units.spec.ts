/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';
import {
  MONTHS_IN_YEAR,
  addMonths,
  daysInMonth,
  fromMonthIndex,
  isDayWithinRange,
  isMonthWithinRange,
  isYearWithinRange,
  localFromMonthIndex,
  monthIndexOf,
  weekdayColumnOf,
  weekdayIndexOf,
} from '../calendar-units';

const JANUARY = 0;
const JUNE = 5;
const JULY = 6;
const AUGUST = 7;
const SEPTEMBER = 8;
const DECEMBER = 11;

const allMonths = Array.from({ length: MONTHS_IN_YEAR }, (_, i) => i);

describe('monthIndexOf / fromMonthIndex', () => {
  it('round-trips every month', () => {
    allMonths.forEach((month) => {
      expect(monthIndexOf(fromMonthIndex(2026, month))).toBe(month);
    });
  });

  it('maps July to index 6', () => {
    expect(monthIndexOf(DateTime.utc(2026, 7, 5))).toBe(JULY);
  });

  it('builds a UTC date from a 0-based month', () => {
    const date = fromMonthIndex(2026, JULY, 5);

    expect(date.toISODate()).toBe('2026-07-05');
    expect(date.zoneName).toBe('UTC');
  });

  it('defaults to the first of the month', () => {
    expect(fromMonthIndex(2026, JULY).toISODate()).toBe('2026-07-01');
  });
});

describe('localFromMonthIndex', () => {
  it('builds a system-zone date from a 0-based month', () => {
    const date = localFromMonthIndex(2026, JULY, 5);

    expect(date.toISODate()).toBe('2026-07-05');
    expect(date.zone.type).toBe('system');
  });

  it('matches the calendar day of a locally parsed date', () => {
    const parsed = DateTime.fromFormat('2026/07/05', 'yyyy/LL/dd');

    expect(localFromMonthIndex(2026, JULY, 5).hasSame(parsed, 'day')).toBe(
      true
    );
  });

  it('defaults to the first of the month', () => {
    expect(localFromMonthIndex(2026, JULY).toISODate()).toBe('2026-07-01');
  });
});

describe('weekdayIndexOf', () => {
  it('maps Monday to 0 and Sunday to 6', () => {
    // 2026-08-31 is a Monday, 2026-09-06 is a Sunday.
    expect(weekdayIndexOf(DateTime.utc(2026, 8, 31))).toBe(0);
    expect(weekdayIndexOf(DateTime.utc(2026, 9, 6))).toBe(6);
  });
});

describe('addMonths', () => {
  it('wraps forwards across the year boundary', () => {
    expect(addMonths(2026, DECEMBER, 1)).toEqual({
      year: 2027,
      month: JANUARY,
    });
  });

  it('wraps backwards across the year boundary', () => {
    expect(addMonths(2026, JANUARY, -1)).toEqual({
      year: 2025,
      month: DECEMBER,
    });
  });

  it('handles deltas larger than a year', () => {
    expect(addMonths(2026, JULY, 14)).toEqual({ year: 2027, month: SEPTEMBER });
    expect(addMonths(2026, JULY, -14)).toEqual({ year: 2025, month: 4 });
  });

  it('is a no-op for a zero delta', () => {
    expect(addMonths(2026, JULY, 0)).toEqual({ year: 2026, month: JULY });
  });
});

describe('daysInMonth', () => {
  it('accounts for leap years', () => {
    expect(daysInMonth(2024, 1)).toBe(29);
    expect(daysInMonth(2026, 1)).toBe(28);
  });

  it('returns 31 for July', () => {
    expect(daysInMonth(2026, JULY)).toBe(31);
  });
});

describe('isMonthWithinRange', () => {
  describe('range inside a single month (5-15 July 2026)', () => {
    const min = DateTime.utc(2026, 7, 5);
    const max = DateTime.utc(2026, 7, 15);

    it('includes July', () => {
      expect(isMonthWithinRange(2026, JULY, min, max)).toBe(true);
    });

    it('excludes every other month of the same year', () => {
      allMonths
        .filter((month) => month !== JULY)
        .forEach((month) => {
          expect(isMonthWithinRange(2026, month, min, max)).toBe(false);
        });
    });

    it('excludes August, which sits directly after the range', () => {
      expect(isMonthWithinRange(2026, AUGUST, min, max)).toBe(false);
    });
  });

  describe('range spanning two months (5 July - 15 August 2026)', () => {
    const min = DateTime.utc(2026, 7, 5);
    const max = DateTime.utc(2026, 8, 15);

    it('includes both months the range touches', () => {
      expect(isMonthWithinRange(2026, JULY, min, max)).toBe(true);
      expect(isMonthWithinRange(2026, AUGUST, min, max)).toBe(true);
    });

    it('excludes the months either side of the range', () => {
      expect(isMonthWithinRange(2026, JUNE, min, max)).toBe(false);
      expect(isMonthWithinRange(2026, SEPTEMBER, min, max)).toBe(false);
    });
  });

  describe('years outside the range', () => {
    const min = DateTime.utc(2026, 7, 5);
    const max = DateTime.utc(2026, 7, 15);

    it('excludes all months of an earlier year', () => {
      allMonths.forEach((month) => {
        expect(isMonthWithinRange(2025, month, min, max)).toBe(false);
      });
    });

    it('excludes all months of a later year', () => {
      allMonths.forEach((month) => {
        expect(isMonthWithinRange(2027, month, min, max)).toBe(false);
      });
    });
  });

  describe('open-ended ranges', () => {
    it('treats an absent minimum as unbounded', () => {
      const max = DateTime.utc(2026, 7, 15);

      expect(isMonthWithinRange(1999, JANUARY, undefined, max)).toBe(true);
      expect(isMonthWithinRange(2026, AUGUST, undefined, max)).toBe(false);
    });

    it('treats an absent maximum as unbounded', () => {
      const min = DateTime.utc(2026, 7, 5);

      expect(isMonthWithinRange(2099, DECEMBER, min, undefined)).toBe(true);
      expect(isMonthWithinRange(2026, JUNE, min, undefined)).toBe(false);
    });

    it('treats both absent as unbounded', () => {
      allMonths.forEach((month) => {
        expect(isMonthWithinRange(2026, month)).toBe(true);
      });
    });
  });
});

describe('isYearWithinRange', () => {
  const min = DateTime.utc(2026, 7, 5);
  const max = DateTime.utc(2028, 7, 15);

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
  const min = DateTime.utc(2026, 7, 5);
  const max = DateTime.utc(2026, 7, 15);

  it('includes both bounds', () => {
    expect(isDayWithinRange(DateTime.utc(2026, 7, 5), min, max)).toBe(true);
    expect(isDayWithinRange(DateTime.utc(2026, 7, 15), min, max)).toBe(true);
  });

  it('ignores the time of day', () => {
    expect(isDayWithinRange(DateTime.utc(2026, 7, 15, 23, 59), min, max)).toBe(
      true
    );
  });

  it('excludes days either side of the range', () => {
    expect(isDayWithinRange(DateTime.utc(2026, 7, 4), min, max)).toBe(false);
    expect(isDayWithinRange(DateTime.utc(2026, 7, 16), min, max)).toBe(false);
  });
});

describe('weekdayColumnOf', () => {
  // 2026-08-31 is a Monday, so this covers Monday through Sunday in order.
  const week = Array.from({ length: 7 }, (_, i) =>
    DateTime.utc(2026, 8, 31).plus({ days: i })
  );

  it('is identity for a Monday-first grid', () => {
    week.forEach((date, index) => {
      expect(weekdayColumnOf(date, 0)).toBe(index);
    });
  });

  it('defaults to a Monday-first grid', () => {
    expect(weekdayColumnOf(week[0])).toBe(0);
  });

  it('shifts every column for a Sunday-first grid', () => {
    // weekStart 6 = Sunday, so Sunday lands in column 0 and Monday in column 1.
    expect(weekdayColumnOf(week[6], 6)).toBe(0);
    week.slice(0, 6).forEach((date, index) => {
      expect(weekdayColumnOf(date, 6)).toBe(index + 1);
    });
  });

  it('returns a valid column for every weekday and every week start', () => {
    for (let weekStart = 0; weekStart < 7; weekStart++) {
      const columns = week.map((date) => weekdayColumnOf(date, weekStart));

      expect([...columns].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    }
  });

  it('handles Sunday, whose Luxon weekday is 7', () => {
    const sunday = week[6];

    expect(sunday.weekday).toBe(7);
    expect(weekdayColumnOf(sunday, 0)).toBe(6);
  });
});
