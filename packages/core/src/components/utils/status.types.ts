/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Shared semantic status set for IX components (card family first; EIX-259 will adopt more broadly).
 */
export type StatusVariant =
  | 'default'
  | 'danger'
  | 'warning'
  | 'caution'
  | 'information'
  | 'accent'
  | 'critical'
  | 'success'
  | 'neutral';

export const STATUS_VARIANTS: readonly StatusVariant[] = [
  'default',
  'danger',
  'warning',
  'caution',
  'information',
  'accent',
  'critical',
  'success',
  'neutral',
] as const;

/** Status values that show a strip or status border (excludes `default`). */
export const STATUS_EMPHASIS_VARIANTS = [
  'danger',
  'warning',
  'caution',
  'information',
  'accent',
  'critical',
  'success',
  'neutral',
] as const satisfies ReadonlyArray<Exclude<StatusVariant, 'default'>>;
