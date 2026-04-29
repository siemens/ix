/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { buildTimePickerColumnNumberArrays } from '../time-picker-column-values';

const iv = (
  hourInterval: number,
  minuteInterval: number,
  secondInterval: number,
  millisecondInterval: number
) => ({
  hourInterval,
  minuteInterval,
  secondInterval,
  millisecondInterval,
});

describe('buildTimePickerColumnNumberArrays', () => {
  it('24h: default intervals produce full 0–23 hours, 0–59 min/sec', () => {
    const { hourNumbers, minuteNumbers, secondNumbers, millisecondsNumbers } =
      buildTimePickerColumnNumberArrays(iv(1, 1, 1, 100), undefined);

    expect(hourNumbers).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ]);
    expect(minuteNumbers.length).toBe(60);
    expect(minuteNumbers[0]).toBe(0);
    expect(minuteNumbers[59]).toBe(59);
    expect(secondNumbers.length).toBe(60);
    expect(millisecondsNumbers).toEqual(
      Array.from({ length: 10 }, (_, i) => i * 100)
    );
  });

  it('24h: hour interval 6 yields 0,6,12,18', () => {
    const { hourNumbers } = buildTimePickerColumnNumberArrays(
      iv(6, 1, 1, 100),
      undefined
    );
    expect(hourNumbers).toEqual([0, 6, 12, 18]);
  });

  it('24h: minute interval 15 yields quarter hours', () => {
    const { minuteNumbers } = buildTimePickerColumnNumberArrays(
      iv(1, 15, 1, 100),
      undefined
    );
    expect(minuteNumbers).toEqual([0, 15, 30, 45]);
  });

  it('24h: second interval 30', () => {
    const { secondNumbers } = buildTimePickerColumnNumberArrays(
      iv(1, 1, 30, 100),
      undefined
    );
    expect(secondNumbers).toEqual([0, 30]);
  });

  it('12h: hour interval 1 yields 1..12', () => {
    const { hourNumbers } = buildTimePickerColumnNumberArrays(
      iv(1, 1, 1, 100),
      'AM'
    );
    expect(hourNumbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('12h: hour interval 4 yields 1,5,9', () => {
    const { hourNumbers } = buildTimePickerColumnNumberArrays(
      iv(4, 1, 1, 100),
      'PM'
    );
    expect(hourNumbers).toEqual([1, 5, 9]);
  });

  it('millisecond interval 250 yields four steps', () => {
    const { millisecondsNumbers } = buildTimePickerColumnNumberArrays(
      iv(1, 1, 1, 250),
      undefined
    );
    expect(millisecondsNumbers).toEqual([0, 250, 500, 750]);
  });
});
