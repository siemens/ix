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
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-event-list>
      @for (item of items; track i; let i = $index) {
      <ix-event-list-item
        item-color="color-primary"
        [selected]="selectedIndex === i"
        (click)="selectedIndex = i"
      >
        {{ item }}
      </ix-event-list-item>
      }
    </ix-event-list>
  `,
})
export default class EventListSelected {
  selectedIndex = 1;
  items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
}
