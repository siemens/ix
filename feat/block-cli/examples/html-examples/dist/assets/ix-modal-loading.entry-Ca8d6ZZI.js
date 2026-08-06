import { r as registerInstance, h, H as Host } from "./global-DSse0xVy.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "fb183650f342e3bc07686d430167ac1dc1c98469" }, h("ix-spinner", { key: "7bd33051dbc1b533137b5569edacd732581cd52f", variant: "primary" }), h("span", { key: "309fbe498456592360504a4a1c9593b0b5ee0f75", class: "loading-text" }, h("slot", { key: "6a2fd313b6800edd7211e78a69fc3a9405cb91e7" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
