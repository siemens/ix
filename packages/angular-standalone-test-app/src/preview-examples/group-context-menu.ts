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
  IxGroup,
  IxDropdown,
  IxDropdownItem,
  IxGroupItem,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxGroup, IxDropdown, IxDropdownItem, IxGroupItem],
  template: `
    <ix-group header="Header text" sub-header="Subheader text">
      <ix-dropdown slot="dropdown">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown>
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export default class GroupContextMenu {}
