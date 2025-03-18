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
    <ix-event-list [itemHeight]="itemHeight">
      <ng-container *ngFor="let item of items">
        <ix-event-list-item color="color-primary"
          >Text {{ item }}</ix-event-list-item
        >
      </ng-container>
    </ix-event-list>
  `,
})
export default class EventListCustomItemHeightInNumber {
  itemHeight = 60;
  items = [1, 2, 3];
}
