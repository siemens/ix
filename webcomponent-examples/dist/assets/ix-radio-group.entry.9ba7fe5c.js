import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.2bfd6008.js";
import { H as HookValidationLifecycle } from "./validation-45aa490c.d55c4dd8.js";
const radioGroupCss = ":host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}";
const IxRadioGroupStyle0 = radioGroupCss;
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
    this.observer = new MutationObserver(() => {
      this.ensureOnlyLastRadioChecked();
    });
    this.helperText = void 0;
    this.label = void 0;
    this.value = void 0;
    this.invalidText = void 0;
    this.infoText = void 0;
    this.warningText = void 0;
    this.validText = void 0;
    this.showTextAsTooltip = void 0;
    this.direction = "column";
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
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
    return h(Host, { key: "e34f29dfa844a5d74969e0d7d4524ac0b35ed819" }, h("ix-field-wrapper", { key: "f146673dd9ff78690cc0b52378793b0c94b20fac", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid }, h("div", { key: "9280999ed1c6630ae9500e2f73de26a12ea1c417", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "7556d4a6396633bc085ebf5cb12070d7a3c673e5" }))));
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
RadiobuttonGroup.style = IxRadioGroupStyle0;
export {
  RadiobuttonGroup as ix_radio_group
};
