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
          <ix-dropdown-header label="Category"></ix-dropdown-header>
          <ix-dropdown-item label="Test"></ix-dropdown-item>

          <ix-divider></ix-divider>

          <ix-dropdown-item>Test</ix-dropdown-item>
          <ix-dropdown-item
            icon="bulb"
            label="Test"
            disabled
          ></ix-dropdown-item>
          <ix-dropdown-item checked icon="bulb">
            Test
          </ix-dropdown-item>
          <ix-dropdown-item
            style={{
              width: '10rem',
            }}
          >
            Test Test Test Test Test TestTest Test Test TestTest Test Test
            TestTest Test Test Test
          </ix-dropdown-item>
        </ix-dropdown-button>

        <ix-dropdown-button label="Test">
          <ix-dropdown-item icon="bulb"></ix-dropdown-item>
          <ix-dropdown-item icon="bulb" disabled></ix-dropdown-item>
          <hr class={'dropdown-divider'}></hr>
          <ix-dropdown-item icon="bulb"></ix-dropdown-item>
        </ix-dropdown-button>

        <ix-button id="iconTriggerId">Open</ix-button>
        <ix-dropdown trigger="iconTriggerId">
          <ix-dropdown-item
            id="submenuTrigger"
            label="Submenu"
          ></ix-dropdown-item>
          <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
          <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
        </ix-dropdown>
        <ix-dropdown trigger="submenuTrigger" placement="right-start">
          <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      </Host>
    );
  }
}
