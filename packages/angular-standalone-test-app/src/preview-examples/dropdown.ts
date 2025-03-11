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
  IxDropdownHeader,
  IxDropdownItem,
  IxDivider,
  IxDropdownTriggerDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxButton,
    IxDropdown,
    IxDropdownHeader,
    IxDropdownItem,
    IxDivider,
    IxDropdownTriggerDirective,
  ],
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-header label="Category"></ix-dropdown-header>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3"></ix-dropdown-item>
      <ix-dropdown-item label="Item 4"></ix-dropdown-item>
      <ix-divider></ix-divider>
      <ix-dropdown-item label="Item 5"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class Dropdown {}
