import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const IxDropdownQuickActionsStyle0 = dropdownQuickActionsCss;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "f8336e321ecbdf72f5ed73218cdb257ad9cfa6fb" }, h("slot", { key: "a91fe26669fdd27a72fecc5f4aeca92d4a8258fa" }));
  }
};
DropdownQuickActions.style = IxDropdownQuickActionsStyle0;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
