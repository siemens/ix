/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Host, h } from '@stencil/core';
import { makeRef } from '../utils/make-ref';

@Component({
  tag: 'ix-playground',
  styleUrl: 'ix-playground.scss',
  shadow: false,
})
export class IxPlayground {
  buttonRef = makeRef<HTMLIxButtonElement>();

  render() {
    return (
      <Host>
        <ix-button ref={this.buttonRef}>Button</ix-button>
        <ix-dropdown
          trigger={this.buttonRef.waitForCurrent()}
          navigationMode="roving-tabindex"
        >
          <ix-dropdown-item>Test</ix-dropdown-item>
          <ix-dropdown-item>Test2</ix-dropdown-item>
          <ix-dropdown-item>Test3</ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown-button
          label="Dropdown Button"
          navigationMode="roving-tabindex"
        >
          <button data-ix-roving-item>Test</button>
          <button data-ix-roving-item>Test</button>
          <button data-ix-roving-item>Test</button>
        </ix-dropdown-button>
      </Host>
    );
  }
}
