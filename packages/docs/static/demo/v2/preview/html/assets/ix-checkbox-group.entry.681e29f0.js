import { r as registerInstance, h, H as Host, g as getElement } from "./global.e92797ea.js";
import { H as HookValidationLifecycle } from "./validation-CS0nhfz1.28cfb38d.js";
import { m as makeRef } from "./make-ref-bcj7UEIC.8e199155.js";
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
  isTouched() {
    return Promise.resolve(this.touched);
  }
  hasValidValue() {
    return Promise.resolve(this.checkboxElements.some((checkbox) => checkbox.checked));
  }
  render() {
    return h(Host, { key: "77b87f092dc2a4d95adbd496cbbbc22eb0c923c3", ref: this.groupRef, onIxBlur: () => this.touched = true }, h("ix-field-wrapper", { key: "b0a0db7727ff7bd6cd554a8ef14afea3ed4ff46a", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning, controlRef: this.groupRef }, h("div", { key: "7bcf7ecacfe94c995a335f72b78f01f554a3d469", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "416117ca60b21153342224b27261faa3f81f87a2" }))));
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
