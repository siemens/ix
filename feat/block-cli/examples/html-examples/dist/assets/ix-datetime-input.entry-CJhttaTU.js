import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { q as iconCalendar } from "./index-DFdo1y_u-D_8X33yw.js";
import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
import { c as createPickerValidityStateTracker, h as handleSubmitOnEnterKeydown, e as emitPickerValidityState, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, S as SlotEnd, f as onInputFocus, o as onInputBlurWithChange, d as SlotStart } from "./input.fc-BnqR44nA-Dpm1Ym6H.js";
import { c as createClassMutationObserver, g as getValidationText, H as HookValidationLifecycle } from "./validation-YeAaQqsK-CQfTnaKj.js";
import { h as handleIconClick, o as openDropdown, c as closeDropdown, a as createValidityState } from "./picker-input.util-D06ODYZr-BCtzQ81K.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import "./a11y-B5k8YVR0-BOSd6BQK.js";
import "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./rwd.util-pXYAoEyc-B7dE3uhl.js";
import "./animation-CZUo7Z4G-DSUp_D74.js";
import "./dropdown-controller-D6Wm2E-0-B2aMR2tH.js";
const datetimeInputCss = () => `input{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;height:3.25rem;padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:0}:host .end-container{right:0}:host .start-container ::slotted(*){margin-left:0.5rem}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:0.25rem}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:0.5rem}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:0.25rem}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:0}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input{width:100%;height:100%}:host .calendar-hidden{display:none}:host(.readonly) input{pointer-events:none}`;
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
const DatetimeInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
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
  /** Name of the form control for form submission */
  name;
  /** Placeholder text when input is empty */
  placeholder;
  /** Value in display format (e.g., "2026/01/21 13:07:04" for default format) */
  value = "";
  /**
   * Luxon date and time format for display (e.g., 'yyyy/LL/dd HH:mm:ss' → "2026/01/20 13:07:04").
   *
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  format = "yyyy/LL/dd HH:mm:ss";
  /** Locale for date/time formatting (e.g., 'en-US', 'de-DE') */
  locale;
  /** Whether the field is required */
  required = false;
  /** Whether the input is disabled */
  disabled = false;
  /** Whether the input is read-only (calendar icon hidden) */
  readonly = false;
  /** Minimum allowed date (matching format or date-only, e.g., "2026/01/20") */
  minDate;
  /** Maximum allowed date (matching format or date-only, e.g., "2026/12/31") */
  maxDate;
  /** Label text displayed above the input */
  label;
  /** Helper text displayed below the input */
  helperText;
  /** Validation message for invalid state */
  invalidText;
  /** Informational message */
  infoText;
  /** Warning message */
  warningText;
  /** Success/valid message */
  validText;
  /** Show helper text as tooltip instead of below input */
  showTextAsTooltip = false;
  /** Error message when datetime cannot be parsed */
  i18nErrorDateTimeUnparsable = "Date time is not valid";
  /** Text for confirm button in picker (prop name matches datetime-picker) */
  i18nDone = "Confirm";
  /** Header text for time picker section */
  i18nTime = "Time";
  /** ARIA label for previous month navigation button */
  ariaLabelPreviousMonthButton = "Previous month";
  /** ARIA label for next month navigation button */
  ariaLabelNextMonthButton = "Next month";
  /**
   * ARIA label for the calendar icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelCalendarButton = "Toggle calendar";
  /** Show week numbers in date picker */
  showWeekNumbers = false;
  /** First day of week (0=Sunday, 1=Monday, etc.) */
  weekStartIndex = 0;
  /** Prevent form submission when Enter is pressed */
  suppressSubmitOnEnter = false;
  /** Text alignment within the input field */
  textAlignment = "start";
  /**
   * Enable Popover API rendering for dropdown.
   */
  enableTopLayer = false;
  /** Emitted when the datetime value changes. Payload is display format or undefined */
  valueChange;
  /** Emitted when validation state changes */
  validityStateChange;
  /** Emitted when the input receives focus */
  ixFocus;
  /** Emitted when the input loses focus */
  ixBlur;
  /**
   * Emitted when the date/time value changes via user interaction.
   *
   * Fires in two scenarios:
   * - When the input loses focus (blur) and the value has changed
   * - When a new date/time is selected in the picker and confirmed
   *
   * Does NOT fire when:
   * - The picker is opened/closed without confirming a change
   * - The input is blurred without modifying the value
   * - The value is changed programmatically via the value property
   */
  ixChange;
  isInputInvalid = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  slotStartRef = makeRef();
  slotEndRef = makeRef();
  inputElementRef = makeRef();
  dropdownElementRef = makeRef();
  datetimePickerRef = makeRef();
  show = false;
  from = null;
  time = null;
  classObserver;
  initialValue;
  invalidReason;
  touched = false;
  validityTracker = createPickerValidityStateTracker();
  disposableChangesAndVisibilityObservers;
  watchValuePropHandler(newValue) {
    this.onInput(newValue);
    this.syncPickerState();
  }
  get combinedFormat() {
    return this.format;
  }
  get dateOnlyFormat() {
    const timeTokenIndex = this.format.search(/[HhmsaSZ]/);
    if (timeTokenIndex === -1)
      return this.format;
    let end = timeTokenIndex;
    while (end > 0 && " 	'T".includes(this.format[end - 1])) {
      end--;
    }
    return this.format.slice(0, end);
  }
  syncPickerState() {
    if (!this.value) {
      this.from = null;
      this.time = null;
      return;
    }
    const dateTime = DateTime.fromFormat(this.value, this.combinedFormat, {
      locale: this.locale
    });
    if (dateTime.isValid) {
      this.from = dateTime.toFormat(this.format);
      this.time = dateTime.toFormat(this.format);
    } else {
      this.from = null;
      this.time = null;
    }
  }
  async onInput(value) {
    this.value = value;
    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = void 0;
      this.emitValidityStateChangeIfChanged();
      this.formInternals.setFormValue(null);
      this.valueChange.emit(value);
      return;
    }
    if (!this.format) {
      return;
    }
    const dateTime = DateTime.fromFormat(value, this.combinedFormat, {
      locale: this.locale
    });
    const minDateTime = this.parseConstraintDate(this.minDate, "start");
    const maxDateTime = this.parseConstraintDate(this.maxDate, "end");
    const validationResult = this.validateConstraints(dateTime, minDateTime, maxDateTime);
    this.isInputInvalid = validationResult.isInvalid;
    this.invalidReason = validationResult.reason;
    if (this.isInputInvalid) {
      this.from = null;
      this.time = null;
      this.formInternals.setFormValue(null);
    } else {
      this.formInternals.setFormValue(value);
    }
    this.emitValidityStateChangeIfChanged();
    this.valueChange.emit(value);
  }
  parseConstraintDate(dateString, boundary) {
    if (!dateString) {
      return null;
    }
    const localeOpts = { locale: this.locale };
    let parsed = DateTime.fromFormat(dateString, this.format, localeOpts);
    if (!parsed.isValid) {
      parsed = DateTime.fromFormat(dateString, this.dateOnlyFormat, localeOpts);
    }
    if (!parsed.isValid) {
      return null;
    }
    return boundary === "start" ? parsed.startOf("day") : parsed.endOf("day");
  }
  validateConstraints(dateTime, minDateTime, maxDateTime) {
    const isFormatInvalid = !dateTime.isValid;
    const isBeforeMin = !!(minDateTime?.isValid && dateTime.isValid && dateTime < minDateTime);
    const isAfterMax = !!(maxDateTime?.isValid && dateTime.isValid && dateTime > maxDateTime);
    const isInvalid = isFormatInvalid || isBeforeMin || isAfterMax;
    let reason;
    if (isBeforeMin) {
      reason = "rangeUnderflow";
    } else if (isAfterMax) {
      reason = "rangeOverflow";
    } else if (isFormatInvalid) {
      reason = dateTime.invalidReason || void 0;
    }
    return { isInvalid, reason };
  }
  handleInputKeyDown(event) {
    handleSubmitOnEnterKeydown(event, this.suppressSubmitOnEnter, this.formInternals.form);
  }
  initPickerValues() {
    this.syncPickerState();
    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.from = now.toFormat(this.format);
        this.time = now.toFormat(this.format);
      }
    }
  }
  onCalendarClick(event) {
    handleIconClick(event, this.show, () => this.openDropdown(), this.inputElementRef);
  }
  async openDropdown() {
    this.initPickerValues();
    return openDropdown(this.dropdownElementRef);
  }
  async closeDropdown() {
    return closeDropdown(this.dropdownElementRef);
  }
  updateFormInternalValue(value) {
    if (value) {
      this.formInternals.setFormValue(value);
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  /**
   * Returns whether the input has a value.
   * @internal
   */
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  /**
   * Returns the associated HTML form element.
   * @internal
   */
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  /**
   * Get the native input element
   * @internal
   */
  getNativeInputElement() {
    return this.inputElementRef.waitForCurrent();
  }
  /**
   * Focus the native input element
   * @internal
   */
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  /**
   * Returns whether the input field has been touched.
   * @internal
   */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  /**
   * Returns the validity state of the input.
   * @internal
   */
  getValidityState() {
    return Promise.resolve(createValidityState(this.isInputInvalid, !!this.required, this.value));
  }
  async onInputValidationChange() {
    this.isInvalid = this.isInputInvalid;
    const state = await this.getValidityState();
    const validityState = {
      valid: state.valid,
      valueMissing: state.valueMissing,
      rangeUnderflow: this.invalidReason === "rangeUnderflow",
      rangeOverflow: this.invalidReason === "rangeOverflow",
      typeMismatch: !!(this.invalidReason && this.invalidReason !== "rangeUnderflow" && this.invalidReason !== "rangeOverflow"),
      customError: state.customError,
      badInput: state.badInput,
      patternMismatch: false,
      stepMismatch: state.stepMismatch,
      tooLong: state.tooLong,
      tooShort: state.tooShort,
      invalidReason: this.invalidReason
    };
    this.validityStateChange.emit(validityState);
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
  emitChange(value) {
    if (this.initialValue !== value) {
      this.ixChange.emit(value);
      this.initialValue = value;
    }
  }
  connectedCallback() {
    this.classObserver = createClassMutationObserver(this.hostElement, () => this.checkClassList());
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  componentWillLoad() {
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
      this.time = null;
    } else {
      this.syncPickerState();
    }
    this.checkClassList();
    this.updateFormInternalValue(this.value);
    this.initialValue = this.value;
  }
  updatePaddings() {
    adjustPaddingForStartAndEnd(this.slotStartRef.current, this.slotEndRef.current, this.inputElementRef.current);
  }
  disconnectedCallback() {
    this.classObserver?.destroy();
    this.disposableChangesAndVisibilityObservers?.();
  }
  checkClassList() {
    this.isInvalid = this.hostElement.classList.contains("ix-invalid");
  }
  handleDateSelect = (event) => {
    const { from, time } = event.detail;
    if (!from || !time) {
      return;
    }
    const dateOnly = DateTime.fromFormat(from, this.format, {
      locale: this.locale
    });
    const timeOnly = DateTime.fromFormat(time, this.format, {
      locale: this.locale
    });
    const dateTimeCombined = dateOnly.set({
      hour: timeOnly.hour,
      minute: timeOnly.minute,
      second: timeOnly.second,
      millisecond: timeOnly.millisecond
    });
    const displayValue = dateTimeCombined.toFormat(this.format);
    this.onInput(displayValue);
    this.emitChange(displayValue);
    this.closeDropdown();
  };
  renderInput() {
    return h("div", { class: "input-wrapper" }, h(SlotStart, { slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h("input", { autoComplete: "off", class: {
      "is-invalid": this.isInputInvalid
    }, disabled: this.disabled, name: this.name, placeholder: this.placeholder, readonly: this.readonly, ref: this.inputElementRef, required: this.required, style: {
      textAlign: this.textAlignment
    }, type: "text", value: this.value ?? "", onBlur: () => {
      onInputBlurWithChange(this, this.inputElementRef.current, this.value);
      this.touched = true;
      this.emitValidityStateChangeIfChanged();
    }, onClick: (event) => {
      if (this.show) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, onFocus: () => {
      onInputFocus(this, this.value);
      this.ixFocus.emit();
    }, onInput: (event) => {
      const target = event.target;
      this.onInput(target.value);
    }, onKeyDown: (event) => this.handleInputKeyDown(event) }), h(SlotEnd, { slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("ix-icon-button", { "aria-label": this.ariaLabelCalendarButton, tabindex: -1, class: { "calendar-hidden": this.disabled || this.readonly }, variant: "subtle-tertiary", icon: iconCalendar, onClick: (event) => this.onCalendarClick(event) })));
  }
  render() {
    const invalidText = getValidationText(this.isInputInvalid, this.invalidText, this.i18nErrorDateTimeUnparsable);
    return h(Host, { key: "8319f80b5325c8a2f47137869c4d97fddfa04bc2", class: {
      disabled: this.disabled,
      readonly: this.readonly
    } }, h("ix-field-wrapper", { key: "c43cc7f881e187995befb5d22cfd8331b0d08e48", controlRef: this.inputElementRef, helperText: this.helperText, infoText: this.infoText, invalidText, isInfo: this.isInfo, isInvalid: this.isInvalid, isValid: this.isValid, isWarning: this.isWarning, label: this.label, required: this.required, showTextAsTooltip: this.showTextAsTooltip, validText: this.validText, warningText: this.warningText }, this.renderInput()), h("ix-dropdown", { key: "b22895924356efd98b68880c4d3fc8ea143fba8f", class: "datetime-dropdown", closeBehavior: "outside", "data-testid": "datetime-dropdown", enableTopLayer: this.enableTopLayer, ref: this.dropdownElementRef, show: this.show, suppressOverflowBehavior: true, trigger: this.inputElementRef.waitForCurrent(), onShowChanged: (event) => {
      this.show = event.detail;
    }, focusTrapOptions: {
      targetElement: this.datetimePickerRef,
      trapFocusInShadowDom: true
    }, callbackFocusElement: async () => {
      const datetimePicker = this.datetimePickerRef.current;
      if (datetimePicker) {
        const datePickerElement = await datetimePicker.getDatepickerElement();
        datePickerElement?.focusActiveDay();
      }
      return true;
    }, keyboardActivationKeys: ["ArrowUp", "ArrowDown"] }, h("ix-datetime-picker", { key: "eeda6c6a948e1c5e53e7468b781c1cb139e50c32", ariaLabelNextMonthButton: this.ariaLabelNextMonthButton, ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton, dateFormat: this.format, embedded: true, from: this.from ?? "", i18nDone: this.i18nDone, i18nTime: this.i18nTime, locale: this.locale, maxDate: this.maxDate, minDate: this.minDate, ref: this.datetimePickerRef, showWeekNumbers: this.showWeekNumbers, singleSelection: true, time: this.time ?? "", timeFormat: this.format, weekStartIndex: this.weekStartIndex, onDateSelect: this.handleDateSelect })));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "value": [{
        "watchValuePropHandler": 0
      }],
      "isInputInvalid": [{
        "onInputValidationChange": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], DatetimeInput.prototype, "hookValidationLifecycle", null);
DatetimeInput.style = datetimeInputCss();
export {
  DatetimeInput as ix_datetime_input
};
