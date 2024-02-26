import { r as registerInstance, h, H as Host } from "./index.b385ac31.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const IxDropdownQuickActionsStyle0 = dropdownQuickActionsCss;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "6fc1f482e9e43fd2e70535c7f2bb7786fc59e305" }, h("slot", { key: "d8a06e975f6498b7735159e09a29e8d715a1ff99" }));
  }
};
DropdownQuickActions.style = IxDropdownQuickActionsStyle0;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
