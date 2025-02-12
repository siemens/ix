/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AttachInternals,
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import { BaseButton, BaseButtonProps } from './base-button';
import { IxButtonComponent } from './button-component';

export type ButtonVariant = 'danger' | 'primary' | 'secondary';

@Component({
  tag: 'ix-button',
  shadow: true,
  styleUrl: './button.scss',
  formAssociated: true,
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

  @AttachInternals() internals!: ElementInternals;

  @Listen('click', { capture: true })
  handleClick(event: Event) {
    if (this.disabled || this.loading) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private getAssociatedForm(): HTMLFormElement | null {
    if (this.internals && 'form' in this.internals && this.internals.form) {
      return this.internals.form;
    }
    return this.hostElement.closest('form');
  }

  dispatchFormEvents() {
    if (this.type === 'submit' && !this.disabled && !this.loading) {
      const form = this.getAssociatedForm();
      if (form) {
        if (typeof form.requestSubmit === 'function') {
          form.requestSubmit();
        } else {
          form.submit();
        }
      }
    }
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
