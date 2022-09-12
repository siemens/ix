// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-menu-about-item',
  styleUrl: 'menu-about-item.css',
  scoped: true,
})
export class MenuAboutItem {
  /**
   * About Item label
   */
  @Prop({ reflect: true }) label: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
