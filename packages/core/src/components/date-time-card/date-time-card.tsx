/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

export type DateTimeCardCorners = 'rounded' | 'left' | 'right' | 'straight';

/**
 * @internal
 */
@Component({
  tag: 'ix-date-time-card',
  styleUrl: 'date-time-card.scss',
  shadow: true,
})
export class DateTimeCard {
  /** @internal */
  @Prop() standaloneAppearance?: boolean;

  /**
   * Display header
   */
  @Prop() hasHeader: boolean = true;

  /**
   * Display footer
   */
  @Prop() hasFooter: boolean = false;

  /**
   * set styles
   */
  @Prop() individual: boolean = true;

  /**
   * Set corners style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  private cardClasses() {
    return {
      card: true,
      standaloneAppearance: this.standaloneAppearance ?? this.individual,
      rounded: this.corners === 'rounded',
      left: this.corners === 'left',
      right: this.corners === 'right',
    };
  }

  render() {
    return (
      <Host>
        <div class={this.cardClasses()}>
          {this.hasHeader && (
            <div class="header-container">
              <div class="header">
                <slot name="header"></slot>
              </div>
              <div class="separator"></div>
            </div>
          )}

          <div class="content">
            <slot></slot>
          </div>

          {this.hasFooter && (
            <div class="footer-container">
              <div class="separator"></div>
              <div class="footer">
                <slot name="footer"></slot>
              </div>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
