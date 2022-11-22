import { r as registerInstance, h } from "./index.f81f48a8.js";
import { g as getButtonClasses } from "./base-button-0b6635df.0cea0e71.js";
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
    return Object.assign({ "btn-icon-xs": this.size === "12", "btn-icon-s": this.size === "16" }, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, this.oval, this.selected, this.disabled));
  }
  render() {
    return h("button", { class: this.getIconButtonClasses(), type: this.type }, h("ix-icon", { size: this.size, name: this.icon, color: this.color }), h("div", { style: { display: "none" } }, h("slot", null)));
  }
};
export {
  IconButton as ix_icon_button
};
