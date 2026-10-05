/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { TRAP_FOCUS_INCLUDE_ATTRIBUTE } from '../utils/focus/focus-trap';

/**
 * Main body section of the popover.
 *
 * @slot default - Popover body content.
 *
 * @since 5.1.0
 */
@Component({
  tag: 'ix-popover-content',
  styleUrl: 'popover-content.scss',
  shadow: true,
})
export class PopoverContent {
  /**
   * Remove default inner padding.
   *
   * @since 5.1.0
   */
  @Prop() noPadding = false;

  render() {
    return (
      <Host
        class={{ 'no-padding': this.noPadding }}
        {...{ [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }}
      >
        <slot></slot>
      </Host>
    );
  }
}
