import { r as registerInstance, h, H as Host, g as getElement } from "./global.9430376f.js";
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
    return h(Host, { key: "a93b508a6983b97ab3d00fb50c431149a12b1c3a" }, h("div", { key: "0331662e2731d9bbbd5b7cec71d3985e18933ba4" }, h("div", { key: "62fe35ecda14d64395059081baa1ff3751800f13", class: "modal-header" }, "Message headline", h("ix-icon-button", { key: "6108daf9af88612fa5f2785a807309c51c8a5983", "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { key: "ea92bf633a158737f1d4f06b8e68229013f41eb9", class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: "6d0e125b9b454d3bc2aa0afa83fa8b7d5b900d3d", class: "modal-footer" }, h("ix-button", { key: "aa0bb2977686f8118b3eea8217588a20bbe7adb7", outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: "77950c33df17b1d9201039fc1431b14fe82361e1", onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
