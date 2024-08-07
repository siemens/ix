/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  shadow: true,
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
   *
   * @deprecated since 2.1.0 use `pill-color`
   */
  // eslint-disable-next-line @stencil-community/reserved-member-names
  @Prop() color: string | undefined;

  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  @Prop() pillColor: string | undefined;

  /**
   * Align pill content left
   */
  @Prop() alignLeft = false;

  render() {
    let customStyle = {};

    if (this.variant === 'custom') {
      customStyle = {
        color: this.pillColor ?? this.color,
        [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
      };
    }
    return (
      <Host
        style={
          this.variant === 'custom'
            ? {
                '--ix-icon-button-color': this.pillColor ?? this.color,
              }
            : {}
        }
        title={this.el.textContent}
        class={{
          'align-left': this.alignLeft,
        }}
      >
        <div
          style={{ ...customStyle }}
          class={{
            container: true,
            outline: this.outline,
            inactive: false,
            alarm: this.variant === 'alarm',
            critical: this.variant === 'critical',
            info: this.variant === 'info',
            neutral: this.variant === 'neutral',
            primary: this.variant === 'primary',
            success: this.variant === 'success',
            warning: this.variant === 'warning',
            custom: this.variant === 'custom',
            closable: false,
            icon: !!this.icon,
          }}
        >
          <ix-icon
            class={{
              'with-icon': true,
              hidden: this.icon === undefined || this.icon === '',
            }}
            name={this.icon}
            size={'16'}
          />
          <span class="slot-container">
            <slot></slot>
          </span>
        </div>
      </Host>
    );
  }
}
