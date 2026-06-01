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
