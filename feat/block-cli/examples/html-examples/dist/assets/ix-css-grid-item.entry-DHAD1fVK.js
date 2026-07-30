import { r as registerInstance, h, H as Host } from "./global-J1r-v9CX.js";
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
    return h(Host, { key: "8c1f20ae36769402abbf568d232863061e0bba67", style }, h("slot", { key: "35dbc24e4b5cf7f71380764faee8f9f97b355996" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
