import { r as registerInstance, h, H as Host } from "./global-CU4RCWGK.js";
const dropdownQuickActionsCss = () => `@charset "UTF-8";:host{--ix-dropdown-quick-actions--margin-inline-start:var(--si-sys-sizing-spacing-x-80);--ix-dropdown-quick-actions--margin-inline-end:var(--si-sys-sizing-spacing-x-80);--ix-dropdown-quick-actions--margin-block-end:var(--si-sys-sizing-spacing-y-20);--ix-dropdown-quick-actions-item--margin-inline-end:calc(     var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10)   )}:host{display:flex;justify-content:center;align-items:center;margin-inline-start:var(--ix-dropdown-quick-actions--margin-inline-start);margin-inline-end:var(--ix-dropdown-quick-actions--margin-inline-end);margin-block-end:var(--ix-dropdown-quick-actions--margin-block-end)}:host slot::slotted(*){display:flex;margin-inline-end:var(--ix-dropdown-quick-actions-item--margin-inline-end)}`;
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
