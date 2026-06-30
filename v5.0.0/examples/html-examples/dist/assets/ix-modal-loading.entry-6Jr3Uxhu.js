import { r as registerInstance, h, H as Host } from "./global-F68Qu5y3.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "6fb21b55f1e46a27ea8811803c2841d5f2cc1228" }, h("ix-spinner", { key: "ac593d632bea25c85f13724a068aed28bea9ef82", variant: "primary" }), h("span", { key: "e177072fcb62beeb7640a4d5cba6bb3704195bb3", class: "loading-text" }, h("slot", { key: "e92e7628451d3258fcf3c17625777b51618b5669" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
