import { r as registerInstance, h, H as Host, g as getElement } from "./index.a3ddea4c.js";
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
    return h(Host, { key: "4ead947641c449826d2a0160304fdc3a7ac69817" }, h("div", { key: "299a7457a7b7c724252b47d5b6c9d2eb656efcf9" }, h("div", { key: "f26421f60cafe11b55cf2a7af350cf54bd8e9c50", class: "modal-header" }, "Message headline", h("ix-icon-button", { key: "c3bf94ce8624537cbe936aead4b435e9b40540f7", "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { key: "e1d62f7bd2a03375b3994a4aa3b9e23eee6ca1ab", class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: "289425914048dd0d67abe4dc871f0ee86f8262fd", class: "modal-footer" }, h("ix-button", { key: "056fb4c0df84dca31cbc90280f4a216f2d9826fe", outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: "5be49f2996d268a1f19abd9f069f14acb02ab67d", onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
