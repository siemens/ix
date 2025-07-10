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

  @State() dropdownShow = false;

  private readonly dropdownAnchor = makeRef<HTMLElement>();

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

  private onDropdownShowChanged = (event: CustomEvent<boolean>) => {
    this.dropdownShow = event.detail;
  };

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
        ref={this.dropdownAnchor}
      >
        <div class="dropdown-button">
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
