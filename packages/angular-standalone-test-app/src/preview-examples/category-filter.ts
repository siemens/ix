/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxCategoryFilter } from '@siemens/ix-angular/standalone';
import { FilterAndSearchValue, FilterCategory } from '@siemens/ix';

@Component({
  selector: 'app-example',
  imports: [IxCategoryFilter],
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [uniqueCategories]="uniqueCategories"
      [categories]="categories"
      [filterState]="filterState"
    ></ix-category-filter>
  `,
})
export default class CategoryFilter {
  uniqueCategories = true;

  filterState: FilterAndSearchValue[] = [
    { type: 'search', value: 'Custom filter text' },
    {
      type: 'filter',
      category: 'ID_1',
      operand: {
        key: 'does not equal',
        label: 'does not equal (≠)',
        symbol: '≠',
      },
      value: 'IBM',
    },
  ];

  categories: FilterCategory[] = [
    { key: 'ID_1', label: 'Vendor', values: ['Apple', 'MS', 'Siemens'] },
    { key: 'ID_2', label: 'Product', values: ['iPhone X', 'Windows', 'APS'] },
  ];
}
