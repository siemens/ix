import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
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
    return h(Host, { key: "0f639fc5cb1be69b545b8e6b0960102a3f880285", style }, h("slot", { key: "08f8548b5c8c8c88662ef9ac16b680e5f2dc9600" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
