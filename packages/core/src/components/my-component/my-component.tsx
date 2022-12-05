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
      <Host>
        <div
          style={{
            marginBottom: '1rem',
          }}
        >
          <input type="checkbox" id="checkbox_01" checked />
          <label htmlFor="checkbox_01" style={{ width: '9rem' }}>
            Simple checkbox long long long long long long long
          </label>
        </div>
        <div
          style={{
            marginBottom: '1rem',
          }}
        >
          <input type="radio" id="radiobutton_01" checked />
          <label htmlFor="radiobutton_01" style={{ width: '9rem' }}>
            Simple checkbox long long long long long long long
          </label>
        </div>
      </Host>
    );
  }
}
