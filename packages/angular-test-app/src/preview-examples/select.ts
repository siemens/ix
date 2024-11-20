/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <h1>TypeError-Example</h1>
    <ix-select [value]="value">
      <ix-select-item *ngFor="let item of selection" [label]="item" [value]="item"></ix-select-item>
    </ix-select>
  `,
})
export default class Select implements OnInit {
  value = '3';
  selection = ['3', '4', '5'];

  ngOnInit() {
    setTimeout(() => {
      this.value = '6';
      this.selection = ['6', '7', '8'];
    }, 100);
  }
}
