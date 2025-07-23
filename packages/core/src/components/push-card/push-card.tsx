/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import type { PushCardVariant } from './push-card.types';

@Component({
  tag: 'ix-push-card',
  styleUrl: 'push-card.scss',
  shadow: true,
})
export class PushCard {
  /**
   * Card icon
   */
  @Prop() icon?: string;

  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * Card KPI value
   */
  @Prop() notification?: string;

  /**
   * Card heading
   */
  @Prop() heading?: string;

  /**
   * Card subheading
   */
  @Prop() subheading?: string;

  /**
   * Card variant
   */
  @Prop() variant: PushCardVariant = 'outline';

  /**
   * Collapse the card
   */
  @Prop() collapse: boolean = true;

  render() {
    return (
      <Host>
        <ix-card variant={this.variant}>
          <ix-card-content>
            <ix-card-title>
              {this.icon ? (
                <ix-icon
                  class={'icon'}
                  name={this.icon}
                  size="32"
                  aria-label={this.ariaLabelIcon}
                ></ix-icon>
              ) : null}
              <ix-typography format="display-xxl">
                {this.notification ?? 0}
              </ix-typography>
              <slot name="title-action"></slot>
            </ix-card-title>
            <ix-typography format="h4">{this.heading}</ix-typography>
            <ix-typography>{this.subheading}</ix-typography>
          </ix-card-content>
          <ix-card-accordion collapse={this.collapse}>
            <slot></slot>
          </ix-card-accordion>
        </ix-card>
      </Host>
    );
  }
}
