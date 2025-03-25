import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.23f98c2e.js";
import { b as a11yHostAttributes } from "./a11y-Bb7pDeaQ.1f74cdb9.js";
import { O as OnListener } from "./listener-CNnvvup1.e2f281be.js";
import { m as makeRef } from "./make-ref-bcj7UEIC.8e199155.js";
const sliderCss = ':host{display:flex;flex-direction:column;min-height:2rem;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--theme-color-8);--trace-color:var(--theme-color-dynamic);--tick-color:var(--theme-color-8);--tick-color--active:var(--theme-color-dynamic);--track-color:var(--theme-color-component-4);}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1rem;margin:0}:host input[type=range].trace::before{content:"";position:absolute;display:block;z-index:-1;width:calc(7px + 100% * var(--trace-end) - 16px * var(--trace-end) - (7px + 100% * var(--trace-start) - 16px * var(--trace-start)));left:calc(7px + 100% * var(--trace-start) - 16px * var(--trace-start));height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%)}:host input[type=range].trace:not(.hide-trace-reference)::after{content:"";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(7px + 100% * var(--trace-reference) - 16px * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:hover::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host .ticks{display:flex;position:relative;top:50%;transform:translateY(-50%)}:host .ticks .tick{display:block;position:absolute;width:8px;height:8px;background-color:var(--tick-color);border-radius:100px;top:50%;transform:translateY(-50%);left:calc(var(--tick-value) * 100% - 4px)}:host .ticks .tick.tick-active{background-color:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:calc(100% - 1rem);margin-left:0.5rem;top:50%;transform:translateY(-50%);left:0px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;left:0px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host .label-start{margin-left:0.5rem}:host .label-end{margin-right:0.5rem}:host .label-error{margin-left:0.5rem}:host(.error){--trace-color:var(--theme-color-alarm-40);--tick-color--active:var(--theme-color-alarm)}:host(.error) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-alarm)}:host(.error) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-alarm)}:host(.disabled){pointer-events:none;--track-color:var(--theme-color-component-3);--trace-color:var(--theme-color-3);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-7)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-7)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-7)}';
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
    this.thumbRef = makeRef();
    this.tooltipRef = makeRef();
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
    if (this.showTooltip) {
      (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.showTooltip(this.pseudoThumb);
      return;
    }
    (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hideTooltip();
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement, [
      "role",
      "aria-valuemin",
      "aria-valuemax",
      "aria-valuenow"
    ]);
    this.updateRangeVariables();
  }
  updateRangeVariables() {
    this.rangeInput = between(this.min, this.value, this.max);
    this.rangeTraceReference = between(this.min, this.traceReference, this.max);
    this.rangeMin = Math.min(this.min, this.max);
    this.rangeMax = Math.max(this.min, this.max);
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
  onPointerUp() {
    this.showTooltip = false;
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
    return h(Host, { key: "568077c2ec218ec59fcc8c5b71ee995f67b81c50", class: {
      disabled: this.disabled,
      error: !!this.error
    }, onPointerDown: () => setTimeout(() => this.showTooltip = true) }, h("div", { key: "5d90d4707432d082c643226572ba0df57fb31ecb", class: "slider" }, h("div", { key: "6fa7862803ce7f774e33088866ffede29ec30ef8", class: "track" }, h("div", { key: "c24021f42964edbb0fcba1b722ef1ad8bb1bfcfb", ref: this.thumbRef, class: "thumb", style: {
      left: `calc(${valueInPercentage} * 100% - 8px)`
    } }), h("div", { key: "610aaa115ad035cd656dfc92140c5b9219146396", class: "ticks" }, this.marker ? this.marker.map((markerValue) => {
      if (markerValue > this.max || markerValue < this.min) {
        return;
      }
      let left = (markerValue - this.rangeMin) / range;
      return h("div", { class: {
        tick: true,
        "tick-active": this.isMarkerActive(markerValue) && this.trace
      }, style: {
        "--tick-value": `${left}`
      } });
    }) : null)), h("input", Object.assign({ key: "6bccbc2d6f5fcea8b5d0e4f99a2e3839d01d5013", id: "slider", type: "range", list: this.marker ? "markers" : void 0, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), style: {
      "--value": `${valueInPercentage}`,
      "--trace-reference": `${traceReferenceInPercentage}`,
      "--trace-start": `${traceStart}`,
      "--trace-end": `${traceEnd}`
    }, class: {
      trace: this.trace && traceReferenceInPercentage !== valueInPercentage,
      "hide-trace-reference": this.trace && (this.traceReference <= this.min || this.traceReference >= this.max)
    }, onFocus: () => {
      this.showTooltip = true;
    }, onBlur: () => {
      this.showTooltip = false;
    }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max }, this.a11yAttributes)), h("ix-tooltip", { key: "b948f1c61df20d1b091b8cd398cf3d6abff256d9", ref: this.tooltipRef, class: {
      "hide-tooltip": !this.showTooltip
    }, animationFrame: true, for: this.thumbRef.waitForCurrent() }, this.rangeInput)), h("div", { key: "491a6efb7dbdc1c6df81571f45d1a3b6ec8e43ce", class: "label" }, h("div", { key: "eceecfa340c3d7b1a7bf586935355ba21af71beb", class: "label-start" }, h("slot", { key: "f29a5cccc390e0d16e125bf81e01ba0b9df93849", name: "label-start" })), h("div", { key: "7998cbb60c5a97ba20f23353bf34a661a8ff8198", class: "label-end" }, h("slot", { key: "70e919a1b865884929945807fd3b36155e6da8b4", name: "label-end" }))), this.error ? h("ix-typography", { class: "label-error", textColor: "alarm" }, this.error) : null);
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
  OnListener("pointerup", (self) => self.showTooltip)
], Slider.prototype, "onPointerUp", null);
Slider.style = sliderCss;
export {
  Slider as ix_slider
};
