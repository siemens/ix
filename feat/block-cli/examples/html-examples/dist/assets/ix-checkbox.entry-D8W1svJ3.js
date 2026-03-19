import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from "./global-C_dy4gBz.js";
import { a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { H as HookValidationLifecycle } from "./validation-YeAaQqsK-CQfTnaKj.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
const checkboxCss = () => `:host{--ix-checkbox-check-color:var(--theme-color-primary--contrast);display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;display:inline-flex;position:relative;align-items:center;justify-content:center;width:1.125rem;min-width:1.125rem;max-width:1.125rem;height:1.125rem;min-height:1.125rem;max-height:1.125rem;margin-right:0.5rem}:host button:disabled{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host button:focus-visible{outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:var(--theme-checkbox--focus--outline-offset)}:host input[type=checkbox]{display:none}:host label{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;height:100%}:host ix-typography{margin-top:0.125rem}:host button{background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.checked) button,:host(.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.checked:hover) button,:host(.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.checked:active) button,:host(.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.checked.disabled) button,:host(.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-info) button{--theme-checkbox-unchecked--background:var(     --theme-checkbox-unchecked--background--info   );--theme-checkbox-unchecked--background--hover:var(     --theme-checkbox-unchecked--background--info--hover   );--theme-checkbox-unchecked--background--active:var(     --theme-checkbox-unchecked--background--info--active   );--theme-checkbox-unchecked--border-color:var(     --theme-checkbox-unchecked--border-color--info   );--theme-checkbox-unchecked--border-color--hover:var(     --theme-checkbox-unchecked--border-color--info--hover   );--theme-checkbox-unchecked--border-color--active:var(     --theme-checkbox-unchecked--border-color--info--active   );--theme-checkbox-checked--background:var(     --theme-checkbox-checked--background--info   );--theme-checkbox-checked--background--hover:var(     --theme-checkbox-checked--background--info--hover   );--theme-checkbox-checked--background--active:var(     --theme-checkbox-checked--background--info--active   );--theme-checkbox-checked--border-color:var(     --theme-checkbox-checked--border-color--info   );--theme-checkbox-checked--border-color--hover:var(     --theme-checkbox-checked--border-color--info--hover   );--theme-checkbox-checked--border-color--active:var(     --theme-checkbox-checked--border-color--info--active   );--theme-checkbox-mixed--background:var(     --theme-checkbox-mixed--background--info   );--theme-checkbox-mixed--background--hover:var(     --theme-checkbox-mixed--background--info--hover   );--theme-checkbox-mixed--background--active:var(     --theme-checkbox-mixed--background--info--active   );--theme-checkbox-mixed--border-color:var(     --theme-checkbox-mixed--border-color--info   );--theme-checkbox-mixed--border-color--hover:var(     --theme-checkbox-mixed--border-color--info--hover   );--theme-checkbox-mixed--border-color--active:var(     --theme-checkbox-mixed--border-color--info--active   );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-info:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-info:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-info.checked) button,:host(.ix-info.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-info.checked:hover) button,:host(.ix-info.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-info.checked:active) button,:host(.ix-info.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-info.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-info.checked.disabled) button,:host(.ix-info.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-warning) button{--theme-checkbox-unchecked--background:var(     --theme-checkbox-unchecked--background--warning   );--theme-checkbox-unchecked--background--hover:var(     --theme-checkbox-unchecked--background--warning--hover   );--theme-checkbox-unchecked--background--active:var(     --theme-checkbox-unchecked--background--warning--active   );--theme-checkbox-unchecked--border-color:var(     --theme-checkbox-unchecked--border-color--warning   );--theme-checkbox-unchecked--border-color--hover:var(     --theme-checkbox-unchecked--border-color--warning--hover   );--theme-checkbox-unchecked--border-color--active:var(     --theme-checkbox-unchecked--border-color--warning--active   );--theme-checkbox-checked--background:var(     --theme-checkbox-checked--background--warning   );--theme-checkbox-checked--background--hover:var(     --theme-checkbox-checked--background--warning--hover   );--theme-checkbox-checked--background--active:var(     --theme-checkbox-checked--background--warning--active   );--theme-checkbox-checked--border-color:var(     --theme-checkbox-checked--border-color--warning   );--theme-checkbox-checked--border-color--hover:var(     --theme-checkbox-checked--border-color--warning--hover   );--theme-checkbox-checked--border-color--active:var(     --theme-checkbox-checked--border-color--warning--active   );--theme-checkbox-mixed--background:var(     --theme-checkbox-mixed--background--warning   );--theme-checkbox-mixed--background--hover:var(     --theme-checkbox-mixed--background--warning--hover   );--theme-checkbox-mixed--background--active:var(     --theme-checkbox-mixed--background--warning--active   );--theme-checkbox-mixed--border-color:var(     --theme-checkbox-mixed--border-color--warning   );--theme-checkbox-mixed--border-color--hover:var(     --theme-checkbox-mixed--border-color--warning--hover   );--theme-checkbox-mixed--border-color--active:var(     --theme-checkbox-mixed--border-color--warning--active   );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-warning:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-warning:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-warning.checked) button,:host(.ix-warning.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-warning.checked:hover) button,:host(.ix-warning.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-warning.checked:active) button,:host(.ix-warning.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-warning.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-warning.checked.disabled) button,:host(.ix-warning.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-invalid--required) button{--theme-checkbox-unchecked--background:var(     --theme-checkbox-unchecked--background--invalid   );--theme-checkbox-unchecked--background--hover:var(     --theme-checkbox-unchecked--background--invalid--hover   );--theme-checkbox-unchecked--background--active:var(     --theme-checkbox-unchecked--background--invalid--active   );--theme-checkbox-unchecked--border-color:var(     --theme-checkbox-unchecked--border-color--invalid   );--theme-checkbox-unchecked--border-color--hover:var(     --theme-checkbox-unchecked--border-color--invalid--hover   );--theme-checkbox-unchecked--border-color--active:var(     --theme-checkbox-unchecked--border-color--invalid--active   );--theme-checkbox-checked--background:var(     --theme-checkbox-checked--background--invalid   );--theme-checkbox-checked--background--hover:var(     --theme-checkbox-checked--background--invalid--hover   );--theme-checkbox-checked--background--active:var(     --theme-checkbox-checked--background--invalid--active   );--theme-checkbox-checked--border-color:var(     --theme-checkbox-checked--border-color--invalid   );--theme-checkbox-checked--border-color--hover:var(     --theme-checkbox-checked--border-color--invalid--hover   );--theme-checkbox-checked--border-color--active:var(     --theme-checkbox-checked--border-color--invalid--active   );--theme-checkbox-mixed--background:var(     --theme-checkbox-mixed--background--invalid   );--theme-checkbox-mixed--background--hover:var(     --theme-checkbox-mixed--background--invalid--hover   );--theme-checkbox-mixed--background--active:var(     --theme-checkbox-mixed--background--invalid--active   );--theme-checkbox-mixed--border-color:var(     --theme-checkbox-mixed--border-color--invalid   );--theme-checkbox-mixed--border-color--hover:var(     --theme-checkbox-mixed--border-color--invalid--hover   );--theme-checkbox-mixed--border-color--active:var(     --theme-checkbox-mixed--border-color--invalid--active   );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-invalid--required:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-invalid--required:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-invalid--required.checked) button,:host(.ix-invalid--required.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-invalid--required.checked:hover) button,:host(.ix-invalid--required.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-invalid--required.checked:active) button,:host(.ix-invalid--required.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-invalid--required.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid--required.checked.disabled) button,:host(.ix-invalid--required.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-invalid) button{--theme-checkbox-unchecked--background:var(     --theme-checkbox-unchecked--background--invalid   );--theme-checkbox-unchecked--background--hover:var(     --theme-checkbox-unchecked--background--invalid--hover   );--theme-checkbox-unchecked--background--active:var(     --theme-checkbox-unchecked--background--invalid--active   );--theme-checkbox-unchecked--border-color:var(     --theme-checkbox-unchecked--border-color--invalid   );--theme-checkbox-unchecked--border-color--hover:var(     --theme-checkbox-unchecked--border-color--invalid--hover   );--theme-checkbox-unchecked--border-color--active:var(     --theme-checkbox-unchecked--border-color--invalid--active   );--theme-checkbox-checked--background:var(     --theme-checkbox-checked--background--invalid   );--theme-checkbox-checked--background--hover:var(     --theme-checkbox-checked--background--invalid--hover   );--theme-checkbox-checked--background--active:var(     --theme-checkbox-checked--background--invalid--active   );--theme-checkbox-checked--border-color:var(     --theme-checkbox-checked--border-color--invalid   );--theme-checkbox-checked--border-color--hover:var(     --theme-checkbox-checked--border-color--invalid--hover   );--theme-checkbox-checked--border-color--active:var(     --theme-checkbox-checked--border-color--invalid--active   );--theme-checkbox-mixed--background:var(     --theme-checkbox-mixed--background--invalid   );--theme-checkbox-mixed--background--hover:var(     --theme-checkbox-mixed--background--invalid--hover   );--theme-checkbox-mixed--background--active:var(     --theme-checkbox-mixed--background--invalid--active   );--theme-checkbox-mixed--border-color:var(     --theme-checkbox-mixed--border-color--invalid   );--theme-checkbox-mixed--border-color--hover:var(     --theme-checkbox-mixed--border-color--invalid--hover   );--theme-checkbox-mixed--border-color--active:var(     --theme-checkbox-mixed--border-color--invalid--active   );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-invalid:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-invalid:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-invalid.checked) button,:host(.ix-invalid.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-invalid.checked:hover) button,:host(.ix-invalid.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-invalid.checked:active) button,:host(.ix-invalid.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-invalid.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid.checked.disabled) button,:host(.ix-invalid.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.disabled){pointer-events:none}:host(.disabled) button,:host(.disabled) label,:host(.disabled) input{pointer-events:none}`;
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
    this.ixBlur = createEvent(this, "ixBlur", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
  }
  get hostElement() {
    return getElement(this);
  }
  formInternals;
  /**
   * Name of the checkbox component
   */
  name;
  /**
   * Value of the checkbox component
   */
  value = "on";
  /**
   * Label for the checkbox component
   */
  label;
  /**
   * Checked state of the checkbox component
   */
  checked = false;
  /**
   * Disabled state of the checkbox component
   */
  disabled = false;
  /**
   * Indeterminate state of the checkbox component
   */
  indeterminate = false;
  /**
   * Required state of the checkbox component.
   *
   * If true, checkbox needs to be checked to be valid
   */
  required = false;
  /**
   * Event emitted when the checked state of the checkbox changes
   */
  checkedChange;
  /**
   * Event emitted when the value of the checkbox changes
   */
  valueChange;
  /**
   * Event emitted when the checkbox is blurred
   */
  ixBlur;
  touched = false;
  inputRef = makeRef((checkboxRef) => {
    checkboxRef.checked = this.checked;
  });
  setCheckedState(newChecked) {
    this.checked = newChecked;
    this.checkedChange.emit(this.checked);
  }
  onCheckedChange() {
    this.touched = true;
    this.updateFormInternalValue();
  }
  onValueChange() {
    this.valueChange.emit(this.value);
  }
  componentWillLoad() {
    this.updateFormInternalValue();
  }
  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value ?? "on");
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(this.checked);
  }
  /** @internal */
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  /** @internal */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  updateClassMappings() {
  }
  renderCheckmark() {
    return h("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, this.indeterminate && h(Fragment, null, h("rect", { width: "18", height: "18", fill: "transparent" }), h("rect", { x: "3", y: "8", width: "12", height: "2", fill: "var(--ix-checkbox-check-color)" })), this.checked && h("path", { d: "M3.65625 8.15625L8.4375 12.9375L14.625 3.9375", stroke: "var(--ix-checkbox-check-color)", "stroke-width": "2" }));
  }
  render() {
    return h(Host, { key: "2666b70a71c14c028d0723f61bc6b9fdd773662b", "aria-checked": a11yBoolean(this.checked), "aria-disabled": a11yBoolean(this.disabled), role: "checkbox", class: {
      disabled: this.disabled,
      checked: this.checked,
      indeterminate: this.indeterminate
    }, onFocus: () => this.touched = true, onBlur: () => this.ixBlur.emit() }, h("label", { key: "462b00b8a12bcce0f0a91333dac03ecb4dd1dbe5" }, h("input", { key: "702af41292acb455b57dee717eab814f56c7629d", "aria-checked": a11yBoolean(this.checked), required: this.required, disabled: this.disabled, checked: this.checked, ref: this.inputRef, type: "checkbox", onChange: () => this.setCheckedState(!this.checked) }), h("button", { key: "8a50328890c1b3bd3354f836f4fac318156e5189", disabled: this.disabled, class: {
      checked: this.checked
    }, onClick: () => this.setCheckedState(!this.checked) }, this.renderCheckmark()), h("ix-typography", { key: "3b6b9461c8977b4638737a653f79d5c2d0c2fe03", format: "label", textColor: this.disabled ? "weak" : "std" }, this.label, h("slot", { key: "193a88a8950ff03b6d725cea3f11a447f326f162" }))));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "checked": [{
        "onCheckedChange": 0
      }],
      "value": [{
        "onValueChange": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Checkbox.prototype, "updateClassMappings", null);
Checkbox.style = checkboxCss();
export {
  Checkbox as ix_checkbox
};
