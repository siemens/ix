/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { ButtonVariant } from '../button/button';
import { AlignedPlacement } from '../dropdown/placement';

export type DropdownButtonVariant = ButtonVariant;

/**
 * @since 1.3.0
 */
@Component({
  tag: 'ix-dropdown-button',
  styleUrl: 'dropdown-button.scss',
  shadow: true,
})
export class DropdownButton {
  @Element() hostElement!: HTMLIxDropdownButtonElement;

  /**
   * Button variant
   */
  @Prop() variant: DropdownButtonVariant = 'primary';

  /**
   * Outline button
   */
  @Prop() outline = false;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = false;

  /**
   * Disable button
   */
  @Prop() disabled = false;

  /**
   * Set label
   */
  @Prop() label: string;

  /**
   * Button icon
   */
  @Prop() icon: string;

  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   * @since 2.1.0
   */
  @Prop() closeBehavior: 'inside' | 'outside' | 'both' | boolean = 'both';

  /**
   * Placement of the dropdown
   *
   * @since 2.0.0
   */
  @Prop() placement: AlignedPlacement;

  @State() dropdownAnchor!: HTMLElement;

  private getTriangle() {
    return (
      <div
        class={{
          triangle: true,
          hide: this.label !== '',
          primary: this.variant === 'primary',
          secondary: this.variant === 'secondary',
          ghost: this.ghost,
          outline: this.outline,
          disabled: this.disabled,
        }}
      ></div>
    );
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
      >
        <div
          class="dropdown-button"
          ref={(ref) => {
            this.dropdownAnchor = ref;
          }}
        >
          {this.label ? (
            <ix-button
              variant={this.variant}
              outline={this.outline}
              ghost={this.ghost}
              disabled={this.disabled}
              alignment="start"
            >
              <div class={'content'}>
                {this.icon ? (
                  <ix-icon
                    name={this.icon}
                    size="24"
                    class={'dropdown-icon'}
                  ></ix-icon>
                ) : null}
                <div class={'button-label'}>{this.label}</div>
                <ix-icon name={'chevron-down-small'} size="24"></ix-icon>
              </div>
            </ix-button>
          ) : (
            <div>
              <ix-icon-button
                icon={this.icon}
                variant={this.variant}
                outline={this.outline}
                ghost={this.ghost}
                disabled={this.disabled}
              ></ix-icon-button>
              {this.getTriangle()}
            </div>
          )}
        </div>

        <ix-dropdown
          class="dropdown"
          trigger={this.dropdownAnchor}
          placement={this.placement}
          closeBehavior={this.closeBehavior}
        >
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}
