import { r as registerInstance, h, H as Host, g as getElement } from "./global.2bfd6008.js";
import { H as HookValidationLifecycle } from "./validation-45aa490c.d55c4dd8.js";
const checkboxGroupCss = ":host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}";
const IxCheckboxGroupStyle0 = checkboxGroupCss;
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
    this.helperText = void 0;
    this.label = void 0;
    this.direction = "column";
    this.invalidText = void 0;
    this.infoText = void 0;
    this.validText = void 0;
    this.warningText = void 0;
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
    return h(Host, { key: "3b3403b167dbcd69cce94ece70070d6d4a633fd5" }, h("ix-field-wrapper", { key: "47692f7cadd2bf1798302f4854d0c16efca49dd4", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning }, h("div", { key: "82181467dda161e570576dd4644c5cc45584ac3a", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "a1fe76fc0d07422227cddc9d8e2b51ef1894311a" }))));
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
CheckboxGroup.style = IxCheckboxGroupStyle0;
export {
  CheckboxGroup as ix_checkbox_group
};
