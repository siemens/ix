import { r as registerInstance, h, H as Host } from "./index.18e27e15.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "b52489f2281dcb4ed3c6c5d196585bcfa0fd64f4" }, h("ix-spinner", { key: "e7bb227f8777a4e57f7a69f1b4b8a140c4d2c1bb", variant: "primary" }), h("span", { key: "aab8061e66daa4cbe65c9ad24e357ac811088c62", class: "loading-text" }, h("slot", { key: "30d869d93f54ec52e5380dd7a3e0eca5c4a1766a" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
