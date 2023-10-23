/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';
import dayjs from 'dayjs';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  async componentWillRender() {
    await import('dayjs/locale/de');
    dayjs.locale('de');
  }

  render() {
    return (
      <Host>
        <ix-date-picker-rework></ix-date-picker-rework>
      </Host>
    );
  }
}
