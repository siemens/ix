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
        <ix-event-list-item variant="filled" [itemColor]="item.color">
          {{ item.text }}
        </ix-event-list-item>
      }
    </ix-event-list>
  `,
})
export default class EventListFilled {
  items = [
    { text: 'Text 1', color: 'color-primary' },
    { text: 'Text 2', color: 'color-primary' },
    { text: 'Text 3', color: 'color-alarm' },
    { text: 'Text 4', color: 'color-success' },
  ];
}
