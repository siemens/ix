/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconClose } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { TRAP_FOCUS_INCLUDE_ATTRIBUTE } from '../utils/focus/focus-trap';
import { closestPassShadow } from '../utils/shadow-dom';

/**
 * Header section with optional icon, title, additional items, and close button.
 *
 * @slot default - Popover title (rendered as heading text).
 * @slot additional-items - Optional content beside the title (for example `ix-pill`).
 *
 * @since 5.1.0
 */
@Component({
  tag: 'ix-popover-header',
  styleUrl: 'popover-header.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class PopoverHeader {
  @Element() hostElement!: HTMLIxPopoverHeaderElement;

  /**
   * Icon name displayed before the title.
   * The icon is decorative; provide context in the default slot heading.
   *
   * @since 5.1.0
   */
  @Prop() icon?: string;

  /**
   * Icon color
   *
   * @since 5.1.0
   */
  @Prop() iconColor?: string;

  /**
   * Hide the close (X) button
   *
   * @since 5.1.0
   */
  @Prop() hideClose = false;

  /**
   * ARIA label for the close icon button.
   * Will be set as aria-label on the nested HTML button element.
   *
   * @since 5.1.0
   */
  @Prop() ariaLabelCloseIconButton?: string = 'Close';

  /**
   * Fires when close button is clicked.
   * Cancel to prevent closing.
   *
   * @since 5.1.0
   */
  @Event() closeClick!: EventEmitter<MouseEvent>;

  private parentPopover?: HTMLIxPopoverElement;

  componentDidLoad() {
    this.parentPopover = closestPassShadow(this.hostElement, 'ix-popover') as
      | HTMLIxPopoverElement
      | undefined;
  }

  private onCloseClick(event: MouseEvent) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }
    this.parentPopover?.hidePopover();
  }

  render() {
    return (
      <Host {...{ [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }}>
        {this.icon ? (
          <ix-icon
            name={this.icon}
            color={this.iconColor}
            size="24"
            aria-hidden={a11yBoolean(true)}
          ></ix-icon>
        ) : null}
        <div class="popover-title">
          <ix-typography format="h5">
            <slot></slot>
          </ix-typography>
        </div>
        <div class="additional-items">
          <slot name="additional-items"></slot>
        </div>
        {this.hideClose ? null : (
          <ix-icon-button
            class="popover-close"
            onClick={(event) => this.onCloseClick(event)}
            variant="tertiary"
            icon={iconClose}
            aria-label={this.ariaLabelCloseIconButton}
          ></ix-icon-button>
        )}
      </Host>
    );
  }
}
