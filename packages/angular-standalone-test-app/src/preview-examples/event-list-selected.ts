/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxEventList, IxEventListItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEventList, IxEventListItem],
  template: `
    <ix-event-list>
      <ix-event-list-item
        item-color="color-primary"
        [selected]="selectedIndex === 0"
        (click)="selectedIndex = 0"
      >
        Text 1
      </ix-event-list-item>
      <ix-event-list-item
        item-color="color-primary"
        [selected]="selectedIndex === 1"
        (click)="selectedIndex = 1"
      >
        Text 2
      </ix-event-list-item>
      <ix-event-list-item
        item-color="color-primary"
        [selected]="selectedIndex === 2"
        (click)="selectedIndex = 2"
      >
        Text 3
      </ix-event-list-item>
      <ix-event-list-item
        item-color="color-primary"
        [selected]="selectedIndex === 3"
        (click)="selectedIndex = 3"
      >
        Text 4
      </ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventListSelected {
  selectedIndex = 1;
}
