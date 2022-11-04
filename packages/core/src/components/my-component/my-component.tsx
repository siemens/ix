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
        <ix-basic-navigation>
          <ix-menu>
            <ix-menu-item>123</ix-menu-item>
            <ix-menu-item>456</ix-menu-item>
            <ix-menu-item>123</ix-menu-item>
            <ix-menu-item>456</ix-menu-item>
            <ix-menu-item>123</ix-menu-item>
            <ix-menu-item>456</ix-menu-item>
            <ix-menu-item>123</ix-menu-item>
            <ix-menu-item>456</ix-menu-item>
            <ix-menu-item>123</ix-menu-item>
            <ix-menu-item>456</ix-menu-item>
            <ix-menu-item>123</ix-menu-item>
            <ix-menu-item>456</ix-menu-item>
            <ix-menu-settings>
              <ix-menu-settings-item label="sett">Test</ix-menu-settings-item>
            </ix-menu-settings>
            <ix-menu-about>
              <ix-menu-about-item label="title">Test</ix-menu-about-item>
            </ix-menu-about>
          </ix-menu>
        </ix-basic-navigation>
      </Host>
    );
  }
}
