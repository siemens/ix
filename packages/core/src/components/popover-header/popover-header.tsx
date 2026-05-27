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
import { TRAP_FOCUS_INCLUDE_ATTRIBUTE } from '../utils/focus/focus-trap';
import { closestPassShadow } from '../utils/shadow-dom';

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
   * Icon name displayed before the title
   */
  @Prop() icon?: string;

  /**
   * Icon color
   */
  @Prop() iconColor?: string;

  /**
   * ARIA label for the icon
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * Hide the close (X) button
   */
  @Prop() hideClose = false;

  /**
   * ARIA label for the close icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  @Prop() ariaLabelCloseIconButton?: string = 'Close';

  /**
   * Fires when close button is clicked.
   * Cancel to prevent closing.
   */
  @Event() closeClick!: EventEmitter<MouseEvent>;

  private parentPopover?: HTMLIxPopoverElement;

  componentDidLoad() {
    this.hostElement.setAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE, '');
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
      <Host>
        {this.icon ? (
          <ix-icon
            name={this.icon}
            color={this.iconColor}
            size="24"
            aria-label={this.ariaLabelIcon}
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
        {!this.hideClose ? (
          <ix-icon-button
            class="popover-close"
            onClick={(event) => this.onCloseClick(event)}
            variant="tertiary"
            icon={iconClose}
            aria-label={this.ariaLabelCloseIconButton}
          ></ix-icon-button>
        ) : null}
      </Host>
    );
  }
}
