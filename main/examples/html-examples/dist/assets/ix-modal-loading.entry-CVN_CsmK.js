import { r as registerInstance, h, H as Host } from "./global-DzKOIL47.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "a24c2b6b64348c76bfd42fc6e834af0c8974d114" }, h("ix-spinner", { key: "17308357a5b87ceaafd0e8134dd91c785168f7f9", variant: "primary" }), h("span", { key: "baa407c1edd86575e48d949f62de187e95e023dd", class: "loading-text" }, h("slot", { key: "bee7f084a1afc86aa0664a17e2993da1c88edf33" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
