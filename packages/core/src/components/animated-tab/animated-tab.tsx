/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
