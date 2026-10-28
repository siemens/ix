/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconArrowRight,
  iconChevronRightSmall,
  iconDocument,
  iconOpenExternal,
} from '@siemens/ix-icons/icons';
import { Component, h, Host, Listen, Prop } from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';

const linkIcons = {
  internal: iconChevronRightSmall,
  external: iconOpenExternal,
  file: iconDocument,
  action: iconArrowRight,
};

/**
 * Button styled as a hyperlink that navigates to a target.
 *
 * @documentation https://ix.siemens.io//docs/components/link-button/guide.md
 * @figma-main-component-id 107603:15976
 *
 * @slot - Link button label.
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
   *
   * The value is forwarded unchanged to the `href` of the native anchor. URL schemes such as
   * `javascript:` or `data:` are not rejected. Do not bind untrusted input; validate destinations
   * against an allowlist (for example `https:` and relative URLs).
   */
  @Prop() url?: string;

  /**
   * Specifies where to open the link
   *
   * https://www.w3schools.com/html/html_links.asp
   */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /**
   * Icon displayed alongside the link label. Defaults to `none`.
   * @since 6.0.0
   */
  @Prop() icon: 'none' | 'internal' | 'external' | 'file' | 'action' = 'none';

  /**
   * Position of the icon relative to the link label.
   * @since 6.0.0
   */
  @Prop() iconPosition: 'start' | 'end' = 'start';

  @Listen('click', { capture: true })
  handleClick(event: Event) {
    if (this.disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  render() {
    const icon = this.icon !== 'none' && (
      <ix-icon
        class="icon"
        name={linkIcons[this.icon]}
        size="16"
        aria-hidden="true"
      ></ix-icon>
    );

    return (
      <Host>
        <a
          aria-disabled={a11yBoolean(this.disabled)}
          tabindex={this.disabled ? -1 : undefined}
          class={{
            'link-button': true,
            disabled: this.disabled,
          }}
          href={this.disabled ? undefined : this.url}
          target={this.target}
          role={this.disabled ? 'link' : undefined}
        >
          {this.iconPosition === 'start' && icon}
          <div
            class={{
              link: true,
              disabled: this.disabled,
            }}
          >
            <slot></slot>
          </div>
          {this.iconPosition === 'end' && icon}
        </a>
      </Host>
    );
  }
}
