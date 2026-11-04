/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { DateRangeWithIso } from '../utils/datetime/date-time.types';

export type DateTimeSelectEvent = DateRangeWithIso & {
  time: string;
  isoTime?: string;
};

export type DateTimeDateChangeEvent =
  | string
  | Omit<DateTimeSelectEvent, 'time'>;
