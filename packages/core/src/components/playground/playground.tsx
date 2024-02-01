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
  renderDropdowns(count = 100) {
    return new Array(count).fill(false).map((_, i) => {
      return (
        <div>
          <ix-dropdown-button label="test">
            <ix-dropdown-item label="item 1"></ix-dropdown-item>
            <ix-dropdown-item label="item 2"></ix-dropdown-item>
            <ix-dropdown-item
              id={`submenu-0${i}`}
              label="item 3"
            ></ix-dropdown-item>
          </ix-dropdown-button>
          <ix-dropdown trigger={`submenu-0${i}`}>
            <ix-dropdown-item>Test2</ix-dropdown-item>
            <ix-dropdown-item>Test2</ix-dropdown-item>
            <ix-dropdown-item>Test2</ix-dropdown-item>
            <ix-dropdown-item>Test2</ix-dropdown-item>
          </ix-dropdown>
        </div>
      );
    });
  }

  render() {
    return (
      <Host>
        <ix-application>
          <ix-application-header>
            <ix-dropdown-button label="test">
              <ix-dropdown-item label="item 1"></ix-dropdown-item>
              <ix-dropdown-item label="item 2"></ix-dropdown-item>
              <ix-dropdown-item
                id="submenu-01"
                label="item 3"
              ></ix-dropdown-item>
            </ix-dropdown-button>
            <ix-dropdown trigger="submenu-01">
              <ix-dropdown-item>Test2</ix-dropdown-item>
              <ix-dropdown-item>Test2</ix-dropdown-item>
              <ix-dropdown-item>Test2</ix-dropdown-item>
              <ix-dropdown-item>Test2</ix-dropdown-item>
            </ix-dropdown>
          </ix-application-header>
          {this.renderDropdowns()}
        </ix-application>
      </Host>
    );
  }
}
