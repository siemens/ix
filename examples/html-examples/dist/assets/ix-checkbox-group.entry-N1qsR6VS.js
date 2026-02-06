import { r as registerInstance, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
import { H as HookValidationLifecycle } from "./validation-3877QBzA-qKKeryVJ.js";
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
    return h(Host, { key: "ac1e91fd23038317e1a39b612f67e91d53ba946c", ref: this.groupRef, onIxBlur: () => this.touched = true }, h("ix-field-wrapper", { key: "1278bca33da0339052756f01e8ca2de2641feffb", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning, controlRef: this.groupRef }, h("div", { key: "7ba4ca7e379f49c6234c681a682cb08ec3d44b87", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "a843f1bfd2942b4f0e9d2060646b50e97e55bca8" }))));
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
