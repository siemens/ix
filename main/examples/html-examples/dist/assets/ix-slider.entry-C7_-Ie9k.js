import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-DfH3Z96w.js";
import { b as a11yHostAttributes } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { O as OnListener } from "./listener-BDVSf4K6-E3ILdUAQ.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { H as HookValidationLifecycle } from "./validation-Di-_grhN-CKVeSGRc.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const sliderCss = () => `@charset "UTF-8";:host{--ix-slider-thumb--background--active:var(--si-sys-color-background-accent-active);--ix-slider-thumb--background--disabled:var(--si-sys-color-background-disabled);--ix-slider-thumb--background--hover:var(--si-sys-color-background-accent-hover);--ix-slider-thumb--background--info--active:var(--si-sys-color-background-information-active);--ix-slider-thumb--background--info--hover:var(--si-sys-color-background-information-hover);--ix-slider-thumb--background--info:var(--si-sys-color-background-information);--ix-slider-thumb--background--invalid--active:var(--si-sys-color-background-danger-active);--ix-slider-thumb--background--invalid--hover:var(--si-sys-color-background-danger-hover);--ix-slider-thumb--background--invalid:var(--si-sys-color-background-danger);--ix-slider-thumb--background--warning--active:var(--si-sys-color-background-warning-active);--ix-slider-thumb--background--warning--hover:var(--si-sys-color-background-warning-hover);--ix-slider-thumb--background--warning:var(--si-sys-color-background-warning);--ix-slider-thumb--background:var(--si-sys-color-background-accent);--ix-slider-thumb--outline-color--focus:var(--si-sys-color-effects-focus);--ix-slider-trace--background--active:var(--si-sys-color-border-accent-active);--ix-slider-trace--background--disabled:var(--si-sys-color-border-disabled);--ix-slider-trace--background--hover:var(--si-sys-color-border-accent-hover);--ix-slider-trace--background--info:var(--si-sys-color-border-information);--ix-slider-trace--background--invalid:var(--si-sys-color-border-danger);--ix-slider-trace--background--warning:var(--si-sys-color-border-warning);--ix-slider-trace--background:var(--si-sys-color-border-accent);--ix-slider-trace-marker--background--disabled:var(--si-sys-color-background-disabled);--ix-slider-trace-marker--background--info:var(--si-sys-color-background-information);--ix-slider-trace-marker--background--invalid:var(--si-sys-color-background-danger);--ix-slider-trace-marker--background--warning:var(--si-sys-color-background-warning);--ix-slider-trace-marker--background:var(--si-sys-color-background-accent);--ix-slider-track--background--disabled:var(--si-sys-color-background-2);--ix-slider-track--background:var(--si-sys-color-border-4);--ix-slider-track-marker--background--disabled:var(--si-sys-color-background-disabled);--ix-slider-track-marker--background:var(--si-sys-color-border-2)}:host{--ix-slider-thumb--transition-duration:var(--theme-default-time);--ix-slider--min-height:var(--si-sys-sizing-size-80);--ix-slider--thumb-size:var(--si-sys-sizing-size-60);--ix-slider--thumb-height:var(--ix-slider--thumb-size);--ix-slider-thumb--overhang:3px;--ix-slider-thumb--inset:calc(     (var(--ix-slider--thumb-size) - 2 * var(--ix-slider-thumb--overhang)) / 2   );--ix-slider--height:var(--si-sys-sizing-size-80);--ix-slider-control--gap:var(--si-sys-sizing-spacing-y-10);--ix-slider-label--margin-top:var(--si-sys-sizing-spacing-y-40);--ix-slider-input--margin-top:calc(     (var(--ix-slider-input--track-height) - var(--ix-slider--thumb-height)) / 2   );--ix-slider-trace--height:var(--ix-slider-track--height);--ix-slider-reference--width:var(--si-sys-sizing-size-10);--ix-slider-reference--height:var(--si-sys-sizing-size-50);--ix-slider-input--track-height:var(--ix-slider-track--height);--ix-slider--z-index:10;--ix-slider--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-slider--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-slider-ticks--tick-size:calc(var(--si-sys-sizing-size-50) * 0.375);--ix-slider-track--height:var(--si-sys-sizing-size-20);--ix-slider-track--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-slider-thumb--border-radius:var(--si-sys-sizing-border-radius-full)}:host{display:flex;flex-direction:column;min-height:var(--ix-slider--min-height);justify-content:center;--thumb-size:var(--ix-slider--thumb-size);--thumb-height:var(--ix-slider--thumb-height);--thumb-overhang:var(--ix-slider-thumb--overhang);--thumb-inset:var(--ix-slider-thumb--inset);--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--ix-slider-track-marker--background);--trace-color:var(--ix-slider-trace--background);--tick-color:var(--ix-slider-track-marker--background);--tick-color--active:var(--ix-slider-trace-marker--background);--track-color:var(--ix-slider-track--background)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:calc(-1 * var(--thumb-overhang));-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:calc(100% + 2 * var(--thumb-overhang));height:var(--ix-slider--height);margin:0;z-index:2}:host .slider.value-fill::before{content:"";position:absolute;display:block;z-index:1;pointer-events:none;width:calc((var(--trace-end) - var(--trace-start)) * 100%);left:calc(var(--trace-start) * 100%);height:var(--ix-slider-trace--height);border-radius:var(--ix-slider-track--border-radius);background-color:var(--trace-color);top:50%;transform:translateY(-50%)}:host .slider-container{width:100%;margin-bottom:var(--ix-slider-control--gap)}:host .slider-container .slider{width:100%}:host .slider.trace:not(.hide-trace-reference)::after{content:"";position:absolute;display:block;z-index:1;pointer-events:none;width:var(--ix-slider-reference--width);height:var(--ix-slider-reference--height);background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(100% * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:var(--ix-slider-input--track-height)}:host input[type=range]::-moz-range-track{background:transparent;height:var(--ix-slider-input--track-height)}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:var(--ix-slider-input--margin-top)}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border:none;border-radius:var(--ix-slider-thumb--border-radius);background-color:var(--ix-slider-thumb--background);height:var(--thumb-height);width:var(--thumb-size);-webkit-transition:all var(--ix-slider-thumb--transition-duration) ease-in-out;transition:all var(--ix-slider-thumb--transition-duration) ease-in-out;z-index:var(--ix-slider--z-index)}:host input[type=range]::-moz-range-thumb{border:none;border-radius:var(--ix-slider-thumb--border-radius);background-color:var(--ix-slider-thumb--background);height:var(--thumb-height);width:var(--thumb-size);-moz-transition:all var(--ix-slider-thumb--transition-duration) ease-in-out;transition:all var(--ix-slider-thumb--transition-duration) ease-in-out;z-index:var(--ix-slider--z-index)}:host input[type=range]:hover::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--hover)}:host input[type=range]:hover::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--hover)}:host input[type=range]:active::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--active)}:host input[type=range]:active::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--active)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:var(--ix-slider--outline-width--focus) solid var(--ix-slider-thumb--outline-color--focus);outline-offset:var(--ix-slider--outline-offset)}:host input[type=range]:focus-visible::-moz-range-thumb{outline:var(--ix-slider--outline-width--focus) solid var(--ix-slider-thumb--outline-color--focus);outline-offset:var(--ix-slider--outline-offset)}:host{}:host .ticks{position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}:host .ticks circle.tick{--tick-size:var(--ix-slider-ticks--tick-size);--tick-radius:calc(var(--tick-size) / 2);r:var(--tick-radius);fill:var(--tick-color);transform:translate(calc(var(--tick-value) * (100% - var(--thumb-size)) + var(--thumb-size) / 2), 50%)}:host .ticks .tick.tick-at-min{transform:translate(var(--tick-radius), 50%)}:host .ticks .tick.tick-at-max{transform:translate(calc(100% - var(--tick-radius)), 50%)}:host .ticks .tick.tick-active{fill:var(--tick-color--active)}:host .slider{position:relative;isolation:isolate;display:block;width:100%;height:var(--ix-slider--height)}:host .track{position:absolute;background-color:var(--track-color);border-radius:var(--ix-slider-track--border-radius);height:var(--ix-slider-track--height);width:100%;top:50%;transform:translateY(-50%);left:0px}:host .thumb{display:block;position:absolute;background-color:transparent;height:var(--thumb-height);width:var(--thumb-size);border-radius:var(--ix-slider-thumb--border-radius);top:50%;transform:translateY(-50%);left:calc(var(--value) * (100% - 2 * var(--thumb-inset)) - var(--thumb-overhang))}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:var(--ix-slider-label--margin-top);min-height:0px;font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host(:not(.disabled):not(.invalid):not(.warning):not(.info)) .slider:has(input:hover){--trace-color:var(--ix-slider-trace--background--hover)}:host(:not(.disabled):not(.invalid):not(.warning):not(.info)) .slider:has(input:active){--trace-color:var(--ix-slider-trace--background--active)}:host(.invalid){--trace-color:var(--ix-slider-trace--background--invalid);--tick-color--active:var(--ix-slider-trace-marker--background--invalid)}:host(.invalid) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--invalid)}:host(.invalid) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--invalid)}:host(.invalid) input[type=range]:hover::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--invalid--hover)}:host(.invalid) input[type=range]:hover::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--invalid--hover)}:host(.invalid) input[type=range]:active::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--invalid--active)}:host(.invalid) input[type=range]:active::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--invalid--active)}:host(.warning){--trace-color:var(--ix-slider-trace--background--warning);--tick-color--active:var(--ix-slider-trace-marker--background--warning)}:host(.warning) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--warning)}:host(.warning) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--warning)}:host(.warning) input[type=range]:hover::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--warning--hover)}:host(.warning) input[type=range]:hover::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--warning--hover)}:host(.warning) input[type=range]:active::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--warning--active)}:host(.warning) input[type=range]:active::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--warning--active)}:host(.info){--trace-color:var(--ix-slider-trace--background--info);--tick-color--active:var(--ix-slider-trace-marker--background--info)}:host(.info) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--info)}:host(.info) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--info)}:host(.info) input[type=range]:hover::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--info--hover)}:host(.info) input[type=range]:hover::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--info--hover)}:host(.info) input[type=range]:active::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--info--active)}:host(.info) input[type=range]:active::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--info--active)}:host(.disabled){pointer-events:none;--track-color:var(--ix-slider-track--background--disabled);--trace-color:var(--ix-slider-trace--background--disabled);--tick-color:var(--ix-slider-track-marker--background--disabled);--tick-color--active:var(--ix-slider-trace-marker--background--disabled)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--disabled)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--disabled)}`;
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
function between(min, value, max) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}
const Slider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
  }
  formInternals;
  get hostElement() {
    return getElement(this);
  }
  /**
   * Show text below the field component
   * @since 4.3.0
   */
  helperText;
  /**
   * Label for the field component
   * @since 4.3.0
   */
  label;
  /**
   * Error text for the field component
   * @since 4.3.0
   */
  invalidText;
  /**
   * Info text for the field component
   * @since 4.3.0
   */
  infoText;
  /**
   * Warning text for the field component
   * @since 4.3.0
   */
  warningText;
  /**
   * Valid text for the field component
   * @since 4.3.0
   */
  validText;
  /**
   * Show helper, info, warning, error and valid text as tooltip
   * @since 4.3.0
   */
  showTextAsTooltip = false;
  /**
   * Legal number intervals
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step}
   */
  step = 1;
  /**
   * Minimum slider value
   */
  min = 0;
  /**
   * Maximum slider value
   */
  max = 100;
  /**
   * Current value of the slider
   */
  value = 0;
  /**
   * Define tick marker on the slider. Marker has to be within slider min/max
   */
  marker;
  /**
   * Color the track from **traceReference** to the current value, or from the minimum if they are equal.
   * Show the reference marker only when it is between the minimum and maximum and differs from the value.
   */
  trace = false;
  /**
   * Start point of the trace segment when **trace** is enabled
   */
  traceReference = 0;
  /**
   * Show control as disabled
   */
  disabled = false;
  /**
   * Will emit the value when it changes
   */
  valueChange;
  rangeInput = 0;
  rangeMin = 0;
  rangeMax = 100;
  rangeTraceReference = 0;
  showTooltip = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  a11yAttributes;
  lastFormValue;
  touched = false;
  controlRef = makeRef();
  thumbRef = makeRef();
  tooltipRef = makeRef();
  get hasLabels() {
    return !!this.hostElement.querySelector('[slot="label-start"], [slot="label-end"]');
  }
  get tooltip() {
    return this.tooltipRef.current;
  }
  get pseudoThumb() {
    return this.thumbRef.current;
  }
  get slider() {
    return this.hostElement.shadowRoot?.getElementById("slider");
  }
  onShowTooltipChange() {
    if (this.showTooltip && this.pseudoThumb) {
      this.tooltip?.showTooltip(this.pseudoThumb);
      return;
    }
    this.tooltip?.hideTooltip();
  }
  onClassField({ isInvalid, isInfo, isValid, isWarning, isInvalidByRequired }) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement, [
      "role",
      "aria-valuemin",
      "aria-valuemax",
      "aria-valuenow"
    ]);
    this.updateRangeVariables();
    this.setFormValueIfChanged(this.value);
  }
  updateRangeVariables() {
    this.rangeInput = between(this.min, this.value, this.max);
    this.rangeTraceReference = between(this.min, this.traceReference, this.max);
    this.rangeMin = Math.min(this.min, this.max);
    this.rangeMax = Math.max(this.min, this.max);
    if (this.value !== void 0) {
      this.setFormValueIfChanged(this.value);
    }
  }
  updateFormInternalValue(value) {
    this.setFormValueIfChanged(value);
    this.valueChange.emit(value);
  }
  setFormValueIfChanged(value) {
    const valueStr = value.toString();
    if (this.lastFormValue !== valueStr) {
      this.formInternals.setFormValue(valueStr);
      this.lastFormValue = valueStr;
    }
  }
  onInput(event) {
    event.stopPropagation();
    const value = parseFloat(this.slider.value);
    if (!isNaN(value)) {
      const oldValue = this.rangeInput;
      this.rangeInput = value;
      const { defaultPrevented } = this.emitInputEvent();
      if (defaultPrevented) {
        this.rangeInput = oldValue;
        this.slider.value = oldValue.toString();
      } else {
        this.updateFormInternalValue(value);
      }
    }
  }
  emitInputEvent() {
    return this.valueChange.emit(this.rangeInput);
  }
  isMarkerActive(markerValue) {
    const start = this.trace ? Math.min(this.rangeTraceReference, this.rangeInput) : this.rangeMin;
    const end = this.trace ? Math.max(this.rangeTraceReference, this.rangeInput) : this.rangeInput;
    return markerValue >= start && markerValue <= end;
  }
  // Listen globally on window because sometimes the event listener
  // of the DOM element input itself is not called if the release
  // click is not inside the element anymore
  onPointerUp() {
    this.showTooltip = false;
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(true);
  }
  /** @internal */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  render() {
    const range = this.rangeMax - this.rangeMin;
    const traceReferenceInPercentage = (this.rangeTraceReference - this.rangeMin) / range;
    const valueInPercentage = (this.rangeInput - this.rangeMin) / range;
    const showReferenceSpan = this.trace && traceReferenceInPercentage !== valueInPercentage;
    let traceStart = 0;
    let traceEnd = this.trace ? valueInPercentage : 0;
    if (showReferenceSpan) {
      traceStart = Math.min(traceReferenceInPercentage, valueInPercentage);
      traceEnd = Math.max(traceReferenceInPercentage, valueInPercentage);
    }
    return h(Host, { key: "8679c99d7865cd3695692c06f67b06439df8f92a", class: {
      disabled: this.disabled,
      invalid: this.isInvalid,
      info: this.isInfo,
      valid: this.isValid,
      warning: this.isWarning
    }, onPointerDown: () => setTimeout(() => this.showTooltip = true) }, h("ix-field-wrapper", { key: "08b95188f69ae57b89352e5185060c61fe746ea3", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid, controlRef: this.controlRef }, h("div", { key: "be0df1824f935ed4ba7799718ac062eff8ebc9cf", class: "slider-container" }, h("div", { key: "424da0f7bba428afb9297bb7bc745fea63aeb9ca", class: {
      slider: true,
      "value-fill": traceEnd > traceStart,
      trace: showReferenceSpan,
      "hide-trace-reference": !showReferenceSpan || this.traceReference <= this.min || this.traceReference >= this.max
    }, style: {
      "--value": `${valueInPercentage}`,
      "--trace-reference": `${traceReferenceInPercentage}`,
      "--trace-start": `${traceStart}`,
      "--trace-end": `${traceEnd}`
    } }, h("div", { key: "bfd957349d7a218c30afb4dac10f1472b53e64cd", class: "track" }, h("div", { key: "edba3583817111e83027486d929571d482692afd", ref: this.thumbRef, class: "thumb" }), h("svg", { key: "f15ba96cfa3371ff17e19c6835b682fb040fe75c", class: "ticks", xmlns: "http://www.w3.org/2000/svg" }, this.marker?.filter((markerValue) => markerValue >= this.min && markerValue <= this.max).map((markerValue) => {
      const markerPosition = (markerValue - this.rangeMin) / range;
      return h("circle", { class: {
        tick: true,
        "tick-active": this.trace && this.isMarkerActive(markerValue),
        "tick-at-min": markerPosition === 0,
        "tick-at-max": markerPosition === 1
      }, cx: "0", cy: "0", style: {
        "--tick-value": `${markerPosition}`
      } });
    }))), h("input", { key: "88eed663bdab519732ffbb65a5b6c06e29d51ecc", id: "slider", ref: this.controlRef, type: "range", list: this.marker ? "markers" : void 0, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), onFocus: () => {
      this.showTooltip = true;
      this.touched = true;
    }, onBlur: () => {
      this.showTooltip = false;
    }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max, ...this.a11yAttributes }), h("ix-tooltip", { key: "d3848f5acaf40d19698da096b119ad8c7578a3ac", ref: this.tooltipRef, class: {
      "hide-tooltip": !this.showTooltip
    }, animationFrame: true, for: this.thumbRef.waitForCurrent() }, this.rangeInput)), this.hasLabels && h("div", { key: "4a5ae0b7c52ead53b33fc3a931354964cb31e3dd", class: "label" }, h("div", { key: "f3019dd1c612018c57e943fec7ca8abea5d7f1ff" }, h("slot", { key: "27f1bec1788a84ffee004d1b0117d4e3d97c7795", name: "label-start" })), h("div", { key: "ad880aa527d5c232f18f00cb24e7e6d694732a10" }, h("slot", { key: "6524012554bd2906e44d2d71b9a4a48c9cc2619a", name: "label-end" }))))));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "showTooltip": [{
        "onShowTooltipChange": 0
      }],
      "value": [{
        "updateRangeVariables": 0
      }],
      "max": [{
        "updateRangeVariables": 0
      }],
      "min": [{
        "updateRangeVariables": 0
      }],
      "traceReference": [{
        "updateRangeVariables": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Slider.prototype, "onClassField", null);
__decorate([
  OnListener("pointerup", (self) => self.showTooltip)
], Slider.prototype, "onPointerUp", null);
Slider.style = sliderCss();
export {
  Slider as ix_slider
};
