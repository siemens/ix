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
        <ix-group>
          {/* Currently documentated and release but not working */}
          {/* <ix-group-dropdown-item
            slot="dropdown"
            label="dropdown 1"
          ></ix-group-dropdown-item>
          <ix-group-dropdown-item
            slot="dropdown"
            label="dropdown 2"
          ></ix-group-dropdown-item>
          <ix-group-dropdown-item
            slot="dropdown"
            label="dropdown 3"
          ></ix-group-dropdown-item> */}

          {/* My fix, but this breaks the component api in some kind. */}
          <ix-dropdown slot="dropdown">
            <ix-dropdown-item label="dropdown 1"></ix-dropdown-item>
            <ix-dropdown-item label="dropdown 2"></ix-dropdown-item>
            <ix-dropdown-item label="dropdown 3"></ix-dropdown-item>
          </ix-dropdown>
          <ix-group-item>Test</ix-group-item>
          <ix-group-item>Test 2</ix-group-item>
          <ix-group-item>Test</ix-group-item>
          <ix-group-item>Test</ix-group-item>
          <div slot="footer">My footer</div>
        </ix-group>
      </Host>
    );
  }
}
