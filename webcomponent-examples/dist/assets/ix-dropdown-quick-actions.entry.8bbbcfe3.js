import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const IxDropdownQuickActionsStyle0 = dropdownQuickActionsCss;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "bbad443b6f484e4506c28c2ced3f4b5f94b18b89" }, h("slot", { key: "a0cfe7e14ee73671413eab21b71bac7494a75536" }));
  }
};
DropdownQuickActions.style = IxDropdownQuickActionsStyle0;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
