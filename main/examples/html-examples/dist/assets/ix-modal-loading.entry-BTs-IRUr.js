import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-DSXWMbmA.js";
import "./preload-helper-UZRgTS1n.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "cbbfda791f3e1c42b6cc9b4f959a67758437c874" }, h("ix-spinner", { key: "36b2d22aa99b74ea82f752c01b33b30aa896f7f4", variant: "primary" }), h("span", { key: "5cf3c7bbc2f01be602b310d6c9a098a5f9b389fb", class: "loading-text" }, h("slot", { key: "3eda4b717567dd27ba165be9a1d91e9dd7174958" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
