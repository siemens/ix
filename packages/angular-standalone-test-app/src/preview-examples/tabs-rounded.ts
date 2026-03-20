/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxTabs, IxTabItem, IxIcon } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTabs, IxTabItem, IxIcon],
  template: `
    <ix-tabs rounded>
      <ix-tab-item aria-label="Success">
        <ix-icon name="success" aria-hidden="true"></ix-icon>
      </ix-tab-item>
      <ix-tab-item counter="200" aria-label="Tree">
        <ix-icon name="tree" aria-hidden="true"></ix-icon>
      </ix-tab-item>
      <ix-tab-item aria-label="Maintenance">
        <ix-icon name="maintenance" aria-hidden="true"></ix-icon>
      </ix-tab-item>
      <ix-tab-item disabled counter="24" aria-label="Sound loud">
        <ix-icon name="sound-loud" aria-hidden="true"></ix-icon>
      </ix-tab-item>
      <ix-tab-item aria-label="Hierarchy">
        <ix-icon name="hierarchy" aria-hidden="true"></ix-icon>
      </ix-tab-item>
      <ix-tab-item disabled aria-label="Calendar settings">
        <ix-icon name="calendar-settings" aria-hidden="true"></ix-icon>
      </ix-tab-item>
    </ix-tabs>
  `,
})
export default class TabsRounded {}
