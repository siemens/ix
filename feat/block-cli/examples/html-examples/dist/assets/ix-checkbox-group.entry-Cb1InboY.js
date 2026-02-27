import { r as registerInstance, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { H as HookValidationLifecycle } from "./validation-3877QBzA-Cg5a-YOP.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
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
    this.required = false;
    this.isInvalid = false;
    this.isInfo = false;
    this.isValid = false;
    this.isWarning = false;
    this.touched = false;
    this.groupRef = makeRef();
    this.observer = new MutationObserver(() => {
      this.checkForRequiredCheckbox();
    });
  }
  get checkboxElements() {
    return Array.from(this.hostElement.querySelectorAll("ix-checkbox"));
  }
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
    return h(Host, { key: "43cb794c258ef75fae35a19edbd631c886e05d77", ref: this.groupRef, onIxBlur: () => this.touched = true }, h("ix-field-wrapper", { key: "a9b914d0cad1bc337a6fb72970888ca21dca5a5b", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning, controlRef: this.groupRef }, h("div", { key: "1de63fc654c13e05001bf9b34e9279ffc99bc9f1", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "102be90c6c45a60efce1a7d4277012c3bfe44ded" }))));
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
