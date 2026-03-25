import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host, M as Mixin, b as getAssetPath } from "./global-Cr1KQvOo.js";
import { a as a11yBoolean, b as a11yHostAttributes } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { c as createClassMutationObserver, H as HookValidationLifecycle } from "./validation-BDiak7iH-sa1tPePV.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { i as isIxInputFieldComponent } from "./index-DguwRUR0-CZre96EV.js";
import { c as closestPassShadow, a as getSlottedElements } from "./shadow-dom-T30VMB2R-DtdN3xF2.js";
import { r as resolveTextFromValidationState, h as hasAnyText, H as HelperText$1 } from "./helper-text-util-Oe0mqsp6-CLWoIj4y.js";
import { D as DefaultMixins } from "./component-YJmg0LbX-Cdi_gd8D.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { c as computePosition, s as shift, o as offset, b as arrow, f as flip, h as hide, a as autoUpdate } from "./floating-ui.dom-B6Pk1ink-B8uV3VNw.js";
import { r as resolveSelector } from "./find-element-SH0e-Dn8-DmHANPs3.js";
import { b as addDisposableEventListenerAsArray } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import "./index-ClV1Tffv-Cwm_ckfF.js";
import "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
const checkboxCss = () => `:host{--ix-checkbox-check-color:var(--theme-color-primary--contrast);display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;display:inline-flex;position:relative;align-items:center;justify-content:center;width:1.125rem;min-width:1.125rem;max-width:1.125rem;height:1.125rem;min-height:1.125rem;max-height:1.125rem;margin-right:0.5rem}:host button:disabled{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host button:focus-visible{outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:var(--theme-checkbox--focus--outline-offset)}:host input[type=checkbox]{display:none}:host label{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;height:100%}:host ix-typography{margin-top:0.125rem}:host button{background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.checked) button,:host(.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.checked:hover) button,:host(.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.checked:active) button,:host(.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.checked.disabled) button,:host(.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-info) button{--theme-checkbox-unchecked--background:var(     --theme-checkbox-unchecked--background--info   );--theme-checkbox-unchecked--background--hover:var(     --theme-checkbox-unchecked--background--info--hover   );--theme-checkbox-unchecked--background--active:var(     --theme-checkbox-unchecked--background--info--active   );--theme-checkbox-unchecked--border-color:var(     --theme-checkbox-unchecked--border-color--info   );--theme-checkbox-unchecked--border-color--hover:var(     --theme-checkbox-unchecked--border-color--info--hover   );--theme-checkbox-unchecked--border-color--active:var(     --theme-checkbox-unchecked--border-color--info--active   );--theme-checkbox-checked--background:var(     --theme-checkbox-checked--background--info   );--theme-checkbox-checked--background--hover:var(     --theme-checkbox-checked--background--info--hover   );--theme-checkbox-checked--background--active:var(     --theme-checkbox-checked--background--info--active   );--theme-checkbox-checked--border-color:var(     --theme-checkbox-checked--border-color--info   );--theme-checkbox-checked--border-color--hover:var(     --theme-checkbox-checked--border-color--info--hover   );--theme-checkbox-checked--border-color--active:var(     --theme-checkbox-checked--border-color--info--active   );--theme-checkbox-mixed--background:var(     --theme-checkbox-mixed--background--info   );--theme-checkbox-mixed--background--hover:var(     --theme-checkbox-mixed--background--info--hover   );--theme-checkbox-mixed--background--active:var(     --theme-checkbox-mixed--background--info--active   );--theme-checkbox-mixed--border-color:var(     --theme-checkbox-mixed--border-color--info   );--theme-checkbox-mixed--border-color--hover:var(     --theme-checkbox-mixed--border-color--info--hover   );--theme-checkbox-mixed--border-color--active:var(     --theme-checkbox-mixed--border-color--info--active   );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-info:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-info:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-info.checked) button,:host(.ix-info.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-info.checked:hover) button,:host(.ix-info.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-info.checked:active) button,:host(.ix-info.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-info.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-info.checked.disabled) button,:host(.ix-info.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-warning) button{--theme-checkbox-unchecked--background:var(     --theme-checkbox-unchecked--background--warning   );--theme-checkbox-unchecked--background--hover:var(     --theme-checkbox-unchecked--background--warning--hover   );--theme-checkbox-unchecked--background--active:var(     --theme-checkbox-unchecked--background--warning--active   );--theme-checkbox-unchecked--border-color:var(     --theme-checkbox-unchecked--border-color--warning   );--theme-checkbox-unchecked--border-color--hover:var(     --theme-checkbox-unchecked--border-color--warning--hover   );--theme-checkbox-unchecked--border-color--active:var(     --theme-checkbox-unchecked--border-color--warning--active   );--theme-checkbox-checked--background:var(     --theme-checkbox-checked--background--warning   );--theme-checkbox-checked--background--hover:var(     --theme-checkbox-checked--background--warning--hover   );--theme-checkbox-checked--background--active:var(     --theme-checkbox-checked--background--warning--active   );--theme-checkbox-checked--border-color:var(     --theme-checkbox-checked--border-color--warning   );--theme-checkbox-checked--border-color--hover:var(     --theme-checkbox-checked--border-color--warning--hover   );--theme-checkbox-checked--border-color--active:var(     --theme-checkbox-checked--border-color--warning--active   );--theme-checkbox-mixed--background:var(     --theme-checkbox-mixed--background--warning   );--theme-checkbox-mixed--background--hover:var(     --theme-checkbox-mixed--background--warning--hover   );--theme-checkbox-mixed--background--active:var(     --theme-checkbox-mixed--background--warning--active   );--theme-checkbox-mixed--border-color:var(     --theme-checkbox-mixed--border-color--warning   );--theme-checkbox-mixed--border-color--hover:var(     --theme-checkbox-mixed--border-color--warning--hover   );--theme-checkbox-mixed--border-color--active:var(     --theme-checkbox-mixed--border-color--warning--active   );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-warning:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-warning:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-warning.checked) button,:host(.ix-warning.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-warning.checked:hover) button,:host(.ix-warning.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-warning.checked:active) button,:host(.ix-warning.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-warning.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-warning.checked.disabled) button,:host(.ix-warning.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-invalid--required) button{--theme-checkbox-unchecked--background:var(     --theme-checkbox-unchecked--background--invalid   );--theme-checkbox-unchecked--background--hover:var(     --theme-checkbox-unchecked--background--invalid--hover   );--theme-checkbox-unchecked--background--active:var(     --theme-checkbox-unchecked--background--invalid--active   );--theme-checkbox-unchecked--border-color:var(     --theme-checkbox-unchecked--border-color--invalid   );--theme-checkbox-unchecked--border-color--hover:var(     --theme-checkbox-unchecked--border-color--invalid--hover   );--theme-checkbox-unchecked--border-color--active:var(     --theme-checkbox-unchecked--border-color--invalid--active   );--theme-checkbox-checked--background:var(     --theme-checkbox-checked--background--invalid   );--theme-checkbox-checked--background--hover:var(     --theme-checkbox-checked--background--invalid--hover   );--theme-checkbox-checked--background--active:var(     --theme-checkbox-checked--background--invalid--active   );--theme-checkbox-checked--border-color:var(     --theme-checkbox-checked--border-color--invalid   );--theme-checkbox-checked--border-color--hover:var(     --theme-checkbox-checked--border-color--invalid--hover   );--theme-checkbox-checked--border-color--active:var(     --theme-checkbox-checked--border-color--invalid--active   );--theme-checkbox-mixed--background:var(     --theme-checkbox-mixed--background--invalid   );--theme-checkbox-mixed--background--hover:var(     --theme-checkbox-mixed--background--invalid--hover   );--theme-checkbox-mixed--background--active:var(     --theme-checkbox-mixed--background--invalid--active   );--theme-checkbox-mixed--border-color:var(     --theme-checkbox-mixed--border-color--invalid   );--theme-checkbox-mixed--border-color--hover:var(     --theme-checkbox-mixed--border-color--invalid--hover   );--theme-checkbox-mixed--border-color--active:var(     --theme-checkbox-mixed--border-color--invalid--active   );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-invalid--required:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-invalid--required:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-invalid--required.checked) button,:host(.ix-invalid--required.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-invalid--required.checked:hover) button,:host(.ix-invalid--required.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-invalid--required.checked:active) button,:host(.ix-invalid--required.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-invalid--required.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid--required.checked.disabled) button,:host(.ix-invalid--required.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-invalid) button{--theme-checkbox-unchecked--background:var(     --theme-checkbox-unchecked--background--invalid   );--theme-checkbox-unchecked--background--hover:var(     --theme-checkbox-unchecked--background--invalid--hover   );--theme-checkbox-unchecked--background--active:var(     --theme-checkbox-unchecked--background--invalid--active   );--theme-checkbox-unchecked--border-color:var(     --theme-checkbox-unchecked--border-color--invalid   );--theme-checkbox-unchecked--border-color--hover:var(     --theme-checkbox-unchecked--border-color--invalid--hover   );--theme-checkbox-unchecked--border-color--active:var(     --theme-checkbox-unchecked--border-color--invalid--active   );--theme-checkbox-checked--background:var(     --theme-checkbox-checked--background--invalid   );--theme-checkbox-checked--background--hover:var(     --theme-checkbox-checked--background--invalid--hover   );--theme-checkbox-checked--background--active:var(     --theme-checkbox-checked--background--invalid--active   );--theme-checkbox-checked--border-color:var(     --theme-checkbox-checked--border-color--invalid   );--theme-checkbox-checked--border-color--hover:var(     --theme-checkbox-checked--border-color--invalid--hover   );--theme-checkbox-checked--border-color--active:var(     --theme-checkbox-checked--border-color--invalid--active   );--theme-checkbox-mixed--background:var(     --theme-checkbox-mixed--background--invalid   );--theme-checkbox-mixed--background--hover:var(     --theme-checkbox-mixed--background--invalid--hover   );--theme-checkbox-mixed--background--active:var(     --theme-checkbox-mixed--background--invalid--active   );--theme-checkbox-mixed--border-color:var(     --theme-checkbox-mixed--border-color--invalid   );--theme-checkbox-mixed--border-color--hover:var(     --theme-checkbox-mixed--border-color--invalid--hover   );--theme-checkbox-mixed--border-color--active:var(     --theme-checkbox-mixed--border-color--invalid--active   );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-invalid:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-invalid:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-invalid.checked) button,:host(.ix-invalid.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-invalid.checked:hover) button,:host(.ix-invalid.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-invalid.checked:active) button,:host(.ix-invalid.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-invalid.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid.checked.disabled) button,:host(.ix-invalid.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.disabled){pointer-events:none}:host(.disabled) button,:host(.disabled) label,:host(.disabled) input{pointer-events:none}`;
var __decorate$1 = function(decorators, target, key, desc) {
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
__decorate$1([
  HookValidationLifecycle()
], Checkbox.prototype, "updateClassMappings", null);
Checkbox.style = checkboxCss();
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
    return h(Host, { key: "7f9928b14a9e10eddfb4fdbb95a8c864975619fe", ref: this.groupRef, onIxBlur: () => this.touched = true }, h("ix-field-wrapper", { key: "46f69743fdca1c70f3d75253820b242bb53bd3b2", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning, controlRef: this.groupRef }, h("div", { key: "773659a64768b41f0b762a8684a8bff410ab8fda", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "96c27e21c87ce2bec1b8b79f364f7a8195709a29" }))));
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], CheckboxGroup.prototype, "onClassFieldUpdate", null);
CheckboxGroup.style = checkboxGroupCss();
const fieldLabelCss = () => `:host{display:inline-block;position:relative;margin-top:0.5rem;margin-bottom:0.25rem}:host(.text-overflow-no-wrap){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.text-overflow-no-wrap) ix-typography{text-overflow:ellipsis;overflow:hidden}`;
const FormFieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * A value is required or must be checked for the form to be submittable
   */
  required;
  /**
   * The id of the form element that the label is associated with
   */
  htmlFor;
  /** @internal */
  controlRef;
  /** @internal */
  isInvalid = false;
  textOverflow = "wrap";
  explicitIsInvalid = void 0;
  isInvalidChanged(newValue) {
    this.explicitIsInvalid = newValue;
  }
  htmlForObserver = new MutationObserver(() => this.checkForInternalState());
  htmlForClassObserver;
  controlRefClassObserver;
  a11yAttributes = {};
  labelRef = makeRef();
  connectedCallback() {
    this.registerHtmlForObserver();
    this.registerControlRefObserver();
  }
  disconnectedCallback() {
    if (this.htmlForObserver) {
      this.htmlForObserver.disconnect();
    }
    if (this.htmlForClassObserver) {
      this.htmlForClassObserver.destroy();
    }
    if (this.controlRefClassObserver) {
      this.controlRefClassObserver.destroy();
    }
  }
  componentWillRender() {
    this.checkForInternalState();
    if (closestPassShadow(this.hostElement, "ix-range-field")) {
      this.textOverflow = "no-wrap";
    }
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
  }
  registerHtmlForObserver() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.htmlForObserver) {
      this.htmlForObserver.disconnect();
    }
    if (this.htmlFor) {
      this.htmlForObserver.observe(window.document, {
        childList: true,
        subtree: true
      });
    }
  }
  async registerControlRefObserver() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.controlRefClassObserver) {
      this.controlRefClassObserver.destroy();
    }
    if (this.controlRef && !this.htmlFor) {
      const input = await this.controlRef.waitForCurrent();
      this.controlRefClassObserver = createClassMutationObserver(input, () => this.checkForInvalidState(input));
    }
  }
  registerHtmlForClassObserver(forElement) {
    if (this.htmlForClassObserver) {
      this.htmlForClassObserver.destroy();
    }
    this.htmlForClassObserver = createClassMutationObserver(forElement, () => this.checkForInvalidState(forElement));
  }
  checkForInvalidState(elementToCheck) {
    const hasInvalidClass = elementToCheck.classList.contains("is-invalid") || elementToCheck.classList.contains("ix-invalid");
    this.isInvalid = this.explicitIsInvalid ?? hasInvalidClass;
  }
  async checkForInternalState() {
    if (this.htmlFor) {
      const forElement = document.getElementById(this.htmlFor);
      if (forElement) {
        if (typeof forElement.required === "boolean") {
          this.required = forElement.required;
        }
        this.registerHtmlForClassObserver(forElement);
        this.checkForInvalidState(forElement);
        return;
      }
    }
    if (this.controlRef) {
      const input = await this.controlRef.waitForCurrent();
      this.required = input.required;
    }
  }
  async focusOnClick() {
    if (this.htmlFor) {
      const target = document.getElementById(this.htmlFor);
      if (target) {
        let input = null;
        if (isIxInputFieldComponent(target)) {
          input = await target.getNativeInputElement();
        } else {
          input = target;
        }
        if (typeof input.focus === "function") {
          input.focus();
        }
      }
    }
    if (this.controlRef) {
      (await this.controlRef.waitForCurrent()).focus();
    }
  }
  render() {
    return h(Host, { key: "5d53e47d0a9e03dd464c876e17fdb79c14b837d0", onClick: () => this.focusOnClick(), class: {
      "text-overflow-wrap": this.textOverflow === "wrap",
      "text-overflow-no-wrap": this.textOverflow === "no-wrap"
    } }, h("label", { key: "9626fe5ff0208f1294053d6d033a6de77f08b6d5", htmlFor: this.htmlFor, ...this.a11yAttributes, ref: this.labelRef }, h("ix-typography", { key: "14f26e2e12d060a68adfde2891181607385effc0", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "cd8de52f2c3cf980c28d1244c84289f536ce5657" }), this.required && h("span", { key: "d0cc00ef28ffd4db72b1d50ad011fb810e86ac0d" }, "*"))));
  }
  static get watchers() {
    return {
      "isInvalid": [{
        "isInvalidChanged": 0
      }],
      "htmlFor": [{
        "registerHtmlForObserver": 0
      }],
      "controlRef": [{
        "registerControlRefObserver": 0
      }]
    };
  }
};
FormFieldLabel.style = fieldLabelCss();
const fieldWrapperCss = () => `:host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:0.25rem}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:1rem;width:100%;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0px}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}`;
const FieldWrapper = class extends Mixin(...DefaultMixins, ComponentIdMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
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
   * Error text for the field component
   */
  invalidText;
  /**
   * Valid text for the field component
   */
  validText;
  /**
   * Info text for the field component
   */
  infoText;
  /**
   * Warning text for the field component
   */
  warningText;
  /**
   * Is the field component invalid
   */
  isInvalid = false;
  /**
   * Is the field component valid
   */
  isValid = false;
  /**
   * Is the field component info
   */
  isInfo = false;
  /**
   * Is the field component warning
   */
  isWarning = false;
  /**
   * Show helper, error, info, warning text as tooltip
   */
  showTextAsTooltip = false;
  /**
   * Show label as required
   */
  required = false;
  /**
   * The control element that the label is associated with
   */
  controlRef;
  slotRef = makeRef();
  hasExplicitAriaLabel = false;
  componentDidLoad() {
    this.syncAriaLabel(true);
  }
  syncAriaLabel(initialSync = false) {
    if (!this.controlRef || this.hasExplicitAriaLabel) {
      return;
    }
    this.controlRef.waitForCurrent().then((el) => {
      if (initialSync && (el.hasAttribute("aria-label") || el.hasAttribute("aria-labelledby"))) {
        this.hasExplicitAriaLabel = true;
        return;
      }
      if (this.label) {
        el.setAttribute("aria-label", this.label);
      } else {
        el.removeAttribute("aria-label");
      }
    });
  }
  componentWillLoad() {
    if (!this.hostElement.querySelector(".error-message-container")) {
      const errorMessageContainer = document.createElement("span");
      errorMessageContainer.classList.add("error-message-container");
      errorMessageContainer.id = `${this.getHostElementId()}-errormessage`;
      errorMessageContainer.hidden = true;
      this.hostElement.appendChild(errorMessageContainer);
    }
    if (!this.hostElement.querySelector(".helper-message-container")) {
      const helperMessageContainer = document.createElement("span");
      helperMessageContainer.classList.add("helper-message-container");
      helperMessageContainer.id = `${this.getHostElementId()}-helpermessage`;
      helperMessageContainer.hidden = true;
      this.hostElement.appendChild(helperMessageContainer);
    }
  }
  componentWillRender() {
    const errorMessageElement = this.hostElement.querySelector(`#${this.getHostElementId()}-errormessage`);
    const helperMessageElement = this.hostElement.querySelector(`#${this.getHostElementId()}-helpermessage`);
    if (this.isInvalid && this.invalidText && errorMessageElement) {
      errorMessageElement.textContent = this.invalidText;
    }
    if (helperMessageElement) {
      helperMessageElement.textContent = resolveTextFromValidationState({
        isInvalid: this.isInvalid,
        invalidText: this.invalidText,
        isWarning: this.isWarning,
        warningText: this.warningText,
        isInfo: this.isInfo,
        infoText: this.infoText,
        isValid: this.isValid,
        validText: this.validText,
        helperText: this.helperText
      });
    }
  }
  /** @internal */
  getAriaErrorMessageElement() {
    return Promise.resolve(this.hostElement.querySelector(`#${this.getHostElementId()}-errormessage`));
  }
  /** @internal */
  getAriaHelperMessageElement() {
    return Promise.resolve(this.hostElement.querySelector(`#${this.getHostElementId()}-helpermessage`));
  }
  render() {
    const textOptions = {
      invalidText: this.invalidText,
      isInvalid: this.isInvalid,
      isValid: this.isValid,
      validText: this.validText,
      isWarning: this.isWarning,
      warningText: this.warningText,
      isInfo: this.isInfo,
      infoText: this.infoText,
      helperText: this.helperText
    };
    let additionalAriaAttributes = {};
    if (this.isInvalid && this.invalidText) {
      additionalAriaAttributes = {
        role: "alert",
        "aria-live": "polite"
      };
    }
    return h(Host, { key: "0c8571f0aa98aa05fd3c45ce7e4f35d6e16a0fb1", ...additionalAriaAttributes }, this.label && h("div", { key: "1ae4615e9f16751488a724db5271c8c922f8bf1d", class: "field-top" }, h("ix-field-label", { key: "d36d3aea8cdb8686c0ca0bff9123294972724b63", required: this.required, controlRef: this.controlRef, isInvalid: this.isInvalid, ariaHidden: true }, this.label)), h("div", { key: "b85095e7ce45d8e48ee7a7466d52ee02dee85a1c", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "ad8f8b3453521e690560e75b85eec17341c4b861" })), h("div", { key: "cf3c10be89b706344cb68fe1364e5756223c0757", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, { key: "27a0843a8e9e23591c40d4cb55e5e788192faed1", ...textOptions }), h("div", { key: "16d5193d91decba555d168a4c63711d6ba6003a3", class: "bottom-right" }, h("slot", { key: "641c72b01b57e5c692f675b7be7c06abd19137e8", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "684e70b60720691d996dc64093bb4aa2e85f5073", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, { key: "f87aaabe382c48a2b89d85cfb28e27ef8c3f37c4", ...textOptions })));
  }
  static get watchers() {
    return {
      "label": [{
        "syncAriaLabel": 0
      }]
    };
  }
};
FieldWrapper.style = fieldWrapperCss();
function getCustomAssetUrl() {
  const assetPath = document.querySelector("meta[name='ix-icons:path']");
  if (assetPath) {
    const path = assetPath.getAttribute("content");
    return path;
  }
  return false;
}
let parser = null;
const errorSymbol = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path fill-rule='evenodd' d='M384,0 L384,384 L0,384 L0,0 L384,0 Z M192,207.085 L57.751,341.333 L326.248,341.333 L192,207.085 Z M42.666,57.751 L42.666,326.248 L176.915,192 L42.666,57.751 Z M341.333,57.751 L207.085,192 L341.333,326.248 L341.333,57.751 Z M326.248,42.666 L57.751,42.666 L192,176.915 L326.248,42.666 Z' transform='translate(64 64)'/></svg>";
function parseSVGDataContent(content, element) {
  if (typeof window["DOMParser"] === "undefined") {
    console.error("DOMParser not supported by your browser.");
    return "";
  }
  if (parser === null) {
    parser = new window["DOMParser"]();
  }
  try {
    content = decodeURI(content);
  } catch {
  }
  const svgDocument = parser.parseFromString(content, "text/html");
  const svgElement = svgDocument.querySelector("svg");
  if (!svgElement) {
    if (element) {
      console.error("No valid svg data provided", element);
    } else {
      console.error("No valid svg data provided");
    }
    return "";
  }
  return svgElement.outerHTML;
}
let fetchCache;
const requests = /* @__PURE__ */ new Map();
const getIconCacheMap = () => {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  }
  if (!fetchCache) {
    window.IxIcons = window.IxIcons || {};
    fetchCache = window.IxIcons.map = window.IxIcons.map || /* @__PURE__ */ new Map();
  }
  return fetchCache;
};
const isSvgDataUrl = (url) => {
  if (!url) {
    return false;
  }
  if (typeof url !== "string") {
    return false;
  }
  return url.startsWith("data:image/svg+xml");
};
async function fetchSVG(url, element) {
  const cache = getIconCacheMap();
  if (cache.has(url)) {
    return cache.get(url);
  }
  if (requests.has(url)) {
    return requests.get(url);
  }
  const fetching = fetch(url).then(async (response) => {
    const responseText = await response.text();
    let svgContent = "";
    if (response.ok) {
      svgContent = parseSVGDataContent(responseText, element);
      cache.set(url, svgContent);
    } else {
      console.error("Failed to request svg data from", url, "with status code", response.status, element);
    }
    return svgContent;
  }).catch(() => {
    console.error("Failed to fetch svg data:", url, element);
    cache.set(url, "");
    return "";
  }).finally(() => {
    requests.delete(url);
  });
  return fetching;
}
const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:www\.)?(?:\S+\.\S+)(?:\S*)$/i;
function isValidUrl(url) {
  return urlRegex.test(url);
}
function getIconUrl(name, element) {
  const customAssetUrl = getCustomAssetUrl();
  if (customAssetUrl) {
    return `${customAssetUrl}/${name}.svg`;
  }
  let url = `svg/${name}.svg`;
  try {
    url = getAssetPath(url);
  } catch (error) {
    console.warn(`Could not load icon with name "${name}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to property.`, element);
  }
  return url;
}
async function resolveIcon(element, iconName) {
  if (!iconName) {
    console.warn("No icon was provided", element);
    return "";
  }
  if (isSvgDataUrl(iconName)) {
    const content = parseSVGDataContent(iconName, element);
    if (!content) {
      console.error("Failed to parse icon data", element);
    }
    return content;
  }
  return loadIcon(iconName, element);
}
async function loadIcon(iconName, element) {
  const cache = getIconCacheMap();
  if (cache.has(iconName)) {
    return cache.get(iconName);
  }
  if (isValidUrl(iconName)) {
    return fetchSVG(iconName, element);
  }
  const iconUrl = getIconUrl(iconName, element);
  if (!iconUrl) {
    return "";
  }
  return fetchSVG(iconUrl, element);
}
const iconCss = () => `:host{display:inline-flex;height:1.5rem;width:1.5rem;min-height:1.5rem;min-width:1.5rem;color:inherit}:host .svg-container{display:block;position:relative;width:100%;height:100%}:host .svg-container svg{display:block;position:relative;height:100%;width:100%}:host .svg-container svg,:host .svg-container svg[fill],:host .svg-container svg [fill]{fill:currentColor !important}:host(.size-12){height:0.75rem;width:0.75rem;min-height:0.75rem;min-width:0.75rem}:host(.size-16){height:1rem;width:1rem;min-height:1rem;min-width:1rem}:host(.size-32){height:2rem;width:2rem;min-height:2rem;min-width:2rem}`;
const Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Size of the icon
   */
  size = "24";
  /**
   * Color of the icon
   */
  color;
  /**
   * Use one of our defined icon names e.g. `copy`
   *
   * https://ix.siemens.io/docs/icon-library/icons
   *
   * or the import variant
   *
   * ```
   * import { rocket } from '@siemens/ix-icons/icons';
   *
   * <ix-icon name={rocket}></ix-icon>
   * ```
   */
  name;
  /**
   * Only fetch and parse svg data when icon is visible
   */
  lazyLoading = false;
  svgContent;
  isVisible = false;
  componentWillLoad() {
    this.waitForRendering(() => {
      this.isVisible = true;
      this.loadIconContent();
    });
  }
  async loadIconContent() {
    const content = await resolveIcon(this.hostElement, this.name);
    if (!content) {
      this.svgContent = parseSVGDataContent(errorSymbol);
      return;
    }
    this.svgContent = content;
  }
  waitForRendering(onRender) {
    if (this.lazyLoading && typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onRender();
            observer.disconnect();
          }
        });
      }, {
        rootMargin: "25px"
      });
      observer.observe(this.hostElement);
    } else {
      onRender();
    }
  }
  render() {
    const style = {};
    if (this.color) {
      style["color"] = `var(--theme-${this.color})`;
    }
    return h(Host, { key: "83462a7d7da16587faaa0600b4c13ec8ad106a77", role: "img", style, class: {
      ["size-12"]: this.size === "12",
      ["size-16"]: this.size === "16",
      ["size-24"]: this.size === "24",
      ["size-32"]: this.size === "32"
    } }, h("div", { key: "570efdb71fcdd0c61b7c854c6ab3662508aae804", class: "svg-container", innerHTML: this.svgContent, "aria-hidden": "true" }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  static get watchers() {
    return {
      "name": [{
        "loadIconContent": 0
      }]
    };
  }
};
Icon.style = iconCss();
const tooltipCss = () => `.dialog{margin:0;padding:0;border:none;max-width:18.25rem;width:-moz-max-content;width:max-content;background-color:transparent;overflow-wrap:break-word;box-shadow:none;overflow:visible}.tooltip-container{display:block;position:relative;width:auto;height:-moz-fit-content;height:fit-content;background:var(--theme-tootlip--background);color:var(--theme-color-std-text);padding:0.375rem 0.75rem;box-shadow:var(--theme-shadow-4);border-radius:0.25rem}.content-wrapper{overflow:auto}.tooltip-title{display:flex}.tooltip-title ::slotted(ix-icon){margin:0.125rem 0.25rem 0.125rem 0}.arrow,.arrow::before{position:absolute;width:12px;height:12px;background:inherit}.arrow{visibility:hidden}.arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}`;
const ARROW_OFFSET = -6;
const numberToPixel = (value) => value !== null ? `${value}px` : "";
let tooltipInstance = 0;
const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
   */
  for;
  /**
   * Title of the tooltip
   */
  titleContent;
  /**
   * Define if the user can access the tooltip via mouse.
   */
  interactive = false;
  /**
   * Initial placement of the tooltip.
   * If the selected placement doesn't have enough space, the tooltip will be repositioned to another location.
   */
  placement = "top";
  /** @internal */
  showDelay = 0;
  /** @internal */
  hideDelay = 50;
  /** @internal */
  animationFrame = false;
  get hostElement() {
    return getElement(this);
  }
  visible = false;
  hideTooltipTimeout;
  showTooltipTimeout;
  visibleFor;
  disposeAutoUpdate;
  disposeTriggerListener;
  disposeTooltipListener;
  disposeDomChangeListener;
  instance = tooltipInstance++;
  dialogRef = makeRef();
  get arrowElement() {
    return this.hostElement.shadowRoot.querySelector(".arrow");
  }
  /** @internal */
  async showTooltip(anchorElement) {
    this.clearTimeouts();
    if (this.showTooltipTimeout || this.visibleFor === anchorElement) {
      return;
    }
    const dialog = await this.dialogRef.waitForCurrent();
    this.showTooltipTimeout = setTimeout(() => {
      this.setAnchorElement(anchorElement);
      dialog.showPopover();
      this.applyTooltipPosition(anchorElement, dialog);
      this.registerTooltipListener(dialog);
    }, this.showDelay);
  }
  /** @internal */
  async hideTooltip(hideDelay = this.hideDelay) {
    this.clearTimeouts();
    if (this.hideTooltipTimeout || !this.visible) {
      return;
    }
    if (this.interactive && hideDelay === 50) {
      hideDelay = 150;
    }
    const dialog = await this.dialogRef.waitForCurrent();
    this.hideTooltipTimeout = setTimeout(() => {
      this.setAnchorElement();
      dialog.hidePopover();
      this.disposeAutoUpdate?.();
      this.disposeTooltipListener?.();
    }, hideDelay);
  }
  setAnchorElement(anchorElement) {
    if (!anchorElement) {
      this.visibleFor = void 0;
      this.visible = false;
    } else {
      this.visibleFor = anchorElement;
      this.visible = true;
    }
  }
  computeArrowPosition({ placement, middlewareData }) {
    let { x, y } = middlewareData.arrow;
    const resetPosition = {
      top: "unset",
      right: "unset",
      bottom: "unset",
      left: "unset"
    };
    if (placement.startsWith("top")) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        bottom: numberToPixel(ARROW_OFFSET)
      };
    }
    if (placement.startsWith("right")) {
      return {
        ...resetPosition,
        left: numberToPixel(ARROW_OFFSET),
        top: numberToPixel(y)
      };
    }
    if (placement.startsWith("bottom")) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        top: numberToPixel(ARROW_OFFSET)
      };
    }
    if (placement.startsWith("left")) {
      return {
        ...resetPosition,
        right: numberToPixel(ARROW_OFFSET),
        top: numberToPixel(y)
      };
    }
  }
  async computeTooltipPosition(target, dialog) {
    return computePosition(target, dialog, {
      strategy: "fixed",
      placement: this.placement,
      middleware: [
        shift(),
        offset(12),
        arrow({
          element: this.arrowElement
        }),
        flip({
          fallbackStrategy: "initialPlacement",
          fallbackAxisSideDirection: "end",
          padding: 10
        }),
        hide()
      ]
    });
  }
  applyTooltipArrowPosition(computeResponse) {
    const arrowPosition = this.computeArrowPosition(computeResponse);
    Object.assign(this.arrowElement.style, arrowPosition);
  }
  async applyTooltipPosition(target, dialog) {
    if (!target) {
      return;
    }
    return new Promise((resolve) => {
      this.disposeAutoUpdate?.();
      this.disposeAutoUpdate = autoUpdate(target, dialog, async () => {
        const computeResponse = await this.computeTooltipPosition(target, dialog);
        const isHidden = computeResponse.middlewareData.hide?.referenceHidden;
        if (isHidden) {
          this.hideTooltip(0);
          resolve(computeResponse);
        }
        if (computeResponse.middlewareData.arrow) {
          this.applyTooltipArrowPosition(computeResponse);
        }
        const { x, y } = computeResponse;
        Object.assign(dialog.style, {
          left: numberToPixel(x),
          top: numberToPixel(y)
        });
        resolve(computeResponse);
      }, {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
        animationFrame: this.animationFrame
      });
    });
  }
  async queryAnchorElements() {
    if (this.for) {
      if (Array.isArray(this.for)) {
        return this.resolveElements(this.for);
      } else {
        return this.resolveElements([this.for]);
      }
    }
  }
  async resolveElements(references) {
    const elements = [];
    await Promise.all(references.map(async (reference) => {
      if (typeof reference === "string") {
        const resolvedElements = await resolveSelector(reference, this.hostElement);
        if (resolvedElements) {
          elements.push(...resolvedElements);
        }
      } else if (reference instanceof HTMLElement) {
        elements.push(reference);
      } else if (reference instanceof Promise) {
        elements.push(await reference);
      }
    }));
    return elements;
  }
  async registerTriggerListener() {
    this.disposeTriggerListener?.();
    const triggerElementList = await this.queryAnchorElements();
    if (!triggerElementList) {
      return;
    }
    const listeners = [];
    triggerElementList.forEach((element) => {
      listeners.push(...[
        {
          element,
          eventType: "mouseenter",
          callback: () => {
            this.showTooltip(element);
          }
        },
        {
          element,
          eventType: "mouseleave",
          callback: () => {
            this.hideTooltip();
          }
        },
        {
          element,
          eventType: "focus",
          callback: () => {
            this.showTooltip(element);
          }
        },
        {
          element,
          eventType: "focusout",
          callback: () => {
            this.hideTooltip();
          }
        }
      ]);
    });
    this.disposeTriggerListener = addDisposableEventListenerAsArray(listeners);
  }
  registerTooltipListener(dialog) {
    this.disposeTooltipListener?.();
    this.disposeTooltipListener = addDisposableEventListenerAsArray([
      {
        element: dialog,
        eventType: "mouseenter",
        callback: () => {
          if (this.interactive) {
            this.clearHideTimeout();
          }
        }
      },
      {
        element: dialog,
        eventType: "focus",
        callback: () => {
          if (this.interactive) {
            this.clearHideTimeout();
          }
        }
      },
      {
        element: dialog,
        eventType: "mouseleave",
        callback: () => {
          this.hideTooltip();
        }
      },
      {
        element: dialog,
        eventType: "focusout",
        callback: () => {
          this.hideTooltip();
        }
      },
      {
        element: dialog,
        eventType: "click",
        callback: (event) => {
          event.stopPropagation();
        }
      },
      {
        element: document,
        eventType: "keydown",
        callback: (event) => {
          if (event.key === "Escape") {
            this.hideTooltip();
          }
        }
      }
    ]);
  }
  registerDomChangeListener() {
    const observer = new MutationObserver(() => {
      this.registerTriggerListener();
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-ix-tooltip"],
      childList: true,
      subtree: true
    });
    this.disposeDomChangeListener = () => {
      observer.disconnect();
    };
  }
  clearHideTimeout() {
    clearTimeout(this.hideTooltipTimeout);
    this.hideTooltipTimeout = void 0;
  }
  clearShowTimeout() {
    clearTimeout(this.showTooltipTimeout);
    this.showTooltipTimeout = void 0;
  }
  clearTimeouts() {
    this.clearHideTimeout();
    this.clearShowTimeout();
  }
  componentWillLoad() {
    this.registerTriggerListener();
  }
  componentDidLoad() {
    this.registerDomChangeListener();
  }
  disconnectedCallback() {
    this.clearTimeouts();
    this.disposeAutoUpdate?.();
    this.disposeTriggerListener?.();
    this.disposeTooltipListener?.();
    this.disposeDomChangeListener?.();
  }
  handleTitleIconSlotChange(e) {
    const slot = e.target;
    const elements = getSlottedElements(slot);
    for (const element of elements) {
      if (element.tagName.toLowerCase() === "ix-icon") {
        element.size = "16";
      }
    }
  }
  render() {
    return h(Host, { key: "757c85f177a01daed234092acf87a9ebbf043ed6", role: "tooltip", class: { visible: this.visible } }, h("dialog", { key: "0b56d6c7eb694dc94fda50be6eebec8ec4e93173", ref: this.dialogRef, id: "tooltip-" + this.instance, class: "dialog", popover: "manual", inert: !this.visible }, h("div", { key: "47c7900189516a6b164d84ec92cffc14c36e8d3c", class: "tooltip-container" }, h("div", { key: "de575d6b15d20f3960f44033bae38a062511a3c2", class: "content-wrapper" }, h("div", { key: "97c82d84d00528f33d68a091a2232c761e1dfa78", class: "tooltip-title" }, h("slot", { key: "0b71aac61431e1a6ff4b103e047bb37781f6cd3c", name: "title-icon", onSlotchange: (e) => this.handleTitleIconSlotChange(e) }), h("ix-typography", { key: "d8e332d824c09964e47c8425eafd47c4be1c1e2d", format: "h5" }, this.titleContent, h("slot", { key: "6386c53cf1a44410ad4505f2fb4df99eb0a5bbff", name: "title-content" }))), h("slot", { key: "d091798c9ef67be63706e42eec19747e8a225f58" }), h("div", { key: "8f8ef5a3df9d5adc8a4aabb26fcf47090738b06f", class: "arrow" })))));
  }
};
Tooltip.style = tooltipCss();
const typographyCss = () => `.typography-label,:host(.typography-label){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-label-xs,:host(.typography-label-xs){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--2);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xxl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-label-sm,:host(.typography-label-sm){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--1);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-label-lg,:host(.typography-label-lg){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-body,:host(.typography-body){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-body-xs,:host(.typography-body-xs){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--2);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xxl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-body-sm,:host(.typography-body-sm){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-body-lg,:host(.typography-body-lg){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display,:host(.typography-display){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-3);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-xs,:host(.typography-display-xs){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-sm);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-sm,:host(.typography-display-sm){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-2);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-lg,:host(.typography-display-lg){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-4);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-xl,:host(.typography-display-xl){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-5);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-sm);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-xxl,:host(.typography-display-xxl){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-6);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-sm);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h6,.h6,.typography-h6,:host(.typography-h6){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h5,.h5,.typography-h5,:host(.typography-h5){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h4,.h4,.typography-h4,:host(.typography-h4){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h3,.h3,.typography-h3,:host(.typography-h3){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-2);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h2,.h2,.typography-h2,:host(.typography-h2){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-3);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h1,.h1,.typography-h1,:host(.typography-h1){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-4);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-code,:host(.typography-code){font-feature-settings:"clig" off, "liga" off;font-family:JetBrainsMono, Courier New, monospace, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-code-lg,:host(.typography-code-lg){font-feature-settings:"clig" off, "liga" off;font-family:JetBrainsMono, Courier New, monospace, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-code-sm,:host(.typography-code-sm){font-feature-settings:"clig" off, "liga" off;font-family:JetBrainsMono, Courier New, monospace, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-decoration-none,:host(.typography-decoration-none){text-decoration:none !important}.typography-decoration-underline,:host(.typography-decoration-underline){text-decoration:underline !important}.typography-decoration-line-through,:host(.typography-decoration-line-through){text-decoration:line-through !important}.typography-weight-bold,:host(.typography-weight-bold){font-weight:700 !important}a{color:var(--theme-color-primary)}:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.text-xs){font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-s){font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-caption){font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-caption-single){font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-default){font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-default-single){font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-default-title){font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-default-title-single){font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-l){font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-l-single){font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-l-title){font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-l-title-single){font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-h2){font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(.text-xl){font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}`;
const IxTypography = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Text format
   */
  format;
  /**
   * Text color based on theme variables
   */
  textColor;
  /**
   * Display text bold
   */
  bold = false;
  /**
   * Text decoration
   */
  textDecoration = "none";
  static getTextColor(color) {
    if (color.startsWith("inv-") || !color.endsWith("-contrast")) {
      return `var(--theme-color-${color}-text)`;
    }
    return `var(--theme-color-${color.replace("-", "--")})`;
  }
  render() {
    let typographyClass = {};
    typographyClass[`typography-${this.format ?? "body"}`] = true;
    if (this.textDecoration !== "none") {
      typographyClass[`typography-decoration-${this.textDecoration}`] = true;
    }
    typographyClass["typography-weight-bold"] = this.bold;
    let style = {};
    if (this.textColor) {
      style = {
        color: IxTypography.getTextColor(this.textColor)
      };
    }
    return h(Host, { key: "c0dfa8c159f9ee13d97e451a8af8def3c0a07119", class: typographyClass, style }, h("slot", { key: "b9ca51e9a49f6bc48e5ca73030a2087d69ad5a4c" }));
  }
};
IxTypography.style = typographyCss();
export {
  Checkbox as ix_checkbox,
  CheckboxGroup as ix_checkbox_group,
  FormFieldLabel as ix_field_label,
  FieldWrapper as ix_field_wrapper,
  Icon as ix_icon,
  Tooltip as ix_tooltip,
  IxTypography as ix_typography
};
