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
   *
   * @since 2.0.0
   */
  @Prop() loading: boolean = false;

  /**
   * Icon name
   */
  @Prop() icon: string;

  @Element() hostElement: HTMLIxButtonElement;

  /**
   * Temp. workaround until stencil issue is fixed (https://github.com/ionic-team/stencil/issues/2284)
   */
  submitButtonElement: HTMLButtonElement;

  componentDidLoad() {
    if (this.type === 'submit') {
      const submitButton = document.createElement('button');
      submitButton.style.display = 'none';
      submitButton.type = 'submit';
      submitButton.tabIndex = -1;
      this.hostElement.appendChild(submitButton);

      this.submitButtonElement = submitButton;
    }
  }

  dispatchFormEvents() {
    if (this.type === 'submit' && this.submitButtonElement) {
      this.submitButtonElement.click();
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
          {this.loading ? (
            <ix-spinner size="small" hideTrack></ix-spinner>
          ) : null}
          {this.icon && !this.loading ? (
            <ix-icon name={this.icon}></ix-icon>
          ) : null}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
