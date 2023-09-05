import { r as registerInstance, h, H as Host, g as getElement } from "./index.f1cc59d7.js";
import { g as getSlottedElements } from "./shadow-dom-6860b1c4.3ef97993.js";
const groupContextMenuCss = ":host{display:block;position:relative;height:2rem;width:2rem;-webkit-margin-before:0.3125rem;margin-block-start:0.3125rem;-webkit-margin-end:0.3125rem;margin-inline-end:0.3125rem;-webkit-margin-start:auto;margin-inline-start:auto}:host .hide{visibility:collapse}";
const GroupContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showContextMenu = false;
  }
  getTrigger() {
    return this.hostElement;
  }
  configureDropdown(dropdownElement, triggerElement) {
    dropdownElement.positioningStrategy = "fixed";
    dropdownElement.trigger = triggerElement;
  }
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector("slot");
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
    const dropdownElement = elements.find((elm) => elm.tagName === "IX-DROPDOWN");
    const triggerElement = this.getTrigger();
    if (!triggerElement) {
      return;
    }
    if (!dropdownElement) {
      return;
    }
    this.configureDropdown(dropdownElement, triggerElement);
  }
  render() {
    return h(Host, null, h("ix-icon-button", { class: { hide: !this.showContextMenu }, size: "24", ghost: true, icon: "context-menu" }), h("slot", { onSlotchange: () => this.onSlotChange() }));
  }
  get hostElement() {
    return getElement(this);
  }
};
GroupContextMenu.style = groupContextMenuCss;
export {
  GroupContextMenu as ix_group_context_menu
};
