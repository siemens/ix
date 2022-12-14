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
  selector: 'app-dropdown-button-icon',
  template: DropdownButtonIcon(),
})
export class Dropdown {}
function DropdownButtonIcon(): string | undefined {
  return `
<ix-dropdown-button
  label=""
  variant="Primary"
  icon="checkboxes"
>
  <ix-dropdown-button-item
  label="Item 1"
  value="1"
  ></ix-dropdown-button-item>
  <ix-dropdown-button-item
  label="Item 2"
  value="2"
  ></ix-dropdown-button-item>
</ix-dropdown-button>
<ix-dropdown-button
  label=""
  variant="Primary"
  outline
  icon="checkboxes"
>
  <ix-dropdown-button-item
  label="Item 1"
  value="1"
  ></ix-dropdown-button-item>
  <ix-dropdown-button-item
  label="Item 2"
  value="2"
  ></ix-dropdown-button-item>
</ix-dropdown-button>
<ix-dropdown-button
  label=""
  variant="Primary"
  ghost
  icon="checkboxes"
>
  <ix-dropdown-button-item
  label="Item 1"
  value="1"
  ></ix-dropdown-button-item>
  <ix-dropdown-button-item
  label="Item 2"
  value="2"
  ></ix-dropdown-button-item>
</ix-dropdown-button>
<ix-dropdown-button
  label=""
  variant="Primary"
  disabled
  icon="checkboxes"
>
</ix-dropdown-button>
  `;
}

