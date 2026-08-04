/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ChipVariant } from '../chip/chip.types';

export const BADGE_ANATOMY_TYPES = [
  'label',
  'counter',
  'dot',
  'status-icon',
] as const;

export type BadgeAnatomyType = (typeof BADGE_ANATOMY_TYPES)[number];

/** Pill anatomies share chip semantic variants. */
export { CHIP_VARIANTS as BADGE_VARIANTS } from '../chip/chip.types';

/**
 * Badge variant.
 * **error** is only for **type** `status-icon`; other anatomies coerce to `alarm`.
 */
export type BadgeVariant = ChipVariant | 'error';

export type { ChipVariant };

export const BADGE_POSITIONS = ['top-after', 'bottom-after'] as const;

export type BadgePosition = (typeof BADGE_POSITIONS)[number];

export type BadgeAttachedOffset = {
  x: number;
  y: number;
};

/** Default attached offsets (px) added to **offsetX** / **offsetY**. */
export const BADGE_ATTACHED_OFFSET_DEFAULTS: Record<
  BadgeAnatomyType,
  BadgeAttachedOffset
> = {
  dot: { x: -6, y: -6 },
  label: { x: -10, y: -10 },
  counter: { x: -10, y: -10 },
  'status-icon': { x: -10, y: -10 },
};
