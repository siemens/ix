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
  selector: 'app-example',
  template: `
    <ix-tabs rounded>
      <ix-tab-item tabKey="success" icon="success" label="Success"></ix-tab-item>
      <ix-tab-item tabKey="tree" icon="tree" label="Tree" counter="200"></ix-tab-item>
      <ix-tab-item
        tabKey="maintenance"
        icon="maintenance"
        label="Maintenance"
      ></ix-tab-item>
      <ix-tab-item
        tabKey="sound"
        icon="sound-loud"
        label="Sound"
        disabled
        counter="24"
      ></ix-tab-item>
      <ix-tab-item tabKey="hierarchy" icon="hierarchy" label="Hierarchy"></ix-tab-item>
      <ix-tab-item
        tabKey="calendar-settings"
        icon="calendar-settings"
        label="Calendar settings"
        disabled
      ></ix-tab-item>
    </ix-tabs>
  `,
})
export default class TabsRounded {}
