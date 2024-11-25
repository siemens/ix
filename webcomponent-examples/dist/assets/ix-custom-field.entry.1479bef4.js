import { r as registerInstance, h, H as Host, g as getElement } from "./global.2bfd6008.js";
import { H as HookValidationLifecycle } from "./validation-45aa490c.d55c4dd8.js";
const customFieldCss = ":host{display:block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}";
const IxCustomFieldStyle0 = customFieldCss;
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
    this.label = void 0;
    this.helperText = void 0;
    this.infoText = void 0;
    this.warningText = void 0;
    this.invalidText = void 0;
    this.validText = void 0;
    this.showTextAsTooltip = void 0;
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
    return h(Host, { key: "ee9ed8e36ffa3f55295e0e4fda3d2b1acb90c2e3" }, h("ix-field-wrapper", { key: "19cfaca80d58b6aa2b9d8a29e33777f4be9b238a", label: this.label, helperText: this.helperText, infoText: this.infoText, warningText: this.warningText, invalidText: this.invalidText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, required: this.required }, h("slot", { key: "b3e5d6efbfa3279de1e0ffe2d9322ac14c985911" })));
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
CustomField.style = IxCustomFieldStyle0;
export {
  CustomField as ix_custom_field
};
