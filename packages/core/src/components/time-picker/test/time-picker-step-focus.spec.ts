/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { findNextSelectableRingValue } from '../time-picker-step-focus';

describe('findNextSelectableRingValue', () => {
  it('returns null for an empty list', () => {
    expect(findNextSelectableRingValue([], 0, 1, () => true)).toBeNull();
  });

  it('returns null when nothing is selectable', () => {
    expect(
      findNextSelectableRingValue([1, 2, 3], 1, 1, () => false)
    ).toBeNull();
  });

  it('moves forward to the next selectable value', () => {
    expect(
      findNextSelectableRingValue([0, 15, 30, 45], 15, 1, () => true)
    ).toBe(30);
  });

  it('wraps forward from the last index', () => {
    expect(
      findNextSelectableRingValue([0, 15, 30, 45], 45, 1, () => true)
    ).toBe(0);
  });

  it('moves backward with wrap', () => {
    expect(
      findNextSelectableRingValue([0, 15, 30, 45], 0, -1, () => true)
    ).toBe(45);
  });

  it('skips values rejected by canSelect', () => {
    const hours = [8, 9, 10, 11, 12, 13];
    const blocked = new Set([9, 10]);
    expect(
      findNextSelectableRingValue(hours, 8, 1, (h) => !blocked.has(h))
    ).toBe(11);
  });

  it('when currentValue is not in the list, forward step considers the first entry', () => {
    expect(findNextSelectableRingValue([10, 20, 30], 999, 1, () => true)).toBe(
      10
    );
  });
});
