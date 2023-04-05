/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ix-notification-card',
  styleUrl: 'notification-card.scss',
  scoped: true,
})
export class NotificationCard {
  /**
   * Card icon
   */
  @Prop() icon: string | undefined = undefined;

  /**
   * Card kpi value
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

  render() {
    return (
      <Host>
        <ix-card>
          <ix-card-title>
            <ix-icon
              class={'icon'}
              name={this.icon ?? 'rocket'}
              size="32"
            ></ix-icon>
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
