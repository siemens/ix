import { r as registerInstance, h, H as Host } from "./global-Dfa5QLOG.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "91684e3ec068228f5eb14d2359af6d13650f4525" }, h("ix-spinner", { key: "021f9a42a27428d90e0b8a25d6672d77615ccc22", variant: "primary" }), h("span", { key: "fb6e6c7b8681ee0380384aa8acb92dc9ccf9f469", class: "loading-text" }, h("slot", { key: "d4e7abfc7809e2a91f20f0451800daf93f4e0825" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
