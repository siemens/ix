import { r as registerInstance, h, H as Host } from "./global-Cx3A0XQN.js";
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
    return h(Host, { key: "fb45cf952b49de9b5a91bf348abfef3be879737a", style }, h("slot", { key: "a11e6738a701ad09c2ddcbacc93534dcc911e867" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
