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

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxCategoryFilter],
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [repeatCategories]="repeatCategories"
      [categories]="categories"
      [filterState]="filterState"
    ></ix-category-filter>
  `,
})
export default class CategoryFilter {
  repeatCategories = false;
  filterState = {
    tokens: ['Custom filter text'],
    categories: [
      {
        id: 'ID_1',
        value: 'IBM',
        operator: 'Not equal',
      },
    ],
  };
  categories = {
    ID_1: {
      label: 'Vendor',
      options: ['Apple', 'MS', 'Siemens'],
    },
    ID_2: {
      label: 'Product',
      options: ['iPhone X', 'Windows', 'APS'],
    },
  };
}
