import { r as registerInstance, h, H as Host } from "./index.bb42fc32.js";
import { g as getButtonClasses } from "./base-button-0b6635df.0cea0e71.js";
const iconButtonCss = ".disabled.sc-ix-icon-button-h{pointer-events:none}.sc-ix-icon-button-h .icon-button.sc-ix-icon-button{padding:0;overflow:hidden}";
const IconButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "Secondary";
    this.outline = void 0;
    this.invisible = void 0;
    this.ghost = void 0;
    this.oval = void 0;
    this.icon = void 0;
    this.size = "24";
    this.color = void 0;
    this.selected = false;
    this.disabled = false;
    this.type = "button";
  }
  getIconButtonClasses() {
    return Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, this.oval, this.selected, this.disabled)), { "icon-button": true, "btn-icon-12": this.size === "12", "btn-icon-16": this.size === "16", "btn-icon-32": this.size === "32" || this.size === "24" || !this.size });
  }
  render() {
    return h(Host, { class: { disabled: this.disabled } }, h("button", { class: this.getIconButtonClasses(), type: this.type }, h("ix-icon", { size: this.size, name: this.icon, color: this.color }), h("div", { style: { display: "none" } }, h("slot", null))));
  }
};
IconButton.style = iconButtonCss;
export {
  IconButton as ix_icon_button
};
