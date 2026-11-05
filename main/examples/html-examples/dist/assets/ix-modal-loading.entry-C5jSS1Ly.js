import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "faba6ae30c78824a26833a43f71199263d1bc19c" }, h("ix-spinner", { key: "3be5403ec52da006f8c41800985615ea0b73bdda", variant: "primary" }), h("span", { key: "2042cf122cdd5a45dc1e05de7353a29cebf5558d", class: "loading-text" }, h("slot", { key: "35ee723d700d92a7b4ac317174043c37a4c55a61" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
