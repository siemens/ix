import { r as registerInstance, h, H as Host } from "./index.de3a8f1f.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;-webkit-margin-start:1.5rem;margin-inline-start:1.5rem;-webkit-margin-end:1.5rem;margin-inline-end:1.5rem;-webkit-margin-after:0.25rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;-webkit-margin-end:0.625rem;margin-inline-end:0.625rem}";
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
