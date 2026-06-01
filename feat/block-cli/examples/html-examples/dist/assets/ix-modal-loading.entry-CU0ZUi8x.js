import { a as registerInstance, h, H as Host } from "./global-Ba1Wm6ph.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "12490885e739c8c254346cd0e775825b80a72558" }, h("ix-spinner", { key: "60dd8e28c8621a9780385d99093e8fdfc88632a3", variant: "primary" }), h("span", { key: "eb6225031cd8be7cce54252863ab1abd8d0b65d3", class: "loading-text" }, h("slot", { key: "b4cf1861ee5bb45e685236d6aad18b85d594a75f" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
