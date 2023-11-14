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
        <ix-menu>
          <ix-menu-avatar
            image="https://ui-avatars.com/api/?name=John+Doe"
            showLogoutButton={false}
          >
            <ix-menu-avatar-item label="Option 1"></ix-menu-avatar-item>
          </ix-menu-avatar>
          <ix-menu-item home-tab tab-icon="home">
            {' '}
            Home
          </ix-menu-item>
          <ix-menu-item tab-icon="globe"> Normal Tab</ix-menu-item>
          <ix-menu-item tab-icon="star" disabled>
            {' '}
            Disabled Tab
          </ix-menu-item>
          <ix-menu-item tab-icon="star"> With other Icon</ix-menu-item>
          <ix-menu-item tab-icon="globe">Should not visible</ix-menu-item>
        </ix-menu>
      </Host>
    );
  }
}
