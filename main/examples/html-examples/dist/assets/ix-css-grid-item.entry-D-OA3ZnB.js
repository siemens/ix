import { r as registerInstance, h, H as Host } from "./global-43rhC1fd.js";
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
    return h(Host, { key: "94d4ea9987c6e6bbaa7b8db088dcbef43f6eb87a", style }, h("slot", { key: "3f3cada10083777c989c62709a0d80d0de62ebba" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
