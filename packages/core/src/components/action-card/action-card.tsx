/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { CardVariant } from '../card/card';

export type ActionCardVariant = CardVariant;

@Component({
  tag: 'ix-action-card',
  styleUrl: 'action-card.scss',
  shadow: true,
})
export class IxActionCard {
  /**
   * Card variant
   */
  @Prop() variant: ActionCardVariant = 'outline';

  /**
   * Card icon
   */
  @Prop() icon: string | undefined = undefined;

  /**
   * Aria label for the icon
   *
   * @since 2.3.0
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * Card heading
   */
  @Prop() heading?: string;

  /**
   * Card subheading
   */
  @Prop() subheading?: string;

  /**
   * Card selection
   */
  @Prop() selected = false;

  /**
   * Aria Label for the card
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelCard?: string;

  private getSubheadingTextColor() {
    return this.variant === 'outline' || this.variant === 'filled'
      ? 'soft'
      : undefined;
  }

  render() {
    return (
      <Host>
        <ix-card
          selected={this.selected}
          variant={this.variant}
          class={'pointer'}
          aria-label={this.ariaLabelCard}
          aria-labelledby={
            !this.ariaLabelCard ? 'ix-action-card-heading' : undefined
          }
        >
          <ix-card-content>
            {this.icon ? (
              <ix-icon
                class={'icon'}
                name={this.icon}
                size="32"
                aria-label={this.ariaLabelIcon}
              ></ix-icon>
            ) : null}
            <div>
              {this.heading ? (
                <ix-typography
                  id="ix-action-card-heading"
                  aria-hidden="true"
                  format="h4"
                >
                  {this.heading}
                </ix-typography>
              ) : null}
              {this.subheading ? (
                <ix-typography
                  format="h5"
                  text-color={this.getSubheadingTextColor()}
                >
                  {this.subheading}
                </ix-typography>
              ) : null}
              <slot></slot>
            </div>
          </ix-card-content>
        </ix-card>
      </Host>
    );
  }
}
