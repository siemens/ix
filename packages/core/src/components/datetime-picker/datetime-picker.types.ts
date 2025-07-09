/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export type DateTimeSelectEvent = {
  from?: string;
  to?: string;
  time: string;
};

export type DateTimeDateChangeEvent =
  | string
  | Omit<DateTimeSelectEvent, 'time'>;
