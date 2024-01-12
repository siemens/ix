/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() isLoggedIn = false;

  render() {
    return (
      <Host>
        <ix-application>
          <ix-application-header>
            {(this.isLoggedIn || true) && (
              <ix-avatar>
                {this.isLoggedIn && <ix-dropdown-item>Test</ix-dropdown-item>}
              </ix-avatar>
            )}
          </ix-application-header>
          <ix-content>
            <ix-button
              onClick={() => {
                this.isLoggedIn = true;
              }}
            >
              Login
            </ix-button>
          </ix-content>
        </ix-application>
      </Host>
    );
  }
}
