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
  render() {
    return (
      <Host>
        <ix-grid>
          <ix-row>
            <ix-col size="4">Row 1 Col 1</ix-col>
            <ix-col size="4">Row 1 Col 2</ix-col>
            <ix-col size="4">Row 1 Col 3</ix-col>
          </ix-row>
          <ix-row>
            <ix-col size="4">Row 2 Col 1</ix-col>
            <ix-col size="4">Row 2 Col 2</ix-col>
            <ix-col size="4">Row 2 Col 3</ix-col>
          </ix-row>
          <ix-row>
            <ix-col size="4">Row 3 Col 1</ix-col>
            <ix-col size="4">Row 3 Col 2</ix-col>
            <ix-col size="4">Row 3 Col 3</ix-col>
          </ix-row>
        </ix-grid>
      </Host>
    );
  }
}
