import { r as registerInstance, h, H as Host } from "./index.ab532d54.js";
const modalFooterCss = ":host{display:flex;padding:0.625rem;padding-top:1.5rem;justify-content:flex-end;align-items:center;gap:0.5rem;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}";
const ModalFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
ModalFooter.style = modalFooterCss;
export {
  ModalFooter as ix_modal_footer
};
