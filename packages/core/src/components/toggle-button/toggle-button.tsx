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
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { BaseButton, BaseButtonProps } from '../button/base-button';
import { BaseButtonVariant } from '../button/base-button.types';
import { ButtonVariant } from '../button/button';
import {
  a11yBoolean,
  a11yHostAttributes,
  getFallbackLabelFromIconName,
} from '../utils/a11y';

export type ToggleButtonVariant = Exclude<
  ButtonVariant,
  `danger-${BaseButtonVariant}`
>;

@Component({
  tag: 'ix-toggle-button',
  shadow: true,
  styleUrl: './toggle-button.scss',
})
export class ToggleButton {
  @Element() hostElement!: HTMLIxToggleButtonElement;

  /**
   * Button variant.
   */
  @Prop() variant: ToggleButtonVariant = 'subtle-primary';

  /**
   * Disable the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Loading button
   */
  @Prop() loading: boolean = false;

  /**
   * Icon name
   */
  @Prop() icon?: string;

  /**
   * Icon name for the right side of the button
   * @since 4.0.0
   */
  @Prop() iconRight?: string;

  /**
   * Show button as pressed
   */
  @Prop() pressed = false;

  /**
   * ARIA label that will be set on the native HTML button element
   * @since 3.2.0
   */
  @Prop() ariaLabelButton?: string;

  /**
   * Pressed change event
   */
  @Event() pressedChange!: EventEmitter<boolean>;

  private dispatchPressedChange() {
    this.pressedChange.emit(!this.pressed);
  }

  render() {
    const a11y = a11yHostAttributes(this.hostElement);

    const baseButtonProps: BaseButtonProps = {
      variant: this.variant,
      iconOnly: false,
      iconOval: false,
      selected: this.pressed,
      disabled: this.disabled || this.loading,
      icon: this.icon,
      iconRight: this.iconRight,
      loading: this.loading,
      onClick: () => this.dispatchPressedChange(),
      type: 'button',
      ariaAttributes: {
        'aria-pressed': a11yBoolean(this.pressed),
        'aria-label':
          a11y['aria-label'] ??
          this.ariaLabelButton ??
          getFallbackLabelFromIconName(this.icon),
        'aria-describedby': a11y['aria-describedby'],
      },
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
