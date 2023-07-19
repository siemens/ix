/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  template: `
    <ix-dropdown-button label="Dropdown" variant="primary" icon="checkboxes">
      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button
      label="Dropdown"
      variant="primary"
      outline
      icon="checkboxes"
    >
      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button
      label="Dropdown"
      variant="primary"
      ghost
      icon="checkboxes"
    >
      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button
      label="Dropdown"
      variant="primary"
      disabled
      icon="checkboxes"
    >
    </ix-dropdown-button>
  `,
})
export class Dropdown {}
