import { r as registerInstance, h, H as Host } from "./global.7dd975c7.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "5539772ef91bc76d8f291f1b17cde3f6dded3819" }, h("ix-spinner", { key: "d474cae29a140aeedba4ab43f1a59c1971fcb005", variant: "primary" }), h("span", { key: "de639907ba000458876827978526b7e992cf6a28", class: "loading-text" }, h("slot", { key: "a5dd114932a5cec6afbd42dbdc4d81827f46121d" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
