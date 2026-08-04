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

export type TimePickerCandidateRange = {
  start: DateTime;
  end: DateTime;
};

export function getCandidateRangeForUnit(
  unit: TimePickerDescriptorUnit,
  candidate: DateTime
): TimePickerCandidateRange | null {
  if (!candidate.isValid) {
    return null;
  }

  if (unit === 'hour') {
    return {
      start: candidate.startOf('hour'),
      end: candidate.endOf('hour'),
    };
  }

  if (unit === 'minute') {
    return {
      start: candidate.set({ second: 0, millisecond: 0 }),
      end: candidate.set({ second: 59, millisecond: 999 }),
    };
  }

  if (unit === 'second') {
    return {
      start: candidate.set({ millisecond: 0 }),
      end: candidate.set({ millisecond: 999 }),
    };
  }

  return {
    start: candidate,
    end: candidate,
  };
}

export function isSelectableForUnitWithinBounds(
  unit: TimePickerDescriptorUnit,
  candidate: DateTime,
  bounds: { min: DateTime | null; max: DateTime | null }
): boolean {
  const candidateRange = getCandidateRangeForUnit(unit, candidate);
  if (!candidateRange) {
    return false;
  }

  const { min, max } = bounds;
  const { start, end } = candidateRange;

  if (min && end < min) {
    return false;
  }

  if (max && start > max) {
    return false;
  }

  return true;
}
