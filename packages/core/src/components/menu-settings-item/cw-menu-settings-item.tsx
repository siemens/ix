/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cw-menu-settings-item',
  styleUrl: 'cw-menu-settings-item.css',
  scoped: true,
})
export class CwMenuSettingsItem {
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
