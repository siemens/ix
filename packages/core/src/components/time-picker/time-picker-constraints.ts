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
  baseDay: DateTime
): DateTime | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }
  const parsed = DateTime.fromFormat(trimmed, format);
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
  baseDay: DateTime
): { min: DateTime | null; max: DateTime | null } {
  let min = parseTimeOnDay(minTime, format, baseDay);
  let max = parseTimeOnDay(maxTime, format, baseDay);
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
