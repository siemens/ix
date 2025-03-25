import { r as registerInstance, h, H as Host } from "./global.23f98c2e.js";
const dropdownHeaderCss = ":host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const DropdownHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "a34330869a1e53c3a2df09143066197b72b1abf8" }, h("ix-typography", { key: "95d1226055d927243c0b9fd2e81c3850071ca93e", class: "category-text", format: "h5" }, this.label));
  }
};
DropdownHeader.style = dropdownHeaderCss;
export {
  DropdownHeader as ix_dropdown_header
};
