import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { b as a11yHostAttributes } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { O as OnListener } from "./listener-BbsE7RRY-Cle3lpCC.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { H as HookValidationLifecycle } from "./validation-YeAaQqsK-CQfTnaKj.js";
const sliderCss = () => `:host{display:flex;flex-direction:column;min-height:2rem;justify-content:center;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--theme-slider-track-marker--background);--trace-color:var(--theme-slider-trace--background);--tick-color:var(--theme-slider-track-marker--background);--tick-color--active:var(--theme-slider-trace-marker--background);--track-color:var(--theme-slider-track--background)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1.5rem;margin:0}:host input[type=range].trace::before{content:"";position:absolute;display:block;z-index:-1;width:calc((var(--trace-end) - var(--trace-start)) * 100%);left:calc(var(--trace-start) * 100%);height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%);border-radius:clamp(0rem, (0.01 - var(--trace-start)) * 999rem, 0.125rem) clamp(0rem, (var(--trace-end) - 0.99) * 999rem, 0.125rem) clamp(0rem, (var(--trace-end) - 0.99) * 999rem, 0.125rem) clamp(0rem, (0.01 - var(--trace-start)) * 999rem, 0.125rem)}:host .slider-container{width:100%}:host .slider-container .slider{width:100%}:host .slider-container .slider input[type=range]{width:100%}:host input[type=range].trace:not(.hide-trace-reference)::after{content:"";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(100% * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:50%;background-color:var(--theme-slider-thumb--background);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:50%;background-color:var(--theme-slider-thumb--background);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--hover)}:host input[type=range]:hover::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--hover)}:host input[type=range]:active::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--active)}:host input[type=range]:active::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--active)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host{}:host .ticks{position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}:host .ticks circle.tick{--tick-size:6px;--tick-radius:calc(var(--tick-size) / 2);r:var(--tick-radius);fill:var(--tick-color);transform:translate(calc(var(--tick-value) * (100% - var(--thumb-size)) + var(--thumb-size) / 2), 50%)}:host .ticks .tick.tick-at-min{transform:translate(var(--tick-radius), 50%)}:host .ticks .tick.tick-at-max{transform:translate(calc(100% - var(--tick-radius)), 50%)}:host .ticks .tick.tick-active{fill:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:100%;top:50%;transform:translateY(-50%);left:0px;border-radius:2px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host(.error),:host(.invalid){--trace-color:var(--theme-slider-trace--background--invalid);--tick-color--active:var(--theme-slider-trace-marker--background--invalid)}:host(.error) input[type=range]::-webkit-slider-thumb,:host(.invalid) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--invalid)}:host(.error) input[type=range]::-moz-range-thumb,:host(.invalid) input[type=range]::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--invalid)}:host(.error) input[type=range]:hover::-webkit-slider-thumb,:host(.invalid) input[type=range]:hover::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--invalid--hover)}:host(.error) input[type=range]:hover::-moz-range-thumb,:host(.invalid) input[type=range]:hover::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--invalid--hover)}:host(.error) input[type=range]:active::-webkit-slider-thumb,:host(.invalid) input[type=range]:active::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--invalid--active)}:host(.error) input[type=range]:active::-moz-range-thumb,:host(.invalid) input[type=range]:active::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--invalid--active)}:host(.disabled){pointer-events:none;--track-color:var(--theme-slider-track--background--disabled);--trace-color:var(--theme-slider-trace--background--disabled);--tick-color:var(--theme-slider-track-marker--background--disabled);--tick-color--active:var(--theme-slider-trace-marker--background--disabled)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--disabled)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--disabled)}:host(.warning){--trace-color:var(--theme-color-warning-40);--tick-color--active:var(--theme-color-warning)}:host(.warning) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-warning)}:host(.warning) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-warning)}:host(.info){--trace-color:var(--theme-color-info-40);--tick-color--active:var(--theme-color-info)}:host(.info) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-info)}:host(.info) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-info)}:host(.valid){--trace-color:var(--theme-color-success-40);--tick-color--active:var(--theme-color-success)}:host(.valid) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-success)}:host(.valid) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-success)}`;
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
   * Show a trace line
   */
  trace = false;
  /**
   * Define the start point of the trace line
   */
  traceReference = 0;
  /**
   * Show control as disabled
   */
  disabled = false;
  /**
   * Show error state and message
   *
   * @deprecated Will be removed in 5.0.0. Use invalid class instead.
   */
  error;
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
    const start = Math.min(this.traceReference, this.rangeInput);
    const end = Math.max(this.traceReference, this.rangeInput);
    const value = markerValue;
    return value >= start && value <= end;
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
    let traceReferenceInPercentage = (this.rangeTraceReference - this.rangeMin) / range;
    let valueInPercentage = (this.rangeInput - this.rangeMin) / range;
    const distance = valueInPercentage - traceReferenceInPercentage;
    let traceStart = traceReferenceInPercentage;
    let traceEnd = valueInPercentage;
    if (distance <= 0) {
      traceStart = valueInPercentage;
      traceEnd = traceReferenceInPercentage;
    }
    return h(Host, { key: "93443e0213a5d5296d754ca24a71effb0dc86c3b", class: {
      disabled: this.disabled,
      error: !!this.error,
      invalid: this.isInvalid,
      info: this.isInfo,
      valid: this.isValid,
      warning: this.isWarning
    }, onPointerDown: () => setTimeout(() => this.showTooltip = true) }, h("ix-field-wrapper", { key: "8b0b8b796a4eb89637e0891f084e74029a88c372", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid, controlRef: this.controlRef }, h("div", { key: "cf8db37652b22906baa336627d8118aa829e4aaa", class: "slider-container" }, h("div", { key: "8c78ddbf12e02ad94c22875923b148e05e228f1f", class: "slider" }, h("div", { key: "178dcd74786b46d89410fe99e5f8d08ef57900c0", class: "track" }, h("div", { key: "cb6deb6626955ee8994541390339dba2035ca3d8", ref: this.thumbRef, class: "thumb", style: {
      left: `calc(${valueInPercentage} * (100% - 1rem))`
    } }), h("svg", { key: "d21e2169bbb29438e888a5b7216fd8dc2442b204", class: "ticks", xmlns: "http://www.w3.org/2000/svg" }, this.marker?.filter((markerValue) => markerValue >= this.min && markerValue <= this.max).map((markerValue) => {
      const markerPosition = (markerValue - this.rangeMin) / range;
      return h("circle", { class: {
        tick: true,
        "tick-active": this.isMarkerActive(markerValue) && this.trace,
        "tick-at-min": markerPosition === 0,
        "tick-at-max": markerPosition === 1
      }, cx: "0", cy: "0", style: {
        "--tick-value": `${markerPosition}`
      } });
    }))), h("input", { key: "cc9755a59f0fe8fc4c60e7789365b34796a69537", id: "slider", ref: this.controlRef, type: "range", list: this.marker ? "markers" : void 0, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), onFocus: () => {
      this.showTooltip = true;
      this.touched = true;
    }, onBlur: () => {
      this.showTooltip = false;
    }, style: {
      "--value": `${valueInPercentage}`,
      "--trace-reference": `${traceReferenceInPercentage}`,
      "--trace-start": `${traceStart}`,
      "--trace-end": `${traceEnd}`
    }, class: {
      trace: this.trace && traceReferenceInPercentage !== valueInPercentage,
      "hide-trace-reference": this.trace && (this.traceReference <= this.min || this.traceReference >= this.max)
    }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max, ...this.a11yAttributes }), h("ix-tooltip", { key: "8f6cd0211c75769a3b077752d42c44626688a612", ref: this.tooltipRef, class: {
      "hide-tooltip": !this.showTooltip
    }, animationFrame: true, for: this.thumbRef.waitForCurrent() }, this.rangeInput)), this.hasLabels && h("div", { key: "4170a7386ec38607d207400dbd2ffb1e307a32a1", class: "label" }, h("div", { key: "73def80b338bbc5cb9e5de6a55c7f47bbf3faa6d" }, h("slot", { key: "07b4996aac946c3b550956cbb24b43406b8949a7", name: "label-start" })), h("div", { key: "315a32402c0354390b82a52775e99e15e9c52b8d" }, h("slot", { key: "c0ed466f5f8f8728304a1898f6dc6cff72d9470b", name: "label-end" }))), this.error ? h("ix-typography", { textColor: "alarm" }, this.error) : null)));
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
