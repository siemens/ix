import { r as registerInstance, h, H as Host } from "./global-F68Qu5y3.js";
const dropdownQuickActionsCss = () => `:host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}`;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "b9f5a60c4c4e89ebadfca596a9ce415318cbc048" }, h("slot", { key: "54c6702bbbea8cc420f724244488800e2979dc50" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss();
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
