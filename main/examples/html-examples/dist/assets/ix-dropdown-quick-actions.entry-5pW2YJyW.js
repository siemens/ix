import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-DSXWMbmA.js";
import "./preload-helper-UZRgTS1n.js";
const dropdownQuickActionsCss = () => `@charset "UTF-8";:host{--ix-dropdown-quick-actions--margin-inline-start:var(--si-sys-sizing-spacing-x-80);--ix-dropdown-quick-actions--margin-inline-end:var(--si-sys-sizing-spacing-x-80);--ix-dropdown-quick-actions--margin-block-end:var(--si-sys-sizing-spacing-y-20);--ix-dropdown-quick-actions-item--margin-inline-end:var(--si-sys-sizing-spacing-x-20)}:host{display:flex;justify-content:center;align-items:center;margin-inline-start:var(--ix-dropdown-quick-actions--margin-inline-start);margin-inline-end:var(--ix-dropdown-quick-actions--margin-inline-end);margin-block-end:var(--ix-dropdown-quick-actions--margin-block-end)}:host slot::slotted(*){display:flex;margin-inline-end:var(--ix-dropdown-quick-actions-item--margin-inline-end)}`;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "f5b7b481f453f5fad7a215a2a38af26cfe7bc7e8" }, h("slot", { key: "76e68ec1dbbc7f8a7f2e1ef5649e22717d7c420e" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss();
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
