/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  render() {
    return (
      <Host>
        <ix-application
          appSwitchConfig={{
            apps: [],
            currentAppId: '',
          }}
        >
          <ix-application-header name="Test"></ix-application-header>
          <ix-menu startExpanded>
            <ix-menu-item>test</ix-menu-item>
            <ix-menu-category label="test2">
              <ix-menu-item>1</ix-menu-item>
              <ix-menu-item active>2</ix-menu-item>
            </ix-menu-category>
          </ix-menu>
          <ix-content>Test</ix-content>
        </ix-application>
      </Host>
    );
  }
}
