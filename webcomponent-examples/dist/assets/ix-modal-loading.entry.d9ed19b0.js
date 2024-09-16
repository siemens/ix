import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "1079a04b74b0b154c58ea840b291d6a226545dc0" }, h("ix-spinner", { key: "ad0a599ccd684b90384d5ebb62bb877d0165f4ef", variant: "primary" }), h("span", { key: "700dcb2f61acc2292450975c0dd4e9bec2f4b4c9", class: "loading-text" }, h("slot", { key: "24438e1448c1504d962f8253dafd835ca95e68e8" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
