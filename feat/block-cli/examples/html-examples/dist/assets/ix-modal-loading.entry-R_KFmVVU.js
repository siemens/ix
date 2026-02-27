import { r as registerInstance, h, H as Host } from "./global-DXu0UsM0.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "68c66926fa5a035903c3a87dad07ae7027094b5f" }, h("ix-spinner", { key: "7d93c9bb549d338d0f9d6b4c0ac1dc0f5b020e7d", variant: "primary" }), h("span", { key: "232f234bf7ccf428bbd3094664e165978a2a2ec7", class: "loading-text" }, h("slot", { key: "cdd3bbfd618aafb91b99a4e61d445f9bcdd264d1" })));
  }
};
ModalLoading.style = modalLoadingCss;
export {
  ModalLoading as ix_modal_loading
};
