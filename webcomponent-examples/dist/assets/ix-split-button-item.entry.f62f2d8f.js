import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.8b5b8f81.js";
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
    return h(Host, { key: "ef07b2d6b51ae7356319d47e610517676651f2ae" }, h("ix-dropdown-item", { key: "83b4d7597071c2337aae657211c2c093fabe5eb1", ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
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
