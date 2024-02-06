import { r as registerInstance, h, H as Host } from "./index.691fb79b.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const IxDropdownQuickActionsStyle0 = dropdownQuickActionsCss;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
DropdownQuickActions.style = IxDropdownQuickActionsStyle0;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
