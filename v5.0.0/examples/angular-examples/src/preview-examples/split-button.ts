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
  styleUrls: ['./split-button.css'],
  template: `
  <div>
    <ix-split-button label="Action text" splitIcon="chevron-down-small">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button label="Action text" splitIcon="chevron-down-small" disabled>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button label="Action text" splitIcon="chevron-down-small" disableButton>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button label="Action text" splitIcon="chevron-down-small" disableDropdownButton>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
  </div>
  `,
})
export default class SplitButton {}
