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
        <ix-blind class={'test'}>
          <ix-select selectedIndices={'2'} mode="multiple">
            <ix-select-item value={'1'} label={'Test'}></ix-select-item>
            <ix-select-item value={'2'} label={'Test 2'}></ix-select-item>
          </ix-select>
        </ix-blind>
      </Host>
    );
  }
}
