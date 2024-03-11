import { r as registerInstance, h, H as Host } from "./index.a3ddea4c.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "2930b0986034ef25c350284fad67347ab5d13c4d" }, h("ix-spinner", { key: "5ac3bd8f71406e3adda36a3af14ab98cac5f5b79", variant: "primary" }), h("span", { key: "af819b28bde6dc5d55cbe233e94381c34a5732c8", class: "loading-text" }, h("slot", { key: "cb174a3367f4195370aa45dfca1ca409bde1745d" })));
  }
};
ModalLoading.style = IxModalLoadingStyle0;
export {
  ModalLoading as ix_modal_loading
};
