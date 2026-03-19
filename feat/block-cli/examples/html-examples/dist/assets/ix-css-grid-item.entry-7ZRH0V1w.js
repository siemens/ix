import { r as registerInstance, h, H as Host } from "./global-C_dy4gBz.js";
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
    return h(Host, { key: "5b0d3b6ab2e0f7fc79378a854c60e3635e8ab692", style }, h("slot", { key: "fc224d72d60566ddb1ba52ae6457e7458a56cccf" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
