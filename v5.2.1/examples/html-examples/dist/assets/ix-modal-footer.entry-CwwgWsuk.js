import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
const modalFooterCss = () => `@charset "UTF-8";:host{display:flex;padding:0.5rem;justify-content:flex-end;align-items:center;gap:0.5rem;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const ModalFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "952abe9d33b40fc38def79067ff76db9949c6a45" }, h("slot", { key: "57ebccfd9b1b81cc25014efa20fa2dd83209d307" }));
  }
};
ModalFooter.style = modalFooterCss();
export {
  ModalFooter as ix_modal_footer
};
