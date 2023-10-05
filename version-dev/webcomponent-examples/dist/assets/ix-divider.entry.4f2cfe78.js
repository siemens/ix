import { r as registerInstance, h, H as Host } from "./index.e8ee4cc3.js";
const dividerCss = ":host{display:block;position:relative;width:100%;border:0.0625rem solid var(--theme-color-x-weak-bdr);margin:0.25rem 0px}";
const Divider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null);
  }
};
Divider.style = dividerCss;
export {
  Divider as ix_divider
};
