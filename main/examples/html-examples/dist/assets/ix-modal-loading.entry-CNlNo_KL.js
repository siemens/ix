import { r as registerInstance, h, H as Host } from "./global-D_olgeRE.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "4289c25b901ce17434c3b2d9650bc00da9424cd0" }, h("ix-spinner", { key: "7e61c441adaebdda5085608ef58be086b4ff0dd1", variant: "primary" }), h("span", { key: "850c662af7849864899fd1f706fa63454dc0af56", class: "loading-text" }, h("slot", { key: "cfb1631d6beedd2fa37ecce3e33948ba38c01477" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
