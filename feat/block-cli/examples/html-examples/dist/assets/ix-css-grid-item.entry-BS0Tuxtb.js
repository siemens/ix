import { r as registerInstance, h, H as Host } from "./global-CRrZCTD3.js";
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
    return h(Host, { key: "6787fc5e2430f6a09118d5320ed86e4f249f09ea", style }, h("slot", { key: "993594a1872322a75c5d0f85402cd362a1106149" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
