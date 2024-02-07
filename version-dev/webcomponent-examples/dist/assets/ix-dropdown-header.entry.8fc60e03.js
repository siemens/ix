import { r as registerInstance, h, H as Host } from "./index.18e27e15.js";
const dropdownHeaderCss = ":host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxDropdownHeaderStyle0 = dropdownHeaderCss;
const DropdownHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
  }
  render() {
    return h(Host, { key: "553d572205dba2f2a6036e57aebb0cebac43951f" }, h("ix-typography", { key: "12d1f11061bc8f860a0eb12e0897d3526f48a6af", class: "category-text", variant: "default-title" }, this.label));
  }
};
DropdownHeader.style = IxDropdownHeaderStyle0;
export {
  DropdownHeader as ix_dropdown_header
};
