import { r as registerInstance, c as createEvent, h, g as getElement } from "./index.64f709af.js";
const splitButtonItemCss = ":host{display:contents}";
const SplitButtonItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.icon = void 0;
    this.label = void 0;
  }
  render() {
    return h("ix-dropdown-item", { suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, onClick: (e) => this.itemClick.emit(e) });
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButtonItem.style = splitButtonItemCss;
export {
  SplitButtonItem as ix_split_button_item
};
