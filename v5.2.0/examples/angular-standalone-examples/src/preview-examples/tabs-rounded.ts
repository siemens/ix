/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTabs, IxTabItem, IxIcon],
  template: `
    <ix-tabs rounded>
      <ix-tab-item tabKey="success" label="Success">
        <ix-icon name="success" aria-label="Success"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="tree" label="Tree" counter="200">
        <ix-icon name="tree" aria-label="Tree"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="maintenance" label="Maintenance">
        <ix-icon name="maintenance" aria-label="Maintenance"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="sound" label="Sound" disabled counter="24">
        <ix-icon name="sound-loud" aria-label="Sound"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="hierarchy" label="Hierarchy">
        <ix-icon name="hierarchy" aria-label="Hierarchy"></ix-icon>
      </ix-tab-item>
      <ix-tab-item
        tabKey="calendar-settings"
        label="Calendar settings"
        disabled
      >
        <ix-icon
          name="calendar-settings"
          aria-label="Calendar settings"
        ></ix-icon>
      </ix-tab-item>
    </ix-tabs>
  `,
})
export default class TabsRounded {}
