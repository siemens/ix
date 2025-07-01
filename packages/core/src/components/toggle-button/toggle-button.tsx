/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { BaseButton, BaseButtonProps } from '../button/base-button';
import { ButtonVariant } from '../button/button';
import { a11yBoolean } from '../utils/a11y';

@Component({
  tag: 'ix-toggle-button',
  shadow: true,
  styleUrl: './toggle-button.scss',
})
export class ToggleButton {
  /**
   * Button variant.
   */
  @Prop() variant: ButtonVariant = 'secondary';

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
   * Loading button
   */
  @Prop() loading: boolean = false;

  /**
   * Icon name
   */
  @Prop() icon?: string;

  /**
   * Show button as pressed
   */
  @Prop() pressed = false;

  /**
   * Aria label for the button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 2.3.0
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
    const baseButtonProps: BaseButtonProps = {
      variant: this.variant,
      outline: this.outline,
      ghost: this.ghost,
      iconOnly: false,
      iconOval: false,
      selected: this.pressed,
      disabled: this.disabled || this.loading,
      icon: this.icon,
      loading: this.loading,
      onClick: () => this.dispatchPressedChange(),
      type: 'button',
      ariaAttributes: {
        'aria-pressed': a11yBoolean(this.pressed),
        'aria-label': this.ariaLabelButton,
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
