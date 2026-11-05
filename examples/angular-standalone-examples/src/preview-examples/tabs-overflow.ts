/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * Overflow case: same as Storybook Example/Tabs → Overflow (340px, 8 tabs).
 */

import { Component } from '@angular/core';
import { IxTabs, IxTabItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTabs, IxTabItem],
  template: `
    <div class="tabs" style="max-width: 340px;">
      <ix-tabs
        [activeTabKey]="activeTabKey"
        layout="auto"
        (tabChange)="activeTabKey = $event.detail ?? 'overview'"
      >
        <ix-tab-item tabKey="overview">Overview</ix-tab-item>
        <ix-tab-item tabKey="analytics">Analytics</ix-tab-item>
        <ix-tab-item tabKey="events">Events</ix-tab-item>
        <ix-tab-item tabKey="automation">Automation</ix-tab-item>
        <ix-tab-item tabKey="data-sources">Data Sources</ix-tab-item>
        <ix-tab-item tabKey="notifications">Notifications</ix-tab-item>
        <ix-tab-item tabKey="history">History</ix-tab-item>
        <ix-tab-item tabKey="settings">Settings</ix-tab-item>
      </ix-tabs>
      <section role="tabpanel" aria-label="Example content">
        @switch (activeTabKey) { @case ('overview') { Content Overview } @case
        ('analytics') { Content Analytics } @case ('events') { Content Events }
        @case ('automation') { Content Automation } @case ('data-sources') {
        Content Data Sources } @case ('notifications') { Content Notifications }
        @case ('history') { Content History } @case ('settings') { Content
        Settings } }
      </section>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class TabsOverflow {
  activeTabKey = 'overview';
}
