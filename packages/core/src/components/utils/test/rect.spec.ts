/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it } from 'vitest';
import { getClippedSides, getClippingThresholds } from '../rect';

const bounds = { top: 0, right: 100, bottom: 100, left: 0 };

describe('getClippedSides', () => {
  it('reports no clipping for a rect inside the bounds', () => {
    expect(
      getClippedSides({ top: 10, right: 90, bottom: 90, left: 10 }, bounds)
    ).toEqual({ top: false, right: false, bottom: false, left: false });
  });

  it('ignores sub-pixel overflow', () => {
    expect(
      getClippedSides(
        { top: -0.5, right: 100.75, bottom: 100.25, left: -0.99 },
        bounds
      )
    ).toEqual({ top: false, right: false, bottom: false, left: false });
  });

  it('reports overflow of at least the tolerance per side', () => {
    expect(
      getClippedSides({ top: -1, right: 100, bottom: 120, left: 0 }, bounds)
    ).toEqual({ top: true, right: false, bottom: true, left: false });
    expect(
      getClippedSides({ top: 0, right: 101, bottom: 100, left: -5 }, bounds)
    ).toEqual({ top: false, right: true, bottom: false, left: true });
  });

  it('supports a custom tolerance', () => {
    expect(
      getClippedSides(
        { top: -0.5, right: 100, bottom: 100, left: 0 },
        bounds,
        0
      ).top
    ).toBe(true);
    expect(
      getClippedSides({ top: -3, right: 100, bottom: 100, left: 0 }, bounds, 4)
        .top
    ).toBe(false);
  });

  it('does not report touching edges as clipped with a zero tolerance', () => {
    expect(getClippedSides(bounds, bounds, 0)).toEqual({
      top: false,
      right: false,
      bottom: false,
      left: false,
    });
  });
});

describe('getClippingThresholds', () => {
  it('returns the ratio at which each axis is clipped by the tolerance', () => {
    expect(getClippingThresholds({ width: 100, height: 20 })).toEqual([
      0.99, 0.95,
    ]);
    expect(getClippingThresholds({ width: 100, height: 20 }, 2)).toEqual([
      0.98, 0.9,
    ]);
  });

  it('skips axes that are not larger than the tolerance', () => {
    expect(getClippingThresholds({ width: 0, height: 1 })).toEqual([]);
  });
});
