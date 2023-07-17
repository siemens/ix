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

export type PushCardVariant = CardVariant;

/**
 * @since 1.6.0
 */
@Component({
  tag: 'ix-push-card',
  styleUrl: 'push-card.scss',
  shadow: true,
})
export class PushCard {
  /**
   * Card icon
   */
  @Prop() icon: string | undefined = undefined;

  /**
   * Card KPI value
   */
  @Prop() notification: string;

  /**
   * Card heading
   */
  @Prop() heading: string;

  /**
   * Card subheading
   */
  @Prop() subheading: string;

  /**
   * Card variant
   */
  @Prop() variant: PushCardVariant = 'insight';

  render() {
    return (
      <Host>
        <ix-card variant={this.variant}>
          <ix-card-title>
            {this.icon ? (
              <ix-icon class={'icon'} name={this.icon} size="32"></ix-icon>
            ) : null}
            <span class={'notification'}>{this.notification ?? 0}</span>
            <slot name="title-action"></slot>
          </ix-card-title>
          <ix-card-content>
            <ix-typography variant="default-title-single">
              {this.heading}
            </ix-typography>
            <ix-typography>{this.subheading}</ix-typography>
          </ix-card-content>
          <ix-card-accordion>
            <slot></slot>
          </ix-card-accordion>
        </ix-card>
      </Host>
    );
  }
}
