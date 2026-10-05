/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { DateRangeValue } from '../utils/calendar.util';

export type DateDropdownOption = Pick<DateRangeValue, 'from' | 'to'> & {
  id: string;
  label: string;
};

export type DateRangeChangeEvent = DateRangeValue & {
  id: string;
};
