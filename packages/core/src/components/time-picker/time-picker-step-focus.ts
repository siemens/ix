/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Moves one step in a ring over `values`, skipping entries where `canSelect`
 * is false (same algorithm as {@link TimePicker#stepFocusedValue}).
 *
 * @returns the next selectable value, or `null` if `values` is empty or no entry is selectable.
 */
export function findNextSelectableRingValue(
  values: number[],
  currentValue: number,
  direction: 1 | -1,
  canSelect: (candidate: number) => boolean
): number | null {
  if (!values.length) {
    return null;
  }

  let idx = values.indexOf(currentValue);
  if (idx === -1) {
    // Start "before" first or "after" last so the first loop advance lands on an array edge.
    idx = direction === 1 ? -1 : values.length;
  }

  for (const _ of values) {
    idx = (idx + direction + values.length) % values.length;
    const candidate = values[idx];
    if (canSelect(candidate)) {
      return candidate;
    }
  }

  return null;
}
