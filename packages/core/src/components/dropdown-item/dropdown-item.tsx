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
import { Mixin } from '../utils/internal/component';
import { a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import { IX_FOCUS_VISIBLE } from '../utils/focus/focus-utilities';
import { FocusVisibleMixin } from '../utils/internal/mixins/focus-visible.mixin';
import { getComposedPath } from '../utils/shadow-dom';

@Component({
  tag: 'ix-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  shadow: {
    delegatesFocus: false,
  },
})
export class DropdownItem
  extends Mixin(FocusVisibleMixin)
  implements DropdownItemWrapper
{
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
   * ARIA label for the icon
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * ARIA label for the item's button
   * Will be set as aria-label for the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelButton?: string;

  /**
   * Display hover state
   */
  @Prop() hover = false;

  /**
   * Disable item and remove event listeners
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Whether the item is checked or not. If true a checkmark will mark the item as checked.
   */
  @Prop() checked = false;

  /** @internal */
  @Prop() isSubMenu = false;

  /** @internal */
  @Prop() suppressChecked = false;

  /** @internal */
  @Prop({ reflect: true }) hasVisualFocus = false;

  /** @internal */
  @Event() itemClick!: EventEmitter<HTMLIxDropdownItemElement>;

  /** @internal */
  @Method()
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }

  /** @internal */
  @Method()
  async getDropdownItemElement() {
    return this.hostElement;
  }

  private fallbackRole = 'listitem';

  override componentWillLoad(): Promise<void> | void {
    super.componentWillLoad?.();

    switch (this.hostElement.parentElement?.tagName) {
      case 'IX-DROPDOWN-BUTTON':
        this.fallbackRole = 'menuitem';
        break;
    }
  }

  private isIconOnly() {
    return (
      this.label === undefined &&
      this.hostElement.innerText === '' &&
      this.icon !== undefined
    );
  }

  render() {
    const ariaAttributes = a11yHostAttributes(this.hostElement);

    ariaAttributes.role = ariaAttributes.role ?? this.fallbackRole;
    ariaAttributes['aria-disabled'] = a11yBoolean(this.disabled);
    ariaAttributes['aria-label'] =
      ariaAttributes['aria-label'] ?? this.ariaLabelButton;

    return (
      <Host
        class={{
          hover: this.hover,
          'icon-only': this.isIconOnly(),
          disabled: this.disabled,
          submenu: this.isSubMenu,
          [IX_FOCUS_VISIBLE]: !this.disabled,
          'outline-visible': this.hasVisualFocus,
        }}
        onClick={() => {
          if (!this.disabled) {
            this.emitItemClick();
          }
        }}
        onKeyDown={(event: KeyboardEvent) => {
          if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
            this.emitItemClick();
          }
        }}
        {...ariaAttributes}
      >
        <div
          class={{
            'dropdown-item': true,
            'no-checked-field': this.suppressChecked,
            disabled: this.disabled,
          }}
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
            <ix-icon
              class="dropdown-item-icon"
              name={this.icon}
              aria-label={this.ariaLabelIcon}
            ></ix-icon>
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
        </div>
      </Host>
    );
  }
}
