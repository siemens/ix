import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-DRJgLLTs.js";
import "./preload-helper-UZRgTS1n.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "9414946de21510251c8052f599d1f10fbce10f34" }, h("ix-spinner", { key: "520fbe39a35b809a7ed751985042050d43fd3a03", variant: "primary" }), h("span", { key: "0d40981d233a7f0544a0c5cb09bcb7dc6b5ce8a9", class: "loading-text" }, h("slot", { key: "db18fef831a441bf8cbadff4354d256ce140fe40" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
