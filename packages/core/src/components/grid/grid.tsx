/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @since 2.0.0
 */
@Component({
  tag: 'ix-grid',
  styleUrl: 'grid.scss',
  shadow: true,
})
export class Grid {
  /**
   * The grid will not have any horizontal padding
   */
  @Prop() noPadding = false;

  /**
   * Remove the gap between rows
   */
  @Prop() noRowGap = false;

  /**
   * Overwrite the default number of columns. Choose between 2 and 12 columns.
   */
  @Prop() columns = 12;

  render() {
    return (
      <Host
        class={{
          'no-padding': this.noPadding,
          'no-row-gap': this.noRowGap,
        }}
        style={{
          '--ix-grid-columns': `${this.columns}`,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
