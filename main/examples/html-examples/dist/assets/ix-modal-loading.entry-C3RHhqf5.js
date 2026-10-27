import { r as registerInstance, h, H as Host } from "./global-BxNSnRpR.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "0da93355bf831f91f093e9b04d50387be66360bf" }, h("ix-spinner", { key: "f0f4b3929b1073d4ee309968e86824d9aeaa50f8", variant: "primary" }), h("span", { key: "a1dfa66b663fb394b5ecf303292e5070c6e5714c", class: "loading-text" }, h("slot", { key: "0657246b166ba02adb55721af9445c65a3b33e40" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
