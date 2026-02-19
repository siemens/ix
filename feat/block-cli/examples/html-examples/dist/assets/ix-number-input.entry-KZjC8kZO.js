import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-Cn4dOqNA.js";
import { B as iconMinus, C as iconPlus } from "./index-8HpPmDK_-DinFJk0z.js";
import { H as HookValidationLifecycle } from "./validation-3877QBzA-DJkD6K4T.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { o as onInputBlur, m as mapValidationResult, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, f as checkInternalValidity, d as SlotStart, I as InputElement, i as checkAllowedKeys, S as SlotEnd } from "./input.fc-CPEIRuou-CIjfkkD9.js";
import "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
import "./a11y-DAzBNVe7-CO1Uj69l.js";
import "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./rwd.util-pXYAoEyc-B7dE3uhl.js";
const numberInputCss = 'input{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;height:3.25rem;padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]),input.ix-info:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]){background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:0}:host .end-container{right:0}:host .start-container ::slotted(*){margin-left:0.5rem}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:0.25rem}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:0.5rem}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:0.25rem}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:0}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input:hover{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input{background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input:hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input{background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input:hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--invalid--active) !important}:host .input-wrapper.show-stepper-buttons input[type=number]{min-width:6rem}:host .number-stepper-container{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;margin-right:0.25rem}:host .number-stepper-container.container-hidden{display:none}';
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
let numberInputIds = 0;
const INVALID_NUMBER_INPUT_REGEX = /[^\dEe+\-.,]/;
const NumberInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.validityStateChange = createEvent(this, "validityStateChange", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
    this.value = 0;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.step = 1;
    this.suppressSubmitOnEnter = false;
    this.textAlignment = "end";
    this.allowEmptyValueChange = false;
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
    this.isInvalidByRequired = false;
    this.inputRef = makeRef();
    this.slotEndRef = makeRef();
    this.slotStartRef = makeRef();
    this.numberInputId = `number-input-${numberInputIds++}`;
    this.touched = false;
    this.handleInputChange = (inputValue) => {
      const parsedValue = this.convertNumberStringToFloat(inputValue);
      const isScientificNotation = this.isScientificNotation(inputValue.trim());
      if (isScientificNotation) {
        this.formInternals.setFormValue(inputValue);
      }
      this.handleValueChangeEvent(parsedValue);
    };
    this.handleBlur = () => {
      if (!this.inputRef.current)
        return;
      const inputValue = this.inputRef.current.value;
      const parsedValue = this.convertNumberStringToFloat(inputValue);
      if (parsedValue !== void 0) {
        this.inputRef.current.value = this.formatValue(parsedValue);
      }
      this.updateFormInternalValue(parsedValue);
      onInputBlur(this, this.inputRef.current);
      this.touched = true;
    };
    this.handleKeyDown = (event) => {
      if (this.disabled || this.readonly) {
        return;
      }
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          this.handleStepOperation("up");
          break;
        case "ArrowDown":
          event.preventDefault();
          this.handleStepOperation("down");
          break;
      }
    };
    this.handleBeforeInput = (e) => {
      var _a, _b;
      if (this.disabled || this.readonly)
        return;
      if (e.inputType === "insertText") {
        const character = e.data;
        if (character && INVALID_NUMBER_INPUT_REGEX.test(character)) {
          e.preventDefault();
        }
      }
      if (e.inputType === "insertFromPaste") {
        const dt = e.dataTransfer || e.clipboardData;
        const text = (_b = (_a = dt === null || dt === void 0 ? void 0 : dt.getData) === null || _a === void 0 ? void 0 : _a.call(dt, "text")) !== null && _b !== void 0 ? _b : "";
        if (INVALID_NUMBER_INPUT_REGEX.test(text)) {
          e.preventDefault();
        }
      }
    };
    this.handlePaste = (e) => {
      var _a, _b;
      const text = (_b = (_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.getData("text")) !== null && _b !== void 0 ? _b : "";
      if (INVALID_NUMBER_INPUT_REGEX.test(text)) {
        e.preventDefault();
      }
    };
  }
  onValueChange(newValue) {
    this.updateFormInternalValue(newValue);
  }
  updateClassMappings(result) {
    mapValidationResult(this, result);
  }
  componentWillLoad() {
    this.updateFormInternalValue(this.value);
  }
  connectedCallback() {
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  disconnectedCallback() {
    var _a;
    (_a = this.disposableChangesAndVisibilityObservers) === null || _a === void 0 ? void 0 : _a.call(this);
  }
  updatePaddings() {
    adjustPaddingForStartAndEnd(this.slotStartRef.current, this.slotEndRef.current, this.inputRef.current);
  }
  convertNumberStringToFloat(input) {
    if (!input || input.trim() === "") {
      return void 0;
    }
    const parsed = Number.parseFloat(input);
    return Number.isNaN(parsed) ? void 0 : parsed;
  }
  isScientificNotation(input) {
    const parsed = Number.parseFloat(input);
    return !Number.isNaN(parsed) && Number.isFinite(parsed) && /[eE]/.test(input);
  }
  formatValue(value) {
    if (value === void 0 || value === null) {
      return "";
    }
    return value.toString();
  }
  handleValueChangeEvent(value) {
    this.valueChange.emit(this.allowEmptyValueChange ? value : value !== null && value !== void 0 ? value : 0);
  }
  updateFormInternalValue(value) {
    const formValue = value !== void 0 && value !== null ? value.toString() : "";
    this.formInternals.setFormValue(formValue);
    this.value = value;
    if (this.inputRef.current && this.touched) {
      checkInternalValidity(this, this.inputRef.current);
    }
  }
  handleStepOperation(operation) {
    var _a, _b;
    if (!this.inputRef.current) {
      return;
    }
    const currentValue = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
    const stepValue = typeof this.step === "string" ? Number.parseFloat(this.step) : (_b = this.step) !== null && _b !== void 0 ? _b : 1;
    let newValue;
    if (operation === "up") {
      newValue = currentValue + stepValue;
    } else {
      newValue = currentValue - stepValue;
    }
    if (this.min !== void 0) {
      const minValue = typeof this.min === "string" ? Number.parseFloat(this.min) : this.min;
      newValue = Math.max(newValue, minValue);
    }
    if (this.max !== void 0) {
      const maxValue = typeof this.max === "string" ? Number.parseFloat(this.max) : this.max;
      newValue = Math.min(newValue, maxValue);
    }
    this.inputRef.current.value = newValue.toString();
    this.updateFormInternalValue(newValue);
    checkInternalValidity(this, this.inputRef.current);
    this.handleValueChangeEvent(newValue);
  }
  /** @internal */
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  /** @internal */
  async hasValidValue() {
    const nativeInput = await this.getNativeInputElement();
    if (nativeInput.value === "") {
      return !this.required;
    }
    const parsedValue = this.convertNumberStringToFloat(nativeInput.value);
    return parsedValue !== void 0;
  }
  /**
   * Returns the native input element used under the hood
   */
  getNativeInputElement() {
    return this.inputRef.waitForCurrent();
  }
  /**
   * Focuses the input field
   */
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  /**
   * Returns true if the input field has been touched
   * @internal
   */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  render() {
    var _a;
    const showStepperButtons = this.showStepperButtons && (this.disabled || this.readonly) === false;
    return h(Host, { key: "31377bfdbdeea168acf4d1d2c9e04354f029f984", class: {
      disabled: this.disabled,
      readonly: this.readonly
    } }, h("ix-field-wrapper", { key: "5d40550404d624c36fca536123fd313265daf665", id: this.numberInputId, required: this.required, label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, controlRef: this.inputRef }, h("div", { key: "eef824ded792d811e005c1b4253191516d1be75e", class: {
      "input-wrapper": true,
      "show-stepper-buttons": !!this.showStepperButtons
    } }, h(SlotStart, { key: "19432cbd77069412a27fda9e3ca207d15d9ee280", slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h(InputElement, { key: "8520a6ac43ca72ffc1a4e648dcac18981c73c2af", id: this.numberInputId, readonly: this.readonly, disabled: this.disabled, step: this.step, min: this.min, max: this.max, pattern: this.pattern, type: "number", isInvalid: this.isInvalid, required: this.required, value: this.formatValue(this.value), placeholder: this.placeholder, inputRef: this.inputRef, onKeyPress: (event) => checkAllowedKeys(this, event), onKeyDown: (event) => this.handleKeyDown(event), onBeforeInput: (event) => this.handleBeforeInput(event), onPaste: (event) => this.handlePaste(event), valueChange: this.handleInputChange, updateFormInternalValue: (value) => {
      const isScientificNotation = this.isScientificNotation(value.trim());
      if (!isScientificNotation) {
        const parsedValue = this.convertNumberStringToFloat(value);
        this.updateFormInternalValue(parsedValue);
      }
    }, onBlur: this.handleBlur, form: (_a = this.formInternals.form) !== null && _a !== void 0 ? _a : void 0, suppressSubmitOnEnter: this.suppressSubmitOnEnter, textAlignment: this.textAlignment }), h(SlotEnd, { key: "33009442fbac0563095410dff5eb4c0f7e277c1e", slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("div", { key: "e187bda0ecf5c2c4f83d92f84e839d06197bf4c5", class: {
      "number-stepper-container": true,
      "container-hidden": !showStepperButtons
    } }, h("ix-icon-button", { key: "58635a457b88b630798267e0e9e624b2fd96936b", variant: "subtle-tertiary", icon: iconMinus, size: "16", class: "number-stepper-button step-minus", "aria-label": "decrement number", onClick: () => this.handleStepOperation("down") }), h("ix-icon-button", { key: "9bd7b1422daa00101edf6c6d06850a97b0e46750", variant: "subtle-tertiary", icon: iconPlus, size: "16", class: "number-stepper-button step-plus", "aria-label": "increment number", onClick: () => this.handleStepOperation("up") }))))));
  }
  static get formAssociated() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["onValueChange"]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], NumberInput.prototype, "updateClassMappings", null);
NumberInput.style = numberInputCss;
export {
  NumberInput as ix_number_input
};
