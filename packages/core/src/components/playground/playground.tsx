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
        <ix-application forceBreakpoint={'md'} breakpoints={['sm', 'md']}>
          <ix-application-header name="My Application">
            <placeholder-logo slot="logo"></placeholder-logo>

            <ix-icon-button ghost icon="checkboxes"></ix-icon-button>
            <ix-icon-button ghost icon="checkboxes"></ix-icon-button>
            <ix-icon-button ghost icon="checkboxes"></ix-icon-button>

            <ix-dropdown-button variant="secondary" label="Select config" ghost>
              <ix-dropdown-item label="Config 1"></ix-dropdown-item>
              <ix-dropdown-item label="Config 2"></ix-dropdown-item>
              <ix-dropdown-item label="Config 3"></ix-dropdown-item>
            </ix-dropdown-button>

            <ix-avatar username="John Doe" extra="Administrator">
              <ix-dropdown-item label="Action 1"></ix-dropdown-item>
              <ix-dropdown-item label="Action 2"></ix-dropdown-item>
            </ix-avatar>
          </ix-application-header>
          <ix-menu>
            <ix-menu-item>Test</ix-menu-item>
          </ix-menu>
          <ix-content>Test</ix-content>
        </ix-application>
      </Host>
    );
  }
}
