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
        <span
          class={'typography-format-label-xs'}
          style={{
            display: 'block',
            width: '15rem',
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Et pulvinar arcu placerat
          tristique. Velit ipsum donec pulvinar erat donec turpis ultrices.
          Scelerisque pharetra sed sapien diam lorem. Risus quis in faucibus
          tempor. Hendrerit at cursus suspendisse neque adipiscing at at eu.
        </span>
        <ix-typography
          style={{
            display: 'block',
            width: '15rem',
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Et pulvinar arcu placerat
          tristique. Velit ipsum donec pulvinar erat donec turpis ultrices.
          Scelerisque pharetra sed sapien diam lorem. Risus quis in faucibus
          tempor. Hendrerit at cursus suspendisse neque adipiscing at at eu.
        </ix-typography>
      </Host>
    );
  }
}
