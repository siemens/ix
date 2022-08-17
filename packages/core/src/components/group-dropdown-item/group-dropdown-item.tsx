/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-group-dropdown-item',
  styleUrl: 'group-dropdown-item.scss',
  scoped: true,
})
export class GroupDropdownItem {
  /**
   * Group dropdown label
   */
  @Prop() label: string;

  /**
   * Group dropdown icon
   */
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <ix-dropdown-item label={this.label} icon={this.icon}>
          <slot></slot>
        </ix-dropdown-item>
      </Host>
    );
  }
}
