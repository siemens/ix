/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { Buttons } from '../button/button-variants';

/**
 * @internal
 */
@Component({
  tag: 'ix-index-button',
  styleUrl: 'index-button.scss',
  scoped: true,
})
export class IxIndexButton {
  /**
   * Button variant
   */
  @Prop() variant: Buttons = 'Primary';

  /**
   * Selection state
   */
  @Prop() selected: boolean;

  render() {
    return (
      <Host>
        <button
          class={{
            btn: true,
            'btn-invisible-primary': this.variant === 'Primary',
            'btn-invisible-secondary': this.variant === 'Secondary',
            selected: this.selected,
          }}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
