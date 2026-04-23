/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FilterOperand } from './filter-operand';

export interface FilterSelection {
  type: 'filter';
  category: string;
  operand: FilterOperand;
  value: string;
}
