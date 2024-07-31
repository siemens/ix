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
import {
  iconChevronRightSmall,
  iconSingleCheck,
} from '@siemens/ix-icons/icons';

@Component({
  tag: 'ix-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  shadow: true,
})
export class DropdownItem implements DropdownItemWrapper {
  @Element() hostElement!: HTMLIxDropdownItemElement;

  /**
   * Label of dropdown item
   */
  @Prop() label?: string;

  /**
   * Icon of dropdown item
   */
  @Prop() icon?: string;

  /**
   * Display hover state
   */
  @Prop() hover = false;

  /**
   * Disable item and remove event listeners
   */
  @Prop() disabled = false;

  /**
   * Whether the item is checked or not. If true a checkmark will mark the item as checked.
   */
  @Prop() checked = false;

  /** @internal */
  @Prop() isSubMenu = false;

  /** @internal */
  @Prop() suppressChecked = false;

  /** @internal */
  @Event() itemClick!: EventEmitter<HTMLIxDropdownItemElement>;

  /**
   * Internal usage only
   */
  @Method()
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }

  /** @internal */
  @Method()
  async getDropdownItemElement() {
    return this.hostElement;
  }

  private isIconOnly() {
    return (
      this.label === undefined &&
      this.hostElement.innerText === '' &&
      this.icon !== undefined
    );
  }

  render() {
    return (
      <Host
        class={{
          hover: this.hover,
          'icon-only': this.isIconOnly(),
          disabled: this.disabled,
          submenu: this.isSubMenu,
        }}
        role="listitem"
      >
        <button
          type="button"
          tabIndex={0}
          class={{
            'dropdown-item': true,
            'no-checked-field': this.suppressChecked,
          }}
          onClick={() => this.emitItemClick()}
        >
          {!this.suppressChecked ? (
            <div class="dropdown-item-checked">
              {this.checked ? (
                <ix-icon
                  class="checkmark"
                  name={iconSingleCheck}
                  size="16"
                ></ix-icon>
              ) : null}
            </div>
          ) : null}
          {this.icon ? (
            <ix-icon class="dropdown-item-icon" name={this.icon}></ix-icon>
          ) : null}
          <div class="dropdown-item-text">
            {this.label}
            <slot></slot>
          </div>
          {this.isSubMenu ? (
            <ix-icon
              name={iconChevronRightSmall}
              class={'submenu-icon'}
            ></ix-icon>
          ) : null}
        </button>
      </Host>
    );
  }
}
