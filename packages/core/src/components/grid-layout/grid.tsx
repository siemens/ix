/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-grid',
  styleUrl: 'grid.scss',
  shadow: true,
})
export class GridLayout {
  /**
   *
   */
  @Prop() variant: 'normal' | 'fluid' = 'normal';

  /**
   *
   */
  @Prop() noPadding = false;

  render() {
    const hostClass = {
      container: this.variant === 'normal',
      'container-fluid': this.variant === 'fluid',
      'ix-container': true,
      'no-padding': this.noPadding,
    };

    return (
      <Host class={hostClass}>
        <slot></slot>
      </Host>
    );
  }
}
