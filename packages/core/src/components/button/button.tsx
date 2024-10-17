/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';
import { BaseButton, BaseButtonProps } from './base-button';

export type ButtonVariant = 'danger' | 'primary' | 'secondary';

@Component({
  tag: 'ix-button',
  shadow: true,
  styleUrl: './button.scss',
})
export class Button {
  /**
   * Button variant
   * @since 2.3.0 - variant danger
   */
  @Prop() variant: ButtonVariant = 'primary';

  /**
   * Outline button
   */
  @Prop() outline = false;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = false;

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
  @Prop() icon?: string;

  /** @internal */
  @Prop() alignment: 'center' | 'start' = 'center';

  /** @internal */
  @Prop() iconSize: '12' | '16' | '24' = '24';

  @Element() hostElement!: HTMLIxButtonElement;

  /**
   * Temp. workaround until stencil issue is fixed (https://github.com/ionic-team/stencil/issues/2284)
   */
  submitButtonElement?: HTMLButtonElement;

  @Listen('click', { capture: true })
  handleClick(event: Event) {
    if (this.disabled || this.loading) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

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
    if (
      this.type === 'submit' &&
      this.submitButtonElement &&
      !this.disabled &&
      !this.loading
    ) {
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
      selected: false,
      disabled: this.disabled || this.loading,
      icon: this.icon,
      iconSize: this.iconSize,
      loading: this.loading,
      onClick: () => this.dispatchFormEvents(),
      type: this.type,
      alignment: this.alignment,
    };

    return (
      <Host
        class={{
          disabled: this.disabled || this.loading,
        }}
      >
        <BaseButton {...baseButtonProps}>
          <slot></slot>
        </BaseButton>
      </Host>
    );
  }
}
