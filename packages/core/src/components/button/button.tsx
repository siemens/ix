/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { getButtonClasses } from './base-button';

export type Buttons = 'Primary' | 'Secondary';

@Component({
  tag: 'ix-button',
  scoped: true,
  styleUrl: './button.scss',
})
export class Button {
  /**
   * Button varaint
   */
  @Prop() variant: Buttons = 'Primary';

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

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
      >
        <button
          type={this.type}
          class={getButtonClasses(
            this.variant,
            this.outline,
            this.ghost || this.invisible,
            false,
            false,
            this.selected,
            this.disabled
          )}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
