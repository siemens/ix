/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FilterAndSearchValue, FilterCategory } from '@siemens/ix';
import { IxCategoryFilter } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [filter] = useState<FilterAndSearchValue[]>([
    { type: 'search', value: 'Custom filter text' },
    {
      type: 'filter',
      category: 'ID_1',
      operand: { key: 'does not equal', label: 'does not equal (≠)', symbol: '≠' },
      value: 'IBM',
    },
  ]);

  const [categories] = useState<FilterCategory[]>([
    { key: 'ID_1', label: 'Vendor', values: ['Apple', 'MS', 'Siemens'] },
    { key: 'ID_2', label: 'Product', values: ['iPhone X', 'Windows', 'APS'] },
  ]);

  return (
    <IxCategoryFilter
      placeholder="Filter by"
      uniqueCategories={false}
      filterState={filter}
      categories={categories}
    ></IxCategoryFilter>
  );
};
