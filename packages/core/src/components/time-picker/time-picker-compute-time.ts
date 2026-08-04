/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DateTime } from 'luxon';
import type { TimePickerDescriptorUnit } from './time-picker.types';

function maxValueForNonHourUnit(unit: TimePickerDescriptorUnit): number {
  switch (unit) {
    case 'minute':
    case 'second':
      return 59;
    case 'millisecond':
      return 999;
    case 'hour':
      return 23;
  }
}

function mapHourColumnValue(
  rawValue: number,
  timeRef: 'AM' | 'PM' | undefined
): { value: number; maxValue: number } {
  if (timeRef === 'PM') {
    return {
      value: rawValue === 12 ? 12 : rawValue + 12,
      maxValue: 23,
    };
  }
  if (timeRef === 'AM') {
    return {
      value: rawValue === 12 ? 0 : rawValue,
      maxValue: 11,
    };
  }
  return { value: rawValue, maxValue: 23 };
}

/**
 * Applies a raw column value to a base time (including 12h rules).
 */
export function computeTimeWithRawUnitValue(
  baseTime: DateTime,
  unit: TimePickerDescriptorUnit,
  rawValue: number,
  timeRef: 'AM' | 'PM' | undefined
): DateTime | null {
  let value: number;
  let maxValue: number;

  if (unit === 'hour') {
    const mapped = mapHourColumnValue(rawValue, timeRef);
    value = mapped.value;
    maxValue = mapped.maxValue;
  } else {
    value = rawValue;
    maxValue = maxValueForNonHourUnit(unit);
  }

  if (value > maxValue) {
    value = maxValue;
  } else if (value < 0) {
    value = 0;
  }

  try {
    return baseTime.set({
      [unit]: value,
    } as {
      hour?: number;
      minute?: number;
      second?: number;
      millisecond?: number;
    });
  } catch {
    return null;
  }
}
