import { r as registerInstance, h, H as Host } from "./global-C8IWpzMv.js";
const cssGridItemCss = () => `:host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}`;
const CssGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Grid item name
   */
  itemName;
  render() {
    const style = {};
    style["grid-area"] = this.itemName;
    return h(Host, { key: "9c7626b6b1749bff9e599a8e24292dc405480ae3", style }, h("slot", { key: "ac7dcebb7564213d1925aa4521df0fbc404b058c" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
