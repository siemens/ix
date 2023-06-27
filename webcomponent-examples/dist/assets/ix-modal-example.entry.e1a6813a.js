import { r as registerInstance, h, H as Host, g as getElement } from "./index.c87d935b.js";
import { d as dismissModal, c as closeModal } from "./modal-utils-aecbcba5.95724bc3.js";
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
