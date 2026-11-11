import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-DSXWMbmA.js";
import { H as HookValidationLifecycle } from "./validation-Di-_grhN-DFtUnA9Q.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-XBTykBKS-D8xrYMLu.js";
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
    return h(Host, { key: "1019713e485fdaee6cf3108776f70d2034d92070" }, h("ix-field-wrapper", { key: "74dd77fbf4cfcfe0586a879b1b757fbf772e63c8", label: this.label, helperText: this.helperText, infoText: this.infoText, warningText: this.warningText, invalidText: this.invalidText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, required: this.required }, h("slot", { key: "dc247ad7678d6f99f7af44634591cbcda3441a1a" })));
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
