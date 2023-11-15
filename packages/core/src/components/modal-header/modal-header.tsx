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
  Prop,
  Watch,
} from '@stencil/core';

/**
 * @since 2.0.0
 */
@Component({
  tag: 'ix-modal-header',
  styleUrl: 'modal-header.scss',
  shadow: true,
})
export class ModalHeader {
  @Element() hostElement!: HTMLIxModalHeaderElement;

  /**
   * Hide the close button
   */
  @Prop() hideClose = false;

  /**
   * Icon of the Header
   */
  @Prop() icon: string;
  @Watch('icon')
  onIconChange(icon: string) {
    if (this.parentDialog) {
      if (icon) {
        this.parentDialog.classList.add('with-icon');
      } else {
        this.parentDialog.classList.remove('with-icon');
      }
    }
  }

  /**
   * Icon color
   */
  @Prop() iconColor: string;

  /**
   * Close icon is clicked
   */
  @Event() closeClick: EventEmitter<MouseEvent>;

  private parentDialog: HTMLIxModalElement;

  componentDidLoad() {
    this.parentDialog = this.hostElement.closest('ix-modal');
    this.onIconChange(this.icon);
  }

  private onCloseClick(event: MouseEvent) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }

    this.parentDialog.dismissModal();
  }

  render() {
    return (
      <Host>
        {this.icon ? (
          <ix-icon
            class={'modal-icon'}
            name={this.icon}
            color={this.iconColor}
          ></ix-icon>
        ) : null}
        <ix-typography variant={'default-title'}>
          <slot></slot>
        </ix-typography>
        {!this.hideClose ? (
          <ix-icon-button
            onClick={(event) => this.onCloseClick(event)}
            ghost
            icon="close"
            class={'modal-close'}
          ></ix-icon-button>
        ) : null}
      </Host>
    );
  }
}
