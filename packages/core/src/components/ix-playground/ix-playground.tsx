/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ix-playground',
  styleUrl: 'ix-playground.scss',
  shadow: false,
})
export class IxPlayground {
  render() {
    return (
      <Host>
        <ix-application>
          <ix-application-header></ix-application-header>
          <ix-menu enableToggleTheme>
            <ix-menu-item>Menu Item 1</ix-menu-item>
            <ix-menu-item>Menu Item 2</ix-menu-item>
            <ix-menu-item>Menu Item 3</ix-menu-item>
          </ix-menu>
        </ix-application>
      </Host>
    );
  }
}
