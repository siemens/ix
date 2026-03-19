/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * Overflow case: same as Storybook Example/Tabs → Overflow (340px, 8 tabs).
 */

import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="tabs" style="max-width: 340px;">
      <ix-tabs [selected]="selectedTab" layout="auto">
        <ix-tab-item (click)="changeTab(0)">Overview</ix-tab-item>
        <ix-tab-item (click)="changeTab(1)">Analytics</ix-tab-item>
        <ix-tab-item (click)="changeTab(2)">Events</ix-tab-item>
        <ix-tab-item (click)="changeTab(3)">Automation</ix-tab-item>
        <ix-tab-item (click)="changeTab(4)">Data Sources</ix-tab-item>
        <ix-tab-item (click)="changeTab(5)">Notifications</ix-tab-item>
        <ix-tab-item (click)="changeTab(6)">History</ix-tab-item>
        <ix-tab-item (click)="changeTab(7)">Settings</ix-tab-item>
      </ix-tabs>
      <section role="tabpanel" aria-label="Example content">
        @switch (selectedTab) {
          @case (0) { Content Overview }
          @case (1) { Content Analytics }
          @case (2) { Content Events }
          @case (3) { Content Automation }
          @case (4) { Content Data Sources }
          @case (5) { Content Notifications }
          @case (6) { Content History }
          @case (7) { Content Settings }
        }
      </section>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class TabsOverflow {
  selectedTab = 0;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
