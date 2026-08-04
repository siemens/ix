/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const CHIP_VARIANTS = [
  'primary',
  'alarm',
  'critical',
  'warning',
  'info',
  'neutral',
  'success',
  'custom',
] as const;

export type ChipVariant = (typeof CHIP_VARIANTS)[number];
