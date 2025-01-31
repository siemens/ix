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
  standalone: true,
  selector: 'app-example',
  imports: [IxEventList, IxEventListItem],
  template: `
    <ix-event-list item-height="L">
      <ix-event-list-item color="color-primary">Test 1</ix-event-list-item>
      <ix-event-list-item color="color-primary">Test 2</ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventListCustomItemHeight {}
