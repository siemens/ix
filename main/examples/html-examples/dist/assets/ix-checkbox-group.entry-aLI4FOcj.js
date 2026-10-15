import { r as registerInstance, g as getElement, h, H as Host } from "./global-D3pEBlWT.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { H as HookValidationLifecycle } from "./validation-_kfY2Dbc-BdovG2bg.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const checkboxGroupCss = () => `@charset "UTF-8";:host{--ix-checkbox-group-checkbox-container--gap:var(--si-sys-sizing-spacing-y-40);--ix-checkbox-group-checkbox-container--margin:var(--si-sys-sizing-spacing-y-30)     0}:host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:var(--ix-checkbox-group-checkbox-container--gap);margin:var(--ix-checkbox-group-checkbox-container--margin);flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}`;
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
    return h(Host, { key: "57b0b535702f992a161f0bc87a3d2ca4c107cd11", ref: this.groupRef, onIxBlur: () => this.touched = true }, h("ix-field-wrapper", { key: "04094185187fe598a0426024cf783b57434c3752", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning, controlRef: this.groupRef }, h("div", { key: "e6387079fe8be67f88aa30f1e65467f038075cb8", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "0f54f41b5def9a07f625ffc9cbc0f357a868e28e" }))));
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
