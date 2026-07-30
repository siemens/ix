import { r as registerInstance, g as getElement, h, H as Host } from "./global-J1r-v9CX.js";
import { H as HookValidationLifecycle } from "./validation-VVt5EFy0-BYsRUFvy.js";
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
    return h(Host, { key: "14fc6aed88e0935059b62b50a28b945288e1124d" }, h("ix-field-wrapper", { key: "dade978b89d84bfbd2c5cdd0f848bd796772ebd1", label: this.label, helperText: this.helperText, infoText: this.infoText, warningText: this.warningText, invalidText: this.invalidText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, required: this.required }, h("slot", { key: "ee15163c69a1b25a11d414ff988953ea02780466" })));
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
