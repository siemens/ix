import { r as registerInstance, h, H as Host } from "./global-C_dy4gBz.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "a09f7cad5aecb19070261b970a25c8587efdf3e1" }, h("ix-spinner", { key: "b208ed21f780efbcb09c3f1d2168a2d5c75d2e16", variant: "primary" }), h("span", { key: "750230e119a3266c82b388dad22552a5c271b9a1", class: "loading-text" }, h("slot", { key: "4e006a1f02631979855cca97a9198cc5cfb8b6cb" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
