/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// import {
//   createPopper,
//   Instance as PopperInstance,
//   Placement,
//   PositioningStrategy,
// } from '@popperjs/core';

import { Component, h, Host, Prop } from '@stencil/core';
import { Buttons } from '../utils/button-variants';

@Component({
  tag: 'ix-dropdown-button',
  styleUrl: 'dropdown-button.scss',
  shadow: true,
})
export class DropdownButton {
  /**
   * Button varaint
   */
  @Prop() variant: Buttons = 'Primary';

  /**
   * Outline button
   */
  @Prop() outline = false;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = false;

  /**
   * Active button
   */
  @Prop() active = false;

  /**
   * Disable button
   */
  @Prop() disable = false;

  /**
   * Set label
   */
  @Prop() label = '';

  /**
   * Icon button
   */
  @Prop() icon = false;

  private buttonClass = () => {
    return {
      button: true,
      primary: this.variant === 'Primary',
      secondary: this.variant === 'Secondary',
      outline: this.outline,
      ghost: this.ghost,
      active: this.active,
      disable: this.disable,
    };
  };

  private textClass = () => {
    return {
      text: true,
      primary: this.variant === 'Primary',
      secondary: this.variant === 'Secondary',
      outline: this.outline,
      ghost: this.ghost,
      active: this.active,
      disable: this.disable,
    };
  };

  render() {
    return (
      <div>
        <div class={this.buttonClass()}>
          <div class={this.textClass()}>
            <slot></slot>
            {this.label}
          </div>
          <div class={{ hide: this.icon === true && this.label === '' }}>
            <ix-icon name="star" size="16"></ix-icon>
          </div>
        </div>
      </div>
    );
  }
}
