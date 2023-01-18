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
        <ix-button data-tooltip="Test1" style={{ marginRight: '4rem' }}>
          Long text
        </ix-button>
        <ix-button data-tooltip="Test2" style={{ marginRight: '4rem' }}>
          Short
        </ix-button>
        <ix-button data-tooltip="Test3" style={{ marginRight: '4rem' }}>
          Long text short words
        </ix-button>
        <ix-button data-tooltip="with-title" style={{ marginRight: '4rem' }}>
          With title
        </ix-button>

        <ix-tooltip
          for='[data-tooltip="Test3"]'
          interactive={false}
          titleIcon="rocket"
          titleContent="test title"
        >
          Very very very very very very long long long text
        </ix-tooltip>
        <ix-tooltip for='[data-tooltip="Test2"]' interactive={false}>
          1
        </ix-tooltip>
        <ix-tooltip
          for='[data-tooltip="Test1"]'
          interactive={true}
          titleIcon="rocket"
          titleContent="test title"
        >
          Very very very very very very
          looooooooooooooooooooooooooooooooooooooooong text
        </ix-tooltip>

        <ix-tooltip
          for='[data-tooltip="with-title"]'
          interactive={true}
          titleIcon="rocket"
          titleContent="test title"
        >
          Some Content
        </ix-tooltip>

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
