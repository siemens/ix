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
        <ix-basic-navigation>
          <ix-menu>
            <ix-menu-avatar top="top line" bottom="bottom line">
              <ix-menu-avatar-item label="Option 1"></ix-menu-avatar-item>
            </ix-menu-avatar>
            <ix-menu-item active notifications={12}>
              Test
            </ix-menu-item>
            <ix-menu-settings>
              <ix-menu-settings-item label="Test">123</ix-menu-settings-item>
            </ix-menu-settings>
            <ix-menu-item slot="bottom">xxx</ix-menu-item>
          </ix-menu>
        </ix-basic-navigation>
      </Host>
    );
  }
}
