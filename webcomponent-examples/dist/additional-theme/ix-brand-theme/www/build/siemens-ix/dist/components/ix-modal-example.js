import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './button.js';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './icon-button.js';
import { d as defineCustomElement$3 } from './modal.js';
import { d as defineCustomElement$2 } from './modal-container.js';

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getModalContainer() {
  const containerList = Array.from(document.querySelectorAll('ix-modal-container'));
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn('Multiple modal containers were found. The one instatiated first will be used.');
    return container;
  }
  if (!container) {
    const modalContainer = document.createElement('ix-modal-container');
    document.body.appendChild(modalContainer);
    return modalContainer;
  }
  return container;
}
async function modal(config) {
  const modalContainer = getModalContainer();
  const modalInstance = await modalContainer.showModal(config);
  return modalInstance;
}
function getIxModal(element) {
  return element.closest('ix-modal');
}
function closeModal(element, closeResult) {
  getIxModal(element).close(closeResult);
}
function dismissModal(element, dismissResult) {
  getIxModal(element).dismiss(dismissResult);
}

const ModalExample = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  dismiss() {
    dismissModal(this.host);
  }
  close() {
    closeModal(this.host, 'Done!');
  }
  render() {
    return (h(Host, null, h("div", null, h("div", { class: "modal-header" }, "Message headline", h("ix-icon-button", { "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { class: "modal-body" }, "Message text lorem ipsum"), h("div", { class: "modal-footer" }, h("ix-button", { outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { onClick: () => this.close() }, "OK")))));
  }
  get host() { return this; }
}, [0, "ix-modal-example"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-modal-example", "ix-button", "ix-icon", "ix-icon-button", "ix-modal", "ix-modal-container"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-modal-example":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ModalExample);
      }
      break;
    case "ix-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-modal-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxModalExample = ModalExample;
const defineCustomElement = defineCustomElement$1;

export { IxModalExample, closeModal as c, dismissModal as d, defineCustomElement, modal as m };
