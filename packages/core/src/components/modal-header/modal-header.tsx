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
} from '@stencil/core';

@Component({
  tag: 'ix-modal-header',
  styleUrl: 'modal-header.scss',
  shadow: true,
})
export class ModalHeader {
  @Element() hostElement!: HTMLIxModalHeaderElement;

  /**
   *
   */
  @Prop() hideClose = false;

  /**
   *
   */
  @Event() closeClick: EventEmitter<MouseEvent>;

  private parentDialog: HTMLIxModalElement;

  componentDidLoad() {
    this.parentDialog = this.hostElement.closest('ix-dialog');
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
        <slot></slot>
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
