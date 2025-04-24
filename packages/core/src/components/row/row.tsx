/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-row',
  styleUrl: 'row.scss',
  shadow: true,
})
export class Row {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
