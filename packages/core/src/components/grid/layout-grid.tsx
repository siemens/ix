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
  tag: 'ix-layout-grid',
  styleUrl: 'layout-grid.scss',
  shadow: true,
})
export class LayoutGrid {
  /**
   * The grid will not have any horizontal padding
   */
  @Prop() noMargin = false;

  /**
   * Grid gap
   */
  @Prop() gap: '8' | '12' | '16' | '24' = '24';

  /**
   * Overwrite the default number of columns. Choose between 2 and 12 columns.
   */
  @Prop() columns = 12;

  render() {
    return (
      <Host
        class={{
          'no-margin': this.noMargin,
        }}
        style={{
          '--ix-layout-grid-columns': `${this.columns}`,
          '--ix-layout-grid-gutter': `${this.gap}px`,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
