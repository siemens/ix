/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import { Component, h, Host, Prop } from '@stencil/core';
import { getSafeNavigationUrl } from '../utils/condition-checks';

/**
 * @slot default - Link button label.
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
   * Relative, HTTP(S), mailto, or tel URL for the link button
   */
  @Prop() url?: string;

  /**
   * Specifies where to open the link
   *
   * https://www.w3schools.com/html/html_links.asp
   */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  render() {
    const url = this.disabled
      ? undefined
      : getSafeNavigationUrl(this.url, 'ix-link-button');

    return (
      <Host>
        <a
          title={url}
          tabindex={url ? '0' : '-1'}
          class={{
            'link-button': true,
            disabled: this.disabled,
          }}
          href={url}
          target={this.target}
        >
          <ix-icon
            class="icon"
            name={iconChevronRightSmall}
            size="16"
            aria-hidden="true"
          ></ix-icon>
          <div
            class={{
              link: true,
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
