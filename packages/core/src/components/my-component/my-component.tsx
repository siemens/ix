/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() item1: string = 'Init';

  render() {
    return (
      <Host>
        <ix-basic-navigation>
          <ix-menu>
            <ix-menu-item home>Home</ix-menu-item>
            <ix-menu-item notifications={12} active>
              {this.item1}
            </ix-menu-item>
            <ix-menu-item disabled>Test 2</ix-menu-item>
            <ix-menu-item>Test 3</ix-menu-item>
            <ix-menu-item slot="bottom" active>
              Test 3
            </ix-menu-item>
            <ix-menu-about></ix-menu-about>
          </ix-menu>
          <main>
            <ix-button
              onClick={() =>
                (this.item1 = 'Test ' + Math.floor(Math.random() * 6) + 1)
              }
            >
              Change
            </ix-button>
          </main>
        </ix-basic-navigation>
      </Host>
    );
  }
}
