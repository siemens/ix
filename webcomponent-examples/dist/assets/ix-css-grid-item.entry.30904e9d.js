import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
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
    return h(Host, { key: "37fe2b4f8e0cf56e7e38197098b2e608b4b54bce", style }, h("slot", { key: "e59e0f9db976f30235ccd2488a992292320ce19f" }));
  }
};
CssGridItem.style = IxCssGridItemStyle0;
export {
  CssGridItem as ix_css_grid_item
};
