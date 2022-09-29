import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as dismissModal, c as closeModal } from './modal-utils.js';
import { d as defineCustomElement$6 } from './button.js';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './icon-button.js';
import { d as defineCustomElement$3 } from './modal.js';
import { d as defineCustomElement$2 } from './modal-container.js';

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

export { IxModalExample, defineCustomElement };
