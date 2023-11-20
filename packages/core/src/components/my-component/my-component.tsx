/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';
import { AppSwitchConfiguration } from '../utils/application-layout/context';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  applicationSwitchConfig: AppSwitchConfiguration = {
    textAppSwitch: 'Aendere die Applikation',
    currentAppId: 'app-2',
    apps: [
      {
        id: 'app-1',
        name: 'Example App 1',
        iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
        url: 'https://www.google.de',
        description: 'Test',
        target: '_self',
      },
      {
        id: 'app-2',
        name: 'Example App 222',
        description: 'Test',
        iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
        url: 'https://www.google.de',
        target: '_self',
      },
      ...Array.from({ length: 20 }).map((_, index) => ({
        id: `app-x-${index}`,
        name: `Generated App ${index}`,
        iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
        description: `Generated Desc ${index}`,
        url: 'https://www.google.de',
        target: '_self',
      })),
    ],
  };

  render() {
    return (
      <Host>
        <ix-application appSwitchConfig={this.applicationSwitchConfig}>
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
            {/* <ix-application-switch-modal
              config={this.applicationSwitchConfig}
            ></ix-application-switch-modal> */}
          </ix-content>
        </ix-application>
      </Host>
    );
  }
}
