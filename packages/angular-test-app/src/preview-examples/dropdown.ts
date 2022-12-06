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
  selector: 'app-dropdown',
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export class Dropdown {}
