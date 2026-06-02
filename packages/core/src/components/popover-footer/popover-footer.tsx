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
 * Footer section for actions and optional leading metadata.
 *
 * @slot - Footer actions (typically buttons), aligned to the end.
 * @slot start - Optional leading content (for example version text or step indicators).
 *
 * @since 5.0.0
 */
@Component({
  tag: 'ix-popover-footer',
  styleUrl: 'popover-footer.scss',
  shadow: true,
})
export class PopoverFooter {
  /**
   * Button layout direction
   *
   * @since 5.0.0
   */
  @Prop() alignment: 'horizontal' | 'vertical' = 'horizontal';

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
