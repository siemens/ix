import { r as registerInstance, h, F as Fragment, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { U as iconCirclePause, c as iconSuccess, a as iconWarning, i as iconInfo, b as iconError } from "./index-8HpPmDK_-DinFJk0z.js";
function LinearBar({ value, status }) {
  return h("div", { class: `linear-progress-container ${status}` }, h("div", { class: "progress", role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": 100 }, h("div", { class: {
    "progress-bar": true
  }, style: { width: `${value}%` }, "data-value": value })));
}
function getCircularSize(size) {
  switch (size) {
    case "xs":
      return 16;
    case "sm":
      return 24;
    case "md":
      return 32;
    case "lg":
      return 48;
    case "xl":
      return 64;
    default:
      return 32;
  }
}
const CircularProgress = (props, children) => {
  const { value, size, alignment } = props;
  const sizeInPixel = getCircularSize(size);
  const radius = sizeInPixel / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.round(circumference * ((100 - value) / 100));
  const slotInsideCircular = size === "lg" || size === "xl";
  return h("div", { class: {
    "circular-progress-container": true,
    [`align-${alignment}`]: !!alignment,
    [props.status]: true
  } }, h("svg", { width: sizeInPixel, height: sizeInPixel, viewBox: `-${sizeInPixel * 0.125} -${sizeInPixel * 0.125} ${sizeInPixel * 1.25} ${sizeInPixel * 1.25}`, version: "1.1", xmlns: "http://www.w3.org/2000/svg", style: { transform: "rotate(-90deg)" } }, h("circle", { r: radius, cx: radius, cy: radius, fill: "transparent", stroke: "var(--ix-progress-indicator-track-color)", "stroke-width": `3px` }), percentage > 0 && h("circle", { r: radius, cx: radius, cy: radius, stroke: "var(--ix-progress-indicator-color)", "stroke-width": "3px", "stroke-dashoffset": `${percentage}px`, fill: "transparent", "stroke-dasharray": `${circumference}px` }), h("foreignObject", { x: `0px`, y: `0px`, width: `${sizeInPixel}px`, height: `${sizeInPixel}px`, style: {
    transform: `rotate(90deg) translate(0px, -${sizeInPixel}px)`
  } }, slotInsideCircular && h("div", { class: "slotted-container slotted-container-inside" }, children))), !slotInsideCircular && h("div", { class: "slotted-container" }, children));
};
const progressIndicatorCss = ":host{display:block;position:relative;width:24rem;height:-moz-fit-content;height:fit-content}:host .progress-container{display:flex;width:100%;align-items:center;gap:0.25rem;flex-wrap:nowrap}:host .label{margin:0.5rem 0 0.25rem 0}:host .helper-text{display:flex;align-items:center;margin:0.25rem 0px;gap:0.25rem;color:var(--theme-progress-indicator-helper--color)}:host .helper-text ix-icon{margin:0.125rem;color:var(--theme-progress-indicator-helper-icon--color)}:host .helper-text.success{color:var(--theme-progress-indicator-helper-success--color)}:host .helper-text.success ix-icon{color:var(--theme-progress-indicator-helper-icon-success--color)}:host .helper-text.error{color:var(--theme-progress-indicator-helper-error--color)}:host .helper-text.error ix-icon{color:var(--theme-progress-indicator-helper-icon-error--color)}:host .helper-text.info{color:var(--theme-progress-indicator-helper-info--color)}:host .helper-text.info ix-icon{color:var(--theme-progress-indicator-helper-icon-info--color)}:host .helper-text.warning{color:var(--theme-progress-indicator-helper-warning--color)}:host .helper-text.warning ix-icon{color:var(--theme-progress-indicator-helper-icon-warning--color)}:host .helper-text.paused{color:var(--theme-progress-indicator-helper-paused--color)}:host .helper-text.paused ix-icon{color:var(--theme-progress-indicator-helper-icon-paused--color)}:host .helper-text .text.align-left{text-align:start}:host .helper-text .text.align-right{text-align:end}:host .helper-text .text.align-center{text-align:center}:host .progress-indicator{display:flex;flex-direction:column}:host .progress-indicator.text-center{align-items:center}:host .progress-indicator.text-left{align-items:flex-start}:host .progress-indicator.text-right{align-items:flex-end}:host .progress-indicator{--ix-progress-indicator-margin:0.5rem 0;height:100%}:host .progress-indicator.xs{--ix-progress-indicator-height:0.125rem;--ix-progress-indicator-margin:0.25rem 0}:host .progress-indicator.sm{--ix-progress-indicator-height:0.25rem;--ix-progress-indicator-margin:0.375rem 0}:host .progress-indicator.md{--ix-progress-indicator-height:0.5rem}:host .progress-indicator.lg{--ix-progress-indicator-height:1rem}:host .progress-indicator.xl{--ix-progress-indicator-height:1.5rem}:host .progress-indicator{--ix-progress-indicator-color:var(\n    --theme-progress-indicator-fill--background\n  )}:host .progress-indicator.success{--ix-progress-indicator-color:var(\n    --theme-progress-indicator-fill-success--background\n  )}:host .progress-indicator.error{--ix-progress-indicator-color:var(\n    --theme-progress-indicator-fill-error--background\n  )}:host .progress-indicator.info{--ix-progress-indicator-color:var(\n    --theme-progress-indicator-fill-info--background\n  )}:host .progress-indicator.warning{--ix-progress-indicator-color:var(\n    --theme-progress-indicator-fill-warning--background\n  )}:host .progress-indicator.paused{--ix-progress-indicator-color:var(\n    --theme-progress-indicator-fill-paused--background\n  )}:host(.linear) .progress-indicator.xs{--ix-progress-indicator-height:0.125rem}:host(.linear) .progress-indicator.sm{--ix-progress-indicator-height:0.25rem}:host(.linear) .progress-indicator.md{--ix-progress-indicator-height:0.5rem}:host(.linear) .progress-indicator.lg{--ix-progress-indicator-height:1rem}:host(.linear) .progress-indicator.xl{--ix-progress-indicator-height:1.5rem}:host(.linear) .linear-progress-container{width:100%;height:var(--ix-progress-indicator-height);background-color:var(--theme-progress-indicator-track--background);border-radius:2px;overflow:hidden;margin:var(--ix-progress-indicator-margin, 0.5rem 0)}:host(.linear) .linear-progress-container.success{background-color:var(--theme-progress-indicator-track-success--background)}:host(.linear) .linear-progress-container.error{background-color:var(--theme-progress-indicator-track-error--background)}:host(.linear) .linear-progress-container.info{background-color:var(--theme-progress-indicator-track-info--background)}:host(.linear) .linear-progress-container.warning{background-color:var(--theme-progress-indicator-track-warning--background)}:host(.linear) .linear-progress-container.paused{background-color:var(--theme-progress-indicator-track-paused--background)}:host(.linear) .progress{width:100%;height:100%;position:relative}:host(.linear) .progress-bar{height:100%;background-color:var(--ix-progress-indicator-color);transition:width 0.3s ease}:host(.linear) .linear-slot{min-width:2.25rem}:host(.circular) .circular-progress-container{--ix-progress-indicator-track-color:var(\n    --theme-progress-indicator-track--background\n  );display:flex;align-items:center;width:100%;gap:0.25rem;margin:var(--ix-progress-indicator-margin, 0.5rem 0)}:host(.circular) .circular-progress-container.align-left{justify-content:flex-start}:host(.circular) .circular-progress-container.align-center{justify-content:center}:host(.circular) .circular-progress-container.align-right{justify-content:flex-end}:host(.circular) .circular-progress-container.success{--ix-progress-indicator-track-color:var(\n    --theme-progress-indicator-track-success--background\n  )}:host(.circular) .circular-progress-container.error{--ix-progress-indicator-track-color:var(\n    --theme-progress-indicator-track-error--background\n  )}:host(.circular) .circular-progress-container.info{--ix-progress-indicator-track-color:var(\n    --theme-progress-indicator-track-info--background\n  )}:host(.circular) .circular-progress-container.warning{--ix-progress-indicator-track-color:var(\n    --theme-progress-indicator-track-warning--background\n  )}:host(.circular) .circular-progress-container.paused{--ix-progress-indicator-track-color:var(\n    --theme-progress-indicator-track-paused--background\n  )}:host(.circular) .slotted-container{height:100%}:host(.circular) .slotted-container.slotted-container-inside{display:flex;align-items:center;justify-content:center;width:100%;height:100%}";
const ProgressIndicator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = "linear";
    this.size = "md";
    this.value = 0;
    this.min = 0;
    this.max = 100;
    this.status = "default";
    this.textAlignment = "left";
    this.showTextAsTooltip = false;
  }
  getHelperText() {
    let icon = null;
    switch (this.status) {
      case "error":
        icon = iconError;
        break;
      case "info":
        icon = iconInfo;
        break;
      case "warning":
        icon = iconWarning;
        break;
      case "success":
        icon = iconSuccess;
        break;
      case "paused":
        icon = iconCirclePause;
        break;
      default:
        icon = null;
    }
    if (!this.helperText) {
      return h("slot", { name: "helper-text" });
    }
    return h("div", { class: {
      "helper-text": true,
      [this.status]: true
    } }, icon && h("ix-icon", { name: icon, size: "16" }), h("div", { class: {
      text: true,
      "align-left": this.textAlignment === "left",
      "align-center": this.textAlignment === "center",
      "align-right": this.textAlignment === "right"
    } }, this.helperText), h("slot", { name: "helper-text" }));
  }
  render() {
    const normalizedValue = (this.value - this.min) / (this.max - this.min) * 100;
    const clampedValue = Math.max(0, Math.min(normalizedValue, 100));
    return h(Host, { key: "d5515fc767306887309e67cf6c6bbf95e2cd831f", class: {
      linear: this.type === "linear",
      circular: this.type === "circular"
    }, tabIndex: -1 }, h("div", { key: "3b73ec218f6a4b2f3c3d377a02033aa556dc10aa", class: {
      "progress-indicator": true,
      [this.size]: true,
      [this.status]: true,
      ["text-center"]: this.textAlignment === "center",
      ["text-left"]: this.textAlignment === "left",
      ["text-right"]: this.textAlignment === "right"
    } }, this.label && h("ix-typography", { key: "c848a415d28064d6fe987f046dc486f84847fe5b", format: "label", textColor: this.status === "error" ? "alarm" : "soft", class: "label" }, this.label), h("div", { key: "24881992405644ff3abca84e9007489d7e2e19e9", class: "progress-container" }, this.type === "linear" ? h(Fragment, null, h(LinearBar, { value: clampedValue, status: this.status }), h("div", { class: "linear-slot" }, h("slot", null))) : h(CircularProgress, { status: this.status, alignment: this.textAlignment, value: clampedValue, size: this.size }, h("slot", null))), this.showTextAsTooltip === true && this.helperText ? h("ix-tooltip", { for: this.hostElement, showDelay: 500, placement: "bottom" }, this.getHelperText()) : this.getHelperText()));
  }
  get hostElement() {
    return getElement(this);
  }
};
ProgressIndicator.style = progressIndicatorCss;
export {
  ProgressIndicator as ix_progress_indicator
};
