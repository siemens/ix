/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
    <ix-select mode="multiple" [selectedIndices]="selectedIndices">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export default class SelectMultiple {
  selectedIndices = ['1', '3'];
}
