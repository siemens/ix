/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { StatusVariant } from '../utils/status.types';

/**
 * Flip tile variant: `outline` and `filled` layouts or any status except `base`.
 *
 * @since 6.0.0
 */
export type FlipTileVariant =
  | 'outline'
  | 'filled'
  | Exclude<StatusVariant, 'base'>;
