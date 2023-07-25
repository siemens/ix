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
  Watch,
} from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
import { ButtonVariant } from '../button/button';
import { a11yBoolean } from '../utils/a11y';

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
   * Button variant.
   * Important: Variant 'Primary' can only be combined with either outline or ghost.
   */
  @Prop() variant: ButtonVariant = 'Secondary';

  /**
   * Outline button
   */
  @Prop() outline = true;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = false;

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
   * Loading button
   */
  @Prop() loading: boolean = false;

  /**
   * Type of the button
   */
  @Prop() type: 'button' | 'submit' = 'button';

  /**
   * Pressed change event
   */
  @Event() pressedChange: EventEmitter<boolean>;

  @Element() hostElement: HTMLIxIconToggleButtonElement;

  private getIconButtonClass() {
    return `btn-icon-${this.size}`;
  }

  private isIllegalToggleButtonConfig() {
    return this.variant === 'Primary' && (this.outline || this.ghost);
  }

  private logIllegalConfig() {
    console.warn(
      'iX toggle button with illegal configuration detected. Variant "Primary" can only be combined with "outline" or "ghost".'
    );
  }

  @Watch('variant')
  onVariantChange() {
    if (this.isIllegalToggleButtonConfig()) {
      this.logIllegalConfig();
    }
  }

  @Watch('ghost')
  onGhostChange() {
    this.onVariantChange();
  }

  @Watch('outline')
  onOutlineChange() {
    this.onVariantChange();
  }

  componentDidLoad() {
    this.onVariantChange();
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
              this.variant,
              this.outline,
              this.ghost,
              false,
              false,
              this.pressed,
              this.disabled || this.loading
            ),
            'icon-button': true,
            'btn-icon': true,
            [this.getIconButtonClass()]: true,
          }}
          tabindex={this.disabled ? -1 : 0}
          type={this.type}
          onClick={() => this.pressedChange.emit(!this.pressed)}
        >
          {this.loading ? (
            <ix-spinner size="small" hideTrack></ix-spinner>
          ) : this.icon ? (
            <ix-icon name={this.icon} size={this.size}></ix-icon>
          ) : null}
        </button>
      </Host>
    );
  }
}
