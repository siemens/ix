/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconAlarm,
  iconAlarmFilled,
  iconCircleFilled,
  iconError,
  iconErrorFilled,
  iconInfo,
  iconInfoFilled,
  iconRhombFilled,
  iconSuccess,
  iconSuccessFilled,
  iconTriangleFilled,
  iconWarning,
  iconWarningFilled,
  iconWarningRhomb,
  iconWarningRhombFilled,
} from '@siemens/ix-icons/icons';
import { describe, expect, it } from 'vitest';
import {
  BADGE_STATUS_ICON_BY_VARIANT,
  BADGE_STATUS_ICON_FALLBACK_VARIANT,
  getBadgeStatusIcon,
  getBadgeStatusIconPlate,
  getResolvedStatusIconVariant,
  isBadgeStatusIconVariant,
} from '../badge.status-icon';
import type { BadgeVariant } from '../badge.types';
import { formatBadgeLabel } from '../badge.utils';

describe('formatBadgeLabel', () => {
  it.each([
    ['dot', undefined],
    ['dot', '3'],
    ['status-icon', undefined],
    ['status-icon', 'ok'],
  ] as const)(
    'returns null for anatomy type %s with label %j',
    (type, label) => {
      expect(formatBadgeLabel(type, label)).toBeNull();
    }
  );

  it.each([
    ['3', '3'],
    [3, '3'],
    [100, '99+'],
    ['99', '99'],
    ['100', '99+'],
    ['99+', '99+'],
    ['3.7', '3'],
    ['-1', '-1'],
    ['  5  ', '5'],
    ['new', null],
    [undefined, null],
    ['', null],
    ['   ', null],
  ] as const)('formats counter label %j as %j', (label, expected) => {
    expect(formatBadgeLabel('counter', label)).toBe(expected);
  });

  it.each([
    ['NEW', 'NEW'],
    ['  Beta  ', 'Beta'],
    [42, '42'],
    ['  ', null],
    [undefined, null],
  ] as const)('formats label text %j as %j', (label, expected) => {
    expect(formatBadgeLabel('label', label)).toBe(expected);
  });
});

describe('badge.status-icon', () => {
  const unsupportedVariants = ['primary', 'neutral', 'custom'] as const;

  it.each([
    ['alarm', iconAlarmFilled, iconAlarm, iconCircleFilled],
    ['error', iconErrorFilled, iconError, iconCircleFilled],
    ['critical', iconWarningRhombFilled, iconWarningRhomb, iconRhombFilled],
    ['warning', iconWarningFilled, iconWarning, iconTriangleFilled],
    ['info', iconInfoFilled, iconInfo, iconCircleFilled],
    ['success', iconSuccessFilled, iconSuccess, iconCircleFilled],
  ] as const)(
    'maps %s to filled, outline, and plate glyphs',
    (variant, filled, outline, plate) => {
      expect(BADGE_STATUS_ICON_BY_VARIANT[variant]).toEqual({
        filled,
        outline,
        plate,
      });
      expect(getBadgeStatusIcon(variant, false)).toBe(filled);
      expect(getBadgeStatusIcon(variant, true)).toBe(outline);
      expect(getBadgeStatusIconPlate(variant)).toBe(plate);
      expect(outline).not.toBe(filled);
    }
  );

  it.each([
    ['alarm', true],
    ['error', true],
    ['critical', true],
    ['warning', true],
    ['info', true],
    ['success', true],
    ['primary', false],
    ['neutral', false],
    ['custom', false],
  ] as const)('isBadgeStatusIconVariant(%s) → %s', (variant, expected) => {
    expect(isBadgeStatusIconVariant(variant)).toBe(expected);
  });

  it.each([
    ['alarm', 'alarm'],
    ['error', 'error'],
    ['critical', 'critical'],
    ['warning', 'warning'],
    ['info', 'info'],
    ['success', 'success'],
    ['primary', 'info'],
    ['neutral', 'info'],
    ['custom', 'info'],
  ] as const)('getResolvedStatusIconVariant(%s) → %s', (variant, expected) => {
    expect(getResolvedStatusIconVariant(variant)).toBe(expected);
  });

  it('uses info as the unsupported-variant fallback constant', () => {
    expect(BADGE_STATUS_ICON_FALLBACK_VARIANT).toBe('info');
  });

  it('defaults to the filled glyph when outline is omitted', () => {
    expect(getBadgeStatusIcon('info')).toBe(iconInfoFilled);
  });

  it.each(unsupportedVariants)(
    'falls back to info glyphs for unsupported variant %s',
    (variant) => {
      expect(getBadgeStatusIcon(variant)).toBe(iconInfoFilled);
      expect(getBadgeStatusIcon(variant, true)).toBe(iconInfo);
      expect(getBadgeStatusIconPlate(variant)).toBe(iconCircleFilled);
    }
  );

  it('treats unknown variant strings like unsupported chip variants', () => {
    const unknown = 'not-a-variant' as BadgeVariant;

    expect(isBadgeStatusIconVariant(unknown)).toBe(false);
    expect(getResolvedStatusIconVariant(unknown)).toBe('info');
    expect(getBadgeStatusIcon(unknown)).toBe(iconInfoFilled);
    expect(getBadgeStatusIcon(unknown, true)).toBe(iconInfo);
    expect(getBadgeStatusIconPlate(unknown)).toBe(iconCircleFilled);
  });
});
