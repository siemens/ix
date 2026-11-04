/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

type RectEdges = Pick<DOMRectReadOnly, 'top' | 'right' | 'bottom' | 'left'>;

export type ClippedSides = {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
};

/**
 * Measured rects can be off by a fraction of a pixel (e.g. inside an iframe
 * with a sub-pixel offset or with fractional zoom levels), which must not be
 * treated as a real overflow.
 */
export const SUBPIXEL_TOLERANCE_PX = 1;

/**
 * Returns which sides of `rect` overflow `bounds` by at least `tolerance`.
 *
 * Works with any pair of rects, e.g. `boundingClientRect` and
 * `intersectionRect` of an `IntersectionObserverEntry`, or an element rect and
 * its scroll container rect.
 */
export function getClippedSides(
  rect: RectEdges,
  bounds: RectEdges,
  tolerance = SUBPIXEL_TOLERANCE_PX
): ClippedSides {
  return {
    top: bounds.top - rect.top >= tolerance,
    right: rect.right - bounds.right >= tolerance,
    bottom: rect.bottom - bounds.bottom >= tolerance,
    left: bounds.left - rect.left >= tolerance,
  };
}
