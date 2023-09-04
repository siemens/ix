/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

export type GridSizingBehavior =
  | boolean
  | 'fixed'
  | 'fixed-sm'
  | 'fixed-md'
  | 'fixed-lg';

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
   * The grid will have a fixed width
   */
  @Prop() fixed: GridSizingBehavior = false;

  /**
   * The grid will not have any horizontal padding
   */
  @Prop() fluid = false;

  /**
   * Overwrite the default number of columns. Choose between 2 and 12 columns.
   */
  @Prop() columns = 12;

  render() {
    const classRecord = {};
    if (
      (this.fixed as string) === '' ||
      (typeof this.fixed === 'boolean' && this.fixed)
    ) {
      classRecord['fixed'] = true;
    }

    if (this.fixed && typeof this.fixed === 'string') {
      classRecord[`${this.fixed}`] = true;
    }

    return (
      <Host
        class={{
          ...classRecord,
          fluid: this.fluid,
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
