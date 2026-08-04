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
  Method,
  Prop,
} from '@stencil/core';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';
import { makeRef } from '../utils/make-ref';

@Component({
  tag: 'ix-menu-avatar-item',
  styleUrl: 'menu-avatar-item.scss',
  shadow: true,
})
export class MenuAvatarItem implements DropdownItemWrapper {
  @Element() hostElement!: HTMLIxMenuAvatarItemElement;

  /**
   * Avatar dropdown icon
   */
  @Prop() icon?: string;

  /**
   * Avatar dropdown label
   */
  @Prop() label?: string;

  /**
   * Avatar dropdown item clicked
   */
  @Event() itemClick!: EventEmitter<MouseEvent>;

  private dropdownItemRef = makeRef<HTMLIxDropdownItemElement>();

  /** @internal */
  @Method()
  async getDropdownItemElement() {
    return this.dropdownItemRef.waitForCurrent();
  }

  render() {
    return (
      <ix-dropdown-item
        ref={this.dropdownItemRef}
        icon={this.icon}
        label={this.label}
        onClick={(e) => this.itemClick.emit(e)}
      ></ix-dropdown-item>
    );
  }
}
