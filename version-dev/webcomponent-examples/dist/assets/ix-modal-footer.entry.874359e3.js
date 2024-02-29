import { r as registerInstance, h, H as Host } from "./index.063f6e33.js";
const modalFooterCss = ":host{display:flex;padding:0.625rem;padding-top:1.5rem;justify-content:flex-end;align-items:center;gap:0.5rem;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalFooterStyle0 = modalFooterCss;
const ModalFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "62e35b423b00c0ad75954e735188dce705f7ff3e" }, h("slot", { key: "29a2a22875ae6197dab3c056329125dcefe70032" }));
  }
};
ModalFooter.style = IxModalFooterStyle0;
export {
  ModalFooter as ix_modal_footer
};
