import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.a7625982.js";
import { b as a11yHostAttributes } from "./a11y-d5444a76.05d6fe5e.js";
import { O as OnListener } from "./listener-23c93aa7.3c5ecce7.js";
const sliderCss = ':host{display:flex;flex-direction:column;min-height:2rem;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--theme-color-8);--trace-color:var(--theme-color-dynamic);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-dynamic);--track-color:var(--theme-color-component-4);}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1rem;margin:0}:host input[type=range].trace::before{content:"";position:absolute;display:block;z-index:-1;width:calc(7px + 100% * var(--trace-end) - 16px * var(--trace-end) - (7px + 100% * var(--trace-start) - 16px * var(--trace-start)));left:calc(7px + 100% * var(--trace-start) - 16px * var(--trace-start));height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%)}:host input[type=range].trace::after{content:"";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(7px + 100% * var(--trace-reference) - 16px * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:hover::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host .ticks{display:flex;position:relative;top:50%;transform:translateY(-50%)}:host .ticks .tick{display:block;position:absolute;width:8px;height:8px;background-color:var(--tick-color);border-radius:100px;top:50%;transform:translateY(-50%);left:calc(var(--tick-value) * 100% - 4px)}:host .ticks .tick.tick-active{background-color:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:calc(100% - 1rem);margin-left:0.5rem;top:50%;transform:translateY(-50%);left:0px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;left:0px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host .label-start{margin-left:0.5rem}:host .label-end{margin-right:0.5rem}:host .label-error{margin-left:0.5rem}:host(.error){--trace-color:var(--theme-color-alarm-40);--tick-color--active:var(--theme-color-alarm)}:host(.error) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-alarm)}:host(.error) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-alarm)}:host(.disabled){pointer-events:none;--track-color:var(--theme-color-component-3);--trace-color:var(--theme-color-3);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-7)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-7)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-7)}';
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
    this.step = void 0;
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
    return this.hostElement.shadowRoot.querySelector("ix-tooltip");
  }
  get pseudoThumb() {
    return this.hostElement.shadowRoot.querySelector(".thumb");
  }
  get slider() {
    return this.hostElement.shadowRoot.getElementById("slider");
  }
  onShowTooltipChange() {
    if (this.showTooltip) {
      this.tooltip.showTooltip(this.pseudoThumb);
      return;
    }
    this.tooltip.hideTooltip();
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
    return h(Host, { key: "8c85501e96b06c0978e105a3c385ff0824c65a8f", class: {
      disabled: this.disabled,
      error: !!this.error
    }, onPointerDown: () => setTimeout(() => this.showTooltip = true) }, h("div", { key: "d55ef7538ee1c4ddc5cbce9084f942100e3c973d", class: "slider" }, h("div", { key: "ca12a0723b0413045b159fb0ff7c0e86492ec7dd", class: "track" }, h("div", { key: "14ac930b5473b74eb429723fee183c92c3fafdfb", class: "thumb", style: {
      left: `calc(${valueInPercentage} * 100% - 8px)`
    } }), h("div", { key: "3e44ab3c48f5d3225a2bef007c33f1637daed6a1", class: "ticks" }, this.marker ? this.marker.map((markerValue) => {
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
    }) : null)), h("input", Object.assign({ key: "723d37e2970d33e4707b3f6749d87e24a4abaf82", id: "slider", type: "range", list: this.marker ? "markers" : void 0, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), style: {
      "--value": `${valueInPercentage}`,
      "--trace-reference": `${traceReferenceInPercentage}`,
      "--trace-start": `${traceStart}`,
      "--trace-end": `${traceEnd}`
    }, class: {
      trace: this.trace && traceReferenceInPercentage !== valueInPercentage
    }, onFocus: () => {
      this.showTooltip = true;
    }, onBlur: () => {
      this.showTooltip = false;
    }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max }, this.a11yAttributes)), h("ix-tooltip", { key: "24fda111d2fb0582b41a43f621534984cfa0b851", class: {
      "hide-tooltip": !this.showTooltip
    }, animationFrame: true }, this.rangeInput)), h("div", { key: "3f048b282a1b5bce1a30710eaaeaa4a14d19ee32", class: "label" }, h("div", { key: "08e62143c2ea733010a59031e7eb2fa261b47de6", class: "label-start" }, h("slot", { key: "e2902262ac37d93cd57b08230697735c5fdd95ed", name: "label-start" })), h("div", { key: "fe84bba24a5a9673f4b4d86a6463381b84ef5069", class: "label-end" }, h("slot", { key: "9bfb718f207f3efac2c3d45f424264d45c293065", name: "label-end" }))), this.error ? h("ix-typography", { class: "label-error", color: "alarm" }, this.error) : null);
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
