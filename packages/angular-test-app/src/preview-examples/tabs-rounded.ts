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
    <ix-tabs rounded>
      <ix-tab-item tabKey="success">
        <ix-icon name="success" aria-label="Success"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="tree" counter="200">
        <ix-icon name="tree" aria-label="Tree"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="maintenance">
        <ix-icon name="maintenance" aria-label="Maintenance"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="sound" disabled counter="24">
        <ix-icon name="sound-loud" aria-label="Sound"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="hierarchy">
        <ix-icon name="hierarchy" aria-label="Hierarchy"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="calendar-settings" disabled>
        <ix-icon
          name="calendar-settings"
          aria-label="Calendar settings"
        ></ix-icon>
      </ix-tab-item>
    </ix-tabs>
  `,
})
export default class TabsRounded {}
