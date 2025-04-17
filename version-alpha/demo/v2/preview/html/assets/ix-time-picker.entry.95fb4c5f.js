import { r as registerInstance, c as createEvent, h, H as Host } from "./global.1f5cc68d.js";
import { D as DateTime } from "./datetime-bDicGJUN.ac1e7094.js";
import { L as iconChevronUpSmall, m as iconChevronDownSmall, M as iconChevronUp, d as iconChevronDown } from "./index-CrTP-icT.451e0ae2.js";
const timePickerCss = 'input{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;height:3.25rem;padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]),input.ix-info:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:block;position:relative;width:21rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .ix-form-control,:host .ix-form-control-plaintext{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem}:host .ix-form-control::-moz-placeholder,:host .ix-form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}:host .ix-form-control::placeholder,:host .ix-form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}:host .ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),:host .ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host .ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),:host .ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host .ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host .ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}:host .ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host .ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}:host .ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,:host .ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}:host .ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,:host .ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}:host .ix-form-control:focus-visible{color:var(--theme-input--color)}:host .ix-form-control[type=number]{text-align:right}:host .ix-form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host .ix-form-control.readonly,:host .ix-form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}:host .ix-form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}:host .ix-form-control:read-only,:host .ix-form-control[readonly],:host .ix-form-control[readOnly],:host .ix-form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}:host .ix-form-control:read-only::-moz-placeholder,:host .ix-form-control[readonly]::-moz-placeholder,:host .ix-form-control[readOnly]::-moz-placeholder,:host .ix-form-control.readonly::-moz-placeholder{color:transparent}:host .ix-form-control:-moz-read-only::placeholder{color:transparent}:host .ix-form-control:read-only::placeholder,:host .ix-form-control[readonly]::placeholder,:host .ix-form-control[readOnly]::placeholder,:host .ix-form-control.readonly::placeholder{color:transparent}:host .ix-form-control:disabled,:host .ix-form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}:host .ix-form-control:disabled::-moz-placeholder,:host .ix-form-control.disabled::-moz-placeholder{color:transparent}:host .ix-form-control:disabled::placeholder,:host .ix-form-control.disabled::placeholder{color:transparent}:host .ix-form-control-plaintext{outline:0}:host .form-group{position:relative}:host .input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}:host .input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}:host .input-wrapper>input{padding-inline-start:2.2rem}:host select.ix-form-control{padding:0 0.312rem}:host textarea.ix-form-control{padding:0.375rem 0.5rem}:host input.ix-form-control.disabled,:host input.ix-form-control:disabled{color:var(--theme-input--color--disabled)}:host input.ix-form-control:-moz-read-only{cursor:default}:host input.ix-form-control:read-only,:host input.ix-form-control.readonly{cursor:default}@media (max-width: 576px){:host .clock{padding:1.5rem 0 1rem 0}:host .header{height:1.5rem !important}}@media (min-width: 576px){:host .clock{padding:4.25rem 0 3.75rem 0}:host .header{height:2.5rem !important}}:host .header{display:flex;align-items:center;justify-content:center;height:2.5rem}:host .flex{display:flex}:host .clock{display:flex;justify-content:center;align-items:center}:host input,:host .time-reference{width:2.625rem;height:1.5rem;text-align:center;margin-top:0.25rem;margin-bottom:0.25rem;}:host input::-webkit-outer-spin-button,:host input::-webkit-inner-spin-button,:host .time-reference::-webkit-outer-spin-button,:host .time-reference::-webkit-inner-spin-button{-webkit-appearance:none;margin:0 0.3125rem}:host input[type=number],:host .time-reference[type=number]{-moz-appearance:textfield}:host .ix-form-control[type=number]{text-align:center}:host .columns{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host .column-seperator{display:flex;align-items:center;margin:0 0.25rem}:host .button{display:flex;justify-content:flex-end}:host .button.standalone{padding-top:0.5rem}:host .default-space{margin-left:1rem}:host .text-align{text-align:center}:host .hidden{display:none}:host .time-reference{margin-top:0.5rem;margin-bottom:0.5rem}';
const TimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeSelect = createEvent(this, "timeSelect", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.format = "TT";
    this.corners = "rounded";
    this.standaloneAppearance = true;
    this.showHour = true;
    this.showMinutes = true;
    this.showSeconds = true;
    this.time = DateTime.now().toFormat(this.format);
    this.textSelectTime = "Done";
    this.textTime = "Time";
  }
  watchTimePropHandler(newValue) {
    this._time = DateTime.fromFormat(newValue, this.format);
    if (!this._time.isValid) {
      throw new Error("Format is not supported or not correct");
    }
  }
  componentWillLoad() {
    this._time = DateTime.fromFormat(this.time, this.format);
    if (!this._time.isValid) {
      console.error(`Invalid time format. The configured format does not match the format of the passed time. ${this._time.invalidReason}: ${this._time.invalidExplanation}`);
      return;
    }
    this._timeRef = this.format.includes("a") ? DateTime.fromFormat(this.time, this.format).toFormat("a") : void 0;
    this.formatTime();
  }
  formatTime() {
    if (!this._time) {
      return;
    }
    const [hour, minute, second] = this._time.toFormat(this.format).split(" ")[0].split(":");
    this._formattedTime = {
      hour,
      minute,
      second
    };
  }
  onInternalTimeChange() {
    var _a, _b;
    this.timeChange.emit((_a = this._time) === null || _a === void 0 ? void 0 : _a.toFormat(this.format));
    if (this._timeRef)
      this._timeRef = (_b = this._time) === null || _b === void 0 ? void 0 : _b.toFormat("a");
  }
  timeUpdate(unit, value) {
    var _a;
    let maxValue = DateTime.now().endOf("day").get(unit);
    if (this._timeRef === "PM" && unit === "hour")
      value += 12;
    if (this._timeRef === "AM" && unit === "hour")
      maxValue = 12;
    if (value > maxValue) {
      value = maxValue;
    } else if (value < 0) {
      value = 0;
    }
    this._time = (_a = this._time) === null || _a === void 0 ? void 0 : _a.set({
      [unit]: value
    });
    return value;
  }
  changeTimeReference() {
    var _a, _b;
    this._timeRef = this._timeRef === "AM" ? "PM" : "AM";
    if (!((_a = this._time) === null || _a === void 0 ? void 0 : _a.toFormat("a").includes(this._timeRef))) {
      this._time = (_b = this._time) === null || _b === void 0 ? void 0 : _b.plus({
        hour: 12
      });
    }
  }
  async getCurrentTime() {
    var _a;
    return (_a = this._time) === null || _a === void 0 ? void 0 : _a.toFormat(this.format);
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
    return h(Host, { key: "e88bc5d942730fa74a70bfaa04ea0658be50692b" }, h("ix-date-time-card", { key: "720c83b1a2711c1e27b445d361ae5ddead39b49d", standaloneAppearance: this.standaloneAppearance, corners: this.corners }, h("div", { key: "9916f41e86163d411496bf98bc2295e579b8bbdf", class: "header", slot: "header" }, h("ix-typography", { key: "dfb71fb42d5f848c79c2cda7a0d9a9a0379c1783", format: "h5" }, this.textTime || "Time")), h("div", { key: "18354a0657a181ba08c5b861641259493d914922", class: "clock" }, timepickerInformation.map((descriptor, index) => h("div", { class: "flex" }, h("div", { class: { columns: true, hidden: descriptor.hidden } }, h("ix-icon-button", { size: "16", onClick: () => {
      var _a;
      return this._time = (_a = this._time) === null || _a === void 0 ? void 0 : _a.plus({
        [descriptor.unit]: 1
      });
    }, ghost: true, icon: iconChevronUpSmall, variant: "primary", class: "arrows" }), h("input", { class: "ix-form-control", name: descriptor.unit, type: "number", placeholder: descriptor.placeholder, value: this._formattedTime ? this._formattedTime[descriptor.unit] : "", onKeyDown: (e) => {
      var _a;
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown")
        return;
      const value = e.key === "ArrowUp" ? 1 : -1;
      this._time = (_a = this._time) === null || _a === void 0 ? void 0 : _a.plus({
        [descriptor.unit]: value
      });
      e.preventDefault();
    }, onChange: (e) => {
      let inputElement = e.target;
      inputElement.value = this.timeUpdate(descriptor.unit, +inputElement.value).toString();
    } }), h("ix-icon-button", { size: "16", onClick: () => {
      var _a;
      return this._time = (_a = this._time) === null || _a === void 0 ? void 0 : _a.minus({
        [descriptor.unit]: 1
      });
    }, ghost: true, icon: iconChevronDownSmall, variant: "primary", class: "arrows" })), index !== timepickerInformation.length - 1 && h("div", { class: {
      "column-seperator": true,
      hidden: descriptor.hidden
    } }, ":"))), h("div", { key: "a2f591181b00b98848238267e49399b66c8f6f38", class: {
      columns: true,
      "default-space": true,
      hidden: this._timeRef === void 0
    } }, h("ix-icon-button", { key: "fb3e96cf66d0a9e7b6946b901ee395185c8bae24", size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: iconChevronUp, variant: "primary", class: "arrows" }), h("div", { key: "196388fb7200fe812e5de8dcd0d45746f655e69e", class: "time-reference" }, this._timeRef), h("ix-icon-button", { key: "4930ff7fab12df13685d35fdf3cdd669d023e937", size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: iconChevronDown, variant: "primary", class: "arrows" }))), h("div", { key: "5d9b76e8f7047e9a550b5d86391f2e9f3bd0f434", class: {
      button: true,
      hidden: !this.standaloneAppearance,
      standalone: true
    } }, h("ix-button", { key: "135b0d00c830734b46bd94fc1d69e044e679edaf", onClick: () => {
      var _a;
      this.timeSelect.emit((_a = this._time) === null || _a === void 0 ? void 0 : _a.toFormat(this.format));
    } }, this.textSelectTime))));
  }
  static get watchers() {
    return {
      "time": ["watchTimePropHandler"],
      "_time": ["formatTime", "onInternalTimeChange"]
    };
  }
};
TimePicker.style = timePickerCss;
export {
  TimePicker as ix_time_picker
};
