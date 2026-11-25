/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type {
  DateRange,
  DateRangeWithIso,
} from '../utils/datetime/date-time.types';

export type DateDropdownOption = DateRange<string> & {
  id: string;
  label: string;
};

export type DateRangeChangeEvent = DateRangeWithIso & {
  id: string;
};
