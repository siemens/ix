import { r as registerInstance, h, H as Host } from "./index.435ccc59.js";
const gridCss = ":host{--ix-grid-gutter:1.5rem;display:block;flex:1;width:100%;padding-left:calc(var(--ix-grid-gutter) * 0.5);padding-right:calc(var(--ix-grid-gutter) * 0.5);--ix-grid-row-margin:1rem}:host(.no-padding){padding-left:0;padding-right:0}:host(.no-row-gap){--ix-grid-row-margin:0rem}";
const Grid = class {
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
      "--ix-grid-columns": `${this.columns}`
    } }, h("slot", null));
  }
};
Grid.style = gridCss;
export {
  Grid as ix_grid
};
