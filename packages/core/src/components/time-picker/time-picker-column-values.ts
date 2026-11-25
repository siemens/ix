/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type TimePickerColumnIntervals = {
  hourInterval: number;
  minuteInterval: number;
  secondInterval: number;
  millisecondInterval: number;
};

export type TimePickerIntervalUnit =
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond';

/**
 * Upper bound of entries a single time-picker column may render.
 */
export const TIME_PICKER_MAX_COLUMN_ENTRIES = 1000;

/**
 * Checks whether an interval is usable for the given time-picker column.
 *
 * Rejects non-finite, zero and negative values as well as values that would
 * render more than {@link TIME_PICKER_MAX_COLUMN_ENTRIES} entries.
 */
export function isValidTimePickerInterval(
  unit: TimePickerIntervalUnit,
  value: number,
  twelveHourFormat: boolean
): boolean {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) {
    return false;
  }

  let range: number;
  let max: number;
  switch (unit) {
    case 'hour':
      if (!Number.isInteger(value)) {
        return false;
      }
      range = twelveHourFormat ? 12 : 24;
      max = twelveHourFormat ? 12 : 23;
      break;
    case 'minute':
    case 'second':
      range = 60;
      max = 59;
      break;
    case 'millisecond':
      range = 1000;
      max = 999;
      break;
  }

  return (
    value <= max && Math.ceil(range / value) <= TIME_PICKER_MAX_COLUMN_ENTRIES
  );
}

/**
 * Builds the discrete values shown in each time-picker column.
 */
export function buildTimePickerColumnNumberArrays(
  intervals: TimePickerColumnIntervals,
  timeRef: 'AM' | 'PM' | undefined
): {
  hourNumbers: number[];
  minuteNumbers: number[];
  secondNumbers: number[];
  millisecondsNumbers: number[];
} {
  const { hourInterval, minuteInterval, secondInterval, millisecondInterval } =
    intervals;

  let hourNumbers: number[];
  if (timeRef === undefined) {
    hourNumbers = Array.from(
      { length: Math.ceil(24 / hourInterval) },
      (_, i) => i * hourInterval
    );
  } else {
    hourNumbers = Array.from(
      { length: Math.ceil(12 / hourInterval) },
      (_, i) => i * hourInterval + 1
    ).filter((hour) => hour <= 12);
  }

  const minuteNumbers = Array.from(
    { length: Math.ceil(60 / minuteInterval) },
    (_, i) => i * minuteInterval
  );
  const secondNumbers = Array.from(
    { length: Math.ceil(60 / secondInterval) },
    (_, i) => i * secondInterval
  );
  const millisecondsNumbers = Array.from(
    { length: Math.ceil(1000 / millisecondInterval) },
    (_, i) => i * millisecondInterval
  );

  return { hourNumbers, minuteNumbers, secondNumbers, millisecondsNumbers };
}
