/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxButton,
  IxDropdown,
  IxDropdownItem,
  IxDropdownTriggerDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxButton, IxDropdown, IxDropdownItem, IxDropdownTriggerDirective],
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-item #submenu label="Submenu"></ix-dropdown-item>
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
    </ix-dropdown>
    <ix-dropdown [ixDropdownTrigger]="submenu" placement="right-start">
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class DropdownSubmenu {}
