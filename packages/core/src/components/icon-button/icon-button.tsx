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
  scoped: true,
})
export class IconButton implements Button {
  /**
   * Accessibility label for the icon button
   */
  @Prop() ariaLabel: string;

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

  private fallbackLabel() {
    if (this.icon != null) {
      let label = this.icon;
      let wordList = label
        .replace('-filled', '')
        .split('-')
        .filter(item => item);

      for (let i = 0; i < wordList.length; i++) {
        wordList[i] = wordList[i].trim();
        let digitless = wordList[i].replace(/\d+/g, '');
        if (digitless.length > 0)
          wordList[i] = digitless;

        if (wordList[i].length > 0)
          wordList[i] = wordList[i][0].toUpperCase() + wordList[i].slice(1).toLowerCase();
      }

      label = wordList.filter(item => item).join(' ');
      if (label.length > 0)
        return label;
    }

    return 'Unknown';
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
      'btn-icon-12': this.size === '12',
      'btn-icon-16': this.size === '16',
      'btn-icon-32': this.size === '32' || this.size === '24' || !this.size,
    };
  }

  render() {
    return (
      <Host class={{ disabled: this.disabled }}>
        <button
          class={this.getIconButtonClasses()}
          type={this.type}
          aria-label={this.ariaLabel ? this.ariaLabel : this.fallbackLabel()}
          disabled={this.disabled}
        >
          <ix-icon size={this.size} name={this.icon} color={this.color} />
          <div style={{ display: 'none' }}>
            <slot></slot>
          </div>
        </button>
      </Host>
    );
  }
}
