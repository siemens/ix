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
  const overflows = (overflow: number) => overflow > 0 && overflow >= tolerance;

  return {
    top: overflows(bounds.top - rect.top),
    right: overflows(rect.right - bounds.right),
    bottom: overflows(rect.bottom - bounds.bottom),
    left: overflows(bounds.left - rect.left),
  };
}

/**
 * Returns the intersection ratios at which `rect` starts to be clipped by
 * `tolerance` on either axis.
 *
 * An `IntersectionObserver` only reports crossings of its thresholds, so these
 * ensure clipping that grows past the tolerance is reported even when the
 * element was already clipped by less than the tolerance before.
 */
export function getClippingThresholds(
  rect: Pick<DOMRectReadOnly, 'width' | 'height'>,
  tolerance = SUBPIXEL_TOLERANCE_PX
): number[] {
  return [rect.width, rect.height]
    .filter((size) => size > tolerance)
    .map((size) => 1 - tolerance / size);
}
