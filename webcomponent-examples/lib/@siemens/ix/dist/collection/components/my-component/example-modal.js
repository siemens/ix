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
export class ModalExample {
  dismiss() {
    dismissModal(this.host);
  }
  close() {
    closeModal(this.host, 'Done!');
  }
  render() {
    return (h(Host, null,
      h("div", null,
        h("div", { class: "modal-header" },
          "Message headline",
          h("ix-icon-button", { "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })),
        h("div", { class: "modal-body" }, "Message text lorem ipsum"),
        h("div", { class: "modal-footer" },
          h("ix-button", { outline: true, onClick: () => this.dismiss() }, "Cancel"),
          h("ix-button", { onClick: () => this.close() }, "OK")))));
  }
  static get is() { return "ix-modal-example"; }
  static get elementRef() { return "host"; }
}
