/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <ix-dropdown-button
          label="Dropdown"
          variant="Primary"
          icon="checkboxes"
        >
          <ix-dropdown-item label="123"></ix-dropdown-item>
          <ix-dropdown-item label="123"></ix-dropdown-item>
          <ix-dropdown-item label="123"></ix-dropdown-item>
          <ix-dropdown-item label="123"></ix-dropdown-item>
        </ix-dropdown-button>
        <ix-dropdown-button
          label="Dropdown"
          variant="Primary"
          outline
        ></ix-dropdown-button>
        <ix-dropdown-button
          label="Dropdown"
          variant="Primary"
          ghost
          icon="checkboxes"
        ></ix-dropdown-button>
        <ix-dropdown-button
          label="Dropdown"
          variant="Primary"
          disabled
          icon="checkboxes"
        ></ix-dropdown-button>
        <ix-dropdown-button
          label=""
          variant="Primary"
          icon="checkboxes"
        ></ix-dropdown-button>
        <ix-dropdown-button
          label=""
          variant="Primary"
          outline
          icon="checkboxes"
        ></ix-dropdown-button>
        <ix-dropdown-button
          label=""
          variant="Primary"
          ghost
          icon="checkboxes"
        ></ix-dropdown-button>
        <ix-dropdown-button
          label=""
          variant="Primary"
          disabled
          icon="checkboxes"
        ></ix-dropdown-button>
      </Host>
    );
  }
}
