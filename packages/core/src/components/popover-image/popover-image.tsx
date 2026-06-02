/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

/**
 * Optional image section for the popover.
 *
 * @since 5.0.0
 */
@Component({
  tag: 'ix-popover-image',
  styleUrl: 'popover-image.scss',
  shadow: true,
})
export class PopoverImage {
  /**
   * Image source URL
   *
   * @since 5.0.0
   */
  @Prop() src?: string;

  /**
   * Alt text for the image
   *
   * @since 5.0.0
   */
  @Prop() alt = '';

  render() {
    if (!this.src) {
      return null;
    }

    return (
      <Host>
        <img src={this.src} alt={this.alt} />
      </Host>
    );
  }
}
