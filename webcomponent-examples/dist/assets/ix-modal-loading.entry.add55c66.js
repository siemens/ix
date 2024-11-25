import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "bd68fba4e137831616045834723051c7a701a648" }, h("ix-spinner", { key: "4b2f2edc6fc6de13509479e3c2b6ebbb4b865e33", variant: "primary" }), h("span", { key: "0850ea7975ceb050d1391a5276e72c5111fd341d", class: "loading-text" }, h("slot", { key: "7270d475269a996757077815c29ac00a26af56f9" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
