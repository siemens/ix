/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
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
