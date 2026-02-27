import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { D as DateTime } from "./datetime-bDicGJUN-GV0o9Ayg.js";
import { O as OnListener } from "./listener-DAJkOQte-BoqxzXey.js";
const timePickerCss = '.ix-form-control,.ix-form-control-plaintext{color:var(--theme-input--color);border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ix-form-control::-moz-placeholder,.ix-form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}.ix-form-control::placeholder,.ix-form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover,.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover,.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.ix-form-control:focus-visible{color:var(--theme-input--color)}.ix-form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}.ix-form-control[type=number]{text-align:right}.ix-form-control.readonly,.ix-form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}.ix-form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.ix-form-control:read-only,.ix-form-control[readonly],.ix-form-control[readOnly],.ix-form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.ix-form-control:read-only::-moz-placeholder,.ix-form-control[readonly]::-moz-placeholder,.ix-form-control[readOnly]::-moz-placeholder,.ix-form-control.readonly::-moz-placeholder{color:transparent}.ix-form-control:-moz-read-only::placeholder{color:transparent}.ix-form-control:read-only::placeholder,.ix-form-control[readonly]::placeholder,.ix-form-control[readOnly]::placeholder,.ix-form-control.readonly::placeholder{color:transparent}.ix-form-control:disabled,.ix-form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}.ix-form-control:disabled::-moz-placeholder,.ix-form-control.disabled::-moz-placeholder{color:transparent}.ix-form-control:disabled::placeholder,.ix-form-control.disabled::placeholder{color:transparent}.ix-form-control-plaintext{outline:0}.form-group{position:relative}.input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}.input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}.input-wrapper>input{padding-inline-start:2.2rem}select.ix-form-control{padding:0 0.312rem}textarea.ix-form-control{padding:0.375rem 0.5rem}input.ix-form-control.disabled,input.ix-form-control:disabled{color:var(--theme-input--color--disabled)}input.ix-form-control:-moz-read-only{cursor:default}input.ix-form-control:read-only,input.ix-form-control.readonly{cursor:default}input{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;height:3.25rem;padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]),input.ix-info:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]){background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:block;position:relative;width:-moz-fit-content;width:fit-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .standaloneAppearance{box-shadow:none}:host .hidden{display:none}:host .header{display:flex;align-items:center;justify-content:center;height:2rem}:host .clock{display:flex;justify-content:center;align-items:start}:host .clock .flex{display:flex;height:100%;align-items:start}:host .clock .flex .columns{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host .clock .flex .columns .column-header{height:2.5rem;width:2.5rem;line-height:2.5rem;text-align:center;color:var(--theme-color-soft-text);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}:host .clock .flex .column-separator{display:flex;align-items:center;justify-content:center;min-height:100%;margin-top:3rem;width:0.5rem}:host .clock .element-list{list-style-type:none;overflow:auto;padding:0.0625rem;margin:-0.0625rem;max-height:15.75rem}:host .clock .element-list button{all:unset}:host .clock .element-list .element-container{box-sizing:border-box;width:2.5rem;height:2.5rem;margin-bottom:0.125rem;display:flex;justify-content:center;align-items:center;cursor:pointer;color:var(--theme-color-primary)}:host .clock .element-list .element-container:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .clock .element-list .element-container:focus-visible{box-shadow:0 0 0 1px var(--theme-color-focus-bdr)}:host .clock .element-list .selected{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);font-weight:var(--theme-font-weight-bold)}:host .clock .element-list .selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .clock .element-list .selected:focus-visible{border:0.0625rem solid var(--theme-color-inv-contrast-text)}:host .clock .element-list .element-list-padding{width:2.5rem;height:13.125rem;min-height:13.125rem}:host .clock div.element-list{scrollbar-width:none;-ms-overflow-style:none}:host .clock div.element-list::-webkit-scrollbar{display:none}:host .footer{display:flex;justify-content:space-between;gap:0.5rem;flex-wrap:wrap}:host .footer .confirm-button{margin-left:auto}:host .footer--compact{flex-direction:column;align-items:center}:host .footer--compact .confirm-button{margin-left:initial}:host .default-space{margin-left:1rem}:host .text-align{text-align:center}';
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
const LUXON_FORMAT_PATTERNS = {
  // h, hh, H, HH and various time formats that include hours
  hours: /\b[Hh]\b|HH|hh|H{3,4}|h{3,4}|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // m, mm and time formats that include minutes
  minutes: /\bm\b|mm|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // s, ss and time formats that include seconds
  seconds: /\bs\b|ss|tt|ttt|tttt|TT|TTT|TTTT/,
  // S, SSS (milliseconds), u/uu/uuu (fractional seconds), x/X (timestamps)
  milliseconds: /\bS\b|SSS|u|uu|uuu/
};
const HOUR_INTERVAL_DEFAULT = 1;
const MINUTE_INTERVAL_DEFAULT = 1;
const SECOND_INTERVAL_DEFAULT = 1;
const MILLISECOND_INTERVAL_DEFAULT = 100;
const CONFIRM_BUTTON_DEFAULT = "Confirm";
const HEADER_DEFAULT = "Time";
const FORMATTED_TIME_EMPTY = {
  hour: "",
  minute: "",
  second: "",
  millisecond: ""
};
const TimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeSelect = createEvent(this, "timeSelect", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.format = "TT";
    this.corners = "rounded";
    this.embedded = false;
    this.dateTimePickerAppearance = false;
    this.hideHeader = false;
    this.hourInterval = HOUR_INTERVAL_DEFAULT;
    this.minuteInterval = MINUTE_INTERVAL_DEFAULT;
    this.secondInterval = SECOND_INTERVAL_DEFAULT;
    this.millisecondInterval = MILLISECOND_INTERVAL_DEFAULT;
    this.i18nConfirmTime = CONFIRM_BUTTON_DEFAULT;
    this.i18nHeader = HEADER_DEFAULT;
    this.i18nHourColumnHeader = "hr";
    this.i18nMinuteColumnHeader = "min";
    this.i18nSecondColumnHeader = "sec";
    this.i18nMillisecondColumnHeader = "ms";
    this.formattedTime = FORMATTED_TIME_EMPTY;
    this.timePickerDescriptors = [];
    this.isUnitFocused = false;
    this.focusedUnit = "hour";
    this.focusedValue = 0;
    this.focusScrollAlignment = "start";
  }
  watchFormatIntervalPropHandler(newValue) {
    if (!newValue) {
      return;
    }
    this.initPicker();
    this.updateScrollPositions();
  }
  watchHourIntervalPropHandler(newValue) {
    if (Number.isInteger(newValue) && newValue >= 0 && newValue <= (this.timeRef ? 12 : 23)) {
      this.setTimePickerDescriptors();
      return;
    }
    this.printIntervalError("hour", newValue);
    this.hourInterval = HOUR_INTERVAL_DEFAULT;
  }
  watchMinuteIntervalPropHandler(newValue) {
    if (newValue >= 0 && newValue <= 59) {
      this.setTimePickerDescriptors();
      return;
    }
    this.printIntervalError("minute", newValue);
    this.minuteInterval = MINUTE_INTERVAL_DEFAULT;
  }
  watchSecondIntervalPropHandler(newValue) {
    if (newValue >= 0 && newValue <= 59) {
      this.setTimePickerDescriptors();
      return;
    }
    this.printIntervalError("second", newValue);
    this.secondInterval = SECOND_INTERVAL_DEFAULT;
  }
  watchMillisecondIntervalPropHandler(newValue) {
    if (newValue >= 0 && newValue <= 999) {
      this.setTimePickerDescriptors();
      return;
    }
    this.printIntervalError("millisecond", newValue);
    this.millisecondInterval = MILLISECOND_INTERVAL_DEFAULT;
  }
  printIntervalError(intervalName, value) {
    console.error(`Value ${value} is not valid for ${intervalName}-interval. Falling back to default.`);
  }
  watchTimePropHandler(newValue) {
    const timeFormat = DateTime.fromFormat(newValue, this.format);
    if (!timeFormat.isValid) {
      throw new Error("Format is not supported or not correct");
    }
    this._time = timeFormat;
  }
  /**
   * Get default time value
   * @returns DateTime.now() for empty state (no selection)
   */
  getDefaultTime() {
    return DateTime.now();
  }
  /**
   * Get the current time based on the wanted format
   */
  async getCurrentTime() {
    var _a;
    return (_a = this._time) === null || _a === void 0 ? void 0 : _a.toFormat(this.format);
  }
  onTimeChange() {
    const formattedTimeOld = this.formattedTime;
    this.setTimeRef();
    this.formattedTime = this.getFormattedTime();
    this.updateScrollPositions(formattedTimeOld);
  }
  componentWillLoad() {
    this.initPicker();
  }
  initPicker() {
    let parsedTime;
    if (this.time) {
      parsedTime = DateTime.fromFormat(this.time, this.format);
      if (!parsedTime.isValid) {
        console.error(`Invalid time format. The configured format does not match the format of the passed time. ${parsedTime.invalidReason}: ${parsedTime.invalidExplanation}`);
        parsedTime = this.getDefaultTime();
      }
    } else {
      parsedTime = this.getDefaultTime();
    }
    this._time = parsedTime;
    this.setTimeRef();
    this.setTimePickerDescriptors();
    this.setInitialFocusedValueAndUnit();
    this.watchHourIntervalPropHandler(this.hourInterval);
    this.watchMinuteIntervalPropHandler(this.minuteInterval);
    this.watchSecondIntervalPropHandler(this.secondInterval);
    this.watchMillisecondIntervalPropHandler(this.millisecondInterval);
  }
  componentDidLoad() {
    this.updateScrollPositions();
    this.setupVisibilityObserver();
  }
  componentDidRender() {
    if (this.isUnitFocused) {
      const elementContainer = this.getElementContainer(this.focusedUnit, this.focusedValue);
      const elementList = this.getElementList(this.focusedUnit);
      if (elementContainer) {
        elementContainer.focus({ preventScroll: true });
        if (!this.isElementVisible(elementContainer, elementList)) {
          this.scrollElementIntoView(elementContainer, elementList, this.focusScrollAlignment);
        }
      }
    }
  }
  disconnectedCallback() {
    if (this.visibilityObserver) {
      this.visibilityObserver.disconnect();
    }
  }
  handleKeyDown(event) {
    if (!this.isUnitFocused) {
      return;
    }
    let newValue = this.focusedValue;
    let shouldPreventDefault = true;
    let newValueInterval;
    switch (this.focusedUnit) {
      case "hour":
        newValueInterval = this.hourInterval;
        break;
      case "minute":
        newValueInterval = this.minuteInterval;
        break;
      case "second":
        newValueInterval = this.secondInterval;
        break;
      case "millisecond":
        newValueInterval = this.millisecondInterval;
        break;
    }
    switch (event.key) {
      case "Tab":
        shouldPreventDefault = false;
        this.isUnitFocused = false;
        break;
      case "ArrowUp":
        newValue -= newValueInterval;
        this.focusScrollAlignment = "start";
        this.updateFocusedValue(newValue);
        this.updateDescriptorFocusedValue(this.focusedUnit, this.focusedValue);
        break;
      case "ArrowDown":
        newValue += newValueInterval;
        this.focusScrollAlignment = "end";
        this.updateFocusedValue(newValue);
        this.updateDescriptorFocusedValue(this.focusedUnit, this.focusedValue);
        break;
      case "Enter":
      case " ":
        this.select(this.focusedUnit, this.focusedValue);
        break;
      default:
        return;
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }
  onUnitCellBlur(unit, event) {
    var _a;
    const relatedTarget = event.relatedTarget;
    if (relatedTarget) {
      const relatedUnit = (_a = relatedTarget.dataset.elementContainerId) === null || _a === void 0 ? void 0 : _a.split("-")[0];
      if (relatedUnit !== unit) {
        this.elementListScrollToTop(unit, Number(this.formattedTime[unit]), "smooth");
      }
    }
    this.isUnitFocused = false;
    const focusedValue = Number(this.formattedTime[unit]);
    this.updateDescriptorFocusedValue(unit, focusedValue);
  }
  onUnitCellFocus(unit, value) {
    this.isUnitFocused = true;
    this.focusedUnit = unit;
    this.focusedValue = value;
    this.updateDescriptorFocusedValue(unit, value);
  }
  getElementList(unit) {
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-element-list-id="${unit}"]`);
  }
  getElementContainer(unit, number) {
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-element-container-id="${unit}-${number}"]`);
  }
  isElementVisible(element, container) {
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return elementRect.top >= containerRect.top && elementRect.bottom <= containerRect.bottom;
  }
  scrollElementIntoView(element, container, alignment) {
    const SCROLL_BUFFER = 1;
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    if (alignment === "end") {
      container.scrollTop += elementRect.bottom - containerRect.bottom + SCROLL_BUFFER;
    } else {
      container.scrollTop += elementRect.top - containerRect.top - SCROLL_BUFFER;
    }
  }
  updateFocusedValue(value) {
    const numberArray = this.getNumberArrayForUnit(this.focusedUnit);
    const maxValue = numberArray[numberArray.length - 1];
    const minValue = numberArray[0];
    if (value > maxValue) {
      value = minValue;
      this.focusScrollAlignment = "start";
    } else if (value < minValue) {
      value = maxValue;
      this.focusScrollAlignment = "end";
    }
    this.focusedValue = value;
  }
  setInitialFocusedValueAndUnit() {
    const firstVisibleDescriptor = this.timePickerDescriptors.find((descriptor) => !descriptor.hidden);
    if (!firstVisibleDescriptor) {
      return;
    }
    const selectedValue = Number(this.formattedTime[firstVisibleDescriptor.unit]);
    const isValidSelection = firstVisibleDescriptor.numberArray.includes(selectedValue);
    this.focusedValue = isValidSelection ? selectedValue : firstVisibleDescriptor.numberArray[0];
    this.focusedUnit = firstVisibleDescriptor.unit;
  }
  setupVisibilityObserver() {
    let dropdownElement = this.hostElement;
    while (dropdownElement && dropdownElement.tagName !== "IX-DROPDOWN") {
      dropdownElement = dropdownElement.parentElement;
    }
    if (!dropdownElement) {
      return;
    }
    this.visibilityObserver = new MutationObserver((mutations) => this.mutationObserverCallback(mutations));
    this.visibilityObserver.observe(dropdownElement, {
      attributes: true,
      attributeFilter: ["class", "style"]
    });
  }
  mutationObserverCallback(mutations) {
    for (const mutation of mutations) {
      if (mutation.type !== "attributes") {
        continue;
      }
      const dropdown = mutation.target;
      if (!dropdown.classList.contains("show")) {
        if (this.time) {
          const timeFormat = DateTime.fromFormat(this.time, this.format);
          if (timeFormat.isValid) {
            this._time = DateTime.fromFormat(this.time, this.format);
            this.setInitialFocusedValueAndUnit();
          }
        }
        continue;
      }
      const elementsReady = this.areElementsRendered();
      if (!elementsReady) {
        continue;
      }
      this.updateScrollPositions();
    }
  }
  areElementsRendered() {
    var _a;
    const elementLists = (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".element-list");
    if (!elementLists || elementLists.length === 0) {
      return false;
    }
    return Array.from(elementLists).some((list) => list.offsetHeight > 0);
  }
  getFormattedTime() {
    if (!this._time) {
      return FORMATTED_TIME_EMPTY;
    }
    return {
      hour: this.timeRef !== void 0 ? this._time.toFormat("h") : this._time.toFormat("H"),
      minute: this._time.toFormat("m"),
      second: this._time.toFormat("s"),
      millisecond: this._time.toFormat("S")
    };
  }
  timeUpdate(unit, value) {
    let maxValue = DateTime.now().endOf("day").get(unit);
    if (unit === "hour") {
      if (this.timeRef === "PM") {
        value = value === 12 ? 12 : value + 12;
      } else if (this.timeRef === "AM") {
        value = value === 12 ? 0 : value;
        maxValue = 12;
      }
    }
    if (value > maxValue) {
      value = maxValue;
    } else if (value < 0) {
      value = 0;
    }
    if (!this._time) {
      this._time = DateTime.now().startOf("day");
    }
    this._time = this._time.set({
      [unit]: value
    });
    return value;
  }
  changeTimeReference(newTimeRef) {
    if (this.timeRef === newTimeRef) {
      return;
    }
    if (!this._time) {
      this._time = DateTime.now().startOf("day");
    }
    this.timeRef = newTimeRef;
    const currentHour = this._time.hour;
    if (newTimeRef === "PM" && currentHour < 12) {
      this._time = this._time.plus({ hours: 12 });
    } else if (newTimeRef === "AM" && currentHour >= 12) {
      this._time = this._time.minus({ hours: 12 });
    }
    this.timeChange.emit(this._time.toFormat(this.format));
  }
  isFormat12Hour(format) {
    let cleanFormat = "";
    let inQuote = false;
    for (let i = 0; i < format.length; i++) {
      const char = format[i];
      if (char === "'") {
        inQuote = !inQuote;
      } else if (!inQuote) {
        cleanFormat += char;
      }
    }
    return /h|a|t/.test(cleanFormat);
  }
  setTimeRef() {
    const uses12HourFormat = this.isFormat12Hour(this.format);
    if (uses12HourFormat && this._time) {
      this.timeRef = this._time.hour >= 12 ? "PM" : "AM";
    } else {
      this.timeRef = void 0;
    }
  }
  getInitialFocusedValueForUnit(unit, numberArray) {
    const selectedValue = Number(this.formattedTime[unit]);
    return numberArray.includes(selectedValue) ? selectedValue : numberArray[0];
  }
  setTimePickerDescriptors() {
    let hourNumbers = [];
    let minuteNumbers = [];
    let secondNumbers = [];
    let millisecondsNumbers = [];
    if (this.timeRef !== void 0) {
      hourNumbers = Array.from({ length: Math.ceil(12 / this.hourInterval) }, (_, i) => i * this.hourInterval + 1).filter((hour) => hour <= 12);
    } else {
      hourNumbers = Array.from({ length: Math.ceil(24 / this.hourInterval) }, (_, i) => i * this.hourInterval);
    }
    minuteNumbers = Array.from({ length: Math.ceil(60 / this.minuteInterval) }, (_, i) => i * this.minuteInterval);
    secondNumbers = Array.from({ length: Math.ceil(60 / this.secondInterval) }, (_, i) => i * this.secondInterval);
    millisecondsNumbers = Array.from({ length: Math.ceil(1e3 / this.millisecondInterval) }, (_, i) => i * this.millisecondInterval);
    this.timePickerDescriptors = [
      {
        unit: "hour",
        header: this.i18nHourColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.hours.test(this.format),
        numberArray: hourNumbers,
        focusedValue: this.getInitialFocusedValueForUnit("hour", hourNumbers)
      },
      {
        unit: "minute",
        header: this.i18nMinuteColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.minutes.test(this.format),
        numberArray: minuteNumbers,
        focusedValue: this.getInitialFocusedValueForUnit("minute", minuteNumbers)
      },
      {
        unit: "second",
        header: this.i18nSecondColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.seconds.test(this.format),
        numberArray: secondNumbers,
        focusedValue: this.getInitialFocusedValueForUnit("second", secondNumbers)
      },
      {
        unit: "millisecond",
        header: this.i18nMillisecondColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.milliseconds.test(this.format),
        numberArray: millisecondsNumbers,
        focusedValue: this.getInitialFocusedValueForUnit("millisecond", millisecondsNumbers)
      }
    ];
    this.timePickerDescriptors = this.timePickerDescriptors.filter((item) => !item.hidden);
  }
  getNumberArrayForUnit(unit) {
    const descriptor = this.timePickerDescriptors.find((descriptor2) => descriptor2.unit === unit);
    return descriptor ? descriptor.numberArray : [];
  }
  isSelected(unit, number) {
    return this.formattedTime[unit] === String(number);
  }
  select(unit, number) {
    if (this.isSelected(unit, number)) {
      return;
    }
    this.formattedTime = Object.assign(Object.assign({}, this.formattedTime), { [unit]: String(number) });
    this.timeUpdate(unit, number);
    this.elementListScrollToTop(unit, number, "smooth");
    this.timeChange.emit(this._time.toFormat(this.format));
  }
  updateDescriptorFocusedValue(unit, value) {
    const descriptorIndex = this.timePickerDescriptors.findIndex((d) => d.unit === unit);
    if (descriptorIndex !== -1) {
      this.timePickerDescriptors = [
        ...this.timePickerDescriptors.slice(0, descriptorIndex),
        Object.assign(Object.assign({}, this.timePickerDescriptors[descriptorIndex]), { focusedValue: value }),
        ...this.timePickerDescriptors.slice(descriptorIndex + 1)
      ];
    }
  }
  elementListScrollToTop(unit, number, scrollBehaviour) {
    const elementList = this.getElementList(unit);
    const elementContainer = this.getElementContainer(unit, number);
    if (elementList && elementContainer) {
      const elementListHeight = elementList.clientHeight;
      const elementContainerHeight = elementContainer.clientHeight;
      let scrollPositionOffset = 11;
      if (this.hideHeader) {
        scrollPositionOffset -= 57;
      }
      const scrollPosition = elementContainer.offsetTop - elementListHeight / 2 + elementContainerHeight - scrollPositionOffset;
      elementList.scrollTo({
        top: scrollPosition,
        behavior: scrollBehaviour
      });
    }
  }
  /**
   * Updates all scroll positions of the time picker elements
   * Updates only the elements that have changed if `formattedTimeOld` is provided
   */
  updateScrollPositions(formattedTimeOld = void 0) {
    for (const key in this.formattedTime) {
      const unitKey = key;
      if (!formattedTimeOld || this.formattedTime[unitKey] !== formattedTimeOld[unitKey]) {
        this.elementListScrollToTop(unitKey, Number(this.formattedTime[unitKey]), "instant");
      }
    }
  }
  formatUnitValue(unit, value) {
    if (unit === "millisecond") {
      return value.toString().padStart(3, "0");
    }
    return value < 10 ? `0${value}` : value.toString();
  }
  getColumnSeparator(currentIndex) {
    if (currentIndex + 1 < this.timePickerDescriptors.length) {
      const nextUnit = this.timePickerDescriptors[currentIndex + 1].unit;
      return nextUnit === "millisecond" ? "." : ":";
    }
    return ":";
  }
  getElementContainerTabIndex(number, descriptorUnit) {
    const descriptor = this.timePickerDescriptors.find((d) => d.unit === descriptorUnit);
    if (number === (descriptor === null || descriptor === void 0 ? void 0 : descriptor.focusedValue)) {
      return "0";
    }
    return "-1";
  }
  render() {
    return h(Host, { key: "09cdcc8534640d77b25879a07f14006405d3c214" }, h("ix-date-time-card", { key: "9fee033e8165f382f421ba166e043fca2b09e459", embedded: this.embedded, timePickerAppearance: true, corners: this.corners, hasFooter: !this.dateTimePickerAppearance, hideHeader: this.hideHeader }, h("div", { key: "d63dbd18d824f50a334b1861fa18bab301669b98", class: "header", slot: "header" }, h("ix-typography", { key: "fc8ce9112ecfc58fc2dc7ae607f3ce0c8cec0d01", format: "body" }, this.i18nHeader)), h("div", { key: "daaed891e32730ab89128df3ecdf77601672a52e", class: "clock" }, this.timePickerDescriptors.map((descriptor, index) => h("div", { class: "flex" }, h("div", { class: { columns: true, hidden: descriptor.hidden } }, h("div", { class: "column-header", title: descriptor.header }, descriptor.header), h("div", { "data-element-list-id": descriptor.unit, class: "element-list", tabIndex: -1 }, descriptor.numberArray.map((number) => {
      return h("button", { "data-element-container-id": `${descriptor.unit}-${number}`, class: {
        selected: this.isSelected(descriptor.unit, number),
        "element-container": true
      }, onClick: () => {
        this.select(descriptor.unit, number);
      }, onFocus: () => this.onUnitCellFocus(descriptor.unit, number), onBlur: (e) => this.onUnitCellBlur(descriptor.unit, e), tabindex: this.getElementContainerTabIndex(number, descriptor.unit), "aria-label": `${descriptor.header}: ${number}` }, this.formatUnitValue(descriptor.unit, number));
    }), h("div", { class: "element-list-padding" }))), index !== this.timePickerDescriptors.length - 1 && h("div", { class: {
      "column-separator": true,
      hidden: descriptor.hidden
    } }, this.getColumnSeparator(index)))), this.timeRef && h("div", { key: "dd5a8a76f824d09f9368514d93bab05e46daf860", class: "flex" }, h("div", { key: "9474e05bb29a9b61e4e9a12f4e809a84c27dbf62", class: "column-separator" }), h("div", { key: "c5fbda667f1f66fdabd9d684ae31ea5450660772", class: "columns" }, h("div", { key: "21e80c5a17f923484ef07b9aa07ce489aff34ff8", class: "column-header", title: "AM/PM" }), h("div", { key: "9d8bb505d8949236df1be47dd2616d109f75157f", class: "element-list", tabIndex: -1 }, h("button", { key: "f39fed9d0cd983953233e25ba2cbc88a15af5fdd", "data-am-pm-id": "AM", class: {
      selected: this.timeRef === "AM",
      "element-container": true
    }, onClick: () => this.changeTimeReference("AM"), tabindex: "0", "aria-label": "AM" }, "AM"), h("button", { key: "5e67e450cf2e467ae667b656e4966c29acdef069", "data-am-pm-id": "PM", class: {
      selected: this.timeRef === "PM",
      "element-container": true
    }, onClick: () => this.changeTimeReference("PM"), tabindex: "0", "aria-label": "PM" }, "PM"))))), h("div", { key: "588f88e82bd06bbb1bfe55af9e9de3fd39cdf7de", class: {
      footer: true,
      "footer--compact": this.timePickerDescriptors.length <= 2
    }, slot: "footer" }, h("ix-button", { key: "6b8dc896326dd57c2655b06b5a1f80e409bec677", class: "confirm-button", onClick: () => {
      var _a;
      this.timeSelect.emit((_a = this._time) === null || _a === void 0 ? void 0 : _a.toFormat(this.format));
    } }, this.i18nConfirmTime))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "format": ["watchFormatIntervalPropHandler"],
      "hourInterval": ["watchHourIntervalPropHandler"],
      "minuteInterval": ["watchMinuteIntervalPropHandler"],
      "secondInterval": ["watchSecondIntervalPropHandler"],
      "millisecondInterval": ["watchMillisecondIntervalPropHandler"],
      "time": ["watchTimePropHandler"],
      "_time": ["onTimeChange"]
    };
  }
};
__decorate([
  OnListener("keydown")
], TimePicker.prototype, "handleKeyDown", null);
TimePicker.style = timePickerCss;
export {
  TimePicker as ix_time_picker
};
