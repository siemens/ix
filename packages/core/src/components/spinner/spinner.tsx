/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  @Element() hostElement!: HTMLIxSpinnerElement;

  /**
   * Variant of spinner
   */
  @Prop() variant: 'primary' | 'secondary' = 'secondary';

  /**
   * Size of spinner
   */
  @Prop() size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' =
    'medium';

  /**
   * @internal
   */
  @Prop() hideTrack = false;

  render() {
    return (
      <Host>
        <div
          class={{
            primary: this.variant === 'primary',
            'xx-small': this.size === 'xx-small',
            'x-small': this.size === 'x-small',
            small: this.size === 'small',
            medium: this.size === 'medium',
            large: this.size === 'large',
            'hide-track': this.hideTrack,
          }}
        ></div>
      </Host>
    );
  }
}
