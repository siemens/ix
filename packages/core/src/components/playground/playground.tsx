/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import {Component, h, Host} from '@stencil/core';

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
        <ix-application>
          <ix-application-header name="My Application">
            <div class="placeholder-logo" slot="logo"></div>
          </ix-application-header>
          <ix-menu showSettings={false}>
            <ix-menu-item>Item 1</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-item>Item 2</ix-menu-item>
            <ix-menu-settings>
              <ix-menu-settings-item
                label="Example Setting 1"
              ></ix-menu-settings-item>
              <ix-menu-settings-item
                label="Example Setting 2"
              ></ix-menu-settings-item>
            </ix-menu-settings>
          </ix-menu>

          <ix-content>
            <ix-content-header
              slot="header"
              header-title="My Content Page" >
            </ix-content-header>
          </ix-content>
        </ix-application>
      </Host>
    );
  }
}
