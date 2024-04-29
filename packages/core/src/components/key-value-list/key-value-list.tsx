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
 * @since 1.6.0
 */
@Component({
  tag: 'ix-key-value-list',
  styleUrl: 'key-value-list.scss',
  shadow: true,
})
export class KeyValueList {
  /**
   * Optional striped key value list style
   */
  @Prop() striped?: boolean;

  render() {
    return (
      <Host
        class={{ keyValueList: true, 'keyValueList--striped': !!this.striped }}
      >
        <slot></slot>
      </Host>
    );
  }
}
