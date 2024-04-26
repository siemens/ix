import { r as registerInstance, h, H as Host, g as getElement } from "./index.918151cc.js";
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
    return h(Host, { key: "6588eca80a4a796627317d549ced3d767792d528" }, h("div", { key: "06a4f6cb97ef30f9bdc406ca7bad4a1978c8df03" }, h("div", { key: "dfc00207c3d9ead47420a30768e216b7907588c9", class: "modal-header" }, "Message headline", h("ix-icon-button", { key: "2b01ad4f2e9ca5e277c4d53b6d6cdb5d2b9b74c8", "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { key: "4d1ac160957975fe53162ebd42dd2bd8d6dee0d9", class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: "9709cda6c07d7c0abe13424dc87c64bb11162622", class: "modal-footer" }, h("ix-button", { key: "f2c257ebea902ef30674ad2d24a150ad17b82df3", outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: "1f512110cfacee2259d709031be3e5a5869d9704", onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
