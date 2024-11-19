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
  @Prop() standaloneAppearance?: boolean = undefined;

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
      standaloneAppearance:
        this.standaloneAppearance !== undefined
          ? this.standaloneAppearance
          : this.individual,
      rounded: this.corners === 'rounded',
      left: this.corners === 'left',
      right: this.corners === 'right',
    };
  }

  render() {
    return (
      <Host>
        <div class={this.cardClasses()}>
          <div class="header">
            <slot name="header"></slot>
          </div>

          <div class="separator"></div>

          <div class="content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
