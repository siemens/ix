import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
import { b as a11yHostAttributes } from "./a11y-DAzBNVe7-CO1Uj69l.js";
import { O as OnListener } from "./listener-DAJkOQte-RJpBJ_ng.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { H as HookValidationLifecycle } from "./validation-3877QBzA-qKKeryVJ.js";
const sliderCss = ':host{display:flex;flex-direction:column;min-height:2rem;justify-content:center;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--theme-slider-track-marker--background);--trace-color:var(--theme-slider-trace--background);--tick-color:var(--theme-slider-track-marker--background);--tick-color--active:var(--theme-slider-trace-marker--background);--track-color:var(--theme-slider-track--background)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1.5rem;margin:0}:host input[type=range].trace::before{content:"";position:absolute;display:block;z-index:-1;width:calc((var(--trace-end) - var(--trace-start)) * 100%);left:calc(var(--trace-start) * 100%);height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%);border-radius:clamp(0rem, (0.01 - var(--trace-start)) * 999rem, 0.125rem) clamp(0rem, (var(--trace-end) - 0.99) * 999rem, 0.125rem) clamp(0rem, (var(--trace-end) - 0.99) * 999rem, 0.125rem) clamp(0rem, (0.01 - var(--trace-start)) * 999rem, 0.125rem)}:host .slider-container{width:100%}:host .slider-container .slider{width:100%}:host .slider-container .slider input[type=range]{width:100%}:host input[type=range].trace:not(.hide-trace-reference)::after{content:"";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(100% * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:50%;background-color:var(--theme-slider-thumb--background);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:50%;background-color:var(--theme-slider-thumb--background);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--hover)}:host input[type=range]:hover::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--hover)}:host input[type=range]:active::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--active)}:host input[type=range]:active::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--active)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host{}:host .ticks{position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}:host .ticks circle.tick{--tick-size:6px;--tick-radius:calc(var(--tick-size) / 2);r:var(--tick-radius);fill:var(--tick-color);transform:translate(calc(var(--tick-value) * (100% - var(--thumb-size)) + var(--thumb-size) / 2), 50%)}:host .ticks .tick.tick-at-min{transform:translate(var(--tick-radius), 50%)}:host .ticks .tick.tick-at-max{transform:translate(calc(100% - var(--tick-radius)), 50%)}:host .ticks .tick.tick-active{fill:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:100%;top:50%;transform:translateY(-50%);left:0px;border-radius:2px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host(.error),:host(.invalid){--trace-color:var(--theme-slider-trace--background--invalid);--tick-color--active:var(--theme-slider-trace-marker--background--invalid)}:host(.error) input[type=range]::-webkit-slider-thumb,:host(.invalid) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--invalid)}:host(.error) input[type=range]::-moz-range-thumb,:host(.invalid) input[type=range]::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--invalid)}:host(.error) input[type=range]:hover::-webkit-slider-thumb,:host(.invalid) input[type=range]:hover::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--invalid--hover)}:host(.error) input[type=range]:hover::-moz-range-thumb,:host(.invalid) input[type=range]:hover::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--invalid--hover)}:host(.error) input[type=range]:active::-webkit-slider-thumb,:host(.invalid) input[type=range]:active::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--invalid--active)}:host(.error) input[type=range]:active::-moz-range-thumb,:host(.invalid) input[type=range]:active::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--invalid--active)}:host(.disabled){pointer-events:none;--track-color:var(--theme-slider-track--background--disabled);--trace-color:var(--theme-slider-trace--background--disabled);--tick-color:var(--theme-slider-track-marker--background--disabled);--tick-color--active:var(--theme-slider-trace-marker--background--disabled)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-slider-thumb--background--disabled)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--theme-slider-thumb--background--disabled)}:host(.warning){--trace-color:var(--theme-color-warning-40);--tick-color--active:var(--theme-color-warning)}:host(.warning) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-warning)}:host(.warning) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-warning)}:host(.info){--trace-color:var(--theme-color-info-40);--tick-color--active:var(--theme-color-info)}:host(.info) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-info)}:host(.info) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-info)}:host(.valid){--trace-color:var(--theme-color-success-40);--tick-color--active:var(--theme-color-success)}:host(.valid) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-success)}:host(.valid) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-success)}';
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
    this.showTextAsTooltip = false;
    this.step = 1;
    this.min = 0;
    this.max = 100;
    this.value = 0;
    this.trace = false;
    this.traceReference = 0;
    this.disabled = false;
    this.rangeInput = 0;
    this.rangeMin = 0;
    this.rangeMax = 100;
    this.rangeTraceReference = 0;
    this.showTooltip = false;
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
    this.touched = false;
    this.controlRef = makeRef();
    this.thumbRef = makeRef();
    this.tooltipRef = makeRef();
  }
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
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById("slider");
  }
  onShowTooltipChange() {
    var _a, _b;
    if (this.showTooltip && this.pseudoThumb) {
      (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.showTooltip(this.pseudoThumb);
      return;
    }
    (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hideTooltip();
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
    var _a;
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
    return h(Host, { key: "dcce2da89192816ddc61f9f1950a399ebdf53766", class: {
      disabled: this.disabled,
      error: !!this.error,
      invalid: this.isInvalid,
      info: this.isInfo,
      valid: this.isValid,
      warning: this.isWarning
    }, onPointerDown: () => setTimeout(() => this.showTooltip = true) }, h("ix-field-wrapper", { key: "a3ce51bbc6f18cfbc99c3ef821016c6421217ffe", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid, controlRef: this.controlRef }, h("div", { key: "602a467d24592696b8f5ebaf13f1b7d5e3451e38", class: "slider-container" }, h("div", { key: "b9ded80de026dfc23f6892ef5fab71bcf9444011", class: "slider" }, h("div", { key: "78472ae8734b51390efeac850ffe2400e8fd67be", class: "track" }, h("div", { key: "0183018c9421d77caa857d6e8ff83dce0b7714f1", ref: this.thumbRef, class: "thumb", style: {
      left: `calc(${valueInPercentage} * (100% - 1rem))`
    } }), h("svg", { key: "3a43071be5fb88e7ae8d0f8abd34f7cef203fb54", class: "ticks", xmlns: "http://www.w3.org/2000/svg" }, (_a = this.marker) === null || _a === void 0 ? void 0 : _a.filter((markerValue) => markerValue >= this.min && markerValue <= this.max).map((markerValue) => {
      const markerPosition = (markerValue - this.rangeMin) / range;
      return h("circle", { class: {
        tick: true,
        "tick-active": this.isMarkerActive(markerValue) && this.trace,
        "tick-at-min": markerPosition === 0,
        "tick-at-max": markerPosition === 1
      }, cx: "0", cy: "0", style: {
        "--tick-value": `${markerPosition}`
      } });
    }))), h("input", Object.assign({ key: "1f1304342e72682bc040994e96297a31a61f4d00", id: "slider", ref: this.controlRef, type: "range", list: this.marker ? "markers" : void 0, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), onFocus: () => {
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
    }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max }, this.a11yAttributes)), h("ix-tooltip", { key: "e0c3c6b098a2112cbcc27a90a8cdb696148109dc", ref: this.tooltipRef, class: {
      "hide-tooltip": !this.showTooltip
    }, animationFrame: true, for: this.thumbRef.waitForCurrent() }, this.rangeInput)), this.hasLabels && h("div", { key: "0a04945ac1055fbcd7e4b05b1188071e5e58180b", class: "label" }, h("div", { key: "e1d1f0963b6e56947afeb9e371c1404b9b0fb819" }, h("slot", { key: "16e408212c6193e840f399343cfe2d3a8e260e30", name: "label-start" })), h("div", { key: "569530a9d3f987a0993ea8f79709b5f2252e0956" }, h("slot", { key: "aba45e17633571d07a3dc95d46502dd6ebdc0aae", name: "label-end" }))), this.error ? h("ix-typography", { textColor: "alarm" }, this.error) : null)));
  }
  static get formAssociated() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "showTooltip": ["onShowTooltipChange"],
      "value": ["updateRangeVariables"],
      "max": ["updateRangeVariables"],
      "min": ["updateRangeVariables"],
      "traceReference": ["updateRangeVariables"]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Slider.prototype, "onClassField", null);
__decorate([
  OnListener("pointerup", (self) => self.showTooltip)
], Slider.prototype, "onPointerUp", null);
Slider.style = sliderCss;
export {
  Slider as ix_slider
};
