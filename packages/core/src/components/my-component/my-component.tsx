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
          <ix-application-header></ix-application-header>
          <ix-menu>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test 2</ix-menu-item>
            <ix-menu-settings>
              <ix-menu-settings-item label="Test 1">
                Test 1
              </ix-menu-settings-item>
              <ix-menu-settings-item label="Test 2">
                Test 2
              </ix-menu-settings-item>
              <ix-menu-settings-item label="Test 3">
                Test 3
              </ix-menu-settings-item>
            </ix-menu-settings>
            <ix-menu-about>
              <ix-menu-about-item label="Test 123">Test 123</ix-menu-about-item>
              <ix-menu-about-item label="Test 456">Test 456</ix-menu-about-item>
              <ix-menu-about-item label="Test 789">Test 789</ix-menu-about-item>
            </ix-menu-about>
          </ix-menu>
          <ix-application-sidebar>Test</ix-application-sidebar>
          <ix-content>content</ix-content>
          {/* <ix-application-sidebar>
            <ix-button>xxx</ix-button>
          </ix-application-sidebar> */}
          {/* <ix-content-header headerTitle="Test"></ix-content-header> */}
        </ix-application>
      </Host>
    );
  }
}
