/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';
import { getButtonClasses } from './base-button';

export type ButtonVariant = 'Primary' | 'Secondary';

@Component({
  tag: 'ix-button',
  shadow: true,
  styleUrl: './button.scss',
})
export class Button {
  /**
   * Button variant
   */
  @Prop() variant: ButtonVariant = 'Primary';

  /**
   * Outline button
   */
  @Prop() outline = false;

  /**
   * Invisible button
   *
   * @deprecated use ghost property
   */
  @Prop() invisible = false;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = false;

  /**
   * Show button as selected. Should be used with outline or ghost
   */
  @Prop() selected = false;

  /**
   * Disable the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Type of the button
   */
  @Prop() type: 'button' | 'submit' = 'button';

  /**
   * Loading button
   */
  @Prop() loading: boolean = false;

  /**
   * Icon name
   */
  @Prop() icon: string;

  @Element() hostElement: HTMLIxButtonElement;

  dispatchFormEvents() {
    if (this.type === 'submit') {
      const form = this.hostElement.closest('form');

      if (form) {
        form.dispatchEvent(new Event('submit'));
      }
    }
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
      >
        <button
          onClick={() => this.dispatchFormEvents()}
          type={this.type}
          class={getButtonClasses(
            this.variant,
            this.outline,
            this.ghost || this.invisible,
            false,
            false,
            this.selected,
            this.disabled || this.loading
          )}
        >
          <ix-spinner class={{ hidden: !this.loading }}></ix-spinner>
          <ix-icon
            class={{ hidden: this.loading || this.icon === undefined }}
            name={this.icon}
          ></ix-icon>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
