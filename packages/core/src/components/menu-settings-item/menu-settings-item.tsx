// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-menu-settings-item',
  styleUrl: 'menu-settings-item.css',
  scoped: true,
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
