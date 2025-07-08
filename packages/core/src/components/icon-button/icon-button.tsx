/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';
import { BaseButtonProps } from '../button/base-button';
import { BaseIconButton } from '../icon-button/base-icon-button';
import {
  getFallbackLabelFromIconName,
  a11yHostAttributes,
} from '../utils/a11y';
import type { IconButtonVariant } from './icon-button.types';

@Component({
  tag: 'ix-icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true,
})
export class IconButton {
  @Element() hostElement!: HTMLIxIconButtonElement;

  /**
   * Accessibility label for the icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @deprecated Set the native `aria-label` on the ix-icon-button host element
   */
  @Prop({ attribute: 'a11y-label' }) a11yLabel?: string;

  /**
   * Variant of button
   */
  @Prop() variant: IconButtonVariant = 'secondary';

  /**
   * Button outline
   */
  @Prop() outline: boolean = false;

  /**
   * Button invisible
   */
  @Prop() ghost: boolean = false;

  /**
   * Button in oval shape
   */
  @Prop() oval: boolean = false;

  /**
   * Icon name
   */
  @Prop() icon?: string;

  /**
   * Size of icon in button
   *
   */
  @Prop() size: '24' | '16' | '12' = '24';

  /**
   * Color of icon in  button
   */
  @Prop() iconColor?: string;

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
   */
  @Prop() loading = false;

  /**
   * Temp. workaround until stencil issue is fixed (https://github.com/ionic-team/stencil/issues/2284)
   */
  submitButtonElement!: HTMLButtonElement;

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
      'btn-icon-32': this.size === '24' || !this.size,
    };
  }

  render() {
    const a11y = a11yHostAttributes(this.hostElement);

    const baseButtonProps: BaseButtonProps = {
      ariaAttributes: {
        'aria-label':
          a11y['aria-label'] ??
          this.a11yLabel ??
          getFallbackLabelFromIconName(this.icon),
      },
      variant: this.variant,
      outline: this.outline,
      ghost: this.ghost,
      iconOnly: true,
      iconOval: this.oval,
      selected: false,
      disabled: this.disabled || this.loading,
      icon: this.icon,
      iconColor: this.iconColor,
      iconSize: this.size,
      loading: this.loading,
      onClick: () => this.dispatchFormEvents(),
      type: this.type,
      extraClasses: this.getIconSizeClass(),
    };

    return (
      <Host
        class={{
          ...this.getIconSizeClass(),
          disabled: this.disabled || this.loading,
        }}
      >
        <BaseIconButton {...baseButtonProps}></BaseIconButton>
      </Host>
    );
  }
}
