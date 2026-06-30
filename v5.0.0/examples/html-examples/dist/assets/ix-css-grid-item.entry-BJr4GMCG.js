import { r as registerInstance, h, H as Host } from "./global-F68Qu5y3.js";
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
    return h(Host, { key: "0342626879664e2f806f94017f1e295e903c44e5", style }, h("slot", { key: "cb803b8242ca643ddc80c3f555ad0589875272d3" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
