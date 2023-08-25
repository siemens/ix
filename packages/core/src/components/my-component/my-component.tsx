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
            <ix-menu-item>Test</ix-menu-item>
          </ix-menu>

          <ix-grid>
            <ix-row>
              <ix-col size="12" sizeSm="12" sizeMd="4" sizeLg="4">
                1
              </ix-col>
              <ix-col size="12" sizeSm="12" sizeMd="4" sizeLg="4">
                2
              </ix-col>
              <ix-col size="12" sizeSm="12" sizeMd="4" sizeLg="4">
                3
              </ix-col>
            </ix-row>
          </ix-grid>
        </ix-basic-navigation>
      </Host>
    );
  }
}
