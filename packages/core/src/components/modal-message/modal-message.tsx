/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';

export type MessageContent = {
  icon: string;
  messageTitle: string;
  message: string;
  actions: {
    type: 'button-primary' | 'button-secondary' | 'okay' | 'cancel';
    text: string;
    payload?: any;
  }[];
};

@Component({
  tag: 'ix-modal-message',
  styleUrl: 'modal-message.scss',
  shadow: true,
})
export class ModalMessage {
  @Element() hostElement!: HTMLIxModalMessageElement;

  /**
   *
   */
  @Prop() icon: string;
  /**
   *
   */
  @Prop() messageTitle: string;
  /**
   *
   */
  @Prop() message: string;
  /**
   *
   */
  @Prop() actions: {
    type: 'button-primary' | 'button-secondary' | 'okay' | 'cancel';
    text: string;
    payload?: any;
  }[];

  private dialog: HTMLIxDialogElement;

  componentDidLoad() {
    this.dialog = this.hostElement.closest('ix-dialog');
  }

  render() {
    return (
      <Host>
        <ix-modal-header
          onCloseClick={(event) => {
            event.preventDefault();
            this.dialog.dismissModal();
          }}
        >
          {this.messageTitle}
        </ix-modal-header>
        <ix-modal-content>{this.message}</ix-modal-content>
        <ix-modal-footer>
          {this.actions.map(({ type, text, payload }) => {
            if (type === 'okay') {
              return (
                <ix-button onClick={() => this.dialog.closeModal(payload)}>
                  {text}
                </ix-button>
              );
            }

            if (type === 'cancel') {
              return (
                <ix-button onClick={() => this.dialog.dismissModal(payload)}>
                  {text}
                </ix-button>
              );
            }
          })}
        </ix-modal-footer>
      </Host>
    );
  }
}
