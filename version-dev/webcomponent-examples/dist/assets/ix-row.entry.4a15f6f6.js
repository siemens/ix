import { r as registerInstance, h, H as Host } from "./index.8724426d.js";
const rowCss = ":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}";
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
