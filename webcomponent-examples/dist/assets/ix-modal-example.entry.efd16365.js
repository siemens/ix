import { r as registerInstance, h, H as Host, g as getElement } from "./global.8b5b8f81.js";
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
    return h(Host, { key: "e219bbf7bea6f929aa522982cbdf055b3fc45a92" }, h("div", { key: "186e10c89c6fd9f626a8fa7642a3a2efe9b4e899" }, h("div", { key: "2919c50fa62881cc689d659657bd5b55fb7c6f81", class: "modal-header" }, "Message headline", h("ix-icon-button", { key: "3dc6851c96c9140f1b13a0c312100acd71762fcd", "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { key: "4b202214dad7f1502f4201969d7cf1a378a55957", class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: "b8df28789d9cede8b78117a8b2cd88b7088e9ea1", class: "modal-footer" }, h("ix-button", { key: "eace38404f5761f3ead889d477481dfd33a5de3a", outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: "38d00bad14606c86ea9ca37bae984579a43475e6", onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
