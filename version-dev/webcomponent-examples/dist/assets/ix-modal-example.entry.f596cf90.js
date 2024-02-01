import { r as registerInstance, h, H as Host, g as getElement } from "./index.45e13eee.js";
import "./animation-4a73b1c3.59b7eda0.js";
import { d as dismissModal, c as closeModal } from "./modal-8bc5477b.0d0b5edc.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const ModalExample = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  dismiss() {
    dismissModal(this.host);
  }
  close() {
    closeModal(this.host, "Done!");
  }
  render() {
    return h(Host, null, h("div", null, h("div", { class: "modal-header" }, "Message headline", h("ix-icon-button", { "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { class: "modal-body" }, "Message text lorem ipsum"), h("div", { class: "modal-footer" }, h("ix-button", { outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
