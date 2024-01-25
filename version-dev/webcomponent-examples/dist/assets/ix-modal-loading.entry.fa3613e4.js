import { r as registerInstance, h, H as Host } from "./index.b5e9a656.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("ix-spinner", { variant: "primary" }), h("span", { class: "loading-text" }, h("slot", null)));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
