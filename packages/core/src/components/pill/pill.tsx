/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-pill',
  styleUrl: 'pill.scss',
  scoped: true,
})
export class Pill {
  @Element() el: HTMLIxPillElement;

  /**
   * Pill variant
   */
  @Prop({ reflect: true }) variant:
    | 'primary'
    | 'alarm'
    | 'critical'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'success'
    | 'custom' = 'primary';

  /**
   * Show pill as outline
   */
  @Prop() outline = false;

  /**
   * Show icon
   */
  @Prop() icon: string | undefined;

  /**
   * Custom color for pill. Only working for `variant='custom'`
   */
  @Prop() background: string | undefined;

  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  @Prop() color: string | undefined;

  /**
   * Align pill content left
   */
  @Prop() alignLeft = false;

  render() {
    return (
      <Host
        class={{
          outline: this.outline,
          'align-left': this.alignLeft,
        }}
        style={
          this.variant === 'custom'
            ? {
                color: this.color,
                backgroundColor: this.background,
              }
            : {}
        }
        title={this.el.textContent}
      >
        {this.icon ? (
          <ix-icon class={'with-icon'} name={this.icon} size={'16'} />
        ) : null}
        <div class="slot">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
