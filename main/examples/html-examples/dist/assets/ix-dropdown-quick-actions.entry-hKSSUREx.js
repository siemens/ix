import { r as registerInstance, h, H as Host } from "./global-DV2yP7rM.js";
const dropdownQuickActionsCss = () => `@charset "UTF-8";:host{--ix-dropdown-quick-actions--margin-inline-start:var(--si-sys-sizing-spacing-x-80);--ix-dropdown-quick-actions--margin-inline-end:var(--si-sys-sizing-spacing-x-80);--ix-dropdown-quick-actions--margin-block-end:var(--si-sys-sizing-spacing-y-20);--ix-dropdown-quick-actions-item--margin-inline-end:var(--si-sys-sizing-spacing-x-20)}:host{display:flex;justify-content:center;align-items:center;margin-inline-start:var(--ix-dropdown-quick-actions--margin-inline-start);margin-inline-end:var(--ix-dropdown-quick-actions--margin-inline-end);margin-block-end:var(--ix-dropdown-quick-actions--margin-block-end)}:host slot::slotted(*){display:flex;margin-inline-end:var(--ix-dropdown-quick-actions-item--margin-inline-end)}`;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "60a161bd5a3ebb3566b0032cf59ec88a3f0b4e2d" }, h("slot", { key: "0b9077c73008c79d28531458da1a8a9efd3becba" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss();
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
