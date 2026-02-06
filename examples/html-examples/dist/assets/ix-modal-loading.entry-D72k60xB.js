import { r as registerInstance, h, H as Host } from "./global-wi9VneMU.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "d323b6a4a1650629e0ac5338c97fd7b08929807f" }, h("ix-spinner", { key: "94eab908aa232f0f022da10da6313cbe07388a3c", variant: "primary" }), h("span", { key: "a1d7732187718f8775d626e0a0be49fb7578bec6", class: "loading-text" }, h("slot", { key: "bdbc66e91cc7f9ada60a3cda2f0347b40237d739" })));
  }
};
ModalLoading.style = modalLoadingCss;
export {
  ModalLoading as ix_modal_loading
};
