/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FilterSelection } from './filter-selection';
import { SearchQuery } from './search-query';

export type FilterAndSearchValue = (FilterSelection | SearchQuery) & {
  id?: number;
};
