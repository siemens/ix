/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { StatusVariant } from '../utils/status.types';

export type ProgressIndicatorSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Progress indicator status values: shared status subset plus Figma `error` and `paused`.
 * Default is `base`. Not offered: `danger`, `caution`, `accent`, `critical`, `neutral`.
 *
 * @since 6.0.0
 */
export type ProgressIndicatorStatus =
  | Extract<StatusVariant, 'base' | 'success' | 'information' | 'warning'>
  | 'error'
  | 'paused';
