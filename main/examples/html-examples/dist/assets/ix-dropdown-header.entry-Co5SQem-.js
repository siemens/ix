import { r as registerInstance, h, H as Host } from "./global-B0StzMye.js";
const dropdownHeaderCss = () => `@charset "UTF-8";:host{--ix-dropdown-header--color:var(--si-sys-color-text-secondary)}:host{--ix-dropdown-header--height:var(--si-sys-sizing-size-90);--ix-dropdown-header--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-60)}:host{display:flex;align-items:center;position:relative;height:var(--ix-dropdown-header--height);width:auto;padding:var(--ix-dropdown-header--padding);overflow:hidden;cursor:default;color:var(--ix-dropdown-header--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const DropdownHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Display name of the header
   */
  label;
  render() {
    return h(Host, { key: "3b9477ff4490c5a5f3495247d21644a1ab371370" }, h("ix-typography", { key: "2c04b0cc068f33bc918c30aa3a71b8c18cada0c4", class: "category-text", format: "h5" }, this.label));
  }
};
DropdownHeader.style = dropdownHeaderCss();
export {
  DropdownHeader as ix_dropdown_header
};
