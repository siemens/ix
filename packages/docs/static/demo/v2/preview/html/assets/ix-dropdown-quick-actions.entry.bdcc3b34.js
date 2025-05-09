import { r as registerInstance, h, H as Host } from "./global.e92797ea.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "f38082cc18541cb25cbb27e53e8071ab087ea7bf" }, h("slot", { key: "57d7abc976bbfe107bf2297fcb0d5db1aec29294" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
