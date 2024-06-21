import { r as registerInstance, h, H as Host } from "./global.8b5b8f81.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "f6d440918bef7125ac06449ab6d0cd4088f5fefb" }, h("ix-spinner", { key: "3efc2e66c193f2af94f4f5d6dc3e91daa2049008", variant: "primary" }), h("span", { key: "4d81c46bedae034801a35637ca78bd8f2b618124", class: "loading-text" }, h("slot", { key: "90bf6e1aeac791f70c203fb6bf32dcb7cb313719" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
