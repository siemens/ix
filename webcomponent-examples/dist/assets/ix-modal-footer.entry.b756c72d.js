import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
const modalFooterCss = ":host{display:flex;padding:0.5rem;justify-content:flex-end;align-items:center;gap:0.5rem;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalFooterStyle0 = modalFooterCss;
const ModalFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "c7f4f83eb9a081dca29aa1a69da40e54b9e63e56" }, h("slot", { key: "52059c4ca121a42916a378170f253ddd3155b4a2" }));
  }
};
ModalFooter.style = IxModalFooterStyle0;
export {
  ModalFooter as ix_modal_footer
};
