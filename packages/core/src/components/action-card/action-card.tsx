/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';
import type { ActionCardVariant } from './action-card.types';
import { a11yBoolean, getFallbackLabelFromIconName } from '../utils/a11y';

@Component({
  tag: 'ix-action-card',
  styleUrl: 'action-card.scss',
  shadow: true,
})
export class IxActionCard {
  @Element() hostElement!: HTMLIxActionCardElement;

  /**
   * Card variant
   */
  @Prop() variant: ActionCardVariant = 'outline';

  /**
   * Card icon
   */
  @Prop() icon: string | undefined = undefined;

  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
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
   * ARIA label for the card
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelCard?: string;

  /**
   * If true, disables hover and active styles and changes cursor to default
   */
  @Prop() passive: boolean = false;

  private onKeyDown(event: KeyboardEvent) {
    if (this.passive) {
      return;
    }

    if (event.target !== this.hostElement) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.hostElement.click();
    }
  }

  private getSubheadingTextColor() {
    return this.variant === 'outline' || this.variant === 'filled'
      ? 'soft'
      : undefined;
  }

  render() {
    const ariaLabelledBy =
      !this.ariaLabelCard && this.heading
        ? 'ix-action-card-heading'
        : undefined;

    const isInteractive = !this.passive;
    return (
      <Host
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : -1}
        onKeyDown={(event: KeyboardEvent) => this.onKeyDown(event)}
        aria-label={this.ariaLabelCard}
        aria-labelledby={ariaLabelledBy}
      >
        <ix-card
          selected={this.selected}
          variant={this.variant}
          passive={this.passive}
          class={'pointer'}
        >
          <ix-card-content>
            {this.icon ? (
              <ix-icon
                class={'icon'}
                name={this.icon}
                size="32"
                aria-label={
                  this.ariaLabelIcon || getFallbackLabelFromIconName(this.icon)
                }
              ></ix-icon>
            ) : null}
            <div>
              {this.heading ? (
                <ix-typography
                  id="ix-action-card-heading"
                  aria-hidden={a11yBoolean(!ariaLabelledBy)}
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
