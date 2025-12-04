/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { AlignedPlacement } from '../dropdown/placement';
import {
  iconChevronDownSmall,
  iconChevronUpSmall,
} from '@siemens/ix-icons/icons';
import { makeRef } from '../utils/make-ref';
import type { DropdownButtonVariant } from './dropdown-button.types';
import { a11yBoolean } from '../utils/a11y';

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
   * Disable button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Set label
   */
  @Prop() label?: string;

  /**
   * Button icon
   */
  @Prop() icon?: string;

  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   */
  @Prop() closeBehavior: 'inside' | 'outside' | 'both' | boolean = 'both';

  /**
   * Placement of the dropdown
   */
  @Prop() placement?: AlignedPlacement;

  /**
   * ARIA label for the dropdown button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelDropdownButton?: string;

  @State() dropdownShow = false;

  private readonly dropdownAnchor = makeRef<HTMLElement>();

  private getTriangle() {
    return (
      <div
        class={{
          triangle: true,
          [this.variant]: true,
          hide: !!this.label,
          disabled: this.disabled,
        }}
      ></div>
    );
  }

  private readonly onDropdownShowChanged = (event: CustomEvent<boolean>) => {
    if (this.disabled && event.detail) {
      return;
    }
    this.dropdownShow = event.detail;
  };

  render() {
    return (
      <Host
        aria-disabled={a11yBoolean(this.disabled)}
        class={{
          disabled: this.disabled,
        }}
        ref={this.dropdownAnchor}
      >
        <div class="dropdown-button">
          {this.label ? (
            <ix-button
              variant={this.variant}
              disabled={this.disabled}
              alignment="start"
              ariaLabel={this.ariaLabelDropdownButton}
              tabIndex={this.disabled ? -1 : 0}
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
                <ix-icon
                  name={
                    this.dropdownShow
                      ? iconChevronUpSmall
                      : iconChevronDownSmall
                  }
                  size="24"
                ></ix-icon>
              </div>
            </ix-button>
          ) : (
            <div>
              <ix-icon-button
                icon={this.icon}
                variant={this.variant}
                disabled={this.disabled}
                tabIndex={this.disabled ? -1 : 0}
              ></ix-icon-button>
              {this.getTriangle()}
            </div>
          )}
        </div>

        <ix-dropdown
          class="dropdown"
          trigger={this.dropdownAnchor.waitForCurrent()}
          placement={this.placement}
          closeBehavior={this.closeBehavior}
          onShowChanged={this.onDropdownShowChanged}
        >
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}
