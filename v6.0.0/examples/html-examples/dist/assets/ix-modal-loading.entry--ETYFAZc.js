import { r as registerInstance, h, H as Host } from "./global-CU4RCWGK.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "6a9380fda7b79d675c6e7996ed4e500c1daf3907" }, h("ix-spinner", { key: "22f6e210a9a4bdfe91e0ec1c2a4a30eaa984f089", variant: "primary" }), h("span", { key: "de86fdb5b5600c2c9d76693f2ada3246603e18c4", class: "loading-text" }, h("slot", { key: "b1358b783c9f2efbeb27d76fc8d96fb5477f6c10" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
