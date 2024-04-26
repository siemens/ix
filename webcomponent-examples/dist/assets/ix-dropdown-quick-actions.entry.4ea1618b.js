import { r as registerInstance, h, H as Host } from "./index.918151cc.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const IxDropdownQuickActionsStyle0 = dropdownQuickActionsCss;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "5e441f76795c14ce9c89745007b984a758ed6c68" }, h("slot", { key: "9134b8e85c0c92f2250305152d102f71cad38e8e" }));
  }
};
DropdownQuickActions.style = IxDropdownQuickActionsStyle0;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
