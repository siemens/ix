import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { b as a11yHostAttributes } from "./a11y-2e34777f.c1195600.js";
import { O as OnListener } from "./listener-2c562054.4c563bf8.js";
const sliderCss = ':host{display:flex;flex-direction:column;min-height:2rem;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--theme-color-8);--trace-color:var(--theme-color-dynamic);--tick-color:var(--theme-color-8);--tick-color--active:var(--theme-color-dynamic);--track-color:var(--theme-color-component-4);}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1rem;margin:0}:host input[type=range].trace::before{content:"";position:absolute;display:block;z-index:-1;width:calc(7px + 100% * var(--trace-end) - 16px * var(--trace-end) - (7px + 100% * var(--trace-start) - 16px * var(--trace-start)));left:calc(7px + 100% * var(--trace-start) - 16px * var(--trace-start));height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%)}:host input[type=range].trace:not(.hide-trace-reference)::after{content:"";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(7px + 100% * var(--trace-reference) - 16px * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:hover::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host .ticks{display:flex;position:relative;top:50%;transform:translateY(-50%)}:host .ticks .tick{display:block;position:absolute;width:8px;height:8px;background-color:var(--tick-color);border-radius:100px;top:50%;transform:translateY(-50%);left:calc(var(--tick-value) * 100% - 4px)}:host .ticks .tick.tick-active{background-color:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:calc(100% - 1rem);margin-left:0.5rem;top:50%;transform:translateY(-50%);left:0px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;left:0px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host .label-start{margin-left:0.5rem}:host .label-end{margin-right:0.5rem}:host .label-error{margin-left:0.5rem}:host(.error){--trace-color:var(--theme-color-alarm-40);--tick-color--active:var(--theme-color-alarm)}:host(.error) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-alarm)}:host(.error) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-alarm)}:host(.disabled){pointer-events:none;--track-color:var(--theme-color-component-3);--trace-color:var(--theme-color-3);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-7)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-7)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-7)}';
const IxSliderStyle0 = sliderCss;
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
    this.marker = void 0;
    this.trace = false;
    this.traceReference = 0;
    this.disabled = false;
    this.error = void 0;
    this.rangeInput = 0;
    this.rangeMin = 0;
    this.rangeMax = 100;
    this.rangeTraceReference = 0;
    this.showTooltip = false;
  }
  get tooltip() {
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ix-tooltip");
  }
  get pseudoThumb() {
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".thumb");
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
    const value = parseInt(this.slider.value);
    if (!isNaN(value)) {
      this.rangeInput = value;
      this.emitInputEvent();
    }
  }
  emitInputEvent() {
    this.valueChange.emit(this.rangeInput);
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
    return h(Host, { key: "c7e6a14875ee17d49fe5e42459b81fb561802ebc", class: {
      disabled: this.disabled,
      error: !!this.error
    }, onPointerDown: () => setTimeout(() => this.showTooltip = true) }, h("div", { key: "bed770beec56a4798df1c0b8546fd78ef6c1f749", class: "slider" }, h("div", { key: "b2337e7802806933356cc7930bcb5a0e025796b8", class: "track" }, h("div", { key: "d5d40d3e44d50112733e5c9137b807e3a25dcafa", class: "thumb", style: {
      left: `calc(${valueInPercentage} * 100% - 8px)`
    } }), h("div", { key: "041f4368d4b80929a03abfbe617d8f5bb15957d0", class: "ticks" }, this.marker ? this.marker.map((markerValue) => {
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
    }) : null)), h("input", Object.assign({ key: "ef61a64f69ebc8816778dfd95dee2402b0ed9144", id: "slider", type: "range", list: this.marker ? "markers" : void 0, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), style: {
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
    }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max }, this.a11yAttributes)), h("ix-tooltip", { key: "4dfe584376f3df426be2e049703adfb4c2bf39ab", class: {
      "hide-tooltip": !this.showTooltip
    }, animationFrame: true }, this.rangeInput)), h("div", { key: "9c42a9aa11e4c59c2fa9f0b132d6ac3a2b4f8f72", class: "label" }, h("div", { key: "22ed6e4412f84449c68109dd5619054a65d8790f", class: "label-start" }, h("slot", { key: "676a5d1b03b6a398bda253f01396c06ccb7cdb04", name: "label-start" })), h("div", { key: "7ec74b8f1f5a4a6e0eb4dd2b1bd8c32aa098f47c", class: "label-end" }, h("slot", { key: "1a4b99aebbe60d9db5e4ed5c26907aecf2a38568", name: "label-end" }))), this.error ? h("ix-typography", { class: "label-error", color: "alarm" }, this.error) : null);
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
Slider.style = IxSliderStyle0;
export {
  Slider as ix_slider
};
