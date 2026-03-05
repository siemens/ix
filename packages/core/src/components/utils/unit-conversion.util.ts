/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Normalizes CSS unit values used for dimension props.
 *
 * - Explicit CSS units (`px`, `rem`, `em`, `%`) are preserved.
 * - Unitless numeric values are converted to pixels.
 *
 * @param value - The CSS value to normalize (e.g., "16px", "1rem", "100%")
 * @param dimension - The target dimension (`width` or `height`)
 * @returns A normalized CSS value or undefined if parsing fails
 */
export function convertToPx(
  value: string | undefined,
  _dimension: 'width' | 'height',
  _element: HTMLElement
): string | undefined {
  if (!value) {
    return undefined;
  }

  const unitRegex = /^(-?\d*\.?\d+)\s*(px|rem|em|%)?$/;
  const match = unitRegex.exec(value.trim());

  if (!match) {
    return undefined;
  }

  const [, numStr, unit] = match;
  const numValue = Number.parseFloat(numStr);

  if (Number.isNaN(numValue)) {
    return undefined;
  }

  if (unit) {
    return `${numValue}${unit.toLowerCase()}`;
  }

  return `${numValue}px`;
}
