/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [suggestions]="suggestions"
    ></ix-category-filter>
  `,
})
export default class CategoryFilterSuggestions {
  suggestions = ['Item 1', 'Item 2'];
}
