import { r as registerInstance, h, H as Host } from "./global.7dd975c7.js";
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
    return h(Host, { key: "bc5b71e095a35738800e7b95baca2c4a7874205e", style }, h("slot", { key: "dd2a9bc3a5eecc1d539820a72dd9de51e5466923" }));
  }
};
CssGridItem.style = IxCssGridItemStyle0;
export {
  CssGridItem as ix_css_grid_item
};
