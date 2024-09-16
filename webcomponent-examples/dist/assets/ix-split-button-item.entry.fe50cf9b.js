import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { m as makeRef } from "./make-ref-c80046bf.a5245335.js";
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
    return h(Host, { key: "2569c82160826d73102d074efd5a2b13a128b92b" }, h("ix-dropdown-item", { key: "c46a3b90d3ba24747b0598be971a398ec2febe71", ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
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
