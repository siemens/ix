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
  applicationSwitchConfig = {
    textAppSwitch: 'Aendere die Applikation',
    apps: [
      {
        id: 'app-1',
        name: 'Example App 1',
        url: 'https://www.google.de',
        target: '_blank',
      },
    ],
  };

  render() {
    return (
      <Host>
        <ix-application appSwitch={true}>
          <ix-application-header name="Test Test TestTestTestTestTestTestTestTestTest1">
            <ix-icon-button icon="rocket" ghost></ix-icon-button>
            <ix-icon-button icon="rocket" ghost></ix-icon-button>

            <ix-dropdown-button label="Current Item" ghost variant="secondary">
              <ix-dropdown-item label="Item 1"></ix-dropdown-item>
              <ix-dropdown-item label="Item 2"></ix-dropdown-item>
              <ix-dropdown-item label="Item 3" id="test123"></ix-dropdown-item>
            </ix-dropdown-button>

            <ix-dropdown trigger={'test123'}>
              <ix-dropdown-item label="Sub 1"></ix-dropdown-item>
              <ix-dropdown-item label="Sub 2"></ix-dropdown-item>
            </ix-dropdown>

            <ix-avatar>
              <ix-dropdown-item>Test</ix-dropdown-item>
            </ix-avatar>
          </ix-application-header>
          <ix-menu>
            <ix-menu-item>Test</ix-menu-item>
          </ix-menu>
          <ix-content>
            {/* <ix-application-switch-modal></ix-application-switch-modal> */}
          </ix-content>
        </ix-application>
      </Host>
    );
  }
}
