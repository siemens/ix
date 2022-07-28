/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cw-animated-tab',
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
