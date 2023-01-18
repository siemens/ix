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
  ['item-a', '.', '     .'],
  ['item-a', 'item-b', 'item-b'],
];
const mobile = [
  ['item-a', 'item-b'],
  ['item-a', 'item-b'],
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
        </ix-css-grid>

        <ix-grid variant="fluid">
          <ix-grid-row>
            <ix-grid-column column="col-sm-2 col-sm-2" class="item-a">
              Item A
            </ix-grid-column>
            <ix-grid-column column="col-sm-10"></ix-grid-column>
          </ix-grid-row>
          <ix-grid-row>
            <ix-grid-column column="col-sm-6 col-lg-10" class="item-b">
              Item B
            </ix-grid-column>
            <ix-grid-column column="col-sm-6 col-lg-2"></ix-grid-column>
          </ix-grid-row>
        </ix-grid>
      </Host>
    );
  }
}
