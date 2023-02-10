import { r as registerInstance, h, H as Host } from "./index.0928911b.js";
const iconCss = ".sc-ix-icon-h{display:inline-flex;height:1.5rem;width:1.5rem;color:var(--theme-color-std-text)}.sc-ix-icon-h i.sc-ix-icon{color:inherit;transition:color 150ms}.size-12.sc-ix-icon-h{height:0.75rem;width:0.75rem}.size-16.sc-ix-icon-h{height:1rem;width:1rem}.size-32.sc-ix-icon-h{height:2rem;width:2rem}";
const Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = void 0;
    this.color = void 0;
    this.name = void 0;
  }
  render() {
    return h(Host, { style: {
      color: this.color ? `var(--theme-${this.color})` : "inherit"
    }, class: {
      ["size-12"]: this.size === "12",
      ["size-16"]: this.size === "16",
      ["size-24"]: this.size === "24",
      ["size-32"]: this.size === "32"
    } }, h("i", { class: {
      glyph: true,
      [`glyph-${this.name}`]: true,
      "glyph-12": this.size === "12",
      "glyph-16": this.size === "16",
      "glyph-24": this.size === "24",
      "glyph-32": this.size === "32"
    } }, h("slot", null)));
  }
};
Icon.style = iconCss;
export {
  Icon as ix_icon
};
