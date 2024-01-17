/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
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
        <ix-dropdown-button label="xxx">
          <ix-dropdown-item>Test 1</ix-dropdown-item>
          <ix-dropdown-item>Test 2</ix-dropdown-item>
          <ix-dropdown-item id="Menu1">Test 3</ix-dropdown-item>
          <ix-dropdown-item id="Menu2">Test 4</ix-dropdown-item>
        </ix-dropdown-button>

        <ix-dropdown trigger={'Menu1'}>
          <ix-dropdown-item>Item</ix-dropdown-item>
          <ix-dropdown-item>Item</ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown trigger={'Menu2'}>
          <ix-dropdown-item>Item</ix-dropdown-item>
          <ix-dropdown-item id="Menu2_SubMenu21">Item</ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown trigger={'Menu2_SubMenu21'}>
          <ix-dropdown-item>Item</ix-dropdown-item>
          <ix-dropdown-item>Item deep</ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown-button label="xxx">
          <ix-dropdown-item>Test 1</ix-dropdown-item>
          <ix-dropdown-item>Test 2</ix-dropdown-item>
          <ix-dropdown-item id="XXMenu1">Test 3</ix-dropdown-item>
          <ix-dropdown-item id="XXMenu2">Test 4</ix-dropdown-item>
        </ix-dropdown-button>

        <ix-dropdown trigger={'XXMenu1'}>
          <ix-dropdown-item>Item</ix-dropdown-item>
          <ix-dropdown-item>Item</ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown trigger={'XXMenu2'}>
          <ix-dropdown-item>Item</ix-dropdown-item>
          <ix-dropdown-item id="XXMenu2_SubXXMenu21">Item</ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown trigger={'XXMenu2_SubXXMenu21'}>
          <ix-dropdown-item>Item</ix-dropdown-item>
          <ix-dropdown-item>Item</ix-dropdown-item>
        </ix-dropdown>
      </Host>
    );
  }
}
