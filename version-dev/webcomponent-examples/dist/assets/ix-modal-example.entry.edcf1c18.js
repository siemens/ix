import { r as registerInstance, h, H as Host, g as getElement } from "./index.18e27e15.js";
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
    return h(Host, { key: "d7ded69ef3678e88fda9407cbe06ff670e404f7e" }, h("div", { key: "22f32ad7cc64f8ac28a9a6f814f1d1129f2a5534" }, h("div", { key: "0be718f4ce20af3e32a1f1f77043f3c23e321a14", class: "modal-header" }, "Message headline", h("ix-icon-button", { key: "e584ce8a78e372545d308cd2dfc0eccc5cea166b", "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { key: "42399e537169b1972c2a9c40c273e4a6449bf810", class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: "2918b6ff1de5b5dc8ddc02c46f2317ebbd78f9c6", class: "modal-footer" }, h("ix-button", { key: "f3ae08eeab98e15a097cd0ce8ce69cc4aa12607e", outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: "6dbc0b4849671427d0c741d4adfb53d35e7948dc", onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
