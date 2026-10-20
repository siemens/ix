import { r as registerInstance, h, H as Host } from "./global-DzKOIL47.js";
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
    return h(Host, { key: "60f680e1fb8f9a9736dcc72fbb79aa76be36d40b", style }, h("slot", { key: "c20a93582fd05da6a4e74d6c940be57e88b52be2" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
