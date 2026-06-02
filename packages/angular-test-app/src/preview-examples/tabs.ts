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
    <div class="tabs">
      <ix-tabs
        [activeTabKey]="activeTabKey"
        (tabChange)="activeTabKey = $event.detail ?? 'tab-1'"
      >
        <ix-tab-item tabKey="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tabKey="tab-2">Tab 2</ix-tab-item>
        <ix-tab-item tabKey="tab-3">Tab 3</ix-tab-item>
      </ix-tabs>
      <section role="tabpanel" aria-label="Example content">
        @if (activeTabKey === 'tab-1') { Content Tab 1 } @else if (activeTabKey
        === 'tab-2') { Content Tab 2 } @else if (activeTabKey === 'tab-3') {
        Content Tab 3 }
      </section>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class Tabs {
  activeTabKey = 'tab-1';
}
