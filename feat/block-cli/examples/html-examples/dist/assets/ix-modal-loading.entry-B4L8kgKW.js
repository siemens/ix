import { r as registerInstance, h, H as Host } from "./global-Cx3A0XQN.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "e0ad7be806c9d37618b8d13b1c3bff79f9c00e91" }, h("ix-spinner", { key: "6f4b5102256dafcbacd05a126abfdacbda3013df", variant: "primary" }), h("span", { key: "248380eb688f354b86436f363131e0de1097b22b", class: "loading-text" }, h("slot", { key: "65bbcca3c7eae752be4a1db5583b603b0202ec5e" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
