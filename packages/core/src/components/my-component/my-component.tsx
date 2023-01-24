/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

const normal = [
  ['item-a', '.', '     item-c'],
  ['item-a', 'item-b', 'item-c'],
];
const mobile = [
  ['item-a', 'item-a'],
  ['item-b', 'item-b'],
  ['item-c', 'item-c'],
];

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <ix-css-grid
          templates={{
            lg: normal,
            sm: mobile,
          }}
        >
          <ix-css-grid-item itemName="item-a">
            <div class={'example item-a'}>Item A</div>
          </ix-css-grid-item>
          <ix-css-grid-item itemName="item-b">
            <div class={'example item-b'}>Item B</div>
          </ix-css-grid-item>
          <ix-css-grid-item itemName="item-c">
            <div class={'example item-b'}>Item C</div>
          </ix-css-grid-item>
        </ix-css-grid>

        <ix-grid variant="fluid">
          <ix-grid-row>
            <ix-grid-column column="col-sm-2">
              <div style={{ background: 'rgba(255,0,0,0.2)' }}>Item A</div>
            </ix-grid-column>
            <ix-grid-column column="col-sm-2">
              <div style={{ background: 'rgba(0,255,0,0.2)' }}>Item B</div>
            </ix-grid-column>
            <ix-grid-column column="col-sm-8">
              <div style={{ background: 'rgba(0,0,255,0.2)' }}>Item C</div>
            </ix-grid-column>
          </ix-grid-row>
        </ix-grid>
      </Host>
    );
  }
}
