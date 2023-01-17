/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
      <Host
        style={{
          padding: '12rem',
        }}
      >
        <div class="cont">
          <ix-button data-ix-tooltip="test" style={{ marginBottom: '4rem' }}>
            xxxx
          </ix-button>
          <ix-button data-ix-tooltip="test">xxxx</ix-button>
        </div>
        <ix-tooltip anchor="test" tooltipSelectable={true}>
          Helloworld
        </ix-tooltip>
      </Host>
    );
  }
}
