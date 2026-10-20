import { r as registerInstance, h, H as Host } from "./global-DzKOIL47.js";
const dividerCss = () => `@charset "UTF-8";:host{--ix-divider--border-color:var(--si-sys-color-border-4)}:host{--ix-divider--margin:var(--si-sys-sizing-spacing-y-20) 0;--ix-divider--border-width:var(--si-sys-sizing-border-width-default)}:host{display:block;position:relative;width:100%;border-bottom:var(--ix-divider--border-width) solid var(--ix-divider--border-color);margin:var(--ix-divider--margin)}`;
const Divider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "713cb567b97b2502e5d3ee7676b77403c914f17e" });
  }
};
Divider.style = dividerCss();
export {
  Divider as ix_divider
};
