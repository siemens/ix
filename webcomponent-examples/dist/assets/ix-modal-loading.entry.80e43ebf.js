import { r as registerInstance, h, H as Host } from "./global.9430376f.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "8e3c29a9c15b121a2da0acebdf1a00dbe0d18c52" }, h("ix-spinner", { key: "bc602e7bc4b0264b19be3823e78cc63c7adc39fa", variant: "primary" }), h("span", { key: "69d563df6c6a05ece5723c8c94d24d546831aca4", class: "loading-text" }, h("slot", { key: "b369c9d0c257a9c0c11584c72f0696eb969bd13d" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
