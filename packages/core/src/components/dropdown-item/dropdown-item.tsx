/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { chevronRightSmall } from '@siemens/ix-icons/icons';
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

@Component({
  tag: 'ix-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  shadow: true,
})
export class DropdownItem {
  @Element() hostElement!: HTMLIxDropdownItemElement;

  /**
   * Label of dropdown item
   */
  @Prop() label: string;

  /**
   * Icon of dropdown item
   */
  @Prop() icon: string;

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

  /**
   * @internal
   */
  @Prop() isSubMenu = false;

  /**
   * Click on item
   */
  @Event() itemClick: EventEmitter<HTMLIxDropdownItemElement>;

  /**
   * Internal usage only
   */
  @Method()
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
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
        }}
        role="listitem"
      >
        <button
          type="button"
          tabIndex={0}
          class={{
            'dropdown-item': true,
          }}
          onClick={() => this.emitItemClick()}
        >
          <div class="dropdown-item-checked">
            {this.checked ? (
              <ix-icon
                class="checkmark"
                name="single-check"
                size="16"
              ></ix-icon>
            ) : null}
          </div>
          {this.icon ? (
            <ix-icon class="dropdown-item-icon" name={this.icon}></ix-icon>
          ) : null}
          <div class="dropdown-item-text">{this.label}</div>
          <slot></slot>
          {this.isSubMenu ? <ix-icon name={chevronRightSmall}></ix-icon> : null}
        </button>
      </Host>
    );
  }
}
