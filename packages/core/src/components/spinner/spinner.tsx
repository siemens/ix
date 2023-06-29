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
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * @internal
   */
  @Prop() hideTrack = false;

  componentDidRender() {
    console.log(this.hostElement.clientWidth);
  }

  render() {
    return (
      <Host
        class={{
          primary: this.variant === 'primary',
          small: this.size === 'small',
          medium: this.size === 'medium',
          large: this.size === 'large',
          'hide-track': this.hideTrack,
        }}
      ></Host>
    );
  }
}
