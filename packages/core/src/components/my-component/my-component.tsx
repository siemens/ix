/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  colors = Array.from({ length: 9 }).map((_, i) => `var(--theme-color-${i})`);

  render() {
    return (
      <Host style={{ padding: '5rem' }}>
        <ix-button>Button</ix-button>
        <ix-select></ix-select>

        <div style={{ height: '10rem', display: 'flex', flexDirection: 'row' }}>
          {this.colors.map((c) => (
            <div
              style={{
                height: '10rem',
                width: '2rem',
                background: c,
              }}
            ></div>
          ))}
        </div>
      </Host>
    );
  }
}
