import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.7dd975c7.js";
import { m as makeRef } from "./make-ref-4b76e9b5.1c81bb51.js";
const splitButtonItemCss = ":host{display:contents}";
const IxSplitButtonItemStyle0 = splitButtonItemCss;
const SplitButtonItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.wrapperRef = makeRef();
    this.icon = void 0;
    this.label = void 0;
  }
  async getDropdownItemElement() {
    return this.wrapperRef.waitForCurrent();
  }
  render() {
    return h(Host, { key: "cb34ba65f519984cf68639856699df8471d82f4c" }, h("ix-dropdown-item", { key: "54a95bd00935e3246e4d5bf8f9cdbc8da5d2cd82", ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, onClick: (e) => this.itemClick.emit(e) }));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButtonItem.style = IxSplitButtonItemStyle0;
export {
  SplitButtonItem as ix_split_button_item
};
