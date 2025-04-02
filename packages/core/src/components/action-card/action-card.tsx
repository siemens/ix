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

/**
 * @since 1.6.0
 */
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

  render() {
    return (
      <Host>
        <ix-card
          selected={this.selected}
          variant={this.variant}
          class={'pointer'}
        >
          <ix-card-content>
            {this.icon ? (
              <ix-icon class={'icon'} name={this.icon} size="32"></ix-icon>
            ) : null}
            <div>
              {this.heading ? (
                <ix-typography format="h4">{this.heading}</ix-typography>
              ) : null}
              {this.subheading ? (
                <ix-typography format="h5">{this.subheading}</ix-typography>
              ) : null}
              <slot></slot>
            </div>
          </ix-card-content>
        </ix-card>
      </Host>
    );
  }
}
