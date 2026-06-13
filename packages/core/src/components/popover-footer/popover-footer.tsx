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
 * Footer section for actions and optional leading metadata.
 *
 * @slot - Footer actions (typically buttons), aligned to the end.
 * @slot start - Optional leading content (for example version text or step indicators).
 *
 * @since 5.1.0
 */
@Component({
  tag: 'ix-popover-footer',
  styleUrl: 'popover-footer.scss',
  shadow: true,
})
export class PopoverFooter {
  @Element() hostElement!: HTMLIxPopoverFooterElement;

  /**
   * Button layout direction
   *
   * @since 5.1.0
   */
  @Prop() alignment: 'horizontal' | 'vertical' = 'horizontal';

  componentDidLoad() {
    this.hostElement.setAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE, '');
  }

  render() {
    return (
      <Host class={{ [`alignment-${this.alignment}`]: true }}>
        <div class="footer-start">
          <slot name="start"></slot>
        </div>
        <div class="footer-end">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
