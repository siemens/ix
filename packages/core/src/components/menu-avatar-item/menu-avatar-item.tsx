/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-menu-avatar-item',
  styleUrl: 'menu-avatar-item.scss',
  shadow: true,
})
export class MenuAvatarItem {
  /**
   * Avatar dropdown icon
   */
  @Prop() icon: string;

  /**
   * Avatar dropdown label
   */
  @Prop() label: string;

  /**
   * Avatar dropdown item clicked
   */
  @Event() itemClick: EventEmitter<MouseEvent>;

  @Element() hostElement: HTMLIxMenuAvatarItemElement;

  render() {
    return (
      <ix-dropdown-item
        icon={this.icon}
        label={this.label}
        onClick={(e) => this.itemClick.emit(e)}
      ></ix-dropdown-item>
    );
  }
}
