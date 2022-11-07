<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/angular-test-app/src/preview-examples/tabs-rounded.ts -->
```typescript
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-rounded',
  styles: [
    `
      :host {
        .example {
          display: block;
          position: relative;
          width: 100%;
        }
      }
    `,
  ],
  template: `
    <div class="example">
      <ix-tabs rounded>
        <ix-tab-item (click)="changeTab(0)"
          ><ix-icon name="success"></ix-icon
        ></ix-tab-item>
        <ix-tab-item (click)="changeTab(1)" counter="200"
          ><ix-icon name="tree"></ix-icon
        ></ix-tab-item>
        <ix-tab-item (click)="changeTab(2)"
          ><ix-icon name="maintenance"></ix-icon
        ></ix-tab-item>
        <ix-tab-item disabled counter="24"
          ><ix-icon name="sound-loud"></ix-icon
        ></ix-tab-item>
        <ix-tab-item><ix-icon name="hierarchy"></ix-icon></ix-tab-item>
        <ix-tab-item disabled
          ><ix-icon name="calendar-settings"></ix-icon
        ></ix-tab-item>
      </ix-tabs>
      <div *ngIf="selectedTab === 0">Content Tab 1</div>
      <div *ngIf="selectedTab === 1">Content Tab 2</div>
      <div *ngIf="selectedTab === 2">Content Tab 3</div>
    </div>
  `,
})
export class TabsRounded {
  selectedTab = 1;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
```
