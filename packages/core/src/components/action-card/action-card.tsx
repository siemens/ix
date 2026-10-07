/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { a11yBoolean, getFallbackLabelFromIconName } from '../utils/a11y';
import type { ActionCardVariant } from './action-card.types';

/**
 * Card that represents a selectable action or option to start a task or workflow.
 *
 * @documentation https://ix.siemens.io//docs/components/card/guide.md
 * @figma-main-component-id 104612:25269
 *
 * @slot - Card content.
 */
@Component({
  tag: 'ix-action-card',
  styleUrl: 'action-card.scss',
  shadow: true,
})
export class IxActionCard {
  /**
   * Card status variant
   */
  @Prop() variant: ActionCardVariant = 'default';

  /**
   * Show the card with an outline border.
   * When omitted, outline chrome is used (`true`).
   *
   * @since 6.0.0
   */
  @Prop() outline?: boolean;

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
   * Enable pointer interaction. When `false`, the wrapping button is disabled.
   * When omitted, the action card is clickable (`true`).
   *
   * @since 6.0.0
   */
  @Prop() clickable?: boolean;

  private get isOutline() {
    return this.outline !== false;
  }

  private get isClickable() {
    return this.clickable !== false;
  }

  private getSubheadingTextColor() {
    return this.variant === 'default' ? 'soft' : undefined;
  }

  render() {
    const ariaLabelledBy =
      !this.ariaLabelCard && this.heading
        ? 'ix-action-card-heading'
        : undefined;

    return (
      <Host>
        <button
          type="button"
          disabled={!this.isClickable}
          aria-label={this.ariaLabelCard}
          aria-labelledby={ariaLabelledBy}
        >
          <ix-card
            selected={this.selected}
            variant={this.variant}
            outline={this.isOutline}
            clickable={this.isClickable}
            class={this.isClickable ? 'pointer' : undefined}
          >
            <ix-card-content>
              {this.icon ? (
                <ix-icon
                  class={'icon'}
                  name={this.icon}
                  size="32"
                  aria-label={
                    this.ariaLabelIcon ||
                    getFallbackLabelFromIconName(this.icon)
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
        </button>
      </Host>
    );
  }
}
