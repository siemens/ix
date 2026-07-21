import { r as registerInstance, h, H as Host } from "./global-CRrZCTD3.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "0f1a8f8115ddfc7f9c4927f64ec1c5f5fac07796" }, h("ix-spinner", { key: "cce18480c4ebf3d095dc60e61701843cd5952bb7", variant: "primary" }), h("span", { key: "66c2b356c77c25c9dd7d0e9516aeb99677711d1e", class: "loading-text" }, h("slot", { key: "1996eee28cf5612249c49308c84f0c4c586c360b" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
