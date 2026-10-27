/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { StatusVariant } from '../utils/status.types';

/**
 * Toast status values (shared status subset plus Figma `error`; no `base`, `accent`, or `neutral`).
 * Default is `information`.
 *
 * @since 6.0.0
 */
export type ToastType =
  | Exclude<StatusVariant, 'base' | 'accent' | 'neutral'>
  | 'error';
