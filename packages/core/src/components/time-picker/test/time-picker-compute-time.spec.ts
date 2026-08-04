/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { DateTime } from 'luxon';
import { computeTimeWithRawUnitValue } from '../time-picker-compute-time';

const noon = DateTime.fromObject(
  { year: 2024, month: 1, day: 1, hour: 12, minute: 0, second: 0 },
  { zone: 'utc' }
);

describe('computeTimeWithRawUnitValue', () => {
  it('24h: maps hour without AM/PM shift', () => {
    const t = computeTimeWithRawUnitValue(noon, 'hour', 15, undefined);
    expect(t!.hour).toBe(15);
  });

  it('PM: 12 stays 12 (noon)', () => {
    const t = computeTimeWithRawUnitValue(noon, 'hour', 12, 'PM');
    expect(t!.hour).toBe(12);
  });

  it('PM: 1 maps to 13', () => {
    const t = computeTimeWithRawUnitValue(noon, 'hour', 1, 'PM');
    expect(t!.hour).toBe(13);
  });

  it('AM: 12 maps to 0 (midnight)', () => {
    const t = computeTimeWithRawUnitValue(noon, 'hour', 12, 'AM');
    expect(t!.hour).toBe(0);
  });

  it('AM: 11 stays 11', () => {
    const t = computeTimeWithRawUnitValue(noon, 'hour', 11, 'AM');
    expect(t!.hour).toBe(11);
  });

  it('AM: clamps invalid raw hour above 11 to 11 (not noon)', () => {
    const t = computeTimeWithRawUnitValue(noon, 'hour', 13, 'AM');
    expect(t!.hour).toBe(11);
  });

  it('sets minute on base time', () => {
    const t = computeTimeWithRawUnitValue(noon, 'minute', 45, undefined);
    expect(t!.minute).toBe(45);
    expect(t!.hour).toBe(12);
  });
});
