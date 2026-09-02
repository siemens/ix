import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "5d4c643488a40e0390357cbf044f85fcacad5616" }, h("ix-spinner", { key: "97fbc83c4d2878d9def6e14e17e65fc839ac9f99", variant: "primary" }), h("span", { key: "de59bac2accea83444bd2385142427c1d265d285", class: "loading-text" }, h("slot", { key: "447b55a5c06e9fb78df90dbff2af64d535358044" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
