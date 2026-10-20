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
  iconWarningOctagon,
  iconWarningOctagonFilled,
  iconWarningRhomb,
  iconWarningRhombFilled,
} from '@siemens/ix-icons/icons';
import type { BadgeVariant } from './badge.types';

/**
 * Solid octagon plate for filled **critical** status-icon.
 * Matches the outer path of `iconWarningOctagonFilled` (no bang cut-out).
 * Not exported from `@siemens/ix-icons` yet.
 */
export const iconOctagonFilled =
  "data:image/svg+xml;utf8,<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><desc>octagon-filled</desc><path d='M22 8V16L16 22H8L2 16V8L8 2H16L22 8Z'/></svg>";

/**
 * Variants valid for **type** `status-icon` (glyphs available)
 */
export type BadgeStatusIconVariant =
  | 'danger'
  | 'error'
  | 'critical'
  | 'warning'
  | 'caution'
  | 'information'
  | 'success';

type BadgeStatusIconPair = {
  filled: string;
  outline: string;
  /** Solid plate under the filled glyph. */
  plate: string;
};

/** Fallback when the variant has no status glyph. */
export const BADGE_STATUS_ICON_FALLBACK_VARIANT: BadgeStatusIconVariant =
  'information';

/** Status icons by variant (`outline` / `filled` / `plate`). */
export const BADGE_STATUS_ICON_BY_VARIANT: Record<
  BadgeStatusIconVariant,
  BadgeStatusIconPair
> = {
  danger: {
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
    filled: iconWarningOctagonFilled,
    outline: iconWarningOctagon,
    plate: iconOctagonFilled,
  },
  warning: {
    filled: iconWarningFilled,
    outline: iconWarning,
    plate: iconTriangleFilled,
  },
  caution: {
    filled: iconWarningRhombFilled,
    outline: iconWarningRhomb,
    plate: iconRhombFilled,
  },
  information: {
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
  return Object.hasOwn(BADGE_STATUS_ICON_BY_VARIANT, variant);
}

function resolveStatusIconVariant(
  variant: BadgeVariant
): BadgeStatusIconVariant {
  return isBadgeStatusIconVariant(variant)
    ? variant
    : BADGE_STATUS_ICON_FALLBACK_VARIANT;
}

/** Status glyph for a variant (falls back to **information**). */
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

/** Resolved status-icon variant for host classes (falls back to **information**). */
export function getResolvedStatusIconVariant(
  variant: BadgeVariant
): BadgeStatusIconVariant {
  return resolveStatusIconVariant(variant);
}
