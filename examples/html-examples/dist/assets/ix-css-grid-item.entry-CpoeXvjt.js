import { r as registerInstance, h, H as Host } from "./global-wi9VneMU.js";
const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const CssGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const style = {};
    style["grid-area"] = this.itemName;
    return h(Host, { key: "0f7a1001629ec09b7e6f44470b733f3d1d691bcb", style }, h("slot", { key: "1fce4a329cea68181bc52e60d155d6c6b7bb41bc" }));
  }
};
CssGridItem.style = cssGridItemCss;
export {
  CssGridItem as ix_css_grid_item
};
