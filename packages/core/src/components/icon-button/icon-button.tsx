/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Mixin, Prop } from '@stencil/core';
import { BaseButtonProps } from '../button/base-button';
import { BaseIconButton } from '../icon-button/base-icon-button';
import { getFallbackLabelFromIconName } from '../utils/a11y';
import { DefaultMixins } from '../utils/internal/component';
import {
  InheritAriaAttributesMixin,
  InheritAriaAttributesMixinContract,
} from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';
import type { IconButtonVariant } from './icon-button.types';

@Component({
  tag: 'ix-icon-button',
  styleUrl: 'icon-button.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class IconButton
  extends Mixin(...DefaultMixins, InheritAriaAttributesMixin)
  implements InheritAriaAttributesMixinContract
{
  @Element() override hostElement!: HTMLIxIconButtonElement;

  /**
   * Variant of button
   */
  @Prop() variant: IconButtonVariant = 'subtle-primary';

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

  override componentDidLoad() {
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

  override render() {
    const fallbackAriaLabel = getFallbackLabelFromIconName(this.icon);
    let ariaAttributes = this.inheritAriaAttributes || {};

    if (ariaAttributes['aria-label'] === undefined) {
      ariaAttributes = {
        ...ariaAttributes,
        'aria-label': fallbackAriaLabel,
      };
    }

    const baseButtonProps: BaseButtonProps = {
      ariaAttributes: ariaAttributes,
      variant: this.variant,
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
      tabIndex: this.hostElement.hasAttribute('tabindex')
        ? this.hostElement.tabIndex
        : undefined,
    };

    return (
      <Host
        class={{
          ...this.getIconSizeClass(),
          disabled: this.disabled || this.loading,
        }}
        tabIndex={this.disabled ? -1 : 0}
      >
        <BaseIconButton {...baseButtonProps}></BaseIconButton>
      </Host>
    );
  }
}
