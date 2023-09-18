import { r as registerInstance, h, H as Host } from "./index.505c8453.js";
const layoutGridCss = ":host{--ix-layout-grid-gutter:1.5rem;display:block;flex:1;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5);--ix-layout-grid-row-margin:1rem}:host(.no-padding){padding-left:0;padding-right:0}:host(.no-row-gap){--ix-layout-grid-row-margin:0rem}";
const LayoutGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.noPadding = false;
    this.noRowGap = false;
    this.columns = 12;
  }
  render() {
    return h(Host, { class: {
      "no-padding": this.noPadding,
      "no-row-gap": this.noRowGap
    }, style: {
      "--ix-layout-grid-columns": `${this.columns}`
    } }, h("slot", null));
  }
};
LayoutGrid.style = layoutGridCss;
export {
  LayoutGrid as ix_layout_grid
};
