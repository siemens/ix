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
          <ix-application-header name="My App XYZ">
            {/* Content in HEADER!!! */}
            <ix-avatar initials="DL"></ix-avatar>
            <ix-button>Test</ix-button>
          </ix-application-header>
          <ix-menu>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 2</ix-menu-item>
            <ix-menu-category label="cat 1">
              <ix-menu-item>Test 3</ix-menu-item>
              <ix-menu-item active>Test 4</ix-menu-item>
              <ix-menu-item>Test 5</ix-menu-item>
            </ix-menu-category>
            <ix-menu-settings>
              <ix-menu-settings-item label="Test Set 1">
                Test Set
              </ix-menu-settings-item>
              <ix-menu-settings-item label="Test Set 2">
                Test Set
              </ix-menu-settings-item>
            </ix-menu-settings>
            <ix-menu-about>
              <ix-menu-about-item label="Test 123">Test 123</ix-menu-about-item>
              <ix-menu-about-item label="Test 456">Test 456</ix-menu-about-item>
              <ix-menu-about-item label="Test 789">Test 789</ix-menu-about-item>
            </ix-menu-about>
          </ix-menu>
          <ix-content>
            <ix-content-header
              slot="header"
              headerTitle="Test"
              headerSubtitle="SubTilte"
            ></ix-content-header>
            <div
              style={{
                display: 'block',
                position: 'relative',
                background: 'red',
                width: '100%',
                height: '100%',
              }}
            ></div>
          </ix-content>

          <ix-application-sidebar>
            <ix-application-header name="Test 1"></ix-application-header>
            <ix-button>xxx</ix-button>
          </ix-application-sidebar>
        </ix-application>
      </Host>
    );
  }
}
