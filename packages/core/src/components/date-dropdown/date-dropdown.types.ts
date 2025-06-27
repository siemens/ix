/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export type DateDropdownOption = {
  id: string;
  label: string;
  from?: string;
  to?: string;
};

export type DateRangeChangeEvent = {
  id: string;
  from?: string;
  to?: string;
};
