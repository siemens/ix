/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop, Watch } from '@stencil/core';

/**
 * Extra small (xs)
Small (sm)
Medium (md)
Large (lg)
Extra large (xl)
Extra extra large (xxl)
 */

@Component({
  tag: 'ix-grid-column',
  styleUrl: 'grid-column.scss',
  shadow: true,
})
export class GridItem {
  /**
   * Column definition based on bootstrap grid system
   */
  @Prop() column: string | [] = '';

  componentDidLoad() {
    this.validateColumnInput(this.column);
  }

  @Watch('column')
  validateColumnInput(value: string | []) {
    let columns = Array.isArray(value) ? value : [value];

    columns.forEach((column) => {
      column.split(' ').forEach((col) => {
        if (!col.startsWith('col')) {
          console.error(
            `Looks like you used a column definition which is not supported. ${col}`
          );
        }
      });
    });
  }

  render() {
    let columns = [];
    let hostClass = '';

    if (!Array.isArray(this.column)) {
      columns = [this.column];
    }

    hostClass = columns.join(' ');

    return (
      <Host class={hostClass}>
        <slot></slot>
      </Host>
    );
  }
}
