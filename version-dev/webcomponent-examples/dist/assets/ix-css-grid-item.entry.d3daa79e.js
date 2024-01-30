import { r as registerInstance, h, H as Host } from "./index.e8613f8b.js";
const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const IxCssGridItemStyle0 = cssGridItemCss;
const CssGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemName = void 0;
  }
  render() {
    const style = {};
    style["grid-area"] = this.itemName;
    return h(Host, { style }, h("slot", null));
  }
};
CssGridItem.style = IxCssGridItemStyle0;
export {
  CssGridItem as ix_css_grid_item
};
