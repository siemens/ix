import { r as registerInstance, h, H as Host } from "./index.7e8ea20d.js";
const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0.125rem 0.625rem 0.125rem 0.625rem}:host *,:host *::after,:host *::before{box-sizing:border-box}";
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
ModalContent.style = modalContentCss;
export {
  ModalContent as ix_modal_content
};
