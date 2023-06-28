/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-menu-settings-item',
  styleUrl: 'menu-settings-item.css',
  shadow: true,
})
export class MenuSettingsItem {
  /**
   * Label
   */
  @Prop() label: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
