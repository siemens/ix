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

/**
 * @since 2.0.0
 */
@Component({
  tag: 'ix-toggle-button',
  shadow: true,
  styleUrl: './toggle-button.scss',
})
export class ToggleButton {
  /**
   * Icon name
   */
  @Prop() icon: string;

  /**
   * Show button as pressed
   */
  @Prop() pressed = false;

  /**
   * Disable the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Pressed change event
   */
  @Event() pressedChange: EventEmitter<boolean>;

  @Element() hostElement: HTMLIxToggleButtonElement;

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
      >
        <button
          aria-pressed={a11yBoolean(this.pressed)}
          class={getButtonClasses(
            'Secondary',
            false,
            true,
            false,
            false,
            this.pressed,
            this.disabled
          )}
          type="button"
          onClick={() => this.pressedChange.emit(!this.pressed)}
        >
          {this.icon ? <ix-icon name={this.icon}></ix-icon> : null}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
