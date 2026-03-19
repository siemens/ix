import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { J as iconClock } from "./index-DFdo1y_u-D_8X33yw.js";
import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
import { c as createPickerValidityStateTracker, j as onEnterKeyChangeEmit, h as handleSubmitOnEnterKeydown, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, S as SlotEnd, o as onInputBlurWithChange, d as SlotStart, e as emitPickerValidityState } from "./input.fc-BnqR44nA-Dpm1Ym6H.js";
import { c as createClassMutationObserver, g as getValidationText, H as HookValidationLifecycle } from "./validation-YeAaQqsK-CQfTnaKj.js";
import { h as handleIconClick, o as openDropdown, c as closeDropdown, a as createValidityState } from "./picker-input.util-D06ODYZr-BCtzQ81K.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import "./a11y-B5k8YVR0-BOSd6BQK.js";
import "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./rwd.util-pXYAoEyc-B7dE3uhl.js";
import "./animation-CZUo7Z4G-DSUp_D74.js";
import "./dropdown-controller-D6Wm2E-0-B2aMR2tH.js";
const timeInputCss = () => `input{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;height:3.25rem;padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:0}:host .end-container{right:0}:host .start-container ::slotted(*){margin-left:0.5rem}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:0.25rem}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:0.5rem}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:0.25rem}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:0}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input{width:100%;height:100%}:host .time-icon-hidden{display:none}:host(.readonly) input{pointer-events:none}.input-wrapper{position:relative}`;
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
const TimeInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 6);
    this.validityStateChange = createEvent(this, "validityStateChange", 7);
    this.ixFocus = createEvent(this, "ixFocus", 7);
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
   * Name of the input element
   */
  name;
  /**
   * Placeholder of the input element
   */
  placeholder;
  /**
   * Value of the input element
   */
  value = "";
  watchValuePropHandler(newValue) {
    this.onInput(newValue);
  }
  /**
   * Format of time string
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  format = "TT";
  /**
   * Required attribute
   */
  required;
  /**
   * Helper text below the input field
   */
  helperText;
  /**
   * Label of the input field
   */
  label;
  /**
   * Error text below the input field
   */
  invalidText;
  /**
   * Readonly attribute
   */
  readonly = false;
  /**
   * Disabled attribute
   */
  disabled = false;
  /**
   * Info text below the input field
   */
  infoText;
  /**
   * Warning text below the input field
   */
  warningText;
  /**
   * Valid text below the input field
   */
  validText;
  /**
   * Show text as tooltip
   */
  showTextAsTooltip;
  /**
   * I18n string for the error message when the time is not parsable
   */
  i18nErrorTimeUnparsable = "Time is not valid";
  /**
   * Interval for hour selection
   */
  hourInterval = 1;
  /**
   * Interval for minute selection
   */
  minuteInterval = 1;
  /**
   * Interval for second selection
   */
  secondInterval = 1;
  /**
   * Interval for millisecond selection
   */
  millisecondInterval = 100;
  /**
   * Text of time-picker time select button
   */
  i18nSelectTime = "Confirm";
  /**
   * Text for time-picker top label
   */
  i18nTime = "Time";
  /**
   * Text for time-picker hour column header
   */
  i18nHourColumnHeader = "hr";
  /**
   * Text for time-picker minute column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nMinuteColumnHeader = "min";
  /**
   * Text for time-picker second column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nSecondColumnHeader = "sec";
  /**
   * Text for time-picker millisecond column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nMillisecondColumnHeader = "ms";
  /**
   * If false, pressing Enter will submit the form (if inside a form).
   * Set to true to suppress submit on Enter.
   */
  suppressSubmitOnEnter = false;
  /**
   * Hides the header of the picker.
   *
   * @since 4.0.0
   */
  hideHeader = false;
  /**
   * Text alignment within the time input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
   */
  textAlignment = "start";
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * ARIA label for the time picker toggle button
   * Will be set as aria-label for the nested HTML button element
   *
   * @since 5.0.0
   */
  ariaLabelTimeToggleButton = "Toggle time picker";
  /**
   * Input change event.
   */
  valueChange;
  /**
   * Validation state change event.
   */
  validityStateChange;
  /** @internal */
  ixFocus;
  /** @internal */
  ixBlur;
  /**
   * Event emitted when the time input loses focus and the value has changed.
   * @since 4.4.0
   */
  ixChange;
  show = false;
  time = null;
  isInputInvalid = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  focus = false;
  slotStartRef = makeRef();
  slotEndRef = makeRef();
  timePickerRef = makeRef();
  inputElementRef = makeRef();
  dropdownElementRef = makeRef();
  classObserver;
  initialValue;
  invalidReason;
  touched = false;
  validityTracker = createPickerValidityStateTracker();
  disposableChangesAndVisibilityObservers;
  handleInputKeyDown(event) {
    if (event.key === "ArrowDown") {
      this.show = true;
      requestAnimationFrameNoNgZone(() => {
        this.timePickerRef.current?.focus();
      });
    }
    onEnterKeyChangeEmit(event, this, this.value);
    handleSubmitOnEnterKeydown(event, this.suppressSubmitOnEnter, this.formInternals.form);
  }
  updateFormInternalValue(value) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }
  connectedCallback() {
    this.classObserver = createClassMutationObserver(this.hostElement, () => this.checkClassList());
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  componentWillLoad() {
    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.value = now.toFormat(this.format);
      }
    }
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.time = null;
    } else {
      this.watchValue();
    }
    this.checkClassList();
    this.updateFormInternalValue(this.value);
  }
  updatePaddings() {
    adjustPaddingForStartAndEnd(this.slotStartRef.current, this.slotEndRef.current, this.inputElementRef.current);
  }
  disconnectedCallback() {
    this.classObserver?.destroy();
    this.disposableChangesAndVisibilityObservers?.();
  }
  watchValue() {
    this.time = this.value;
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  /** @internal */
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  async onInput(value) {
    this.value = value;
    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = void 0;
      this.emitValidityStateChangeIfChanged();
      this.updateFormInternalValue(value);
      this.valueChange.emit(value);
      return;
    }
    if (!this.format) {
      return;
    }
    const time = DateTime.fromFormat(value, this.format);
    if (time.isValid) {
      this.isInputInvalid = false;
      this.invalidReason = void 0;
    } else {
      this.isInputInvalid = true;
      this.invalidReason = time.invalidReason ?? void 0;
    }
    this.emitValidityStateChangeIfChanged();
    this.updateFormInternalValue(value);
    this.valueChange.emit(value);
  }
  onTimeIconClick(event) {
    handleIconClick(event, this.show, () => this.openDropdown(), this.inputElementRef);
  }
  async openDropdown() {
    this.time = this.value;
    return openDropdown(this.dropdownElementRef);
  }
  async closeDropdown() {
    return closeDropdown(this.dropdownElementRef);
  }
  checkClassList() {
    this.isInvalid = this.hostElement.classList.contains("ix-invalid");
  }
  renderInput() {
    return h("div", { class: "input-wrapper" }, h(SlotStart, { slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h("input", { "aria-haspopup": "true", autoComplete: "off", class: {
      "is-invalid": this.isInputInvalid
    }, style: {
      textAlign: this.textAlignment
    }, disabled: this.disabled, readOnly: this.readonly, required: this.required, ref: this.inputElementRef, type: "text", value: this.value, placeholder: this.placeholder, name: this.name, onInput: (event) => {
      const target = event.target;
      this.onInput(target.value);
    }, onClick: (event) => {
      if (this.show) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, onFocus: async () => {
      this.initialValue = this.value;
      this.ixFocus.emit();
    }, onBlur: () => {
      onInputBlurWithChange(this, this.inputElementRef.current, this.value);
      this.touched = true;
      this.emitValidityStateChangeIfChanged();
    }, onKeyDown: (event) => this.handleInputKeyDown(event) }), h(SlotEnd, { slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("ix-icon-button", { tabindex: -1, "data-testid": "open-time-picker", class: { "time-icon-hidden": this.disabled || this.readonly }, variant: "subtle-tertiary", icon: iconClock, onClick: (event) => this.onTimeIconClick(event), "aria-label": this.ariaLabelTimeToggleButton, "aria-expanded": this.show })));
  }
  hookValidationLifecycle({ isInfo, isInvalid, isInvalidByRequired, isValid, isWarning }) {
    this.isInvalid = isInvalid || isInvalidByRequired || this.isInputInvalid;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  emitValidityStateChangeIfChanged() {
    return emitPickerValidityState(this);
  }
  /** @internal */
  getValidityState() {
    return Promise.resolve(createValidityState(this.isInputInvalid, !!this.required, this.value));
  }
  /**
   * Get the native input element
   */
  getNativeInputElement() {
    return this.inputElementRef.waitForCurrent();
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
    const invalidText = getValidationText(this.isInputInvalid, this.invalidText, this.i18nErrorTimeUnparsable);
    return h(Host, { key: "e39be5ee93387f034d3a0d8601b0f59e9f0125c6", class: {
      disabled: this.disabled,
      readonly: this.readonly
    }, onFocusout: () => {
      this.closeDropdown();
    } }, h("ix-field-wrapper", { key: "0c7d7e7782bafb773752fa812d5a8e605693d2ef", label: this.label, helperText: this.helperText, isInvalid: this.isInvalid, invalidText, infoText: this.infoText, isInfo: this.isInfo, isWarning: this.isWarning, warningText: this.warningText, isValid: this.isValid, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, required: this.required, controlRef: this.inputElementRef }, this.renderInput()), h("ix-dropdown", { key: "69cd5f4f6df802de4c46625ef18b2e790739a373", "data-testid": "time-dropdown", trigger: this.inputElementRef.waitForCurrent(), ref: this.dropdownElementRef, closeBehavior: "outside", enableTopLayer: this.enableTopLayer, suppressOverflowBehavior: true, show: this.show, onShowChanged: (event) => {
      this.show = event.detail;
    }, focusTrapOptions: {
      targetElement: this.timePickerRef,
      trapFocusInShadowDom: true
    } }, h("ix-time-picker", { key: "5af1023c730f9de4e8170ef9cb035ea39dbe486f", ref: this.timePickerRef, format: this.format, time: this.time ?? "", hourInterval: this.hourInterval, minuteInterval: this.minuteInterval, secondInterval: this.secondInterval, millisecondInterval: this.millisecondInterval, embedded: true, hideHeader: this.hideHeader, i18nConfirmTime: this.i18nSelectTime, i18nHeader: this.i18nTime, i18nHourColumnHeader: this.i18nHourColumnHeader, i18nSecondColumnHeader: this.i18nSecondColumnHeader, i18nMinuteColumnHeader: this.i18nMinuteColumnHeader, i18nMillisecondColumnHeader: this.i18nMillisecondColumnHeader, onTimeSelect: (event) => {
      this.onInput(event.detail);
      if (this.initialValue !== event.detail) {
        this.ixChange.emit(event.detail);
        this.initialValue = event.detail;
      }
      this.show = false;
    } })));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "value": [{
        "watchValuePropHandler": 0
      }, {
        "watchValue": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], TimeInput.prototype, "hookValidationLifecycle", null);
TimeInput.style = timeInputCss();
export {
  TimeInput as ix_time_input
};
