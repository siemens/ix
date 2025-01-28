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
  Host,
  Method,
  Prop,
} from '@stencil/core';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';
import { makeRef } from '../utils/make-ref';

/**
 * @deprecated since 2.0.0. Use the `ix-dropdown-item` component instead.
 */
@Component({
  tag: 'ix-split-button-item',
  styleUrl: 'split-button-item.css',
  shadow: true,
})
export class SplitButtonItem implements DropdownItemWrapper {
  @Element() hostElement!: HTMLIxSplitButtonItemElement;

  /**
   * Dropdown icon
   */
  @Prop() icon?: string;

  /**
   * Dropdown label
   */
  @Prop() label?: string;

  /**
   * Dropdown item clicked
   */
  @Event() itemClick!: EventEmitter<MouseEvent>;

  private wrapperRef = makeRef<HTMLIxDropdownItemElement>();

  /** @internal */
  @Method()
  async getDropdownItemElement() {
    return this.wrapperRef.waitForCurrent();
  }

  render() {
    return (
      <Host>
        <ix-dropdown-item
          ref={this.wrapperRef}
          suppressChecked
          icon={this.icon}
          label={this.label}
          onItemClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onClick={(e) => this.itemClick.emit(e)}
        ></ix-dropdown-item>
      </Host>
    );
  }
}
