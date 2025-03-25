import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.23f98c2e.js";
import { A as iconMinus, B as iconPlus } from "./index-CrTP-icT.451e0ae2.js";
import { H as HookValidationLifecycle } from "./validation-C3siDfPQ.31747000.js";
import { m as makeRef } from "./make-ref-bcj7UEIC.8e199155.js";
import { m as mapValidationResult, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, c as SlotStart, I as InputElement, d as checkAllowedKeys, o as onInputBlur, S as SlotEnd, e as checkInternalValidity } from "./input.util-BbBYOl1b.1a6e0a83.js";
import "./anime.es-Ou74PMQs.d39ae9b1.js";
import "./a11y-Bb7pDeaQ.1f74cdb9.js";
import "./mutation-observer-CX81WQtk.55d80c4d.js";
import "./rwd.util-pXYAoEyc.ab22a104.js";
const numberInputCss = 'input{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;height:3.25rem;padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]),input.ix-info:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:0}:host .end-container{right:0}:host .start-container ::slotted(*){margin-left:0.5rem}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:0.25rem}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:0.5rem}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:0.25rem}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:0}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input:hover{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input{border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input:hover{border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input{background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input:hover{border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--invalid--active) !important}:host .input-wrapper.show-stepper-buttons input[type=number]{min-width:6rem}:host .number-stepper-container{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;margin-right:0.25rem}:host .number-stepper-container.container-hidden{display:none}';
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
  updateFormInternalValue(value) {
    this.formInternals.setFormValue(value.toString());
    this.value = value;
  }
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  getNativeInputElement() {
    return this.inputRef.waitForCurrent();
  }
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  isTouched() {
    return Promise.resolve(this.touched);
  }
  render() {
    const showStepperButtons = this.showStepperButtons && (this.disabled || this.readonly) === false;
    return h(Host, { key: "d4634b3d7387e9403d4096dad8b64cdf86ddc0b2", class: {
      disabled: this.disabled,
      readonly: this.readonly
    } }, h("ix-field-wrapper", { key: "ca8e3d7619f510b33ceca78b34babae22c8a5c2d", id: this.numberInputId, required: this.required, label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, controlRef: this.inputRef }, h("div", { key: "601c1efa7d76fccf3b0531ba5838dff6ac9ef988", class: {
      "input-wrapper": true,
      "show-stepper-buttons": !!this.showStepperButtons
    } }, h(SlotStart, { key: "6227a18e452b881a6f0105371903db926de6be97", slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h(InputElement, { key: "b1cf7b50b9081d242886b5c8e8fd17ec18af632e", id: this.numberInputId, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, pattern: this.pattern, type: "number", isInvalid: this.isInvalid, required: this.required, value: this.value, placeholder: this.placeholder, inputRef: this.inputRef, onKeyPress: (event) => checkAllowedKeys(this, event), valueChange: (value) => this.valueChange.emit(Number(value)), updateFormInternalValue: (value) => this.updateFormInternalValue(Number(value)), onBlur: () => {
      onInputBlur(this, this.inputRef.current);
      this.touched = true;
    } }), h(SlotEnd, { key: "ac36b5e13529d3289ead6bfe3a0df8a8a01968d3", slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("div", { key: "2945f7bb4991960113e0b546fafb350840118fd0", class: {
      "number-stepper-container": true,
      "container-hidden": !showStepperButtons
    } }, h("ix-icon-button", { key: "87d23accd5a945e28ce9e327eaee2a3eaccd42a7", ghost: true, icon: iconMinus, size: "16", class: "number-stepper-button step-minus", onClick: () => {
      if (!this.inputRef.current) {
        return;
      }
      this.inputRef.current.stepDown();
      checkInternalValidity(this, this.inputRef.current);
      this.updateFormInternalValue(Number(this.inputRef.current.value));
      this.valueChange.emit(this.value);
    } }), h("ix-icon-button", { key: "8f1a862f4ef4a87593fb24cf1d1d993c85f3855e", ghost: true, icon: iconPlus, size: "16", class: "number-stepper-button step-plus", onClick: () => {
      if (!this.inputRef.current) {
        return;
      }
      this.inputRef.current.stepUp();
      checkInternalValidity(this, this.inputRef.current);
      this.updateFormInternalValue(Number(this.inputRef.current.value));
      this.valueChange.emit(this.value);
    } }))))));
  }
  static get formAssociated() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
};
__decorate([
  HookValidationLifecycle()
], NumberInput.prototype, "updateClassMappings", null);
NumberInput.style = numberInputCss;
export {
  NumberInput as ix_number_input
};
