/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxEmptyState } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxEmptyState],
  template: `<ix-empty-state
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyState {
  onActionClick(event: Event) {
    console.log(event);
  }
}
