/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';
import { TypographyVariants } from '../typography/types';

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {(
            [
              'h2',
              'display-large',
              'large',
              'large-single',
              'default-title',
              'default-title-single',
              'default',
              'default-single',
              'caption',
              'caption-single',
              'small',
              'x-small',
            ] as Array<TypographyVariants>
          ).map((v) => (
            <div>
              <ix-typography variant={v}>{v}</ix-typography>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
