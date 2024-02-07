import { r as registerInstance, h, H as Host } from "./index.18e27e15.js";
const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const IxCssGridItemStyle0 = cssGridItemCss;
const CssGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemName = void 0;
  }
  render() {
    const style = {};
    style["grid-area"] = this.itemName;
    return h(Host, { key: "18c8504776bd33a1a8df5d7a6678e688b168ac0a", style }, h("slot", { key: "d3ac0ec877a74d3fd87a1375312b017042455063" }));
  }
};
CssGridItem.style = IxCssGridItemStyle0;
export {
  CssGridItem as ix_css_grid_item
};
