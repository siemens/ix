import { r as registerInstance, h, H as Host } from "./global-C8IWpzMv.js";
const dropdownQuickActionsCss = () => `:host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}`;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "47e45eb3dd1dd7805f9fd6c01c1fb0a98482d11d" }, h("slot", { key: "c0809d3f955550f10be79929491dba790b23efc9" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss();
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
