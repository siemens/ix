import { r as registerInstance, h, H as Host, g as getElement } from "./index.8b3d29f9.js";
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
    return h(Host, { key: "4621916acefb534c958613badbc9755946e55531" }, h("div", { key: "37996e6d6f79746c5c4fe85357311adac32a04e2" }, h("div", { key: "4012ad9a3f9283f952f03011a93b7a9d99037142", class: "modal-header" }, "Message headline", h("ix-icon-button", { key: "16416236c4232b078d9169a679ab364957d38023", "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { key: "223b73f590629a6e88c7085d947154c13a0b32c4", class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: "83c670e30fcc9e579f41d83873996768a38348d3", class: "modal-footer" }, h("ix-button", { key: "57f16306d1dab23a7562616e42caadf9a3c135fa", outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: "5e6b2408a088aea8a879f34560a86c089a88b5b9", onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
