import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
const dropdownHeaderCss = () => `@charset "UTF-8";:host{--ix-dropdown-header--color:var(--si-sys-text-secondary)}:host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--ix-dropdown-header--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const DropdownHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Display name of the header
   */
  label;
  render() {
    return h(Host, { key: "c4836080b6ac4887d6435b12d9625c7081a93d19" }, h("ix-typography", { key: "58d9a19bd73593ff11cac408563936eeab2b870c", class: "category-text", format: "h5" }, this.label));
  }
};
DropdownHeader.style = dropdownHeaderCss();
export {
  DropdownHeader as ix_dropdown_header
};
