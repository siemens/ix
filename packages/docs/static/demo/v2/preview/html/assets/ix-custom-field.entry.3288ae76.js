import { r as registerInstance, h, H as Host, g as getElement } from "./global.e92797ea.js";
import { H as HookValidationLifecycle } from "./validation-CS0nhfz1.28cfb38d.js";
const customFieldCss = ":host{display:block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}";
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
const CustomField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.required = false;
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
  }
  updateValidationState({ isInvalid, isValid, isInfo, isWarning }) {
    this.isInvalid = isInvalid;
    this.isValid = isValid;
    this.isInfo = isInfo;
    this.isWarning = isWarning;
  }
  render() {
    return h(Host, { key: "50b7e5f59f28a32b2e4b9795efc2f0a9e753813e" }, h("ix-field-wrapper", { key: "c761f7f018a021ff7014b30e34a2d87ae91bb367", label: this.label, helperText: this.helperText, infoText: this.infoText, warningText: this.warningText, invalidText: this.invalidText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, required: this.required }, h("slot", { key: "0a12c0d2a8cd5152aa926e3aa9633c1f0f76ea02" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], CustomField.prototype, "updateValidationState", null);
CustomField.style = customFieldCss;
export {
  CustomField as ix_custom_field
};
