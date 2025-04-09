import { r as registerInstance, h, H as Host } from "./global.bff64ac3.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "2a6a6009ce9985b2926467ddb57efd988845a5f0" }, h("ix-spinner", { key: "ed44fc7dc7dfa9d77056a34473b8d585718cecd8", variant: "primary" }), h("span", { key: "5a1ac39aedabce8e5c49a5c048fb26cd7d76255c", class: "loading-text" }, h("slot", { key: "d23c2fd6cd045f26c22c728845bbd37082894732" })));
  }
};
ModalLoading.style = modalLoadingCss;
export {
  ModalLoading as ix_modal_loading
};
