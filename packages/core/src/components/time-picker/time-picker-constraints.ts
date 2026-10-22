/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DateTime } from 'luxon';

/**
 * Parses a time-of-day string in `format` and applies it to `baseDay` (date part only).
 */
export function parseTimeOnDay(
  value: string | undefined,
  format: string,
  baseDay: DateTime,
  locale?: string
): DateTime | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }
  const parsed = DateTime.fromFormat(trimmed, format, { locale });
  if (!parsed.isValid) {
    return null;
  }
  return baseDay.set({
    hour: parsed.hour,
    minute: parsed.minute,
    second: parsed.second,
    millisecond: parsed.millisecond,
  });
}

export function getTimePickerConstraintBounds(
  minTime: string | undefined,
  maxTime: string | undefined,
  format: string,
  baseDay: DateTime,
  locale?: string
): { min: DateTime | null; max: DateTime | null } {
  let min = parseTimeOnDay(minTime, format, baseDay, locale);
  let max = parseTimeOnDay(maxTime, format, baseDay, locale);
  if (min && max && min > max) {
    min = null;
    max = null;
  }
  return { min, max };
}

export function isWithinTimePickerConstraints(
  candidate: DateTime,
  min: DateTime | null,
  max: DateTime | null
): boolean {
  if (!candidate.isValid) {
    return false;
  }
  if (min && candidate < min) {
    return false;
  }
  if (max && candidate > max) {
    return false;
  }
  return true;
}

/**
 * Whether `time` is within `minTime`/`maxTime` (in `format`) on its own day.
 * Missing or unparsable constraints do not restrict the time.
 */
export function isTimeWithinConstraints(
  time: DateTime,
  minTime: string | undefined,
  maxTime: string | undefined,
  format: string,
  locale?: string
): boolean {
  const { min, max } = getTimePickerConstraintBounds(
    minTime,
    maxTime,
    format,
    time.startOf('day'),
    locale
  );
  return isWithinTimePickerConstraints(time, min, max);
}

/**
 * The time constraints that apply on `day`. Without valid date bounds,
 * `minTime` and `maxTime` apply on every day. With date bounds, `minTime`
 * applies only on the day of `minDate` and `maxTime` only on the day of
 * `maxDate`, and none apply without a valid `day`.
 */
export function getTimeConstraintsOnDay(
  constraints: { minTime?: string; maxTime?: string },
  day: DateTime | null,
  minDate: DateTime | null,
  maxDate: DateTime | null
): { minTime?: string; maxTime?: string } {
  if (!minDate?.isValid && !maxDate?.isValid) {
    return constraints;
  }

  if (!day?.isValid) {
    return {};
  }

  return {
    minTime:
      minDate?.isValid && day.hasSame(minDate, 'day')
        ? constraints.minTime
        : undefined,
    maxTime:
      maxDate?.isValid && day.hasSame(maxDate, 'day')
        ? constraints.maxTime
        : undefined,
  };
}

export function hasActiveTimePickerConstraints(
  min: DateTime | null,
  max: DateTime | null
): boolean {
  return !!(min || max);
}

/**
 * Whether the inclusive wall-clock range `[rangeStart, rangeEnd]` can intersect
 * inclusive constraint bounds `[min, max]` (either bound may be null = unbounded).
 */
export function timeOfDayRangeIntersectsInclusiveBounds(
  rangeStart: DateTime,
  rangeEnd: DateTime,
  min: DateTime | null,
  max: DateTime | null
): boolean {
  if (!rangeStart.isValid || !rangeEnd.isValid) {
    return false;
  }
  if (!min && !max) {
    return true;
  }
  if (min && rangeEnd < min) {
    return false;
  }
  if (max && rangeStart > max) {
    return false;
  }
  return true;
}
