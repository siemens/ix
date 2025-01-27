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
 * @internal
 */
@Component({
  tag: 'ix-css-grid-item',
  styleUrl: 'css-grid-item.scss',
  shadow: true,
})
export class CssGridItem {
  /**
   * Grid item name
   */
  @Prop() itemName!: string;

  render() {
    const style: Record<string, string> = {};
    style['grid-area'] = this.itemName;

    return (
      <Host style={style}>
        <slot></slot>
      </Host>
    );
  }
}
