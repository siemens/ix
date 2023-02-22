import { r as registerInstance, h, H as Host } from "./index.6063163d.js";
const dividerCss = ":host{display:block;position:initial}:host .line{width:auto;border:0.0625rem solid var(--theme-color-x-weak-bdr)}";
const Divider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("div", { class: "line" }));
  }
};
Divider.style = dividerCss;
export {
  Divider as ix_divider
};
