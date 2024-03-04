import { r as registerInstance, h, H as Host, g as getElement } from "./index.7c90662d.js";
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
    return h(Host, { key: "85333f30e3940babe00480e30095861fa379f123" }, h("div", { key: "9805d492738ea84091a7bcf3f50192afc6e76344" }, h("div", { key: "5af465ed1d115c884c6f3c88119e4622f1ca18e5", class: "modal-header" }, "Message headline", h("ix-icon-button", { key: "08a1f2c1b74ff92701ec759d7820852116f2be39", "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), h("div", { key: "82d08e54b5bd9b6d61540b29ee4ceca1865dbad0", class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: "0ea9fcb2af82f857e57ff0824bc8d57810d476b1", class: "modal-footer" }, h("ix-button", { key: "5848a921f72c98aa1357f9be22aaf59b5f0f731f", outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: "c8c59ada2bb35d46add0b0c1333ec0c28ab6e83d", onClick: () => this.close() }, "OK"))));
  }
  get host() {
    return getElement(this);
  }
};
export {
  ModalExample as ix_modal_example
};
