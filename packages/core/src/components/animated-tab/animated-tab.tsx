// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-animated-tab',
  styleUrl: 'animated-tab.scss',
  scoped: true,
})
export class AnimatedTab {
  /**
   * Icon of the tab
   */
  @Prop() icon: string;

  /**
   * Show notification number
   */
  @Prop({ reflect: true }) count: number;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
