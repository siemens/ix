/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
        <ix-dropdown-button label="Test">
          <ix-dropdown-item label="Test"></ix-dropdown-item>
          <ix-dropdown-item>Test</ix-dropdown-item>
          <ix-dropdown-item
            icon="bulb"
            label="Test"
            disabled
          ></ix-dropdown-item>
          <ix-dropdown-item checked icon="bulb">
            Test
          </ix-dropdown-item>
          <ix-dropdown-item>
            Test Test Test Test Test TestTest Test Test TestTest Test Test
            TestTest Test Test Test
          </ix-dropdown-item>
        </ix-dropdown-button>

        <ix-dropdown-button label="Test">
          <ix-dropdown-item icon="bulb"></ix-dropdown-item>
          <ix-dropdown-item icon="bulb" disabled></ix-dropdown-item>
          <ix-dropdown-item icon="bulb"></ix-dropdown-item>
        </ix-dropdown-button>
      </Host>
    );
  }
}
