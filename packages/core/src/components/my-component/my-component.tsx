/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
        <div style={{ padding: '10rem' }}>
          <ix-button>Test</ix-button>
          <ix-tooltip for="ix-button" placement="right">
            Test test test test
          </ix-tooltip>
        </div>
      </Host>
    );
  }
}
