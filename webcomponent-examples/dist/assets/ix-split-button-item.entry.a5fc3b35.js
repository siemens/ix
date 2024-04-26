import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.918151cc.js";
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
    return h(Host, { key: "b7360859acb51da295ef29d514e8d4dbef347931" }, h("ix-dropdown-item", { key: "1c47e6937a8a686da1bb0b028daa0fef1b711f4e", ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
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
