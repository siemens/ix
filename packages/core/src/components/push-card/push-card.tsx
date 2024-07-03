/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop, Watch } from '@stencil/core';
import { CardVariant } from '../card/card';
import { TypographyColors } from '../typography/typography';

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
   * Card KPI value
   * @deprecated will be removed in 3.0. Use heading instead.
   */
  @Prop() header: string;

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
   * @deprecated variant "insight" and "notification" will be removed in 3.0. Use "outline" or "filled" instead.
   */
  @Prop() variant: PushCardVariant = 'insight';

  /**
   * Collapse the card
   * @since 2.1.0
   */
  @Prop() collapse: boolean = true;

  @Watch('header')
  onHeaderChange() {
    this.notification = this.header;
  }

  render() {
    const color: TypographyColors | undefined =
      this.variant === 'insight' || this.variant === 'notification'
        ? 'std'
        : undefined;

    return (
      <Host>
        <ix-card variant={this.variant}>
          <ix-card-content>
            <ix-card-title>
              {this.icon ? (
                <ix-icon class={'icon'} name={this.icon} size="32"></ix-icon>
              ) : null}
              <span class={'notification'}>{this.notification ?? 0}</span>
              <slot name="title-action"></slot>
            </ix-card-title>
            <ix-typography color={color} format="h4">
              {this.heading}
            </ix-typography>
            <ix-typography color={color}>{this.subheading}</ix-typography>
          </ix-card-content>
          <ix-card-accordion collapse={this.collapse}>
            <slot></slot>
          </ix-card-accordion>
        </ix-card>
      </Host>
    );
  }
}
