import { r as registerInstance, g as getElement, h, H as Host } from "./global-Dfa5QLOG.js";
import { H as HookValidationLifecycle } from "./validation-DnyZtQqc-C5Ryfcp9.js";
import "./index-DguwRUR0-CZre96EV.js";
const customFieldCss = () => `:host{display:block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}`;
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
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * A value is required or must be checked for the form to be submittable
   */
  required = false;
  /**
   * Label for the field component
   */
  label;
  /**
   * Show text below the field component which show additional information
   */
  helperText;
  /**
   * Info text for the field component
   */
  infoText;
  /**
   * Warning text for the field component
   */
  warningText;
  /**
   * Error text for the field component
   */
  invalidText;
  /**
   * Valid text for the field component
   */
  validText;
  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  showTextAsTooltip;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  updateValidationState({ isInvalid, isValid, isInfo, isWarning }) {
    this.isInvalid = isInvalid;
    this.isValid = isValid;
    this.isInfo = isInfo;
    this.isWarning = isWarning;
  }
  render() {
    return h(Host, { key: "fac414a39ed9c075cae70d0cca2a96b9cf19d5da" }, h("ix-field-wrapper", { key: "b2346d5849488093419c4df1eccfd66edd737ab0", label: this.label, helperText: this.helperText, infoText: this.infoText, warningText: this.warningText, invalidText: this.invalidText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, required: this.required }, h("slot", { key: "3f64559d6aa74426a806cc1abbecdb479b39b6dd" })));
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], CustomField.prototype, "updateValidationState", null);
CustomField.style = customFieldCss();
export {
  CustomField as ix_custom_field
};
