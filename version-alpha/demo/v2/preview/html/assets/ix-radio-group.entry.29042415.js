import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.23f98c2e.js";
import { H as HookValidationLifecycle } from "./validation-C3siDfPQ.31747000.js";
const radioGroupCss = ":host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}";
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
    this.direction = "column";
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
    this.observer = new MutationObserver(() => {
      this.ensureOnlyLastRadioChecked();
    });
  }
  get radiobuttonElements() {
    return Array.from(this.hostElement.querySelectorAll("ix-radio"));
  }
  connectedCallback() {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["checked"]
    });
  }
  componentWillLoad() {
    this.selectInitialValue();
    this.ensureOnlyLastRadioChecked();
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
  }
  onValueChangeHandler(newValue) {
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
  onClassField({ isInvalid, isInfo, isValid, isWarning }) {
    this.isInvalid = isInvalid;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  render() {
    return h(Host, { key: "cd598d36a86107d79eccf16bd0b4ca4f69c301f4" }, h("ix-field-wrapper", { key: "90d159cb14dc5d4329421ed75ae06569230aa704", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid }, h("div", { key: "1729d3d1a216b3d96c4422f5e5098226c04aa902", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "d416793b6d3b0369a10b3e0797090f7c0bd35c32" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["onValueChangeHandler"]
    };
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], RadiobuttonGroup.prototype, "onClassField", null);
RadiobuttonGroup.style = radioGroupCss;
export {
  RadiobuttonGroup as ix_radio_group
};
