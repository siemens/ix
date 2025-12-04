/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Parses a string value to extract a numeric value.
 * Returns undefined if the value is not a valid number.
 */
export function parseNumericValue(str: string): number | undefined {
  const numValue = Number.parseFloat(str);
  return Number.isNaN(numValue) ? undefined : numValue;
}

/**
 * Converts a REM value to pixels using the document root font size.
 */
export function convertRemToPx(value: number): string {
  const fontSize = Number.parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return `${value * fontSize}px`;
}

/**
 * Converts an EM value to pixels using the specified element's font size.
 */
export function convertEmToPx(value: number, element: HTMLElement): string {
  const fontSize = Number.parseFloat(getComputedStyle(element).fontSize);
  return `${value * fontSize}px`;
}

/**
 * Converts a percentage value to pixels based on the parent element's dimensions.
 */
export function convertPercentageToPx(
  value: number,
  dimension: 'width' | 'height',
  element: HTMLElement
): string | undefined {
  if (!element.parentElement) return undefined;

  const parentDimension =
    dimension === 'width'
      ? element.parentElement.offsetWidth
      : element.parentElement.offsetHeight;

  return `${(value / 100) * parentDimension}px`;
}

/**
 * Converts various CSS unit values (px, rem, em, %, unitless) to pixel values.
 *
 * @param value - The CSS value to convert (e.g., "16px", "1rem", "100%")
 * @param dimension - Whether this is for width or height (affects percentage calculations)
 * @param element - The HTML element to use for context (em and percentage calculations)
 * @returns The converted pixel value or undefined if conversion fails
 */
export function convertToPx(
  value: string | undefined,
  dimension: 'width' | 'height',
  element: HTMLElement
): string | undefined {
  if (!value) return undefined;

  const trimmedValue = value.trim().toLowerCase();
  const numValue = parseNumericValue(trimmedValue);
  if (numValue === undefined) return undefined;

  const unitConverters = {
    px: () => `${numValue}px`,
    rem: () => convertRemToPx(numValue),
    em: () => convertEmToPx(numValue, element),
    '%': () => convertPercentageToPx(numValue, dimension, element),
  };

  for (const [unit, converter] of Object.entries(unitConverters)) {
    if (trimmedValue.endsWith(unit)) {
      return converter();
    }
  }

  // Handle unitless values as pixels
  return `${numValue}px`;
}
