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
import { getButtonClasses } from '../button/base-button';
import { a11yBoolean } from '../utils/a11y';

export type ToggleButtonVariant = 'Primary' | 'Secondary';

/**
 * @since 2.0.0
 */
@Component({
  tag: 'ix-icon-toggle-button',
  shadow: true,
  styleUrl: './icon-toggle-button.scss',
})
export class IconToggleButton {
  /**
   * Icon name
   */
  @Prop() icon: string;

  /**
   * Show button as pressed
   */
  @Prop() pressed = false;

  /**
   * Size of icon in button
   */
  @Prop() size: '24' | '16' | '12' = '24';

  /**
   * Disable the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Pressed change event
   */
  @Event() toggle: EventEmitter<boolean>;

  @Element() hostElement: HTMLIxIconToggleButtonElement;

  private getIconButtonClass() {
    return `btn-icon-${this.size}`;
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
      >
        <button
          aria-pressed={a11yBoolean(this.pressed)}
          class={{
            ...getButtonClasses(
              'Secondary',
              false,
              true,
              false,
              false,
              this.pressed,
              this.disabled
            ),
            'icon-button': true,
            'btn-icon': true,
            [this.getIconButtonClass()]: true,
          }}
          type="button"
          onClick={() => this.toggle.emit(!this.pressed)}
        >
          {this.icon ? (
            <ix-icon name={this.icon} size={this.size}></ix-icon>
          ) : null}
        </button>
      </Host>
    );
  }
}
