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
import type { BadgeVariant } from './badge.types';

/** Variants valid for **type** `status-icon`. */
export type BadgeStatusIconVariant =
  | 'alarm'
  | 'error'
  | 'critical'
  | 'warning'
  | 'info'
  | 'success';

type BadgeStatusIconPair = {
  filled: string;
  outline: string;
  /** Solid plate under the filled glyph. */
  plate: string;
};

/** Fallback when the variant has no status glyph. */
export const BADGE_STATUS_ICON_FALLBACK_VARIANT: BadgeStatusIconVariant =
  'info';

/** Status icons by variant (`outline` / `filled` / `plate`). */
export const BADGE_STATUS_ICON_BY_VARIANT: Record<
  BadgeStatusIconVariant,
  BadgeStatusIconPair
> = {
  alarm: {
    filled: iconAlarmFilled,
    outline: iconAlarm,
    plate: iconCircleFilled,
  },
  error: {
    filled: iconErrorFilled,
    outline: iconError,
    plate: iconCircleFilled,
  },
  critical: {
    filled: iconWarningRhombFilled,
    outline: iconWarningRhomb,
    plate: iconRhombFilled,
  },
  warning: {
    filled: iconWarningFilled,
    outline: iconWarning,
    plate: iconTriangleFilled,
  },
  info: {
    filled: iconInfoFilled,
    outline: iconInfo,
    plate: iconCircleFilled,
  },
  success: {
    filled: iconSuccessFilled,
    outline: iconSuccess,
    plate: iconCircleFilled,
  },
};

export function isBadgeStatusIconVariant(
  variant: string
): variant is BadgeStatusIconVariant {
  return variant in BADGE_STATUS_ICON_BY_VARIANT;
}

function resolveStatusIconVariant(
  variant: BadgeVariant
): BadgeStatusIconVariant {
  return isBadgeStatusIconVariant(variant)
    ? variant
    : BADGE_STATUS_ICON_FALLBACK_VARIANT;
}

/** Status glyph for a variant (falls back to **info**). */
export function getBadgeStatusIcon(
  variant: BadgeVariant,
  outline = false
): string {
  const icons = BADGE_STATUS_ICON_BY_VARIANT[resolveStatusIconVariant(variant)];
  return outline ? icons.outline : icons.filled;
}

/** Plate icon for the filled status stack. */
export function getBadgeStatusIconPlate(variant: BadgeVariant): string {
  return BADGE_STATUS_ICON_BY_VARIANT[resolveStatusIconVariant(variant)].plate;
}

/** Resolved status-icon variant for host classes (falls back to **info**). */
export function getResolvedStatusIconVariant(
  variant: BadgeVariant
): BadgeStatusIconVariant {
  return resolveStatusIconVariant(variant);
}
