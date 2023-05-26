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
  @Prop() variant: ActionCardVariant = 'insight';

  /**
   * Card icon
   */
  @Prop() icon: string | undefined = undefined;

  /**
   * Card heading
   */
  @Prop() heading: string;

  /**
   * Card subheading
   */
  @Prop() subheading: string;

  /**
   * Card selection
   */
  @Prop() selected = false;

  render() {
    return (
      <Host
        class={{
          selected: this.selected,
        }}
      >
        <ix-card variant={this.variant} class={'pointer'}>
          <ix-card-content>
            {this.icon ? (
              <ix-icon class={'icon'} name={this.icon} size="24"></ix-icon>
            ) : (
              ''
            )}
            {this.heading ? (
              <ix-typography variant="large-title">
                {this.heading}
              </ix-typography>
            ) : (
              ''
            )}
            {this.subheading ? (
              <ix-typography
                variant="default-title-single"
                color={this.variant === 'insight' ? 'soft' : undefined}
              >
                {this.subheading}
              </ix-typography>
            ) : null}
            <slot></slot>
          </ix-card-content>
        </ix-card>
      </Host>
    );
  }
}
