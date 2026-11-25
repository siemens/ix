/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Chip / pill status variants plus `custom`.
 * Sample order: danger, warning, caution, information, accent, critical, success, neutral, custom.
 *
 * @since 6.0.0
 */
export const CHIP_VARIANTS = [
  'danger',
  'warning',
  'caution',
  'information',
  'accent',
  'critical',
  'success',
  'neutral',
  'custom',
] as const;

export type ChipVariant = (typeof CHIP_VARIANTS)[number];

/** @deprecated Use {@link ChipVariant} */
export type PillVariant = ChipVariant;
