import { a as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Ba1Wm6ph.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { H as HookValidationLifecycle } from "./validation-VVt5EFy0-D-NZ3wqB.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const radioGroupCss = () => `:host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:0.5rem 1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}`;
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
const RadiobuttonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Show text below the field component
   */
  helperText;
  /**
   * Label for the field component
   */
  label;
  /**
   * Value of the radiobutton group component
   */
  value;
  /**
   * Error text for the field component
   */
  invalidText;
  /**
   * Info text for the field component
   */
  infoText;
  /**
   * Warning text for the field component
   */
  warningText;
  /**
   * Valid text for the field component
   */
  validText;
  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  showTextAsTooltip;
  /**
   * Alignment of the radio buttons in the group
   */
  direction = "column";
  /**
   * Required state of the checkbox component
   *
   * @internal
   */
  required = false;
  /**
   * Event emitted when the value of the radiobutton group changes
   */
  valueChange;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  touched = false;
  groupRef = makeRef();
  observer = new MutationObserver(() => {
    this.ensureOnlyLastRadioChecked();
    this.hasNestedRequiredRadio();
  });
  get radiobuttonElements() {
    return Array.from(this.hostElement.querySelectorAll("ix-radio"));
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
    this.selectInitialValue();
    this.ensureOnlyLastRadioChecked();
    this.hasNestedRequiredRadio();
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  selectInitialValue() {
    if (!this.value) {
      return;
    }
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === this.value;
    });
  }
  ensureOnlyLastRadioChecked() {
    const checkedRadios = this.radiobuttonElements.filter((radio) => radio.checked);
    checkedRadios.forEach((radio, index) => {
      if (index === checkedRadios.length - 1) {
        return;
      }
      radio.checked = false;
    });
    const hasCheckedRadio = this.isSomeRadioChecked();
    for (const radio of this.radiobuttonElements) {
      radio.tabIndex = radio.checked ? 0 : -1;
    }
    if (!hasCheckedRadio && this.radiobuttonElements.length > 0) {
      this.radiobuttonElements[0].tabIndex = 0;
    }
  }
  hasNestedRequiredRadio() {
    this.required = this.radiobuttonElements.some((radiobutton) => radiobutton.required);
  }
  isSomeRadioChecked() {
    return this.radiobuttonElements.some((radio) => radio.checked);
  }
  onValueChangeHandler(newValue) {
    this.touched = true;
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === newValue;
    });
  }
  onCheckedChangeHandler(event) {
    this.radiobuttonElements.forEach((radiobutton) => {
      if (radiobutton !== event.target) {
        radiobutton.checked = false;
        return;
      }
      radiobutton.checked = true;
      this.valueChange.emit(radiobutton.value);
    });
  }
  onClassField({ isInvalid, isInfo, isValid, isWarning, isInvalidByRequired }) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(!!Array.from(this.hostElement.querySelectorAll("ix-radio")).find((radio) => radio.checked));
  }
  /** @internal */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  /** @internal */
  async setCheckedToNextItem(currentRadio, forward = true) {
    const { radiobuttonElements } = this;
    const { length } = radiobuttonElements;
    if (length <= 1) {
      return;
    }
    const index = radiobuttonElements.indexOf(currentRadio);
    const step = forward ? 1 : -1;
    let nextIndex = (index + step + length) % length;
    while (radiobuttonElements[nextIndex].disabled) {
      if (nextIndex === index) {
        return;
      }
      nextIndex = (nextIndex + step + length) % length;
    }
    const nextRadio = radiobuttonElements[nextIndex];
    nextRadio.setCheckedState(true);
    nextRadio.focus();
  }
  render() {
    return h(Host, { key: "9f6b716408f3eaebcb1c81d1ba585274f92ff105", onIxBlur: () => this.touched = true, ref: this.groupRef, role: "radiogroup" }, h("ix-field-wrapper", { key: "ccfbd955b71745ee9c997cdc762dcdc8a317b14c", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid, controlRef: this.groupRef }, h("div", { key: "ac2df35a318f21ba12210279a2089659daa43291", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "cb68c236c35582386ac07288e4f231603ba2b65b" }))));
  }
  static get watchers() {
    return {
      "value": [{
        "onValueChangeHandler": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], RadiobuttonGroup.prototype, "onClassField", null);
RadiobuttonGroup.style = radioGroupCss();
export {
  RadiobuttonGroup as ix_radio_group
};
