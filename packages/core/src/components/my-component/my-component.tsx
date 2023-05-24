/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() toggle = false;

  render() {
    return (
      <Host style={{ background: 'var(--theme-color-2)' }}>
        <ix-button onClick={() => (this.toggle = !this.toggle)}>
          Toggle
        </ix-button>
        <ix-drawer show={this.toggle} fullHeight>
          Content
        </ix-drawer>
      </Host>
    );
  }
}
