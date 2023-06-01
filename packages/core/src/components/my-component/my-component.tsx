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
        <ix-basic-navigation>
          <ix-menu></ix-menu>
          <div
            style={{
              display: 'block',
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
            }}
          ></div>
        </ix-basic-navigation>
      </Host>
    );
  }
}
