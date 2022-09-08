/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';

export type DateTimeCardCorners = 'rounded' | 'left' | 'right';

@Component({
  tag: 'ix-date-time-card',
  styleUrl: 'date-time-card.scss',
  scoped: true,
})
export class DateTimeCard {
  @Element() hostElement: HTMLIxDateTimeCardElement;

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
      individual: this.individual,
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
