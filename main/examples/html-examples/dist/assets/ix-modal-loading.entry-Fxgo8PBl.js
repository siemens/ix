import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-Dp-uZHvv.js";
import "./preload-helper-UZRgTS1n.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "9e254b5e69f8aa4cce5519de8c384c69c3e01c9d" }, h("ix-spinner", { key: "8c5229f319dee2b7e5eaade1ed0b1fb358117f92", variant: "primary" }), h("span", { key: "5832a566c1721a4c8795e26ec721e19a22184868", class: "loading-text" }, h("slot", { key: "07850835b3b8c9ab6b47e35c4d98a995cb8401d2" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
