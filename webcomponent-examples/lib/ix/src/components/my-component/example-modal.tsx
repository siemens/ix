/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host } from '@stencil/core';
import { closeModal, dismissModal } from '../modal/modal-utils';

@Component({
  tag: 'ix-modal-example',
})
export class ModalExample {
  @Element() host!: HTMLIxModalExampleElement;

  private dismiss() {
    dismissModal(this.host);
  }

  private close() {
    closeModal(this.host, 'Done!');
  }

  render() {
    return (
      <Host>
        <div>
          <div class="modal-header">
            Message headline
            <ix-icon-button
              data-close-button
              ghost
              icon="close"
              onClick={() => this.dismiss()}
            ></ix-icon-button>
          </div>
          <div class="modal-body">Message text lorem ipsum</div>
          <div class="modal-footer">
            <ix-button outline onClick={() => this.dismiss()}>
              Cancel
            </ix-button>
            <ix-button onClick={() => this.close()}>OK</ix-button>
          </div>
        </div>
      </Host>
    );
  }
}
