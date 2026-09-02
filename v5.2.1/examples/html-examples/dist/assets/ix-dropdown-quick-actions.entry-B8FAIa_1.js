import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
const dropdownQuickActionsCss = () => `:host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}`;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "6cedda211afb69d0bc6d51faf679585aa20f0ccb" }, h("slot", { key: "f5ff9b3127c712fc72ba32126855b0dc77a66a85" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss();
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
