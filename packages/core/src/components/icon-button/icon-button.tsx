/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
import { Button, ButtonVariant } from '../button/button';

export type IconButtonVariant = ButtonVariant;

@Component({
  tag: 'ix-icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true,
})
export class IconButton implements Button {
  /**
   * Variant of button
   */
  @Prop() variant: IconButtonVariant = 'Secondary';

  /**
   * Button outline
   */
  @Prop() outline: boolean;

  /**
   * Button invisible
   *
   * @deprecated Use ghost property
   */
  @Prop() invisible: boolean;

  /**
   * Button invisible
   */
  @Prop() ghost: boolean;

  /**
   * Button in oval shape
   */
  @Prop() oval: boolean;

  /**
   * Button icon
   */
  @Prop() icon: string;

  /**
   * Size of icon in button
   */
  @Prop() size: '32' | '24' | '16' | '12' = '24';

  /**
   * Color of icon in  button
   */
  @Prop() color: string;

  /**
   * Selected state only working with outline or invisible
   */
  @Prop() selected = false;

  /**
   * Disabled
   */
  @Prop() disabled = false;

  /**
   * Type of the button
   */
  @Prop() type: 'button' | 'submit' = 'button';

  private getIconSizeClass() {
    return {
      'btn-icon-12': this.size === '12',
      'btn-icon-16': this.size === '16',
      'btn-icon-32': this.size === '32' || this.size === '24' || !this.size,
    };
  }

  private getIconButtonClasses() {
    return {
      ...getButtonClasses(
        this.variant,
        this.outline,
        this.ghost || this.invisible,
        true,
        this.oval,
        this.selected,
        this.disabled
      ),
      'icon-button': true,
      ...this.getIconSizeClass(),
    };
  }

  render() {
    return (
      <Host class={{ ...this.getIconSizeClass(), disabled: this.disabled }}>
        <button class={this.getIconButtonClasses()} type={this.type}>
          <ix-icon size={this.size} name={this.icon} color={this.color} />
          <div style={{ display: 'none' }}>
            <slot></slot>
          </div>
        </button>
      </Host>
    );
  }
}
