import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { c as a11yHostAttributes } from "./a11y-DD206pTM-BiwZPW5s.js";
import { O as OnListener } from "./listener-BjluJgvO-BCnOwMp0.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { H as HookValidationLifecycle } from "./validation-DXpftrw5-Bpiv-t_k.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const sliderCss = () => `@charset "UTF-8";:host{--ix-slider-thumb--background--active:var(--si-sys-background-accent-active);--ix-slider-thumb--background--disabled:var(--si-sys-border-2);--ix-slider-thumb--background--hover:var(--si-sys-background-accent-hover);--ix-slider-thumb--background--info:var(--si-sys-background-information);--ix-slider-thumb--background--invalid--active:var(--si-sys-background-danger-active);--ix-slider-thumb--background--invalid--hover:var(--si-sys-background-danger-hover);--ix-slider-thumb--background--invalid:var(--si-sys-background-danger);--ix-slider-thumb--background--success:var(--si-sys-background-success);--ix-slider-thumb--background--warning:var(--si-sys-background-warning);--ix-slider-thumb--background:var(--si-sys-background-accent);--ix-slider-thumb--outline-color--focus:var(--si-sys-effects-focus);--ix-slider-thumb--transition-duration:var(--theme-default-time);--ix-slider-trace--background--disabled:var(--si-sys-border-2);--ix-slider-trace--background--info:var(--si-sys-border-information);--ix-slider-trace--background--invalid:var(--si-sys-border-danger);--ix-slider-trace--background--success:var(--si-sys-border-success);--ix-slider-trace--background--warning:var(--si-sys-border-warning);--ix-slider-trace--background:var(--si-sys-border-accent);--ix-slider-trace-marker--background--disabled:var(--si-sys-border-2);--ix-slider-trace-marker--background--info:var(--si-sys-background-information);--ix-slider-trace-marker--background--invalid:var(--si-sys-background-danger);--ix-slider-trace-marker--background--success:var(--si-sys-background-success);--ix-slider-trace-marker--background--warning:var(--si-sys-background-warning);--ix-slider-trace-marker--background:var(--si-sys-background-accent);--ix-slider-track--background--disabled:var(--si-sys-background-2);--ix-slider-track--background:var(--si-sys-border-4);--ix-slider-track-marker--background--disabled:var(--si-sys-background-2);--ix-slider-track-marker--background:var(--si-sys-border-2)}:host{display:flex;flex-direction:column;min-height:2rem;justify-content:center;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--ix-slider-track-marker--background);--trace-color:var(--ix-slider-trace--background);--tick-color:var(--ix-slider-track-marker--background);--tick-color--active:var(--ix-slider-trace-marker--background);--track-color:var(--ix-slider-track--background)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1.5rem;margin:0}:host input[type=range].trace::before{content:"";position:absolute;display:block;z-index:-1;width:calc((var(--trace-end) - var(--trace-start)) * 100%);left:calc(var(--trace-start) * 100%);height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%);border-radius:clamp(0rem, (0.01 - var(--trace-start)) * 999rem, 0.125rem) clamp(0rem, (var(--trace-end) - 0.99) * 999rem, 0.125rem) clamp(0rem, (var(--trace-end) - 0.99) * 999rem, 0.125rem) clamp(0rem, (0.01 - var(--trace-start)) * 999rem, 0.125rem)}:host .slider-container{width:100%}:host .slider-container .slider{width:100%}:host .slider-container .slider input[type=range]{width:100%}:host input[type=range].trace:not(.hide-trace-reference)::after{content:"";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(100% * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:50%;background-color:var(--ix-slider-thumb--background);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--ix-slider-thumb--transition-duration) ease-in-out;transition:all var(--ix-slider-thumb--transition-duration) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:50%;background-color:var(--ix-slider-thumb--background);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--ix-slider-thumb--transition-duration) ease-in-out;transition:all var(--ix-slider-thumb--transition-duration) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--hover)}:host input[type=range]:hover::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--hover)}:host input[type=range]:active::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--active)}:host input[type=range]:active::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--active)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--ix-slider-thumb--outline-color--focus);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--ix-slider-thumb--outline-color--focus);outline-offset:0.125rem}:host{}:host .ticks{position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}:host .ticks circle.tick{--tick-size:6px;--tick-radius:calc(var(--tick-size) / 2);r:var(--tick-radius);fill:var(--tick-color);transform:translate(calc(var(--tick-value) * (100% - var(--thumb-size)) + var(--thumb-size) / 2), 50%)}:host .ticks .tick.tick-at-min{transform:translate(var(--tick-radius), 50%)}:host .ticks .tick.tick-at-max{transform:translate(calc(100% - var(--tick-radius)), 50%)}:host .ticks .tick.tick-active{fill:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:100%;top:50%;transform:translateY(-50%);left:0px;border-radius:2px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host(.invalid){--trace-color:var(--ix-slider-trace--background--invalid);--tick-color--active:var(--ix-slider-trace-marker--background--invalid)}:host(.invalid) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--invalid)}:host(.invalid) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--invalid)}:host(.invalid) input[type=range]:hover::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--invalid--hover)}:host(.invalid) input[type=range]:hover::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--invalid--hover)}:host(.invalid) input[type=range]:active::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--invalid--active)}:host(.invalid) input[type=range]:active::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--invalid--active)}:host(.disabled){pointer-events:none;--track-color:var(--ix-slider-track--background--disabled);--trace-color:var(--ix-slider-trace--background--disabled);--tick-color:var(--ix-slider-track-marker--background--disabled);--tick-color--active:var(--ix-slider-trace-marker--background--disabled)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--disabled)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--disabled)}:host(.warning){--trace-color:var(--ix-slider-trace--background--warning);--tick-color--active:var(--ix-slider-trace-marker--background--warning)}:host(.warning) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--warning)}:host(.warning) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--warning)}:host(.info){--trace-color:var(--ix-slider-trace--background--info);--tick-color--active:var(--ix-slider-trace-marker--background--info)}:host(.info) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--info)}:host(.info) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--info)}:host(.valid){--trace-color:var(--ix-slider-trace--background--success);--tick-color--active:var(--ix-slider-trace-marker--background--success)}:host(.valid) input[type=range]::-webkit-slider-thumb{background-color:var(--ix-slider-thumb--background--success)}:host(.valid) input[type=range]::-moz-range-thumb{background-color:var(--ix-slider-thumb--background--success)}`;
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
    return h(Host, { key: "14228becc1f5999b4f78ac3aa881aa8804cd5fd4", class: {
      disabled: this.disabled,
      invalid: this.isInvalid,
      info: this.isInfo,
      valid: this.isValid,
      warning: this.isWarning
    }, onPointerDown: () => setTimeout(() => this.showTooltip = true) }, h("ix-field-wrapper", { key: "45fb368f51c84236d46b19d104aa34881f20dd67", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid, controlRef: this.controlRef }, h("div", { key: "74264a461a27971965ffab5381876e6532b6a49e", class: "slider-container" }, h("div", { key: "4375532e81d169c57c02b0e2a6249829ea16c091", class: "slider" }, h("div", { key: "373331afa64d03ce9b897e662063a7b496691c72", class: "track" }, h("div", { key: "bbfa08fd29daea8d73ef8e05420824a443e73f8d", ref: this.thumbRef, class: "thumb", style: {
      left: `calc(${valueInPercentage} * (100% - 1rem))`
    } }), h("svg", { key: "269233c217b8f17248f94a0738554129a8bcdd93", class: "ticks", xmlns: "http://www.w3.org/2000/svg" }, this.marker?.filter((markerValue) => markerValue >= this.min && markerValue <= this.max).map((markerValue) => {
      const markerPosition = (markerValue - this.rangeMin) / range;
      return h("circle", { class: {
        tick: true,
        "tick-active": this.isMarkerActive(markerValue) && this.trace,
        "tick-at-min": markerPosition === 0,
        "tick-at-max": markerPosition === 1
      }, cx: "0", cy: "0", style: {
        "--tick-value": `${markerPosition}`
      } });
    }))), h("input", { key: "9704a96dfea47990d1828f4b450329a3c06aea90", id: "slider", ref: this.controlRef, type: "range", list: this.marker ? "markers" : void 0, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), onFocus: () => {
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
    }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max, ...this.a11yAttributes }), h("ix-tooltip", { key: "93d7b857f5aeb3e7471e5b34ff2f72a1f9508e3e", ref: this.tooltipRef, class: {
      "hide-tooltip": !this.showTooltip
    }, animationFrame: true, for: this.thumbRef.waitForCurrent() }, this.rangeInput)), this.hasLabels && h("div", { key: "2c6e1705ffb271e38f979ef0d3babef1e8084ba5", class: "label" }, h("div", { key: "6a6e76535748eaa66cf667dfe3f4bb1d54154ca7" }, h("slot", { key: "8616b759d38d7fda16e6c8c84a20f6921af6e3f2", name: "label-start" })), h("div", { key: "70e680e2842a513b63e7edf48f93574aeb3ade77" }, h("slot", { key: "36b26c4c0ced71ab980be06508f50bf0ebf1ccf4", name: "label-end" }))))));
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
