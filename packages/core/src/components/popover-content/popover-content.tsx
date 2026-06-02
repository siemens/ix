/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

/**
 * Main body section of the popover.
 *
 * @slot - Popover body content.
 *
 * @since 5.0.0
 */
@Component({
  tag: 'ix-popover-content',
  styleUrl: 'popover-content.scss',
  shadow: true,
})
export class PopoverContent {
  /**
   * Remove default inner padding
   *
   * @since 5.0.0
   */
  @Prop() paddingless = false;

  render() {
    return (
      <Host class={{ paddingless: this.paddingless }}>
        <slot></slot>
      </Host>
    );
  }
}
