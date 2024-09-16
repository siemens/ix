import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
const dropdownHeaderCss = ":host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxDropdownHeaderStyle0 = dropdownHeaderCss;
const DropdownHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
  }
  render() {
    return h(Host, { key: "efbc6ba551cef0f5c641cd8282484eea4e2b87aa" }, h("ix-typography", { key: "f57e88574cb2cfa62667a026469aebd306648014", class: "category-text", variant: "default-title" }, this.label));
  }
};
DropdownHeader.style = IxDropdownHeaderStyle0;
export {
  DropdownHeader as ix_dropdown_header
};
