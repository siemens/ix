import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-DGToXfDo.js";
import "./preload-helper-UZRgTS1n.js";
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
    return h(Host, { key: "396a4ee4494f370276f6eda417ca5655cc68515b", style }, h("slot", { key: "4134f8eb8abbabb3cd8bb2dbcd4cc9a31729ac7f" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
