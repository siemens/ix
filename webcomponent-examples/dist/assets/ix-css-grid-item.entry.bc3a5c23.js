import { r as registerInstance, h, H as Host } from "./index.8b3d29f9.js";
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
    return h(Host, { key: "e5f4a0cda7624d07672ff6892f55ab8d7d8faf8d", style }, h("slot", { key: "962c12dd575e9f5d81b51259ad973616ae200515" }));
  }
};
CssGridItem.style = IxCssGridItemStyle0;
export {
  CssGridItem as ix_css_grid_item
};
