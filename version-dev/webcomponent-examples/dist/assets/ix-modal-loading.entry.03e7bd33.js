import { r as registerInstance, h, H as Host } from "./index.ae9ec291.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "80c2129a12f6f9e3791ef200fc023be50e462123" }, h("ix-spinner", { key: "219e4c39e89e9280794db9feea031cb92154cb15", variant: "primary" }), h("span", { key: "5f652d8ee2de0438f635938564264380a0ad7e0d", class: "loading-text" }, h("slot", { key: "c780d132e75994f7d12088e2e1d273cc02fc7de0" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
