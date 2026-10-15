import { r as registerInstance, h, H as Host } from "./global-Dj1TfEHu.js";
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
    return h(Host, { key: "82809f42019c104d1688f31d8c2c8b5ef7eab137", style }, h("slot", { key: "1739b43b76e1621b12b035b1f21135cd385aa365" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
