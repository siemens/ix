import { r as registerInstance, h, H as Host } from "./global-C_dy4gBz.js";
const dropdownHeaderCss = () => `:host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}`;
const DropdownHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Display name of the header
   */
  label;
  render() {
    return h(Host, { key: "5d9e41098f2539a6997d7c6e51bf528286a5d54c" }, h("ix-typography", { key: "c32bbadd83cedeea7c6151da30ad2a9cdb242485", class: "category-text", format: "h5" }, this.label));
  }
};
DropdownHeader.style = dropdownHeaderCss();
export {
  DropdownHeader as ix_dropdown_header
};
