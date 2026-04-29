/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import {
  formatTimePickerUnitValue,
  getTimePickerColumnSeparator,
} from '../time-picker-display';

describe('formatTimePickerUnitValue', () => {
  it('pads hour-like units below 10', () => {
    expect(formatTimePickerUnitValue('hour', 9)).toBe('09');
    expect(formatTimePickerUnitValue('minute', 5)).toBe('05');
  });

  it('pads milliseconds to three digits', () => {
    expect(formatTimePickerUnitValue('millisecond', 0)).toBe('000');
    expect(formatTimePickerUnitValue('millisecond', 50)).toBe('050');
    expect(formatTimePickerUnitValue('millisecond', 999)).toBe('999');
  });
});

describe('getTimePickerColumnSeparator', () => {
  it('uses colon before non-millisecond column', () => {
    expect(
      getTimePickerColumnSeparator(0, [{ unit: 'hour' }, { unit: 'minute' }])
    ).toBe(':');
  });

  it('uses dot before millisecond column', () => {
    expect(
      getTimePickerColumnSeparator(1, [
        { unit: 'hour' },
        { unit: 'minute' },
        { unit: 'millisecond' },
      ])
    ).toBe('.');
  });

  it('returns colon when there is no next column', () => {
    expect(getTimePickerColumnSeparator(0, [{ unit: 'hour' }])).toBe(':');
  });
});
