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
  @State() theme = 'classic';

  render() {
    return (
      <Host>
        <ix-application themeSystemAppearance>
          <ix-application-header name="Demo App"></ix-application-header>
          <ix-menu>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test 2</ix-menu-item>
            <ix-menu-settings></ix-menu-settings>
          </ix-menu>
          <ix-content>
            <ix-content-header
              has-back-button="true"
              header-title="Content title"
              header-subtitle="Subtitle"
            >
              <ix-button>Toggle Theme</ix-button>
              <ix-button>Button2</ix-button>
              <ix-button>Button3</ix-button>
            </ix-content-header>
            Some Content
          </ix-content>
        </ix-application>
      </Host>
    );
  }
}
