/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxTabs, IxTabItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTabs, IxTabItem],
  template: `
    <div class="tabs">
      <ix-tabs [selected]="selectedTab">
        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>
        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>
        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>
      </ix-tabs>

      <section role="tabpanel" aria-label="Example content">
        @if (selectedTab === 0) { Content Tab 1 } @else if (selectedTab === 1) {
        Content Tab 2 } @else if (selectedTab === 2) { Content Tab 3 }
      </section>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class Tabs {
  selectedTab = 0;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
