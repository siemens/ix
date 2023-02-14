/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, State } from '@stencil/core';
import { Mode } from '../utils/screen/mode';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() mode: Mode = 'desktop';

  render() {
    return (
      <Host>
        <ix-basic-navigation>
          <ix-menu>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-about>
              <ix-menu-about-item>Item 1</ix-menu-about-item>
              <ix-menu-about-item>Item 1</ix-menu-about-item>
              <ix-menu-about-item>Item 1</ix-menu-about-item>
            </ix-menu-about>
            <ix-menu-settings>
              <ix-menu-settings-item>Item 1</ix-menu-settings-item>
              <ix-menu-settings-item>Item 1</ix-menu-settings-item>
              <ix-menu-settings-item>Item 1</ix-menu-settings-item>
            </ix-menu-settings>
          </ix-menu>
          <div class="debug-element"></div>
        </ix-basic-navigation>
      </Host>
    );
  }
}
