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
        <ix-application>
          <ix-menu>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test 2</ix-menu-item>
            <ix-menu-settings></ix-menu-settings>
          </ix-menu>

          <ix-content>
            test
            <ix-content-header
              headerTitle="Test"
              slot="header"
            ></ix-content-header>
            test
          </ix-content>
        </ix-application>
      </Host>
    );
  }
}
