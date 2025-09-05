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
import { AnchorTarget } from './button.interface';

export type ButtonVariant = 'danger' | 'primary' | 'secondary';

@Component({
  tag: 'ix-button',
  shadow: true,
  styleUrl: './button.scss',
})
export class Button implements IxButtonComponent {
  /**
   * ARIA label for the button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelButton?: string;

  /**
   * Button variant
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
   */
  @Prop() loading: boolean = false;

  /**
   * Provide a form element ID to automatically submit the from if the button is pressed. Only works in combination with type="submit".
   *
   * @since 3.1.0
   */
  @Prop() form?: string;

  /**
   * Icon name
   */
  @Prop() icon?: string;

  /**
   * Icon name for the right side of the button
   * @since 3.3.0
   */
  @Prop() iconRight?: string;

  /** @internal */
  @Prop() alignment: 'center' | 'start' = 'center';

  /** @internal */
  @Prop() iconSize: '12' | '16' | '24' = '24';

  /**
   * URL for the button link. When provided, the button will render as an anchor tag.
   *
   * @since 3.3.0
   */
  @Prop() href?: string;

  /**
   * Specifies where to open the linked document when href is provided.
   *
   * @since 3.3.0
   */
  @Prop() target?: AnchorTarget = '_self';

  /**
   * Specifies the relationship between the current document and the linked document when href is provided.
   *
   * @since 3.3.0
   */
  @Prop() rel?: string;

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
      this.type === 'submit' &&
      this.submitButtonElement &&
      !this.disabled &&
      !this.loading
    ) {
      this.submitButtonElement.click();
    }
  }

  setFocus() {
    this.hostElement
      .shadowRoot!.querySelector<HTMLButtonElement | HTMLAnchorElement>(
        this.href ? 'a' : 'button'
      )
      ?.focus();
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
      iconRight: this.iconRight,
      iconSize: this.iconSize,
      loading: this.loading,
      onClick: () => this.dispatchFormEvents(),
      type: this.type,
      alignment: this.alignment,
      tabIndex: this.hostElement.tabIndex,
      ariaAttributes: {
        'aria-label': this.ariaLabelButton,
      },
      href: this.href,
      target: this.target,
      rel: this.rel,
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
