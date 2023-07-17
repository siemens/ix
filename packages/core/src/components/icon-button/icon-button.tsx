/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
import { Button, ButtonVariant } from '../button/button';

export type IconButtonVariant = ButtonVariant;

@Component({
  tag: 'ix-icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true,
})
export class IconButton implements Button {
  @Element() hostElement: HTMLIxIconButtonElement;

  /**
   * Variant of button
   */
  @Prop() variant: IconButtonVariant = 'Secondary';

  /**
   * Button outline
   */
  @Prop() outline: boolean;

  /**
   * Button invisible
   *
   * @deprecated Use ghost property
   */
  @Prop() invisible: boolean;

  /**
   * Button invisible
   */
  @Prop() ghost: boolean;

  /**
   * Button in oval shape
   */
  @Prop() oval: boolean;

  /**
   * Icon name
   */
  @Prop() icon: string;

  /**
   * Size of icon in button
   *
   * @deprecated Only size 32 will be removed in 3.0.0
   */
  @Prop() size: '32' | '24' | '16' | '12' = '24';

  /**
   * Color of icon in  button
   */
  @Prop() color: string;

  /**
   * Selected state only working with outline or invisible
   */
  @Prop() selected = false;

  /**
   * Disabled
   */
  @Prop() disabled = false;

  /**
   * Type of the button
   */
  @Prop() type: 'button' | 'submit' = 'button';

  /**
   * Loading button
   *
   * @since 2.0.0
   */
  @Prop() loading = false;

  /**
   * Temp. workaround until stencil issue is fixed (https://github.com/ionic-team/stencil/issues/2284)
   */
  submitButtonElement: HTMLButtonElement;

  componentDidLoad() {
    if (this.type === 'submit') {
      const submitButton = document.createElement('button');
      submitButton.style.display = 'none';
      submitButton.type = 'submit';
      submitButton.tabIndex = -1;
      this.hostElement.appendChild(submitButton);

      this.submitButtonElement = submitButton;
    }
  }

  dispatchFormEvents() {
    if (this.type === 'submit' && this.submitButtonElement) {
      this.submitButtonElement.click();
    }
  }

  private getIconSizeClass() {
    return {
      'btn-icon-12': this.size === '12',
      'btn-icon-16': this.size === '16',
      'btn-icon-32': this.size === '32' || this.size === '24' || !this.size,
    };
  }

  private getIconButtonClasses() {
    return {
      ...getButtonClasses(
        this.variant,
        this.outline,
        this.ghost || this.invisible,
        true,
        this.oval,
        this.selected,
        this.disabled || this.loading
      ),
      'icon-button': true,
      ...this.getIconSizeClass(),
    };
  }

  render() {
    return (
      <Host class={{ ...this.getIconSizeClass(), disabled: this.disabled }}>
        <button
          class={this.getIconButtonClasses()}
          type={this.type}
          onClick={() => this.dispatchFormEvents()}
        >
          {this.loading ? (
            <ix-spinner size="small" hideTrack></ix-spinner>
          ) : null}
          {this.icon && !this.loading ? (
            <ix-icon
              size={this.size}
              name={this.icon}
              color={this.color}
            ></ix-icon>
          ) : null}
        </button>
      </Host>
    );
  }
}
