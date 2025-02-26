/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LogicalFilterOperator } from './logical-filter-operator';
export class FilterState {
  public tokens: string[] = [];
  public categories: {
    id: string;
    value: string;
    operator: LogicalFilterOperator;
  }[] = [];
}
