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
        <ix-select>
          <ix-select-item value={'1'} label="123"></ix-select-item>
          <ix-select-item value={'12'} label="456"></ix-select-item>
          <ix-select-item value={'13'} label="789"></ix-select-item>
        </ix-select>
      </Host>
    );
  }
}
