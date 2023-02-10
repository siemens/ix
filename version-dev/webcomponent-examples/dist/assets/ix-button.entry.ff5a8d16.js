import { r as registerInstance, h, H as Host } from "./index.0928911b.js";
import { g as getButtonClasses } from "./base-button-0b6635df.0cea0e71.js";
const buttonCss = ".sc-ix-button-h{display:inline-block;height:2rem}.button-disabled.sc-ix-button-h{pointer-events:none}";
const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "Primary";
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.selected = false;
    this.disabled = false;
    this.type = "button";
  }
  render() {
    return h(Host, { class: {
      "button-disabled": this.disabled
    } }, h("button", { type: this.type, class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, h("slot", null)));
  }
};
Button.style = buttonCss;
export {
  Button as ix_button
};
