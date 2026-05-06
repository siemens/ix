import { r as registerInstance, g as getElement, h, H as Host } from "./global-Dfa5QLOG.js";
import { H as HookValidationLifecycle } from "./validation-DnyZtQqc-C5Ryfcp9.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./index-DguwRUR0-CZre96EV.js";
const checkboxGroupCss = () => `:host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}`;
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
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Optional helper text displayed below the checkbox group
   */
  helperText;
  /**
   * Label for the checkbox group
   */
  label;
  /**
   * Alignment of the checkboxes in the group
   */
  direction = "column";
  /**
   * Error text for the checkbox group
   */
  invalidText;
  /**
   * Info text for the checkbox group
   */
  infoText;
  /**
   * Valid text for the checkbox group
   */
  validText;
  /**
   * Warning text for the checkbox group
   */
  warningText;
  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  showTextAsTooltip = false;
  /**
   * @internal
   */
  required = false;
  isInvalid = false;
  isInfo = false;
  isValid = false;
  isWarning = false;
  touched = false;
  groupRef = makeRef();
  get checkboxElements() {
    return Array.from(this.hostElement.querySelectorAll("ix-checkbox"));
  }
  observer = new MutationObserver(() => {
    this.checkForRequiredCheckbox();
  });
  checkForRequiredCheckbox() {
    this.required = this.checkboxElements.some((checkbox) => checkbox.required);
  }
  connectedCallback() {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["checked", "required"]
    });
  }
  componentWillLoad() {
    this.checkForRequiredCheckbox();
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  onClassFieldUpdate({ isInvalid, isInvalidByRequired, isInfo, isValid, isWarning }) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  /**
   * @internal
   */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  /**
   * @internal
   */
  hasValidValue() {
    return Promise.resolve(this.checkboxElements.some((checkbox) => checkbox.checked));
  }
  render() {
    return h(Host, { key: "6f6986c6c9e38b0453858a7df0f2dd5f302608db", ref: this.groupRef, onIxBlur: () => this.touched = true }, h("ix-field-wrapper", { key: "382e4bb0125948d2a240c4f117ddf0e6cdb39d64", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning, controlRef: this.groupRef }, h("div", { key: "c2610a305465e641917a43b92161ae23f6f7d66e", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "b36e6fdc5ac75955c8eb692b1968631166c96455" }))));
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], CheckboxGroup.prototype, "onClassFieldUpdate", null);
CheckboxGroup.style = checkboxGroupCss();
export {
  CheckboxGroup as ix_checkbox_group
};
