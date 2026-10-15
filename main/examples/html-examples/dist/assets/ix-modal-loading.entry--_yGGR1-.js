import { r as registerInstance, h, H as Host } from "./global-D3pEBlWT.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "4d2e05ef9d63846250f001da0e6f8459945fbe30" }, h("ix-spinner", { key: "14c88068e77ecf0652effe13deae56248a8a8538", variant: "primary" }), h("span", { key: "af9a58ad01a44802d54a5d8bbe54c944297787bd", class: "loading-text" }, h("slot", { key: "b5582e13a6cafdcba4f7dd4f2fa48600818a1a0b" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
