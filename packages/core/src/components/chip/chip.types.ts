/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type ChipVariant =
  | 'primary'
  | 'alarm'
  | 'critical'
  | 'warning'
  | 'info'
  | 'neutral'
  | 'success'
  | 'custom';

export const CHIP_VARIANTS: readonly ChipVariant[] = [
  'primary',
  'alarm',
  'critical',
  'warning',
  'info',
  'neutral',
  'success',
  'custom',
];
