import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CRrZCTD3.js";
import { s as iconEye, u as iconEyeCancelled } from "./index-DgUGsIlh-CLxQRaVd.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { m as mapValidationResult, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, g as checkInternalValidity, i as getAriaAttributesForInput, d as SlotStart, I as InputElement, o as onInputBlurWithChange, j as onEnterKeyChangeEmit, f as onInputFocus, k as checkAllowedKeys, S as SlotEnd } from "./input.fc-Bz7Vc1eE-BAe3s_Zz.js";
import { H as HookValidationLifecycle } from "./validation-VVt5EFy0-N8cCybX6.js";
import "./a11y-C21npbUc-CU_Bg8RX.js";
import "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./rwd.util-JJddxCCh-B7dE3uhl.js";
import "./index-CE4sJ-mE-CmD1XbUn.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const inputCss = () => `input{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea:not([rows]){height:3.25rem}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:var(--theme-input--border-thickness)}:host .end-container{right:0.25rem}:host .start-container ::slotted(*){margin-left:0.5rem}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:0.25rem}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:calc(0.5rem - 0.25rem)}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:calc(0.25rem - 0.25rem)}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:calc(0rem - 0.25rem)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}:host .input-wrapper:hover input:not(:disabled):not(:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-wrapper:hover input:not(:disabled):not(:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none;color:var(--theme-input--color--disabled)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--invalid--active) !important}:host input[type=password]::-ms-reveal,:host input[type=password]::-ms-clear{display:none}:host input[type=password]::-webkit-credentials-auto-fill-button,:host input[type=password]::-webkit-textfield-decoration-container,:host input[type=password]::-webkit-contacts-auto-fill-button,:host input[type=password]::-webkit-caps-lock-indicator{visibility:hidden;pointer-events:none}:host .password-eye{margin-left:0.125rem}`;
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
let inputIds = 0;
const Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.validityStateChange = createEvent(this, "validityStateChange", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
    this.ixChange = createEvent(this, "ixChange", 7);
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
   * The type of the text field. Possible values are 'text', 'email', or 'password'.
   */
  type = "text";
  /**
   * The name of the text field.
   */
  name;
  /**
   * The placeholder text for the text field.
   */
  placeholder;
  /**
   * The value of the text field.
   */
  value = "";
  /**
   * Specifies whether the text field is required.
   */
  required = false;
  /**
   * Specifies whether the text field is disabled.
   */
  disabled = false;
  /**
   * Specifies whether the text field is readonly.
   */
  readonly = false;
  /**
   * The helper text for the text field.
   */
  helperText;
  /**
   * The info text for the text field.
   */
  infoText;
  /**
   * Specifies whether to show the text as a tooltip.
   */
  showTextAsTooltip;
  /**
   * The valid text for the text field.
   */
  validText;
  /**
   * The warning text for the text field.
   */
  warningText;
  /**
   * The label for the text field.
   */
  label;
  /**
   * The error text for the text field.
   */
  invalidText;
  /**
   * The pattern for the text field.
   */
  pattern;
  /**
   * The maximum length of the text field.
   */
  maxLength;
  /**
   * The minimum length of the text field.
   */
  minLength;
  /**
   * The allowed characters pattern for the text field.
   */
  allowedCharactersPattern;
  /**
   * If false, pressing Enter will submit the form (if inside a form).
   * Set to true to suppress submit on Enter.
   */
  suppressSubmitOnEnter = false;
  /**
   * Text alignment within the input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
   */
  textAlignment = "start";
  /**
   * Event emitted when the value of the text field changes.
   */
  valueChange;
  /**
   * Event emitted when the validity state of the text field changes.
   */
  validityStateChange;
  /**
   * Event emitted when the text field loses focus.
   */
  ixBlur;
  /**
   * Event emitted when the text field loses focus and the value has changed.
   * @since 4.4.0
   */
  ixChange;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  isInvalidByRequired = false;
  inputType = "text";
  /** @internal */
  initialValue;
  inputRef = makeRef();
  slotEndRef = makeRef();
  slotStartRef = makeRef();
  passwordToggleRef = () => this.updatePaddings();
  inputId = `input-${inputIds++}`;
  touched = false;
  disposableChangesAndVisibilityObservers;
  updateClassMappings(result) {
    mapValidationResult(this, result);
  }
  updateInputType() {
    this.inputType = this.type;
  }
  componentWillLoad() {
    this.updateFormInternalValue(this.value);
    this.inputType = this.type;
  }
  connectedCallback() {
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  updatePaddings() {
    adjustPaddingForStartAndEnd(this.slotStartRef.current, this.slotEndRef.current, this.inputRef.current);
  }
  disconnectedCallback() {
    this.disposableChangesAndVisibilityObservers?.();
  }
  updateFormInternalValue(value) {
    this.formInternals.setFormValue(value);
    this.value = value;
    if (this.inputRef.current && this.touched) {
      checkInternalValidity(this, this.inputRef.current);
    }
  }
  /** @internal */
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  /**
   * Returns the native input element used in the text field.
   */
  getNativeInputElement() {
    return this.inputRef.waitForCurrent();
  }
  /**
   * Returns the validity state of the input field.
   */
  async getValidityState() {
    const input = await this.inputRef.waitForCurrent();
    return Promise.resolve(input.validity);
  }
  /**
   * Focuses the input field
   */
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  /**
   * Returns whether the text field has been touched.
   * @internal
   */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  render() {
    const inputAria = getAriaAttributesForInput(this);
    return h(Host, { key: "9fe71424d3a053b623e06500f50db8014b8ac4d7", class: {
      disabled: this.disabled,
      readonly: this.readonly
    } }, h("ix-field-wrapper", { key: "8bc5076ffd7f371c44ddad2b6cd23f210754c61a", required: this.required, label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, controlRef: this.inputRef }, h("div", { key: "a4985113a3f055ab9a3d0925193db8e9a7e62c40", class: "input-wrapper" }, h(SlotStart, { key: "bbc242d190bf2f5ab8b6c25429168ca9a1fe83f0", slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h(InputElement, { key: "7e851bd13b62ba985c52f2e7b17db0167468a4e3", id: this.inputId, readonly: this.readonly, disabled: this.disabled, maxLength: this.maxLength, minLength: this.minLength, pattern: this.pattern, type: this.inputType, isInvalid: this.isInvalid, required: this.required, value: this.value, placeholder: this.placeholder, inputRef: this.inputRef, onKeyPress: (event) => checkAllowedKeys(this, event), onFocus: () => onInputFocus(this, this.value), onEnterKeyChange: (event) => onEnterKeyChangeEmit(event, this, this.value), valueChange: (value) => this.valueChange.emit(value), updateFormInternalValue: (value) => this.updateFormInternalValue(value), onBlur: () => {
      onInputBlurWithChange(this, this.inputRef.current, this.value);
      this.touched = true;
    }, ariaAttributes: inputAria, form: this.formInternals.form ?? void 0, suppressSubmitOnEnter: this.suppressSubmitOnEnter, textAlignment: this.textAlignment }), h(SlotEnd, { key: "ffb41b5074ef6e78804a721c7f6f92cea77bbd27", slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, this.type === "password" && !this.disabled && h("ix-icon-button", { key: "1717a5cda91936d3528c6e71fb67b8f5c2aa6bb6", ref: this.passwordToggleRef, color: "color-weak-text", class: "password-eye", variant: "tertiary", size: "16", icon: this.inputType === "password" ? iconEye : iconEyeCancelled, onClick: () => {
      if (this.inputType === "password") {
        this.inputType = "text";
        return;
      }
      this.inputType = "password";
    } }))), !!this.maxLength && this.maxLength > 0 && h("ix-typography", { key: "73621c6ae0bf7e658c1312bab99c5631ce208df1", class: "bottom-text", slot: "bottom-right", textColor: "soft" }, (this.value ?? "").length, "/", this.maxLength)));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "type": [{
        "updateInputType": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Input.prototype, "updateClassMappings", null);
Input.style = inputCss();
export {
  Input as ix_input
};
