/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';
import { TRAP_FOCUS_INCLUDE_ATTRIBUTE } from '../utils/focus/focus-trap';

/**
 * Main body section of the popover.
 *
 * @slot - Popover body content.
 *
 * @since 5.1.0
 */
@Component({
  tag: 'ix-popover-content',
  styleUrl: 'popover-content.scss',
  shadow: true,
})
export class PopoverContent {
  @Element() hostElement!: HTMLIxPopoverContentElement;

  /**
   * Remove default inner padding.
   *
   * @since 5.1.0
   */
  @Prop() noPadding = false;

  componentDidLoad() {
    this.hostElement.setAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE, '');
  }

  render() {
    return (
      <Host class={{ 'no-padding': this.noPadding }}>
        <slot></slot>
      </Host>
    );
  }
}
