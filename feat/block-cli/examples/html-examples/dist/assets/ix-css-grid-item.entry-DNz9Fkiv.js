import { r as registerInstance, h, H as Host } from "./global-Dfa5QLOG.js";
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
    return h(Host, { key: "b05d3fa54636a4ac3c09503091de8a4b3a4c6d73", style }, h("slot", { key: "daa7e8647da9ec5111293aeaa31423a7b7335468" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
