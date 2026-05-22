import { a as registerInstance, f as forceUpdate, h, H as Host, M as Mixin, c as createEvent, g as getElement } from "./global-DX2OdaCL.js";
import { m as matchBreakpoint } from "./breakpoints-D_Hmobxf-DBbixPq4.js";
import { D as DateTime } from "./luxon-wpz4A-OQ-B58AoryR.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-Chfbghog-DFMCI9TH.js";
import { O as OnListener } from "./listener-Dk6XGheN-C6aodgky.js";
import { a as closestPassShadow } from "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
import { g as getTimePickerConstraintBounds, i as isWithinTimePickerConstraints, h as hasActiveTimePickerConstraints, t as timeOfDayRangeIntersectsInclusiveBounds } from "./time-picker-constraints-Bxf6UOLL-CUdaHz5_.js";
import "./focus-utilities-DnaItyVQ-Degzwldb.js";
const colCss = () => `:host{position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:calc(var(--ix-layout-grid-gutter) * 0.5)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}`;
const Col = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  static Breakpoints = ["", "sm", "md", "lg"];
  /**
   * Size of the column
   */
  size;
  /**
   * Size of the column for sm screens
   */
  sizeSm;
  /**
   * Size of the column for md screens
   */
  sizeMd;
  /**
   * Size of the column for lg screens
   */
  sizeLg;
  onResize() {
    forceUpdate(this);
  }
  getSize(breakpoint) {
    if (breakpoint === "") {
      return this.size;
    }
    if (breakpoint === "sm") {
      return this.sizeSm;
    }
    if (breakpoint === "md") {
      return this.sizeMd;
    }
    if (breakpoint === "lg") {
      return this.sizeLg;
    }
  }
  getColumnSize() {
    let size;
    Col.Breakpoints.forEach((breakpoint) => {
      const isMediaQueryActive = breakpoint !== "" ? matchBreakpoint(breakpoint) : true;
      if (!isMediaQueryActive) {
        return;
      }
      const currentSize = this.getSize(breakpoint);
      if (currentSize) {
        size = currentSize;
      }
    });
    return size;
  }
  getColumnSizeStyling() {
    const size = this.getColumnSize();
    if (!size) {
      return;
    }
    if (size === "auto") {
      return {
        flex: "0 0 auto",
        width: "auto",
        "max-width": "auto"
      };
    }
    const colSize = `calc(calc(${size} / var(--ix-layout-grid-columns)) * 100%)`;
    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      "max-width": `${colSize}`
    };
  }
  render() {
    return h(Host, { key: "92516eb3dfd8c82f3edd51707861615729ae0d45", style: {
      ...this.getColumnSizeStyling()
    } }, h("slot", { key: "43e5c2cf90ba0f62a01bc47f22420c9d102fd7c4" }));
  }
};
Col.style = colCss();
const layoutGridCss = () => `:host{--ix-layout-grid-gutter:24px;display:block;flex:1 1 0%;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}:host(.no-margin){padding-left:0;padding-right:0}`;
const LayoutGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * The grid will not have any horizontal padding
   */
  noMargin = false;
  /**
   * Grid gap
   */
  gap = "24";
  /**
   * Overwrite the default number of columns. Choose between 2 and 12 columns.
   */
  columns = 12;
  render() {
    return h(Host, { key: "50cde1955f0acee88563305d6b1a50b93f1eedef", class: {
      "no-margin": this.noMargin
    }, style: {
      "--ix-layout-grid-columns": `${this.columns}`,
      "--ix-layout-grid-gutter": `${this.gap}px`
    } }, h("slot", { key: "314610b470741184ebb680c233334a7364d35975" }));
  }
};
LayoutGrid.style = layoutGridCss();
const rowCss = () => `:host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}`;
const Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "88036865546dd8f57cac8099b7bef38d6420c722" }, h("slot", { key: "948ec4b33c9f03caa4feec78d76f397bd320d045" }));
  }
};
Row.style = rowCss();
function buildTimePickerColumnNumberArrays(intervals, timeRef) {
  const { hourInterval, minuteInterval, secondInterval, millisecondInterval } = intervals;
  let hourNumbers;
  if (timeRef === void 0) {
    hourNumbers = Array.from({ length: Math.ceil(24 / hourInterval) }, (_, i) => i * hourInterval);
  } else {
    hourNumbers = Array.from({ length: Math.ceil(12 / hourInterval) }, (_, i) => i * hourInterval + 1).filter((hour) => hour <= 12);
  }
  const minuteNumbers = Array.from({ length: Math.ceil(60 / minuteInterval) }, (_, i) => i * minuteInterval);
  const secondNumbers = Array.from({ length: Math.ceil(60 / secondInterval) }, (_, i) => i * secondInterval);
  const millisecondsNumbers = Array.from({ length: Math.ceil(1e3 / millisecondInterval) }, (_, i) => i * millisecondInterval);
  return { hourNumbers, minuteNumbers, secondNumbers, millisecondsNumbers };
}
function maxValueForNonHourUnit(unit) {
  switch (unit) {
    case "minute":
    case "second":
      return 59;
    case "millisecond":
      return 999;
    case "hour":
      return 23;
  }
}
function mapHourColumnValue(rawValue, timeRef) {
  if (timeRef === "PM") {
    return {
      value: rawValue === 12 ? 12 : rawValue + 12,
      maxValue: 23
    };
  }
  if (timeRef === "AM") {
    return {
      value: rawValue === 12 ? 0 : rawValue,
      maxValue: 11
    };
  }
  return { value: rawValue, maxValue: 23 };
}
function computeTimeWithRawUnitValue(baseTime, unit, rawValue, timeRef) {
  let value;
  let maxValue;
  if (unit === "hour") {
    const mapped = mapHourColumnValue(rawValue, timeRef);
    value = mapped.value;
    maxValue = mapped.maxValue;
  } else {
    value = rawValue;
    maxValue = maxValueForNonHourUnit(unit);
  }
  if (value > maxValue) {
    value = maxValue;
  } else if (value < 0) {
    value = 0;
  }
  try {
    return baseTime.set({
      [unit]: value
    });
  } catch {
    return null;
  }
}
function formatTimePickerUnitValue(unit, value) {
  if (unit === "millisecond") {
    return value.toString().padStart(3, "0");
  }
  return value < 10 ? `0${value}` : value.toString();
}
function getTimePickerColumnSeparator(currentIndex, descriptors) {
  if (currentIndex + 1 < descriptors.length) {
    const nextUnit = descriptors[currentIndex + 1].unit;
    return nextUnit === "millisecond" ? "." : ":";
  }
  return ":";
}
const LUXON_FORMAT_PATTERNS = {
  // h, hh, H, HH and various time formats that include hours
  hours: /\b[Hh]\b|HH|hh|H{3,4}|h{3,4}|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // m, mm and time formats that include minutes
  minutes: /\bm\b|mm|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // s, ss and time formats that include seconds
  seconds: /\bs\b|ss|tt|ttt|tttt|TT|TTT|TTTT/,
  // S–SSS, u–uuu (fractional seconds); ttt/tttt/TTT/TTTT include sub-second parts
  milliseconds: /S{1,3}|u{1,3}|[tT]{3,4}/
};
function isFormat12Hour(format) {
  let cleanFormat = "";
  let inQuote = false;
  for (const char of format) {
    if (char === "'") {
      inQuote = !inQuote;
    } else if (!inQuote) {
      cleanFormat += char;
    }
  }
  return /[hat]/.test(cleanFormat);
}
function getCandidateRangeForUnit(unit, candidate) {
  if (!candidate.isValid) {
    return null;
  }
  if (unit === "hour") {
    return {
      start: candidate.startOf("hour"),
      end: candidate.endOf("hour")
    };
  }
  if (unit === "minute") {
    return {
      start: candidate.set({ second: 0, millisecond: 0 }),
      end: candidate.set({ second: 59, millisecond: 999 })
    };
  }
  if (unit === "second") {
    return {
      start: candidate.set({ millisecond: 0 }),
      end: candidate.set({ millisecond: 999 })
    };
  }
  return {
    start: candidate,
    end: candidate
  };
}
function isSelectableForUnitWithinBounds(unit, candidate, bounds) {
  const candidateRange = getCandidateRangeForUnit(unit, candidate);
  if (!candidateRange) {
    return false;
  }
  const { min, max } = bounds;
  const { start, end } = candidateRange;
  if (min && end < min) {
    return false;
  }
  if (max && start > max) {
    return false;
  }
  return true;
}
function findNextSelectableRingValue(values, currentValue, direction, canSelect) {
  if (!values.length) {
    return null;
  }
  let idx = values.indexOf(currentValue);
  if (idx === -1) {
    idx = direction === 1 ? -1 : values.length;
  }
  for (const _ of values) {
    idx = (idx + direction + values.length) % values.length;
    const candidate = values[idx];
    if (canSelect(candidate)) {
      return candidate;
    }
  }
  return null;
}
const timePickerCss = () => `.ix-form-control,.ix-form-control-plaintext{color:var(--theme-input--color);border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ix-form-control::-moz-placeholder,.ix-form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}.ix-form-control::placeholder,.ix-form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover,.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover,.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.ix-form-control:focus-visible{color:var(--theme-input--color)}.ix-form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}.ix-form-control[type=number]{text-align:right}.ix-form-control.readonly,.ix-form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}.ix-form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.ix-form-control:read-only,.ix-form-control[readonly],.ix-form-control[readOnly],.ix-form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.ix-form-control:read-only::-moz-placeholder,.ix-form-control[readonly]::-moz-placeholder,.ix-form-control[readOnly]::-moz-placeholder,.ix-form-control.readonly::-moz-placeholder{color:transparent}.ix-form-control:-moz-read-only::placeholder{color:transparent}.ix-form-control:read-only::placeholder,.ix-form-control[readonly]::placeholder,.ix-form-control[readOnly]::placeholder,.ix-form-control.readonly::placeholder{color:transparent}.ix-form-control:disabled,.ix-form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}.ix-form-control:disabled::-moz-placeholder,.ix-form-control.disabled::-moz-placeholder{color:transparent}.ix-form-control:disabled::placeholder,.ix-form-control.disabled::placeholder{color:transparent}.ix-form-control-plaintext{outline:0}.form-group{position:relative}.input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}.input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}.input-wrapper>input{padding-inline-start:2.2rem}select.ix-form-control{padding:0 0.312rem}textarea.ix-form-control{padding:0.375rem 0.5rem}input.ix-form-control.disabled,input.ix-form-control:disabled{color:var(--theme-input--color--disabled)}input.ix-form-control:-moz-read-only{cursor:default}input.ix-form-control:read-only,input.ix-form-control.readonly{cursor:default}input{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea:not([rows]){height:3.25rem}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--theme-input--background--warning);border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--theme-input--background--warning--hover);border-color:var(--theme-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--theme-input--background--invalid--hover);border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:block;position:relative;width:-moz-fit-content;width:fit-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .standaloneAppearance{box-shadow:none}:host .hidden{display:none}:host .header{display:flex;align-items:center;justify-content:center;height:2rem}:host .clock{display:flex;justify-content:center;align-items:start}:host .clock .flex{display:flex;height:100%;align-items:start}:host .clock .flex .columns{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host .clock .flex .columns .column-header{height:2.5rem;width:2.5rem;line-height:2.5rem;text-align:center;color:var(--theme-color-soft-text);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}:host .clock .flex .column-separator{display:flex;align-items:center;justify-content:center;min-height:100%;margin-top:3rem;width:0.5rem}:host .clock .element-list{list-style-type:none;overflow:auto;padding:0.0625rem;margin:-0.0625rem;max-height:15.75rem}:host .clock .element-list button{all:unset}:host .clock .element-list .element-container{box-sizing:border-box;width:2.5rem;height:2.5rem;margin-bottom:0.125rem;display:flex;justify-content:center;align-items:center;cursor:pointer;color:var(--theme-color-primary)}:host .clock .element-list .element-container:hover:not(.disabled){background-color:var(--theme-datepicker-day--background--hover)}:host .clock .element-list .element-container:focus-visible{box-shadow:0 0 0 1px var(--theme-color-focus-bdr)}:host .clock .element-list .element-container.disabled{cursor:default}:host .clock .element-list .element-container.disabled:not(.selected){color:var(--theme-color-weak-text)}:host .clock .element-list .element-container:not(.selected).disabled:hover,:host .clock .element-list .element-container:not(.selected).disabled:active{background-color:transparent}:host .clock .element-list .element-container.selected{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);font-weight:var(--theme-font-weight-bold)}:host .clock .element-list .element-container.selected:hover:not(.disabled){background-color:var(--theme-datepicker-day--background--selected-hover)}:host .clock .element-list .element-container.selected:focus-visible{border:0.0625rem solid var(--theme-color-inv-contrast-text)}:host .clock .element-list .element-container.selected.disabled{background-color:var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .clock .element-list .element-list-padding{width:2.5rem;height:13.125rem;min-height:13.125rem}:host .clock div.element-list{scrollbar-width:none;-ms-overflow-style:none}:host .clock div.element-list::-webkit-scrollbar{display:none}:host .footer{display:flex;justify-content:space-between;gap:0.5rem;flex-wrap:wrap}:host .footer .confirm-button{margin-left:auto}:host .footer--compact{flex-direction:column;align-items:center}:host .footer--compact .confirm-button{margin-left:initial}:host .default-space{margin-left:1rem}:host .text-align{text-align:center}`;
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
const TimePicker = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.timeSelect = createEvent(this, "timeSelect", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Format of time string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   * Note: Formats that combine date and time (like f or F) are not supported. Timestamp tokens x and X are not supported either.
   */
  format = "TT";
  watchFormatIntervalPropHandler(newValue) {
    if (!newValue) {
      return;
    }
    this.initPicker();
    this.updateScrollPositions();
  }
  /**
   * Corner style.
   */
  corners = "rounded";
  /**
   * Embedded style (for use in other components).
   */
  embedded = false;
  /**
   * @internal Temporary prop needed until datetime-picker is reworked for new design.
   */
  dateTimePickerAppearance = false;
  /**
   * Hides the header of the picker.
   *
   * @since 3.2.0
   */
  hideHeader = false;
  /**
   * Interval for hour selection.
   *
   * @since 3.2.0
   */
  hourInterval = HOUR_INTERVAL_DEFAULT;
  watchHourIntervalPropHandler(newValue) {
    if (Number.isInteger(newValue) && newValue >= 0 && newValue <= (this.timeRef ? 12 : 23)) {
      this.setTimePickerDescriptors();
      return;
    }
    this.printIntervalError("hour", newValue);
    this.hourInterval = HOUR_INTERVAL_DEFAULT;
  }
  /**
   * Interval for minute selection.
   *
   * @since 3.2.0
   */
  minuteInterval = MINUTE_INTERVAL_DEFAULT;
  watchMinuteIntervalPropHandler(newValue) {
    if (newValue >= 0 && newValue <= 59) {
      this.setTimePickerDescriptors();
      return;
    }
    this.printIntervalError("minute", newValue);
    this.minuteInterval = MINUTE_INTERVAL_DEFAULT;
  }
  /**
   * Interval for second selection.
   *
   * @since 3.2.0
   */
  secondInterval = SECOND_INTERVAL_DEFAULT;
  watchSecondIntervalPropHandler(newValue) {
    if (newValue >= 0 && newValue <= 59) {
      this.setTimePickerDescriptors();
      return;
    }
    this.printIntervalError("second", newValue);
    this.secondInterval = SECOND_INTERVAL_DEFAULT;
  }
  /**
   * Interval for millisecond selection.
   *
   * @since 3.2.0
   */
  millisecondInterval = MILLISECOND_INTERVAL_DEFAULT;
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
  warnIfConstraintTimeInvalid(prop, value, omitUnparsableWarning) {
    const trimmed = value?.trim();
    if (!trimmed) {
      return;
    }
    const parsed = DateTime.fromFormat(trimmed, this.format);
    if (parsed.isValid) {
      return;
    }
    if (omitUnparsableWarning) {
      return;
    }
    const detail = [parsed.invalidReason, parsed.invalidExplanation].filter(Boolean).join(": ");
    console.warn(`[ix-time-picker] ${prop}="${trimmed}" does not match format "${this.format}". The constraint is ignored until the value matches \`format\`.` + (detail ? ` (${detail})` : ""));
  }
  warnIfConstraintRangeInverted(minValue, maxValue) {
    const minTrimmed = minValue?.trim();
    const maxTrimmed = maxValue?.trim();
    if (!minTrimmed || !maxTrimmed) {
      return;
    }
    const minParsed = DateTime.fromFormat(minTrimmed, this.format);
    const maxParsed = DateTime.fromFormat(maxTrimmed, this.format);
    if (!minParsed.isValid || !maxParsed.isValid) {
      return;
    }
    if (minParsed > maxParsed) {
      console.warn(`[ix-time-picker] minTime="${minTrimmed}" is later than maxTime="${maxTrimmed}" for format "${this.format}". Both constraints are ignored.`);
    }
  }
  warnConstraintTimesIfInvalid(options) {
    const omit = options?.omitUnparsableConstraintWarnings ?? false;
    this.warnIfConstraintTimeInvalid("minTime", this.minTime, omit);
    this.warnIfConstraintTimeInvalid("maxTime", this.maxTime, omit);
    this.warnIfConstraintRangeInverted(this.minTime, this.maxTime);
  }
  /**
   * Selected time value.
   * Format has to match the `format` property.
   */
  time;
  watchTimePropHandler(newValue) {
    if (newValue === void 0 || newValue === "") {
      this._time = this.getDefaultTime();
      return;
    }
    const timeFormat = DateTime.fromFormat(newValue, this.format);
    if (!timeFormat.isValid) {
      throw new Error("Format is not supported or not correct");
    }
    this._time = timeFormat;
  }
  /** Earliest selectable time (`format` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0 */
  minTime;
  /** Latest selectable time (`format` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0 */
  maxTime;
  watchMinTimePropHandler() {
    this.warnConstraintTimesIfInvalid();
    this.syncKeyboardFocusWithConstraints();
  }
  watchMaxTimePropHandler() {
    this.warnConstraintTimesIfInvalid();
    this.syncKeyboardFocusWithConstraints();
  }
  /**
   * Get default time value
   * @returns DateTime.now() for empty state (no selection)
   */
  getDefaultTime() {
    return DateTime.now();
  }
  /**
   * Text of the time confirm button.
   */
  i18nConfirmTime = CONFIRM_BUTTON_DEFAULT;
  /**
   * Text for the top header.
   */
  i18nHeader = HEADER_DEFAULT;
  /**
   * Text for the hour column header.
   */
  i18nHourColumnHeader = "hr";
  /**
   * Text for the minute column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nMinuteColumnHeader = "min";
  /**
   * Text for the second column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nSecondColumnHeader = "sec";
  /**
   * Text for the millisecond column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nMillisecondColumnHeader = "ms";
  /**
   * Time event. Emitted when the user confirms the selected time.
   */
  timeSelect;
  /**
   * Time change event. Emitted when the selected time changes while interacting with the picker.
   */
  timeChange;
  /**
   * Get the current time based on the wanted format
   */
  async getCurrentTime() {
    return this._time?.toFormat(this.format);
  }
  _time;
  onTimeChange() {
    const formattedTimeOld = this.formattedTime;
    this.setTimeRef();
    this.formattedTime = this.getFormattedTime();
    this.updateScrollPositions(formattedTimeOld);
  }
  timeRef;
  formattedTime = FORMATTED_TIME_EMPTY;
  timePickerDescriptors = [];
  isUnitFocused = false;
  focusedUnit = "hour";
  focusedValue = 0;
  visibilityObserver;
  focusScrollAlignment = "start";
  componentWillLoad() {
    this.initPicker();
  }
  initPicker() {
    let parsedTime;
    let timePropDoesNotMatchFormat = false;
    if (this.time) {
      parsedTime = DateTime.fromFormat(this.time, this.format);
      if (!parsedTime.isValid) {
        timePropDoesNotMatchFormat = true;
        console.error(`Invalid time format. The configured format does not match the format of the passed time. ${parsedTime.invalidReason}: ${parsedTime.invalidExplanation}`);
        parsedTime = this.getDefaultTime();
      }
    } else {
      parsedTime = this.getDefaultTime();
    }
    this._time = parsedTime;
    this.setTimeRef();
    this.formattedTime = this.getFormattedTime();
    this.setTimePickerDescriptors();
    this.setInitialFocusedValueAndUnit();
    this.watchHourIntervalPropHandler(this.hourInterval);
    this.watchMinuteIntervalPropHandler(this.minuteInterval);
    this.watchSecondIntervalPropHandler(this.secondInterval);
    this.watchMillisecondIntervalPropHandler(this.millisecondInterval);
    this.warnConstraintTimesIfInvalid({
      omitUnparsableConstraintWarnings: timePropDoesNotMatchFormat
    });
  }
  componentDidLoad() {
    super.componentDidLoad?.();
    this.updateScrollPositions();
    this.setupVisibilityObserver();
  }
  componentDidRender() {
    if (!this.isUnitFocused) {
      return;
    }
    const elementContainer = this.getElementContainer(this.focusedUnit, this.focusedValue);
    const elementList = this.getElementList(this.focusedUnit);
    if (!elementContainer) {
      return;
    }
    if (hasKeyboardMode()) {
      const active = this.hostElement.shadowRoot?.activeElement;
      if (active !== elementContainer) {
        elementContainer.focus({ preventScroll: true });
      }
    }
    if (!this.isElementVisible(elementContainer, elementList)) {
      this.scrollElementIntoView(elementContainer, elementList, this.focusScrollAlignment);
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
    let shouldPreventDefault = true;
    switch (event.key) {
      case "Tab":
        shouldPreventDefault = false;
        this.isUnitFocused = false;
        break;
      case "ArrowUp":
        this.focusScrollAlignment = "start";
        this.stepFocusedValue(-1);
        break;
      case "ArrowDown":
        this.focusScrollAlignment = "end";
        this.stepFocusedValue(1);
        break;
      case "Enter":
      case " ": {
        const { bounds } = this.getUnitSelectionContext();
        const base = this.buildCandidateBaseBeforeUnit(this.focusedUnit);
        if (this.canSelectUnitValue(this.focusedUnit, this.focusedValue, bounds, base)) {
          this.select(this.focusedUnit, this.focusedValue);
        }
        break;
      }
      default:
        return;
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }
  onUnitCellBlur(unit, event) {
    const relatedTarget = event.relatedTarget;
    const relatedUnit = relatedTarget?.dataset?.elementContainerId?.split("-")[0];
    const movingWithinSameColumn = relatedUnit === unit;
    if (relatedTarget && !movingWithinSameColumn) {
      if (relatedUnit !== unit) {
        this.elementListScrollToTop(unit, Number(this.formattedTime[unit]), "smooth");
      }
    }
    if (movingWithinSameColumn) {
      return;
    }
    this.isUnitFocused = false;
    const focusedValue = this.resolvePreservedFocusedValueOnColumnBlur(unit);
    this.focusedValue = focusedValue;
    this.updateDescriptorFocusedValue(unit, focusedValue);
  }
  onUnitCellFocus(unit, value) {
    this.isUnitFocused = true;
    this.focusedUnit = unit;
    this.focusedValue = value;
    this.updateDescriptorFocusedValue(unit, value);
  }
  getElementList(unit) {
    return this.hostElement.shadowRoot?.querySelector(`[data-element-list-id="${unit}"]`);
  }
  getElementContainer(unit, number) {
    return this.hostElement.shadowRoot?.querySelector(`[data-element-container-id="${unit}-${number}"]`);
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
  setInitialFocusedValueAndUnit() {
    const firstVisibleDescriptor = this.timePickerDescriptors.find((descriptor) => !descriptor.hidden);
    if (!firstVisibleDescriptor) {
      return;
    }
    this.focusedValue = this.getConstrainedFocusedValueForUnit(firstVisibleDescriptor.unit, firstVisibleDescriptor.numberArray);
    this.focusedUnit = firstVisibleDescriptor.unit;
  }
  setupVisibilityObserver() {
    const dropdown = closestPassShadow(this.hostElement, "ix-dropdown");
    if (!dropdown) {
      return;
    }
    this.visibilityObserver = new MutationObserver((mutations) => this.mutationObserverCallback(mutations));
    this.visibilityObserver.observe(dropdown, {
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
    const elementLists = this.hostElement.shadowRoot?.querySelectorAll(".element-list");
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
  changeTimeReference(newTimeRef) {
    if (this.timeRef === newTimeRef) {
      return;
    }
    if (!this._time) {
      this._time = DateTime.now().startOf("day");
    }
    const previousTime = this._time;
    const previousRef = this.timeRef;
    this.timeRef = newTimeRef;
    const currentHour = this._time.hour;
    if (newTimeRef === "PM" && currentHour < 12) {
      this._time = this._time.plus({ hours: 12 });
    } else if (newTimeRef === "AM" && currentHour >= 12) {
      this._time = this._time.minus({ hours: 12 });
    }
    if (!this.isWithinTimeConstraints(this._time)) {
      this._time = previousTime;
      this.timeRef = previousRef;
      return;
    }
    this.timeChange.emit(this._time.toFormat(this.format));
  }
  /** `_time` or “now” (constraints, AM/PM, confirm). */
  referenceOrNow() {
    return this._time ?? DateTime.now();
  }
  setTimeRef() {
    const uses12HourFormat = isFormat12Hour(this.format);
    if (!uses12HourFormat) {
      this.timeRef = void 0;
      return;
    }
    const clock = this.referenceOrNow();
    this.timeRef = clock.hour >= 12 ? "PM" : "AM";
  }
  getConstraintBounds(referenceClock) {
    const baseDay = (referenceClock ?? this.referenceOrNow()).startOf("day");
    return getTimePickerConstraintBounds(this.minTime, this.maxTime, this.format, baseDay);
  }
  /** Bounds and `selectionBase` from {@link referenceOrNow}. */
  getUnitSelectionContext() {
    const referenceClock = this.referenceOrNow();
    return {
      bounds: this.getConstraintBounds(referenceClock),
      selectionBase: this._time ?? referenceClock.startOf("day")
    };
  }
  isWithinTimeConstraints(candidate) {
    const { min, max } = this.getConstraintBounds();
    return isWithinTimePickerConstraints(candidate, min, max);
  }
  canSelectUnitValue(unit, rawValue, bounds, selectionBase) {
    const base = selectionBase ?? this._time ?? DateTime.now().startOf("day");
    const effectiveBounds = bounds ?? this.getConstraintBounds();
    if (unit === "hour" && hasActiveTimePickerConstraints(effectiveBounds.min, effectiveBounds.max)) {
      const dayStart = base.startOf("day");
      const hourStart = computeTimeWithRawUnitValue(dayStart, "hour", rawValue, this.timeRef);
      if (!hourStart) {
        return false;
      }
      const hourEnd = hourStart.set({
        minute: 59,
        second: 59,
        millisecond: 999
      });
      return timeOfDayRangeIntersectsInclusiveBounds(hourStart, hourEnd, effectiveBounds.min, effectiveBounds.max);
    }
    const candidate = computeTimeWithRawUnitValue(base, unit, rawValue, this.timeRef);
    if (!candidate) {
      return false;
    }
    if (bounds) {
      return this.isSelectableForUnitWithinBounds(unit, candidate, bounds);
    }
    return this.isWithinTimeConstraints(candidate);
  }
  isSelectableForUnitWithinBounds(unit, candidate, bounds) {
    return isSelectableForUnitWithinBounds(unit, candidate, bounds);
  }
  /** Provisional `unit` for cross-column base: roving cell, earlier descriptors, else displayed digits. */
  getProvisionalRawValue(unit) {
    if (this.focusedUnit === unit) {
      return this.focusedValue;
    }
    const order = this.timePickerDescriptors.map((d) => d.unit);
    const iFocused = order.indexOf(this.focusedUnit);
    const iUnit = order.indexOf(unit);
    if (iUnit !== -1 && iFocused !== -1 && iUnit < iFocused) {
      const d = this.timePickerDescriptors.find((x) => x.unit === unit);
      if (d) {
        return d.focusedValue;
      }
    }
    const raw = this.formattedTime?.[unit];
    if (raw === "" || raw === void 0) {
      return 0;
    }
    return Number(raw);
  }
  /** Base time for `canSelect`/`select` on `targetUnit`: committed hour; mid-columns via {@link getProvisionalRawValue}. */
  buildCandidateBaseBeforeUnit(targetUnit) {
    const { selectionBase } = this.getUnitSelectionContext();
    const order = this.timePickerDescriptors.map((d) => d.unit);
    const targetIndex = order.indexOf(targetUnit);
    if (targetIndex <= 0) {
      return selectionBase;
    }
    let base = this._time ?? selectionBase;
    for (let i = 1; i < targetIndex; i++) {
      const unit = order[i];
      if (unit === void 0) {
        continue;
      }
      const raw = this.getProvisionalRawValue(unit);
      const next = computeTimeWithRawUnitValue(base, unit, raw, this.timeRef);
      if (next) {
        base = next;
      }
    }
    return base;
  }
  getConstrainedFocusedValueForUnitWithBase(unit, numberArray, baseBeforeUnit) {
    const { bounds } = this.getUnitSelectionContext();
    const pickFirstSelectable = () => {
      const found = numberArray.find((n) => this.canSelectUnitValue(unit, n, bounds, baseBeforeUnit));
      return found ?? null;
    };
    const selected = Number(this.formattedTime[unit]);
    if (!numberArray.includes(selected)) {
      return pickFirstSelectable() ?? numberArray[0];
    }
    if (this.canSelectUnitValue(unit, selected, bounds, baseBeforeUnit)) {
      return selected;
    }
    return pickFirstSelectable() ?? numberArray[0];
  }
  getConstrainedFocusedValueForUnit(unit, numberArray) {
    return this.getConstrainedFocusedValueForUnitWithBase(unit, numberArray, this.buildCandidateBaseBeforeUnit(unit));
  }
  resolvePreservedFocusedValueOnColumnBlur(unit) {
    const arr = this.getNumberArrayForUnit(unit);
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const current = this.focusedValue;
    if (arr.includes(current) && this.canSelectUnitValue(unit, current, bounds, base)) {
      return current;
    }
    return this.getConstrainedFocusedValueForUnit(unit, arr);
  }
  syncKeyboardFocusWithConstraints() {
    if (!this.timePickerDescriptors.length) {
      return;
    }
    for (const d of this.timePickerDescriptors) {
      const next = this.getConstrainedFocusedValueForUnit(d.unit, d.numberArray);
      if (next !== d.focusedValue) {
        this.updateDescriptorFocusedValue(d.unit, next);
      }
    }
    const arr = this.getNumberArrayForUnit(this.focusedUnit);
    if (arr.length) {
      const nextFocused = this.getConstrainedFocusedValueForUnit(this.focusedUnit, arr);
      if (nextFocused !== this.focusedValue) {
        this.focusedValue = nextFocused;
      }
    }
  }
  findFirstSelectableInUnit(unit) {
    const arr = this.getNumberArrayForUnit(unit);
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const found = arr.find((n) => this.canSelectUnitValue(unit, n, bounds, base));
    return found ?? null;
  }
  getColumnTabStopValue(unit) {
    const d = this.timePickerDescriptors.find((x) => x.unit === unit);
    const arr = d?.numberArray ?? [];
    if (!d || !arr.length) {
      return null;
    }
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const candidate = d.focusedValue;
    if (arr.includes(candidate) && this.canSelectUnitValue(unit, candidate, bounds, base)) {
      return candidate;
    }
    return this.findFirstSelectableInUnit(unit);
  }
  stepFocusedValue(direction) {
    const unit = this.focusedUnit;
    const arr = this.getNumberArrayForUnit(unit);
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const next = findNextSelectableRingValue(arr, this.focusedValue, direction, (candidate) => this.canSelectUnitValue(unit, candidate, bounds, base));
    if (next === null) {
      return;
    }
    this.focusedValue = next;
    this.updateDescriptorFocusedValue(unit, next);
  }
  isConfirmDisabled() {
    const referenceClock = this.referenceOrNow();
    const { min, max } = this.getConstraintBounds(referenceClock);
    if (!hasActiveTimePickerConstraints(min, max)) {
      return false;
    }
    return !isWithinTimePickerConstraints(referenceClock, min, max);
  }
  setTimePickerDescriptors() {
    const { hourNumbers, minuteNumbers, secondNumbers, millisecondsNumbers } = buildTimePickerColumnNumberArrays({
      hourInterval: this.hourInterval,
      minuteInterval: this.minuteInterval,
      secondInterval: this.secondInterval,
      millisecondInterval: this.millisecondInterval
    }, this.timeRef);
    const { selectionBase } = this.getUnitSelectionContext();
    const columns = [
      {
        unit: "hour",
        header: this.i18nHourColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.hours.test(this.format),
        numberArray: hourNumbers
      },
      {
        unit: "minute",
        header: this.i18nMinuteColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.minutes.test(this.format),
        numberArray: minuteNumbers
      },
      {
        unit: "second",
        header: this.i18nSecondColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.seconds.test(this.format),
        numberArray: secondNumbers
      },
      {
        unit: "millisecond",
        header: this.i18nMillisecondColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.milliseconds.test(this.format),
        numberArray: millisecondsNumbers
      }
    ];
    let base = selectionBase;
    const descriptors = [];
    for (const col of columns) {
      if (col.hidden) {
        continue;
      }
      const focusedValue = this.getConstrainedFocusedValueForUnitWithBase(col.unit, col.numberArray, base);
      descriptors.push({
        unit: col.unit,
        header: col.header,
        hidden: false,
        numberArray: col.numberArray,
        focusedValue
      });
      const next = computeTimeWithRawUnitValue(base, col.unit, focusedValue, this.timeRef);
      if (next) {
        base = next;
      }
    }
    this.timePickerDescriptors = descriptors;
  }
  getNumberArrayForUnit(unit) {
    const descriptor = this.timePickerDescriptors.find((descriptor2) => descriptor2.unit === unit);
    return descriptor ? descriptor.numberArray : [];
  }
  isSelected(unit, number) {
    return this.formattedTime[unit] === String(number);
  }
  /** Roving tabindex: one tab stop per column; active column only the focused cell has `tabindex=0`. */
  getUnitCellTabIndex(unit, number) {
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const cellIsSelectable = this.canSelectUnitValue(unit, number, bounds, base);
    if (!cellIsSelectable) {
      return -1;
    }
    if (this.isUnitFocused && this.focusedUnit === unit) {
      return this.focusedValue === number ? 0 : -1;
    }
    const stop = this.getColumnTabStopValue(unit);
    if (stop === null) {
      return -1;
    }
    return stop === number ? 0 : -1;
  }
  select(unit, number) {
    if (this.isSelected(unit, number)) {
      return;
    }
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    if (!this.canSelectUnitValue(unit, number, bounds, base)) {
      return;
    }
    const candidate = computeTimeWithRawUnitValue(base, unit, number, this.timeRef);
    if (!candidate) {
      return;
    }
    if (this._time && candidate.toMillis() === this._time.toMillis()) {
      return;
    }
    this._time = candidate;
    this.elementListScrollToTop(unit, number, "smooth");
    this.timeChange.emit(this._time.toFormat(this.format));
  }
  updateDescriptorFocusedValue(unit, value) {
    const descriptorIndex = this.timePickerDescriptors.findIndex((d) => d.unit === unit);
    if (descriptorIndex !== -1) {
      this.timePickerDescriptors = [
        ...this.timePickerDescriptors.slice(0, descriptorIndex),
        {
          ...this.timePickerDescriptors[descriptorIndex],
          focusedValue: value
        },
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
    return formatTimePickerUnitValue(unit, value);
  }
  getColumnSeparator(currentIndex) {
    return getTimePickerColumnSeparator(currentIndex, this.timePickerDescriptors);
  }
  render() {
    const { bounds } = this.getUnitSelectionContext();
    return h(Host, { key: "b5247e95a011fb94c6cf87e390d7c84ea39e9bf2" }, h("ix-date-time-card", { key: "a67ccb3ca466110b8f419022d40a9beb89f5b227", embedded: this.embedded, timePickerAppearance: true, corners: this.corners, hasFooter: !this.dateTimePickerAppearance, hideHeader: this.hideHeader }, h("div", { key: "8fc1eb754f355c65015ba3aa9f5aee199405dfc4", class: "header", slot: "header" }, h("ix-typography", { key: "f36c2257637461f4fd8867829d3340d42225149d", format: "body" }, this.i18nHeader)), h("div", { key: "9fc0eca4272176203d91aeb6cbcf5a6a3a842fbb", class: "clock" }, this.timePickerDescriptors.map((descriptor, index) => {
      return h("div", { class: "flex" }, h("div", { class: { columns: true, hidden: descriptor.hidden }, hidden: descriptor.hidden }, h("div", { class: "column-header", title: descriptor.header }, descriptor.header), h("div", { role: "listbox", "aria-label": descriptor.header, "data-element-list-id": descriptor.unit, class: "element-list", tabindex: -1 }, descriptor.numberArray.map((number) => {
        const cellTabIndex = this.getUnitCellTabIndex(descriptor.unit, number);
        const disabled = !this.canSelectUnitValue(descriptor.unit, number, bounds, this.buildCandidateBaseBeforeUnit(descriptor.unit));
        const selected = this.isSelected(descriptor.unit, number);
        return h("button", { role: "option", "aria-selected": selected ? "true" : "false", "data-element-container-id": `${descriptor.unit}-${number}`, class: {
          selected,
          "element-container": true,
          disabled
        }, disabled, onClick: () => {
          this.select(descriptor.unit, number);
        }, onFocus: () => this.onUnitCellFocus(descriptor.unit, number), onBlur: (e) => this.onUnitCellBlur(descriptor.unit, e), "aria-label": `${descriptor.header}: ${number}`, tabindex: cellTabIndex }, this.formatUnitValue(descriptor.unit, number));
      }), h("div", { class: "element-list-padding" }))), index !== this.timePickerDescriptors.length - 1 && h("div", { class: {
        "column-separator": true,
        hidden: descriptor.hidden
      } }, this.getColumnSeparator(index)));
    }), this.timeRef && h("div", { key: "6e344cb59db3d52bfe2e1f57354f140170181c86", class: "flex" }, h("div", { key: "0b5ea57bbe19203edc7f540aaf7bc01e371e9b05", class: "column-separator" }), h("div", { key: "e0e47031d67a414e71a663c89eb20942e490a143", class: "columns" }, h("div", { key: "b55a46d9171f8d4ea7f19ffcf50e82cc27b3008e", class: "column-header", title: "AM/PM" }), h("div", { key: "e2d47a331db21474506ed4209b54d5b9fc5a00c2", role: "listbox", "aria-label": "AM/PM", class: "element-list", tabindex: -1 }, h("button", { key: "6b3969a20dabaa7d7d42ce399dc652a61bd1755e", role: "option", "aria-selected": this.timeRef === "AM" ? "true" : "false", "data-am-pm-id": "AM", class: {
      selected: this.timeRef === "AM",
      "element-container": true
    }, onClick: () => this.changeTimeReference("AM"), tabindex: "0", "aria-label": "AM" }, "AM"), h("button", { key: "6f2075627df1381c8dd7d91527e73341bf87e664", role: "option", "aria-selected": this.timeRef === "PM" ? "true" : "false", "data-am-pm-id": "PM", class: {
      selected: this.timeRef === "PM",
      "element-container": true
    }, onClick: () => this.changeTimeReference("PM"), tabindex: "0", "aria-label": "PM" }, "PM"))))), h("div", { key: "44f3449c1b98e855369c88b8625d6c96548344db", class: {
      footer: true,
      "footer--compact": this.timePickerDescriptors.length <= 2
    }, slot: "footer" }, h("ix-button", { key: "8c6a6255be71512b40c108b196488c7e9d1fddfe", class: "confirm-button", disabled: this.isConfirmDisabled(), onClick: () => {
      this.timeSelect.emit(this._time?.toFormat(this.format));
    } }, this.i18nConfirmTime))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "format": [{
        "watchFormatIntervalPropHandler": 0
      }],
      "hourInterval": [{
        "watchHourIntervalPropHandler": 0
      }],
      "minuteInterval": [{
        "watchMinuteIntervalPropHandler": 0
      }],
      "secondInterval": [{
        "watchSecondIntervalPropHandler": 0
      }],
      "millisecondInterval": [{
        "watchMillisecondIntervalPropHandler": 0
      }],
      "time": [{
        "watchTimePropHandler": 0
      }],
      "minTime": [{
        "watchMinTimePropHandler": 0
      }],
      "maxTime": [{
        "watchMaxTimePropHandler": 0
      }],
      "_time": [{
        "onTimeChange": 0
      }]
    };
  }
};
__decorate([
  OnListener("keydown")
], TimePicker.prototype, "handleKeyDown", null);
TimePicker.style = timePickerCss();
export {
  Col as ix_col,
  LayoutGrid as ix_layout_grid,
  Row as ix_row,
  TimePicker as ix_time_picker
};
