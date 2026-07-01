import { r as registerInstance, g as getElement, h, H as Host } from "./global-Cx3A0XQN.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { H as HookValidationLifecycle } from "./validation-VVt5EFy0-DT4pnCa-.js";
import "./index-XBTykBKS-D8xrYMLu.js";
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
    return h(Host, { key: "9d5bb6c78da35c86d81f5a24ac10b5da488fd076", ref: this.groupRef, onIxBlur: () => this.touched = true }, h("ix-field-wrapper", { key: "4f0171c419743bb9cb1a1c281dbc146c9903325c", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning, controlRef: this.groupRef }, h("div", { key: "498ff0f62b72030124847a2ceeded3a4a455dcee", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "923fae2ed0656046eb9ce135d3f266bed78e732c" }))));
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
