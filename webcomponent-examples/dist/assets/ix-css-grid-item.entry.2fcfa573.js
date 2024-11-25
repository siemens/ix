import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
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
    return h(Host, { key: "c613f8ec7d3ad26ebc21c4f96fe4f11a0a76f2cb", style }, h("slot", { key: "4e16707e1177f5800f457f84127601aa6aae9f3b" }));
  }
};
CssGridItem.style = IxCssGridItemStyle0;
export {
  CssGridItem as ix_css_grid_item
};
