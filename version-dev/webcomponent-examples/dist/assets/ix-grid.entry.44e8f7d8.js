import { r as registerInstance, h, H as Host } from "./index.f1cc59d7.js";
const gridCss = ":host{--ix-grid-gutter:1.5rem;display:block;flex:1;width:100%;padding-left:calc(var(--ix-grid-gutter) * 0.5);padding-right:calc(var(--ix-grid-gutter) * 0.5)}:host(.fluid){padding-left:0;padding-right:0}:host(.fixed-sm){max-width:33.75rem}:host(.fixed-md),:host(.fixed){max-width:45rem}:host(.fixed-lg){max-width:60rem}";
const Grid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fixed = false;
    this.fluid = false;
    this.columns = 12;
  }
  render() {
    const classRecord = {};
    if (this.fixed === "" || typeof this.fixed === "boolean" && this.fixed) {
      classRecord["fixed"] = true;
    }
    if (this.fixed && typeof this.fixed === "string") {
      classRecord[`${this.fixed}`] = true;
    }
    return h(Host, { class: Object.assign(Object.assign({}, classRecord), { fluid: this.fluid }), style: {
      "--ix-grid-columns": `${this.columns}`
    } }, h("slot", null));
  }
};
Grid.style = gridCss;
export {
  Grid as ix_grid
};
