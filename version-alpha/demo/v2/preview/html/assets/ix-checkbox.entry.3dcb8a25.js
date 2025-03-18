import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global.78f61b49.js";
import { H as HookValidationLifecycle } from "./validation-C3siDfPQ.531abc22.js";
import { m as makeRef } from "./make-ref-bcj7UEIC.8e199155.js";
import { a as a11yBoolean } from "./a11y-Bb7pDeaQ.1f74cdb9.js";
const checkboxCss = ":host{--ix-checkbox-check-color:var(--theme-color-primary--contrast);display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;display:inline-flex;position:relative;align-items:center;justify-content:center;width:1.125rem;min-width:1.125rem;max-width:1.125rem;height:1.125rem;min-height:1.125rem;max-height:1.125rem;margin-right:0.5rem}:host button:disabled{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host button:focus-visible{outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:var(--theme-checkbox--focus--outline-offset)}:host input[type=checkbox]{display:none}:host label{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;height:100%}:host ix-typography{margin-top:0.125rem}:host button{background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.checked) button,:host(.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.checked:hover) button,:host(.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.checked:active) button,:host(.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.checked.disabled) button,:host(.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-info) button{--theme-checkbox-unchecked--background:var(\n    --theme-checkbox-unchecked--background--info\n  );--theme-checkbox-unchecked--background--hover:var(\n    --theme-checkbox-unchecked--background--info--hover\n  );--theme-checkbox-unchecked--background--active:var(\n    --theme-checkbox-unchecked--background--info--active\n  );--theme-checkbox-unchecked--border-color:var(\n    --theme-checkbox-unchecked--border-color--info\n  );--theme-checkbox-unchecked--border-color--hover:var(\n    --theme-checkbox-unchecked--border-color--info--hover\n  );--theme-checkbox-unchecked--border-color--active:var(\n    --theme-checkbox-unchecked--border-color--info--active\n  );--theme-checkbox-checked--background:var(\n    --theme-checkbox-checked--background--info\n  );--theme-checkbox-checked--background--hover:var(\n    --theme-checkbox-checked--background--info--hover\n  );--theme-checkbox-checked--background--active:var(\n    --theme-checkbox-checked--background--info--active\n  );--theme-checkbox-checked--border-color:var(\n    --theme-checkbox-checked--border-color--info\n  );--theme-checkbox-checked--border-color--hover:var(\n    --theme-checkbox-checked--border-color--info--hover\n  );--theme-checkbox-checked--border-color--active:var(\n    --theme-checkbox-checked--border-color--info--active\n  );--theme-checkbox-mixed--background:var(\n    --theme-checkbox-mixed--background--info\n  );--theme-checkbox-mixed--background--hover:var(\n    --theme-checkbox-mixed--background--info--hover\n  );--theme-checkbox-mixed--background--active:var(\n    --theme-checkbox-mixed--background--info--active\n  );--theme-checkbox-mixed--border-color:var(\n    --theme-checkbox-mixed--border-color--info\n  );--theme-checkbox-mixed--border-color--hover:var(\n    --theme-checkbox-mixed--border-color--info--hover\n  );--theme-checkbox-mixed--border-color--active:var(\n    --theme-checkbox-mixed--border-color--info--active\n  );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-info:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-info:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-info.checked) button,:host(.ix-info.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-info.checked:hover) button,:host(.ix-info.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-info.checked:active) button,:host(.ix-info.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-info.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-info.checked.disabled) button,:host(.ix-info.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-warning) button{--theme-checkbox-unchecked--background:var(\n    --theme-checkbox-unchecked--background--warning\n  );--theme-checkbox-unchecked--background--hover:var(\n    --theme-checkbox-unchecked--background--warning--hover\n  );--theme-checkbox-unchecked--background--active:var(\n    --theme-checkbox-unchecked--background--warning--active\n  );--theme-checkbox-unchecked--border-color:var(\n    --theme-checkbox-unchecked--border-color--warning\n  );--theme-checkbox-unchecked--border-color--hover:var(\n    --theme-checkbox-unchecked--border-color--warning--hover\n  );--theme-checkbox-unchecked--border-color--active:var(\n    --theme-checkbox-unchecked--border-color--warning--active\n  );--theme-checkbox-checked--background:var(\n    --theme-checkbox-checked--background--warning\n  );--theme-checkbox-checked--background--hover:var(\n    --theme-checkbox-checked--background--warning--hover\n  );--theme-checkbox-checked--background--active:var(\n    --theme-checkbox-checked--background--warning--active\n  );--theme-checkbox-checked--border-color:var(\n    --theme-checkbox-checked--border-color--warning\n  );--theme-checkbox-checked--border-color--hover:var(\n    --theme-checkbox-checked--border-color--warning--hover\n  );--theme-checkbox-checked--border-color--active:var(\n    --theme-checkbox-checked--border-color--warning--active\n  );--theme-checkbox-mixed--background:var(\n    --theme-checkbox-mixed--background--warning\n  );--theme-checkbox-mixed--background--hover:var(\n    --theme-checkbox-mixed--background--warning--hover\n  );--theme-checkbox-mixed--background--active:var(\n    --theme-checkbox-mixed--background--warning--active\n  );--theme-checkbox-mixed--border-color:var(\n    --theme-checkbox-mixed--border-color--warning\n  );--theme-checkbox-mixed--border-color--hover:var(\n    --theme-checkbox-mixed--border-color--warning--hover\n  );--theme-checkbox-mixed--border-color--active:var(\n    --theme-checkbox-mixed--border-color--warning--active\n  );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-warning:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-warning:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-warning.checked) button,:host(.ix-warning.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-warning.checked:hover) button,:host(.ix-warning.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-warning.checked:active) button,:host(.ix-warning.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-warning.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-warning.checked.disabled) button,:host(.ix-warning.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-invalid--required) button{--theme-checkbox-unchecked--background:var(\n    --theme-checkbox-unchecked--background--invalid\n  );--theme-checkbox-unchecked--background--hover:var(\n    --theme-checkbox-unchecked--background--invalid--hover\n  );--theme-checkbox-unchecked--background--active:var(\n    --theme-checkbox-unchecked--background--invalid--active\n  );--theme-checkbox-unchecked--border-color:var(\n    --theme-checkbox-unchecked--border-color--invalid\n  );--theme-checkbox-unchecked--border-color--hover:var(\n    --theme-checkbox-unchecked--border-color--invalid--hover\n  );--theme-checkbox-unchecked--border-color--active:var(\n    --theme-checkbox-unchecked--border-color--invalid--active\n  );--theme-checkbox-checked--background:var(\n    --theme-checkbox-checked--background--invalid\n  );--theme-checkbox-checked--background--hover:var(\n    --theme-checkbox-checked--background--invalid--hover\n  );--theme-checkbox-checked--background--active:var(\n    --theme-checkbox-checked--background--invalid--active\n  );--theme-checkbox-checked--border-color:var(\n    --theme-checkbox-checked--border-color--invalid\n  );--theme-checkbox-checked--border-color--hover:var(\n    --theme-checkbox-checked--border-color--invalid--hover\n  );--theme-checkbox-checked--border-color--active:var(\n    --theme-checkbox-checked--border-color--invalid--active\n  );--theme-checkbox-mixed--background:var(\n    --theme-checkbox-mixed--background--invalid\n  );--theme-checkbox-mixed--background--hover:var(\n    --theme-checkbox-mixed--background--invalid--hover\n  );--theme-checkbox-mixed--background--active:var(\n    --theme-checkbox-mixed--background--invalid--active\n  );--theme-checkbox-mixed--border-color:var(\n    --theme-checkbox-mixed--border-color--invalid\n  );--theme-checkbox-mixed--border-color--hover:var(\n    --theme-checkbox-mixed--border-color--invalid--hover\n  );--theme-checkbox-mixed--border-color--active:var(\n    --theme-checkbox-mixed--border-color--invalid--active\n  );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-invalid--required:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-invalid--required:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-invalid--required.checked) button,:host(.ix-invalid--required.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-invalid--required.checked:hover) button,:host(.ix-invalid--required.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-invalid--required.checked:active) button,:host(.ix-invalid--required.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-invalid--required.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid--required.checked.disabled) button,:host(.ix-invalid--required.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-invalid) button{--theme-checkbox-unchecked--background:var(\n    --theme-checkbox-unchecked--background--invalid\n  );--theme-checkbox-unchecked--background--hover:var(\n    --theme-checkbox-unchecked--background--invalid--hover\n  );--theme-checkbox-unchecked--background--active:var(\n    --theme-checkbox-unchecked--background--invalid--active\n  );--theme-checkbox-unchecked--border-color:var(\n    --theme-checkbox-unchecked--border-color--invalid\n  );--theme-checkbox-unchecked--border-color--hover:var(\n    --theme-checkbox-unchecked--border-color--invalid--hover\n  );--theme-checkbox-unchecked--border-color--active:var(\n    --theme-checkbox-unchecked--border-color--invalid--active\n  );--theme-checkbox-checked--background:var(\n    --theme-checkbox-checked--background--invalid\n  );--theme-checkbox-checked--background--hover:var(\n    --theme-checkbox-checked--background--invalid--hover\n  );--theme-checkbox-checked--background--active:var(\n    --theme-checkbox-checked--background--invalid--active\n  );--theme-checkbox-checked--border-color:var(\n    --theme-checkbox-checked--border-color--invalid\n  );--theme-checkbox-checked--border-color--hover:var(\n    --theme-checkbox-checked--border-color--invalid--hover\n  );--theme-checkbox-checked--border-color--active:var(\n    --theme-checkbox-checked--border-color--invalid--active\n  );--theme-checkbox-mixed--background:var(\n    --theme-checkbox-mixed--background--invalid\n  );--theme-checkbox-mixed--background--hover:var(\n    --theme-checkbox-mixed--background--invalid--hover\n  );--theme-checkbox-mixed--background--active:var(\n    --theme-checkbox-mixed--background--invalid--active\n  );--theme-checkbox-mixed--border-color:var(\n    --theme-checkbox-mixed--border-color--invalid\n  );--theme-checkbox-mixed--border-color--hover:var(\n    --theme-checkbox-mixed--border-color--invalid--hover\n  );--theme-checkbox-mixed--border-color--active:var(\n    --theme-checkbox-mixed--border-color--invalid--active\n  );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-invalid:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-invalid:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-invalid.checked) button,:host(.ix-invalid.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-invalid.checked:hover) button,:host(.ix-invalid.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-invalid.checked:active) button,:host(.ix-invalid.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-invalid.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid.checked.disabled) button,:host(.ix-invalid.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.disabled){pointer-events:none}:host(.disabled) button,:host(.disabled) label,:host(.disabled) input{pointer-events:none}";
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
const Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.valueChange = createEvent(this, "valueChange", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
    this.value = "on";
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.required = false;
    this.inputRef = makeRef((checkboxRef) => {
      checkboxRef.checked = this.checked;
    });
  }
  setCheckedState(newChecked) {
    this.checked = newChecked;
    this.checkedChange.emit(this.checked);
  }
  onCheckedChange() {
    this.updateFormInternalValue();
  }
  onValueChange() {
    this.valueChange.emit(this.value);
  }
  componentWillLoad() {
    this.updateFormInternalValue();
  }
  updateFormInternalValue() {
    var _a;
    if (this.checked) {
      this.formInternals.setFormValue((_a = this.value) !== null && _a !== void 0 ? _a : "on");
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  hasValidValue() {
    return Promise.resolve(this.checked);
  }
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  updateClassMappings() {
  }
  renderCheckmark() {
    return h("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, this.indeterminate && h(Fragment, null, h("rect", { width: "18", height: "18", fill: "transparent" }), h("rect", { x: "3", y: "8", width: "12", height: "2", fill: "var(--ix-checkbox-check-color)" })), this.checked && h("path", { d: "M3.65625 8.15625L8.4375 12.9375L14.625 3.9375", stroke: "var(--ix-checkbox-check-color)", "stroke-width": "2" }));
  }
  render() {
    return h(Host, { key: "d089bc3c663788b708f2ceb7fd1bbb21706a1534", "aria-checked": a11yBoolean(this.checked), "aria-disabled": a11yBoolean(this.disabled), role: "checkbox", class: {
      disabled: this.disabled,
      checked: this.checked,
      indeterminate: this.indeterminate
    } }, h("label", { key: "c80b9d8f724f6b76bfaffb2f5a1a182bb8753e53" }, h("input", { key: "ab21dcea80e6823ae3029ba769853be39cab7bf4", "aria-checked": a11yBoolean(this.checked), disabled: this.disabled, checked: this.checked, ref: this.inputRef, type: "checkbox", onChange: () => this.setCheckedState(!this.checked) }), h("button", { key: "100dc970576623fc11099abfefc9a51479c9ea14", disabled: this.disabled, class: {
      checked: this.checked
    }, onClick: () => this.setCheckedState(!this.checked) }, this.renderCheckmark()), h("ix-typography", { key: "0852bd38494e0d39fc8d37d8e1f5b8469fe8b811", format: "label", textColor: this.disabled ? "weak" : "std" }, this.label, h("slot", { key: "9ec03a9c86d0ec8e1306320963fc690640a55723" }))));
  }
  static get formAssociated() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "checked": ["onCheckedChange"],
      "value": ["onValueChange"]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Checkbox.prototype, "updateClassMappings", null);
Checkbox.style = checkboxCss;
export {
  Checkbox as ix_checkbox
};
