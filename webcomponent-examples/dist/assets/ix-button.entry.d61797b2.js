import { r as registerInstance, h, H as Host } from "./index.668348d5.js";
import { g as getButtonClasses } from "./base-button-5bfeb71c.437bbfe2.js";
const buttonCss = ".sc-ix-button-h{display:inline-block;width:auto;height:2rem}.disabled.sc-ix-button-h{pointer-events:none}.sc-ix-button-h .btn.sc-ix-button{width:100%;height:100%}";
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
      disabled: this.disabled
    } }, h("button", { type: this.type, class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, h("slot", null)));
  }
};
Button.style = buttonCss;
export {
  Button as ix_button
};
