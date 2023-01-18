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
  tag: 'ix-grid-row',
  styleUrl: 'grid-row.scss',
  shadow: true,
})
export class GridLayout {
  render() {
    return (
      <Host class={'row'}>
        <slot></slot>
      </Host>
    );
  }
}
