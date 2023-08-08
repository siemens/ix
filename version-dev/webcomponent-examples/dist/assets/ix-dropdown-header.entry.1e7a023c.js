import { r as registerInstance, h, H as Host } from "./index.85f40dc5.js";
const dropdownHeaderCss = ":host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}";
const DropdownHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
  }
  render() {
    return h(Host, null, h("ix-typography", { class: "category-text", variant: "default-title" }, this.label));
  }
};
DropdownHeader.style = dropdownHeaderCss;
export {
  DropdownHeader as ix_dropdown_header
};
