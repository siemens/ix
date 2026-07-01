import { r as registerInstance, h, H as Host } from "./global-C8IWpzMv.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "985905fecebc33b505892af247e56441d533d02b" }, h("ix-spinner", { key: "31cfc9e1abde67af0395257cdcf223f48ced98f2", variant: "primary" }), h("span", { key: "4ba754c454ecd9bee8c095f6af6e6ba573bd95e3", class: "loading-text" }, h("slot", { key: "9ec1a79b7f7841ea54c00f3a05d61efcb9b8ba31" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
