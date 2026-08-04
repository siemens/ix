/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Icon colors representing common notification states (e.g. alarm, info).
 */
export type NotificationColor =
  | 'color-std-text'
  | 'color-info'
  | 'color-critical'
  | 'color-warning'
  //TODO(IX-3400): Remove warning-text when proper CSS variable is available
  | 'color-warning-text'
  | 'color-success'
  | 'color-alarm'
  | 'color-neutral'
  | 'color-primary';
