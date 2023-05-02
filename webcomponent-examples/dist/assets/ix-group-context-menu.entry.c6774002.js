import { r as registerInstance, h, H as Host, g as getElement } from "./index.668348d5.js";
const groupContextMenuCss = ".sc-ix-group-context-menu-h{display:block;position:relative;-webkit-margin-before:0.3125rem;margin-block-start:0.3125rem;-webkit-margin-end:0.3125rem;margin-inline-end:0.3125rem;-webkit-margin-start:auto;margin-inline-start:auto}.sc-ix-group-context-menu-h ix-icon-button.sc-ix-group-context-menu::after{display:none}.sc-ix-group-context-menu-h .hide.sc-ix-group-context-menu{visibility:collapse}";
const GroupContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showContextMenu = false;
  }
  get dropdownElement() {
    return this.host.querySelector("ix-dropdown");
  }
  get groupDropdownItem() {
    return this.host.querySelectorAll("ix-group-dropdown-item");
  }
  configureDropdown(triggerElement) {
    this.dropdownElement.positioningStrategy = "fixed";
    this.dropdownElement.trigger = triggerElement;
  }
  componentWillRender() {
    this.showContextMenu = !!this.dropdownElement;
  }
  render() {
    return h(Host, null, h("ix-icon-button", { class: { hide: !this.showContextMenu }, ref: (ref) => this.dropdownElement ? this.configureDropdown(ref) : null, size: "24", ghost: true, icon: "context-menu" }), h("slot", null));
  }
  get host() {
    return getElement(this);
  }
};
GroupContextMenu.style = groupContextMenuCss;
export {
  GroupContextMenu as ix_group_context_menu
};
