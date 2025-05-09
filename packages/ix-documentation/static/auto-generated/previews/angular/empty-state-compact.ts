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
  template: `<ix-empty-state
    layout="compact"
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyStateCompact {
  onActionClick(event: Event) {
    console.log(event);
  }
}
