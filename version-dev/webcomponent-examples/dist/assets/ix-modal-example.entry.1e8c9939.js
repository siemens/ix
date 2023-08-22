import { r as registerInstance, h, H as Host, g as getElement } from "./index.b0da7ea7.js";
import "./animation-268dce50.df0d8da4.js";
import { d as dismissModal, c as closeModal } from "./modal-68c6d3f6.b6b54fe0.js";
import "./typed-event-a230184a.ccfb44d2.js";
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
