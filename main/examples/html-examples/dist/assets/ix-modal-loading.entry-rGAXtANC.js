import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-DmPVhzFD.js";
import "./preload-helper-UZRgTS1n.js";
const modalLoadingCss = () => `@charset "UTF-8";:host{--ix-modal-loading--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-modal-loading--gap);overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "3580b2d1877a9c3296b147ce97428cffcb1079ee" }, h("ix-spinner", { key: "1416dfc0cd4ece73f0c542fd2da3d1bd5032a585", variant: "primary" }), h("span", { key: "acb00db9e8ae17ca5d1c9230a7ff26044f2e3348", class: "loading-text" }, h("slot", { key: "07f9be49efd98035505519424631068a20aaec61" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
