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
  selector: 'app-example',
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-quick-actions>
        <ix-icon-button icon="cut" ghost></ix-icon-button>
        <ix-icon-button icon="bulb" outline></ix-icon-button>
        <ix-icon-button icon="trashcan"></ix-icon-button>
      </ix-dropdown-quick-actions>

      <ix-divider></ix-divider>

      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class DropdownQuickActions {}
