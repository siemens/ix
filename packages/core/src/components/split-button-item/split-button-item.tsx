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
  tag: 'ix-split-button-item',
  styleUrl: 'split-button-item.css',
  shadow: true,
})
export class SplitButtonItem {
  /**
   * Dropdown icon
   */
  @Prop() icon: string;

  /**
   * Dropdown label
   */
  @Prop() label: string;

  /**
   * Dropdown item clicked
   */
  @Event() itemClick: EventEmitter<MouseEvent>;

  @Element() hostElement: HTMLIxSplitButtonItemElement;

  render() {
    return (
      <ix-dropdown-item
        suppressChecked
        icon={this.icon}
        label={this.label}
        onItemClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onClick={(e) => this.itemClick.emit(e)}
      ></ix-dropdown-item>
    );
  }
}
