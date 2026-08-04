/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Normalizes a CSS dimension value.
 *
 * - Negative values are rejected.
 * - Explicit CSS units (`px`, `rem`, `em`, `%`) are preserved.
 * - Unitless numeric values are converted to pixels.
 *
 * @param value - The CSS value to normalize (e.g., "16px", "1rem", "100%")
 * @returns A normalized CSS value, or `undefined` if the value is absent, negative, or cannot be parsed
 */
export function normalizeCssDimension(
  value: string | undefined
): string | undefined {
  if (!value) {
    return undefined;
  }

  const unitRegex = /^(\d+(?:\.\d+)?)\s*(px|rem|em|%)?$/;
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
