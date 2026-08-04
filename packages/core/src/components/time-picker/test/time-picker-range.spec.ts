/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';
import {
  getCandidateRangeForUnit,
  isSelectableForUnitWithinBounds,
} from '../time-picker-range';

describe('getCandidateRangeForUnit', () => {
  const base = DateTime.fromObject(
    { year: 2026, month: 2, day: 10, hour: 13, minute: 30, second: 15 },
    { zone: 'utc' }
  );

  it('returns null for invalid DateTime', () => {
    const invalid = DateTime.fromFormat('not-a-time', 'HH:mm:ss');
    expect(getCandidateRangeForUnit('hour', invalid)).toBeNull();
  });

  it('returns full hour range for hour unit', () => {
    const range = getCandidateRangeForUnit('hour', base);
    expect(range).not.toBeNull();
    expect(range!.start.toISO()).toBe('2026-02-10T13:00:00.000Z');
    expect(range!.end.toISO()).toBe('2026-02-10T13:59:59.999Z');
  });

  it('returns full minute range for minute unit', () => {
    const range = getCandidateRangeForUnit('minute', base);
    expect(range).not.toBeNull();
    expect(range!.start.toISO()).toBe('2026-02-10T13:30:00.000Z');
    expect(range!.end.toISO()).toBe('2026-02-10T13:30:59.999Z');
  });

  it('returns full second range for second unit', () => {
    const range = getCandidateRangeForUnit('second', base);
    expect(range).not.toBeNull();
    expect(range!.start.toISO()).toBe('2026-02-10T13:30:15.000Z');
    expect(range!.end.toISO()).toBe('2026-02-10T13:30:15.999Z');
  });

  it('returns point range for millisecond unit', () => {
    const range = getCandidateRangeForUnit('millisecond', base);
    expect(range).not.toBeNull();
    expect(range!.start.toISO()).toBe(base.toISO());
    expect(range!.end.toISO()).toBe(base.toISO());
  });
});

describe('isSelectableForUnitWithinBounds', () => {
  const candidate = DateTime.fromObject(
    { year: 2026, month: 2, day: 10, hour: 13, minute: 0, second: 0 },
    { zone: 'utc' }
  );

  it('returns false when candidate DateTime is invalid', () => {
    const invalid = DateTime.fromFormat('oops', 'HH:mm:ss');
    expect(
      isSelectableForUnitWithinBounds('hour', invalid, {
        min: null,
        max: null,
      })
    ).toBe(false);
  });

  it('returns false when unit range ends before min bound', () => {
    const min = DateTime.fromObject(
      { year: 2026, month: 2, day: 10, hour: 14, minute: 0, second: 0 },
      { zone: 'utc' }
    );

    expect(
      isSelectableForUnitWithinBounds('hour', candidate, {
        min,
        max: null,
      })
    ).toBe(false);
  });

  it('returns false when unit range starts after max bound', () => {
    const max = DateTime.fromObject(
      { year: 2026, month: 2, day: 10, hour: 12, minute: 59, second: 59 },
      { zone: 'utc' }
    );

    expect(
      isSelectableForUnitWithinBounds('hour', candidate, {
        min: null,
        max,
      })
    ).toBe(false);
  });

  it('returns true when hour range intersects min bound', () => {
    const min = DateTime.fromObject(
      { year: 2026, month: 2, day: 10, hour: 13, minute: 30, second: 0 },
      { zone: 'utc' }
    );

    expect(
      isSelectableForUnitWithinBounds('hour', candidate, {
        min,
        max: null,
      })
    ).toBe(true);
  });

  it('returns true when hour range intersects max bound', () => {
    const max = DateTime.fromObject(
      { year: 2026, month: 2, day: 10, hour: 13, minute: 30, second: 0 },
      { zone: 'utc' }
    );

    expect(
      isSelectableForUnitWithinBounds('hour', candidate, {
        min: null,
        max,
      })
    ).toBe(true);
  });
});
