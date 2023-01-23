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
        <ix-button id="iconTriggerId">Open</ix-button>
        <ix-dropdown enableQuickActions trigger="iconTriggerId">
          <div slot="quick-actions">
            <ix-dropdown-item icon="cut"></ix-dropdown-item>
            <ix-dropdown-item icon="copy"></ix-dropdown-item>
            <ix-dropdown-item icon="screen"></ix-dropdown-item>
            <ix-dropdown-item icon="trashcan"></ix-dropdown-item>
          </div>

          <ix-dropdown-item id="submenuTrigger" label="Submenu">
            <ix-icon name="chevron-right-small" size="24"></ix-icon>
          </ix-dropdown-item>
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
