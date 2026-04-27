/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { TimePickerDescriptorUnit } from './time-picker.types';

export function formatTimePickerUnitValue(
  unit: TimePickerDescriptorUnit,
  value: number
): string {
  if (unit === 'millisecond') {
    return value.toString().padStart(3, '0');
  }

  return value < 10 ? `0${value}` : value.toString();
}

export type TimePickerColumnSeparatorDescriptor = {
  unit: TimePickerDescriptorUnit;
};

export function getTimePickerColumnSeparator(
  currentIndex: number,
  descriptors: TimePickerColumnSeparatorDescriptor[]
): string {
  if (currentIndex + 1 < descriptors.length) {
    const nextUnit = descriptors[currentIndex + 1].unit;
    return nextUnit === 'millisecond' ? '.' : ':';
  }

  return ':';
}
