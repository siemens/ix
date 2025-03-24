/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';
import { BaseButton, BaseButtonProps } from './base-button';
import { IxButtonComponent } from './button-component';

export type ButtonVariant = 'danger' | 'primary' | 'secondary';

@Component({
  tag: 'ix-button',
  shadow: true,
  styleUrl: './button.scss',
})
export class Button implements IxButtonComponent {
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

  @Prop() form?: string;

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
    if (this.type !== 'submit') {
      return;
    }
    const submitButton = document.createElement('button');
    submitButton.style.display = 'none';
    submitButton.type = 'submit';
    submitButton.tabIndex = -1;

    if (this.form) {
      submitButton.setAttribute('form', this.form);
    }
    this.hostElement.appendChild(submitButton);
    this.submitButtonElement = submitButton;
  }

  @Watch('form')
  handleFormChange(newValue: string | undefined) {
    if (this.submitButtonElement) {
      if (newValue) {
        this.submitButtonElement.setAttribute('form', newValue);
      } else {
        this.submitButtonElement.removeAttribute('form');
      }
    }
  }

  componentDidRender() {
    if (
      this.submitButtonElement &&
      !this.hostElement.contains(this.submitButtonElement)
    ) {
      this.hostElement.appendChild(this.submitButtonElement);
    }
  }

  dispatchFormEvents() {
    if (
      this.disabled ||
      this.loading ||
      this.type !== 'submit' ||
      !this.submitButtonElement
    ) {
      return;
    }

    const formElement = this.form
      ? (document.getElementById(this.form) as HTMLFormElement | null)
      : null;

    if (!formElement) {
      this.submitButtonElement.click();
      console.warn('No form found to submit.');
      return;
    }

    const submitEvent = new Event('submit', {
      bubbles: true,
      cancelable: true,
    });
    formElement.dispatchEvent(submitEvent);
  }

  setFocus() {
    this.hostElement.shadowRoot!.querySelector('button')?.focus();
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
      tabIndex: this.hostElement.tabIndex,
    };

    return (
      <Host
        tabindex={this.disabled ? -1 : 0}
        class={{
          disabled: this.disabled || this.loading,
        }}
        onFocus={() => this.setFocus()}
      >
        <BaseButton {...baseButtonProps}>
          <slot></slot>
        </BaseButton>
      </Host>
    );
  }
}
