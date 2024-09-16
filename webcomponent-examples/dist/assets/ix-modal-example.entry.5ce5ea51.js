import { r as registerInstance, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import "./animation-4a73b1c3.59b7eda0.js";
import { d as dismissModal, c as closeModal } from "./modal-54740f80.103c72e0.js";
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
    return h(Host, { key: "d2beca0d20e646b4bc4dcd28e0ff3c2abb9f96d8" }, h("div", { key: "733aab0e9dc1f4c833d7fe2767c7d90943cc3bc3" }, h("div", { key: "0054d707061887e5719491b08109611c8a2dcb32", class: "modal-header" }, "Message headline", h("ix-icon-button", { key: "2be5d85b3fcfffa664cde7ac4e30250aadd3b5af", "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { key: "40b8041a4d63309d6c000c9a6a167dcc467fad80", class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: "e16a904097bc41e34e51406afef12e0cb5656c0e", class: "modal-footer" }, h("ix-button", { key: "e3696ef420965b91715889f6686cc8f362ebc047", outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: "6d934daf17ca0fcff6e484556078c4c617b340a7", onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
