import { r as registerInstance, h, H as Host, g as getElement } from "./global.bff64ac3.js";
import { H as HookValidationLifecycle } from "./validation-C_w_pHgR.937fc7b1.js";
const checkboxGroupCss = ":host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}";
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const CheckboxGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.direction = "column";
    this.showTextAsTooltip = false;
    this.isInvalid = false;
    this.isInfo = false;
    this.isValid = false;
    this.isWarning = false;
  }
  onClassFieldUpdate({ isInvalid, isInvalidByRequired, isInfo, isValid, isWarning }) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  render() {
    return h(Host, { key: "27aee735ce40e2c2f3b019afad6a44ed1029c2c6" }, h("ix-field-wrapper", { key: "70b0666837cc8ed83defc9844cc58003f489a22e", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning }, h("div", { key: "59485040ff9509b58b7bd8f7f50e53970585ffb5", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "af5f7db97a6efec492299336428bbb9ded00fbca" }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], CheckboxGroup.prototype, "onClassFieldUpdate", null);
CheckboxGroup.style = checkboxGroupCss;
export {
  CheckboxGroup as ix_checkbox_group
};
