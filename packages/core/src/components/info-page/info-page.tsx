/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconWarning } from '@siemens/ix-icons/icons';
import { Component, h, Host, Prop, State } from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';

/**
 * A page layout for communicating information or errors and guiding users
 * towards a solution.
 *
 * @slot image - An optional illustration or custom icon replacing the default icon.
 * @slot actions - Optional actions related to the message.
 *
 * @since 6.0.0
 */
@Component({
  tag: 'ix-info-page',
  styleUrl: 'info-page.scss',
  shadow: true,
})
export class InfoPage {
  @State() hasActions = false;

  /**
   * Icon displayed above the title.
   *
   * @since 6.0.0
   */
  @Prop() icon: string = iconWarning;

  /**
   * Color of the default icon.
   *
   * @since 6.0.0
   */
  @Prop() iconColor: string = 'color-warning-text';

  /**
   * Short and concise title describing the topic.
   *
   * @since 6.0.0
   */
  @Prop() titleText!: string;

  /**
   * Optional explanation of the topic and how it can be resolved.
   *
   * @since 6.0.0
   */
  @Prop() copyText?: string;

  /**
   * Optional instructions describing what the user should do next.
   *
   * @since 6.0.0
   */
  @Prop() instructions?: string;

  private handleActionsSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasActions = slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }

  render() {
    return (
      <Host class={{ infoPage: true, 'infoPage--hasActions': this.hasActions }}>
        <div class="infoPage__content">
          <div class="content__image">
            <slot name="image">
              <ix-icon
                name={this.icon}
                color={this.iconColor}
                size="32"
                aria-hidden={a11yBoolean(true)}
              />
            </slot>
          </div>
          <div class="content__message">
            <h1>
              <ix-typography format="h1">{this.titleText}</ix-typography>
            </h1>

            {this.copyText && (
              <ix-typography class="message__copy" format="body-lg">
                {this.copyText}
              </ix-typography>
            )}

            {this.instructions && (
              <ix-typography class="message__instructions" text-color="soft">
                {this.instructions}
              </ix-typography>
            )}
          </div>

          <div class="content__action">
            <slot
              name="actions"
              onSlotchange={(event) => this.handleActionsSlotChange(event)}
            />
          </div>
        </div>
      </Host>
    );
  }
}
