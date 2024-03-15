import { r as registerInstance, h, H as Host } from "./index.8b3d29f9.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "10d32ee56938d12d5300cc8bccb401a4492ddb85" }, h("ix-spinner", { key: "bfaed4c8523b6b59556c2898ecb4044c795b1bbd", variant: "primary" }), h("span", { key: "45f219a3c36c2cc67eda65d58a4564ca6163a2ef", class: "loading-text" }, h("slot", { key: "364c7ff091ca2409a15dd65acebb268ac0971117" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
