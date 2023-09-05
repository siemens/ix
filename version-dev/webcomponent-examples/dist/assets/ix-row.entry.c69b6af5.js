import { r as registerInstance, h, H as Host } from "./index.f1cc59d7.js";
const rowCss = ":host{display:flex;flex-wrap:wrap}";
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
