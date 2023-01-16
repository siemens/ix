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
    return <Host>
      <ix-button id="iconTriggerId">Open</ix-button>
      <ix-dropdown  trigger="iconTriggerId">
        <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
        <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
      </ix-dropdown>

      <ix-date-picker></ix-date-picker>
    </Host>;
  }
}
