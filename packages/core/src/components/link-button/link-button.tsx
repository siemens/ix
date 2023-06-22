/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @since 1.7.0
 */

@Component({
  tag: 'ix-link-button',
  styleUrl: 'link-button.scss',
  shadow: true,
})
export class LinkButton {
  /**
   * Disable the link button
   */
  @Prop() disabled = false;

  /**
   * Url for the link button
   */
  @Prop() url: string;

  render() {
    return (
      <Host>
        <a
          title={this.url}
          tabindex="0"
          class={{
            'link-button': true,
            disabled: this.disabled,
          }}
          href={this.disabled ? undefined : this.url}
        >
          <ix-icon class="icon" name="chevron-right-small" size="16"></ix-icon>
          <div
            class={{
              underline: true,
              disabled: this.disabled,
            }}
          >
            <slot></slot>
          </div>
        </a>
      </Host>
    );
  }
}
