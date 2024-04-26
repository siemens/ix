import { r as registerInstance, c as createEvent, h, H as Host } from "./index.918151cc.js";
import { D as DateTime_1 } from "./luxon-aa110584.36a0b316.js";
const timePickerCss = `label{color:var(--theme-color-soft-text);padding:2px 0px}label.label-alignment-left{padding:6px 0px}input{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover,input:hover{border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus,input:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder{color:transparent}input:disabled::placeholder{color:transparent}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea{height:3.25rem;padding:0.375rem 1.25rem 0.375rem 0.5rem}textarea{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover,textarea:hover{border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus,textarea:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder{color:transparent}textarea~.valid-feedback,textarea~.invalid-feedback,input~.valid-feedback,input~.invalid-feedback{display:none;font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}form textarea~.valid-feedback,form input~.valid-feedback{color:var(--theme-color-success)}form textarea~.invalid-feedback,form input~.invalid-feedback{color:var(--theme-color-alarm-text)}form:not([novalidate]) :invalid,form:not([novalidate]) .is-invalid,form.was-validated :invalid,form.was-validated .is-invalid{background-color:var(--theme-input-error--background);border-color:var(--theme-input-error--border-color);background-image:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='512px' height='512px' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: sketchtool 62 (101010) - https://sketch.com --%3E%3Ctitle%3Eerror%3C/title%3E%3Cdesc%3ECreated with sketchtool.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.75'%3E%3Cg id='error' fill='%23ff2640'%3E%3Cg id='error/error'%3E%3Cpath d='M256,42.6666667 C373.626371,42.6666667 469.333333,138.373627 469.333333,256 C469.333333,373.626371 373.626371,469.333333 256,469.333333 C138.373627,469.333333 42.6666667,373.626371 42.6666667,256 C42.6666667,138.373627 138.373627,42.6666667 256,42.6666667 Z M256,85.3333333 C161.559631,85.3333333 85.3333333,161.559631 85.3333333,256 C85.3333333,350.44037 161.559631,426.666667 256,426.666667 C350.44037,426.666667 426.666667,350.44037 426.666667,256 C426.666667,161.559631 350.44037,85.3333333 256,85.3333333 Z M326.248389,155.581722 L356.418278,185.751611 L286.168667,255.999667 L356.418278,326.248389 L326.248389,356.418278 L255.999667,286.168667 L185.751611,356.418278 L155.581722,326.248389 L225.829667,255.999667 L155.581722,185.751611 L185.751611,155.581722 L255.999667,225.829667 L326.248389,155.581722 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;background-position:left calc(0.375em + 0.1875rem) center;padding-right:0.75rem;padding-left:calc(1.5em + 0.75rem);background-size:18px;background-repeat:no-repeat}form:not([novalidate]) :invalid~.invalid-feedback,form:not([novalidate]) .is-invalid~.invalid-feedback,form.was-validated :invalid~.invalid-feedback,form.was-validated .is-invalid~.invalid-feedback{display:block}form:not([novalidate]) :valid~.valid-feedback,form:not([novalidate]) .is-valid~.valid-feedback,form.was-validated :valid~.valid-feedback,form.was-validated .is-valid~.valid-feedback{display:block}form:not(.was-validated) .invalid-feedback,form:not(.was-validated) .valid-feedback{display:none !important}:host{display:block;position:relative;width:22rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .form-control,:host .form-control-plaintext{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem}:host .form-control::-moz-placeholder,:host .form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}:host .form-control::placeholder,:host .form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}:host .form-control:focus-visible{color:var(--theme-input--color)}:host .form-control[type=number]{text-align:right}:host .form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host .form-control.readonly,:host .form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}:host .form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}:host .form-control:read-only,:host .form-control[readonly],:host .form-control[readOnly],:host .form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}:host .form-control:read-only::-moz-placeholder,:host .form-control[readonly]::-moz-placeholder,:host .form-control[readOnly]::-moz-placeholder,:host .form-control.readonly::-moz-placeholder{color:transparent}:host .form-control:-moz-read-only::placeholder{color:transparent}:host .form-control:read-only::placeholder,:host .form-control[readonly]::placeholder,:host .form-control[readOnly]::placeholder,:host .form-control.readonly::placeholder{color:transparent}:host .form-control:disabled,:host .form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}:host .form-control:disabled::-moz-placeholder,:host .form-control.disabled::-moz-placeholder{color:transparent}:host .form-control:disabled::placeholder,:host .form-control.disabled::placeholder{color:transparent}:host .form-control-plaintext{outline:0}:host .form-group{position:relative}:host .input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}:host .input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}:host .input-wrapper>input{padding-inline-start:2.2rem}:host select.form-control{padding:0 0.312rem}:host textarea.form-control{padding:0.375rem 0.5rem}:host input.disabled,:host input:disabled{color:var(--theme-input--color--disabled)}:host input:-moz-read-only{cursor:default}:host input:read-only,:host input.readonly{cursor:default}@media (max-width: 576px){:host .clock{padding:1.5rem 0}:host .header{height:1.5rem !important}}@media (min-width: 576px){:host .clock{padding:4.25rem 0}:host .header{height:2.5rem !important}}:host .header{display:flex;align-items:center;justify-content:center;height:2.5rem}:host .flex{display:flex}:host .clock{display:flex;justify-content:center;align-items:center}:host input,:host .time-reference{width:2.625rem;height:1.5rem;text-align:center;margin-top:0.25rem;margin-bottom:0.25rem;}:host input::-webkit-outer-spin-button,:host input::-webkit-inner-spin-button,:host .time-reference::-webkit-outer-spin-button,:host .time-reference::-webkit-inner-spin-button{-webkit-appearance:none;margin:0 0.3125rem}:host input[type=number],:host .time-reference[type=number]{-moz-appearance:textfield}:host .form-control[type=number]{text-align:center}:host .columns{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host .column-seperator{display:flex;align-items:center;margin:0 0.25rem}:host .button{display:flex;justify-content:flex-end}:host .default-space{margin-left:1rem}:host .text-align{text-align:center}:host .hidden{display:none}:host .time-reference{margin-top:0.5rem;margin-bottom:0.5rem}`;
const IxTimePickerStyle0 = timePickerCss;
const TimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeSelect = createEvent(this, "timeSelect", 7);
    this.done = createEvent(this, "done", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.format = "TT";
    this.corners = "rounded";
    this.standaloneAppearance = true;
    this.individual = true;
    this.showHour = true;
    this.showMinutes = true;
    this.showSeconds = true;
    this.time = DateTime_1.now().toFormat(this.format);
    this.showTimeReference = void 0;
    this.timeReference = void 0;
    this.textSelectTime = "Done";
    this.textTime = "Time";
    this._time = void 0;
    this._timeRef = void 0;
    this._formattedTime = void 0;
  }
  watchTimePropHandler(newValue) {
    this._time = DateTime_1.fromFormat(newValue, this.format);
    if (!this._time.isValid) {
      throw new Error("Format is not supported or not correct");
    }
  }
  componentWillLoad() {
    this._time = DateTime_1.fromFormat(this.time, this.format);
    if (!this._time.isValid) {
      console.error(`Invalid time format. The configured format does not match the format of the passed time. ${this._time.invalidReason}: ${this._time.invalidExplanation}`);
      return;
    }
    this._timeRef = this.format.includes("a") ? DateTime_1.fromFormat(this.time, this.format).toFormat("a") : void 0;
    this.formatTime();
  }
  formatTime() {
    const [hour, minute, second] = this._time.toFormat(this.format).split(" ")[0].split(":");
    this._formattedTime = {
      hour,
      minute,
      second
    };
  }
  onInternalTimeChange() {
    this.timeChange.emit(this._time.toFormat(this.format));
    if (this._timeRef)
      this._timeRef = this._time.toFormat("a");
  }
  timeUpdate(unit, value) {
    let maxValue = DateTime_1.now().endOf("day").get(unit);
    if (this._timeRef === "PM" && unit === "hour")
      value += 12;
    if (this._timeRef === "AM" && unit === "hour")
      maxValue = 12;
    if (value > maxValue) {
      value = maxValue;
    } else if (value < 0) {
      value = 0;
    }
    this._time = this._time.set({
      [unit]: value
    });
    return value;
  }
  changeTimeReference() {
    this._timeRef = this._timeRef === "AM" ? "PM" : "AM";
    if (!this._time.toFormat("a").includes(this._timeRef)) {
      this._time = this._time.plus({
        hour: 12
      });
    }
  }
  async getCurrentTime() {
    return this._time.toFormat(this.format);
  }
  render() {
    let timepickerInformation = [
      {
        unit: "hour",
        placeholder: "HH",
        hidden: !this.showHour
      },
      {
        unit: "minute",
        placeholder: "MM",
        hidden: !this.showMinutes
      },
      {
        unit: "second",
        placeholder: "SS",
        hidden: !this.showSeconds
      }
    ];
    timepickerInformation = timepickerInformation.filter((item) => !item.hidden);
    return h(Host, { key: "c09337ff6d0366929f77fe9bbdd89eb43bcc71ea" }, h("ix-date-time-card", { key: "80c29872490f5968979a802b92113377ec9df678", standaloneAppearance: this.standaloneAppearance, corners: this.corners }, h("div", { key: "35981c4cde62451368ee30fc4bcc19f894939cda", class: "header", slot: "header" }, h("ix-typography", { key: "cd88a3f06e8907419acc45cd71d9954b7365096c", variant: "default-title" }, this.textTime || "Time")), h("div", { key: "fd5d74523fd649fedac87ac0887fb643fd9795ce", class: "clock" }, timepickerInformation.map((descriptor, index) => h("div", { class: "flex" }, h("div", { class: { columns: true, hidden: descriptor.hidden } }, h("ix-icon-button", { size: "16", onClick: () => this._time = this._time.plus({
      [descriptor.unit]: 1
    }), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("input", { class: "form-control", name: descriptor.unit, type: "number", placeholder: descriptor.placeholder, value: this._formattedTime ? this._formattedTime[descriptor.unit] : null, onKeyDown: (e) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown")
        return;
      const value = e.key === "ArrowUp" ? 1 : -1;
      this._time = this._time.plus({
        [descriptor.unit]: value
      });
      e.preventDefault();
    }, onChange: (e) => {
      let inputElement = e.target;
      inputElement.value = this.timeUpdate(descriptor.unit, +inputElement.value).toString();
    } }), h("ix-icon-button", { size: "16", onClick: () => this._time = this._time.minus({
      [descriptor.unit]: 1
    }), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" })), index !== timepickerInformation.length - 1 && h("div", { class: {
      "column-seperator": true,
      hidden: descriptor.hidden
    } }, ":"))), h("div", { key: "819d9ce8cdfc94e7c4a1d2f7190587f052a9d246", class: {
      columns: true,
      "default-space": true,
      hidden: this._timeRef === void 0
    } }, h("ix-icon-button", { key: "6ec3654d6a81bb2420695dd3292677395bd6adc2", size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("div", { key: "09b1dd7076112d4dc5168a968ed0ebebaa67e69f", class: "time-reference" }, this._timeRef), h("ix-icon-button", { key: "ff24cdad6df286cc2da51958c2b51fe43f1e4fea", size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" }))), h("div", { key: "82602709c4107324d9498426cb30959fe81bacc4", class: { button: true, hidden: !this.standaloneAppearance } }, h("ix-button", { key: "64da9baed02906baad694bbe066bc355197d293e", onClick: () => {
      this.timeSelect.emit(this._time.toFormat(this.format));
      this.done.emit(this._time.toFormat(this.format));
    } }, this.textSelectTime))));
  }
  static get watchers() {
    return {
      "time": ["watchTimePropHandler"],
      "_time": ["formatTime", "onInternalTimeChange"]
    };
  }
};
TimePicker.style = IxTimePickerStyle0;
export {
  TimePicker as ix_time_picker
};
