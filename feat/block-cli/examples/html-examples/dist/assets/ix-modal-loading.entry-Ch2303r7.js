import { r as registerInstance, h, H as Host } from "./global-B1t25MFd.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "70aab12431b0655015d055c76f19fe0d2adca06b" }, h("ix-spinner", { key: "2288c63eeda89653c1a39c8abdd1fbafaa79cf72", variant: "primary" }), h("span", { key: "6fa8bcd74eec641c73f7cc107295fb7da4f95cd3", class: "loading-text" }, h("slot", { key: "6e7be80980db771198086c6976bbc2180bbb1f8e" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
