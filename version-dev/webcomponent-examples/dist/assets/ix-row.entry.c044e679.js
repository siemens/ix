import { r as registerInstance, h, H as Host } from "./index.1d71f6c6.js";
const rowCss = ":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){-webkit-margin-before:var(--ix-layout-grid-row-margin, 0);margin-block-start:var(--ix-layout-grid-row-margin, 0)}";
const Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
Row.style = rowCss;
export {
  Row as ix_row
};
