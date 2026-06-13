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
 * @since 5.1.0
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
   * @since 5.1.0
   */
  @Prop() image?: string;

  /**
   * Alt text for the image.
   * Use an empty string for decorative images; provide descriptive text for content images.
   *
   * @since 5.1.0
   */
  @Prop() imageAlt = '';

  render() {
    if (!this.image) {
      return null;
    }

    return (
      <Host>
        <img src={this.image} alt={this.imageAlt} />
      </Host>
    );
  }
}
