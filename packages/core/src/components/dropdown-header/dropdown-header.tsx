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
 * @since 2.0.0
 */
@Component({
  tag: 'ix-dropdown-header',
  styleUrl: 'dropdown-header.scss',
  shadow: true,
})
export class DropdownHeader {
  /**
   * Display name of the header
   */
  @Prop() label: string;

  render() {
    return (
      <Host>
        <ix-typography class={'category-text'} format={'h5'}>
          {this.label}
        </ix-typography>
      </Host>
    );
  }
}
