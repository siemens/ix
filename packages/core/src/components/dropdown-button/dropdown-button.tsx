/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { Buttons } from '../utils/button-variants';

@Component({
  tag: 'ix-dropdown-button',
  styleUrl: 'dropdown-button.scss',
  scoped: true,
})
export class TimePicker {
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
  @Prop() disabled = false;

  /**
   * Set label
   */
  @Prop() label = '';

  /**
   * Button icon
   */
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <ix-button
          variant={this.variant}
          outline={this.outline}
          ghost={this.ghost}
          disabled={this.disabled}
          class={{ hide: this.label === '' }}
        >
          <ix-icon
            name={this.icon}
            size="24"
            class={{ hide: this.icon === '' }}
          ></ix-icon>
          {this.label}
          <ix-icon name="chevron-down-small" size="24"></ix-icon>
        </ix-button>

        <ix-icon-button
          icon={this.icon}
          variant={this.variant}
          outline={this.outline}
          ghost={this.ghost}
          disabled={this.disabled}
          class={{ hide: this.label !== '' }}
          dropdownTriangle
        ></ix-icon-button>
      </Host>
    );
  }
}
