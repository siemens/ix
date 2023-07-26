/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';
import { BaseButton, BaseButtonProps } from './base-button';

export type ButtonVariant = 'primary' | 'secondary';

@Component({
  tag: 'ix-button',
  shadow: true,
  styleUrl: './button.scss',
})
export class Button {
  /**
   * Button variant
   */
  @Prop() variant: ButtonVariant = 'primary';

  /**
   * Outline button
   */
  @Prop() outline = false;

  /**
   * Invisible button
   *
   * @deprecated use ghost property
   */
  @Prop() invisible = false;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = false;

  /**
   * Show button as selected. Should be used with outline or ghost
   */
  @Prop() selected = false;

  /**
   * Disable the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Type of the button
   */
  @Prop() type: 'button' | 'submit' = 'button';

  /**
   * Loading button
   *
   * @since 2.0.0
   */
  @Prop() loading: boolean = false;

  /**
   * Icon name
   */
  @Prop() icon: string;

  @Element() hostElement: HTMLIxButtonElement;

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

  render() {
    const baseButtonProps: BaseButtonProps = {
      variant: this.variant,
      outline: this.outline,
      ghost: this.ghost,
      iconOnly: false,
      iconOval: false,
      selected: this.selected,
      disabled: this.disabled || this.loading,
      icon: this.icon,
      loading: this.loading,
      onClick: () => this.dispatchFormEvents(),
      type: this.type,
    };

    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
      >
        <BaseButton {...baseButtonProps}>
          <slot></slot>
        </BaseButton>
      </Host>
    );
  }
}
