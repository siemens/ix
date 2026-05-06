import { r as registerInstance, h, H as Host } from "./global-Dfa5QLOG.js";
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
    return h(Host, { key: "3ec5f1268c0e3f0ff4c142197dad3a97cc8f9438" }, h("ix-typography", { key: "724a5fd298f071dc7fb23c1ade1a4a7fe5ec22cb", class: "category-text", format: "h5" }, this.label));
  }
};
DropdownHeader.style = dropdownHeaderCss();
export {
  DropdownHeader as ix_dropdown_header
};
