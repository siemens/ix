import { r as registerInstance, g as getElement, h, F as Fragment, H as Host } from "./global-CU4RCWGK.js";
import { V as iconCirclePause, a as iconSuccess, c as iconWarning, d as iconInfo, b as iconError } from "./index-BeX6RWvV-CXzUIwMU.js";
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
      return 20;
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
const progressIndicatorCss = () => `@charset "UTF-8";:host{--ix-progress-indicator-fill--background:var(--si-sys-color-border-accent-hover);--ix-progress-indicator-fill-error--background:var(--si-sys-color-border-danger);--ix-progress-indicator-fill-info--background:var(--si-sys-color-border-information);--ix-progress-indicator-fill-paused--background:var(--si-sys-color-border-1);--ix-progress-indicator-fill-success--background:var(--si-sys-color-border-success);--ix-progress-indicator-fill-warning--background:var(--si-sys-color-border-warning);--ix-progress-indicator-helper--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-helper-icon--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-icon-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-helper-icon-info--color:var(--si-sys-color-text-information);--ix-progress-indicator-helper-icon-paused--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-icon-success--color:var(--si-sys-color-text-success);--ix-progress-indicator-helper-icon-warning--color:var(--si-sys-color-text-warning);--ix-progress-indicator-helper-info--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-paused--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-success--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-warning--color:var(--si-sys-color-text-primary);--ix-progress-indicator-label--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-label-info--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-paused--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-success--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-warning--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-track--background:var(--si-sys-color-border-4);--ix-progress-indicator-track-error--background:var(--si-sys-color-background-danger-subtle);--ix-progress-indicator-track-info--background:var(--si-sys-color-background-information-subtle);--ix-progress-indicator-track-paused--background:var(--si-sys-color-border-4);--ix-progress-indicator-track-success--background:var(--si-sys-color-background-success-subtle);--ix-progress-indicator-track-warning--background:var(--si-sys-color-background-warning-subtle)}:host{--ix-progress-indicator-progress-container--margin:var(--si-sys-sizing-spacing-y-40)     0;--ix-progress-indicator-linear-progress-container--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-progress-indicator-progress-bar--transition-duration:0.3s}:host{--ix-progress-indicator-fill--background:var(--si-sys-color-border-accent-hover);--ix-progress-indicator-fill-error--background:var(--si-sys-color-border-danger);--ix-progress-indicator-fill-info--background:var(--si-sys-color-border-information);--ix-progress-indicator-fill-paused--background:var(--si-sys-color-border-1);--ix-progress-indicator-fill-success--background:var(--si-sys-color-border-success);--ix-progress-indicator-fill-warning--background:var(--si-sys-color-border-warning);--ix-progress-indicator-helper--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-helper-icon--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-icon-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-helper-icon-info--color:var(--si-sys-color-text-information);--ix-progress-indicator-helper-icon-paused--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-icon-success--color:var(--si-sys-color-text-success);--ix-progress-indicator-helper-icon-warning--color:var(--si-sys-color-text-warning);--ix-progress-indicator-helper-info--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-paused--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-success--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-warning--color:var(--si-sys-color-text-primary);--ix-progress-indicator-label--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-label-info--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-paused--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-success--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-warning--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-track--background:var(--si-sys-color-border-4);--ix-progress-indicator-track-error--background:var(--si-sys-color-background-danger-subtle);--ix-progress-indicator-track-info--background:var(--si-sys-color-background-information-subtle);--ix-progress-indicator-track-paused--background:var(--si-sys-color-border-4);--ix-progress-indicator-track-success--background:var(--si-sys-color-background-success-subtle);--ix-progress-indicator-track-warning--background:var(--si-sys-color-background-warning-subtle)}:host{--ix-progress-indicator-progress-container--gap:var(--si-sys-sizing-spacing-x-20);--ix-progress-indicator-progress-container--margin:var(--si-sys-sizing-spacing-y-40)     0}:host{--ix-progress-indicator-fill--background:var(--si-sys-color-border-accent-hover);--ix-progress-indicator-fill-error--background:var(--si-sys-color-border-danger);--ix-progress-indicator-fill-info--background:var(--si-sys-color-border-information);--ix-progress-indicator-fill-paused--background:var(--si-sys-color-border-1);--ix-progress-indicator-fill-success--background:var(--si-sys-color-border-success);--ix-progress-indicator-fill-warning--background:var(--si-sys-color-border-warning);--ix-progress-indicator-helper--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-helper-icon--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-icon-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-helper-icon-info--color:var(--si-sys-color-text-information);--ix-progress-indicator-helper-icon-paused--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-helper-icon-success--color:var(--si-sys-color-text-success);--ix-progress-indicator-helper-icon-warning--color:var(--si-sys-color-text-warning);--ix-progress-indicator-helper-info--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-paused--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-success--color:var(--si-sys-color-text-primary);--ix-progress-indicator-helper-warning--color:var(--si-sys-color-text-primary);--ix-progress-indicator-label--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-error--color:var(--si-sys-color-text-danger);--ix-progress-indicator-label-info--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-paused--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-success--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-label-warning--color:var(--si-sys-color-text-secondary);--ix-progress-indicator-track--background:var(--si-sys-color-border-4);--ix-progress-indicator-track-error--background:var(--si-sys-color-background-danger-subtle);--ix-progress-indicator-track-info--background:var(--si-sys-color-background-information-subtle);--ix-progress-indicator-track-paused--background:var(--si-sys-color-border-4);--ix-progress-indicator-track-success--background:var(--si-sys-color-background-success-subtle);--ix-progress-indicator-track-warning--background:var(--si-sys-color-background-warning-subtle)}:host{--ix-progress-indicator--width:calc(     var(--si-sys-sizing-size-170) + var(--si-sys-sizing-spacing-x-120)   );--ix-progress-indicator-progress-container--gap:var(--si-sys-sizing-spacing-x-20);--ix-progress-indicator-label--margin:var(--si-sys-sizing-spacing-y-40) 0 var(--si-sys-sizing-spacing-y-20)     0;--ix-progress-indicator-helper-text--margin:var(--si-sys-sizing-spacing-y-20)     0;--ix-progress-indicator-helper-text--gap:var(--si-sys-sizing-spacing-x-20);--ix-progress-indicator-icon--margin:var(--si-sys-sizing-spacing-y-10) var(--si-sys-sizing-spacing-x-10);--ix-progress-indicator--margin:var(--si-sys-sizing-spacing-y-40) 0;--ix-progress-indicator-extra-small--margin:var(--si-sys-sizing-spacing-y-20)     0;--ix-progress-indicator-small--margin:var(--si-sys-sizing-spacing-y-30) 0;--ix-progress-indicator-linear-slot--min-width:calc(     var(--si-sys-sizing-size-80) + var(--si-sys-sizing-spacing-x-20)   );--ix-progress-indicator-xs--height:var(--si-sys-sizing-size-10);--ix-progress-indicator-sm--height:var(--si-sys-sizing-size-20);--ix-progress-indicator-md--height:var(--si-sys-sizing-size-30);--ix-progress-indicator-lg--height:var(--si-sys-sizing-size-50);--ix-progress-indicator-xl--height:var(--si-sys-sizing-size-70)}:host{display:block;position:relative;width:var(--ix-progress-indicator--width);height:-moz-fit-content;height:fit-content}:host .progress-container{display:flex;width:100%;align-items:center;gap:var(--ix-progress-indicator-progress-container--gap);flex-wrap:nowrap}:host .label{margin:var(--ix-progress-indicator-label--margin)}:host .helper-text{display:flex;align-items:center;margin:var(--ix-progress-indicator-helper-text--margin);gap:var(--ix-progress-indicator-helper-text--gap);color:var(--ix-progress-indicator-helper--color)}:host .helper-text ix-icon{margin:var(--ix-progress-indicator-icon--margin);color:var(--ix-progress-indicator-helper-icon--color)}:host .helper-text.success{color:var(--ix-progress-indicator-helper-success--color)}:host .helper-text.success ix-icon{color:var(--ix-progress-indicator-helper-icon-success--color)}:host .helper-text.error{color:var(--ix-progress-indicator-helper-error--color)}:host .helper-text.error ix-icon{color:var(--ix-progress-indicator-helper-icon-error--color)}:host .helper-text.info{color:var(--ix-progress-indicator-helper-info--color)}:host .helper-text.info ix-icon{color:var(--ix-progress-indicator-helper-icon-info--color)}:host .helper-text.warning{color:var(--ix-progress-indicator-helper-warning--color)}:host .helper-text.warning ix-icon{color:var(--ix-progress-indicator-helper-icon-warning--color)}:host .helper-text.paused{color:var(--ix-progress-indicator-helper-paused--color)}:host .helper-text.paused ix-icon{color:var(--ix-progress-indicator-helper-icon-paused--color)}:host .helper-text .text.align-left{text-align:start}:host .helper-text .text.align-right{text-align:end}:host .helper-text .text.align-center{text-align:center}:host .progress-indicator{display:flex;flex-direction:column}:host .progress-indicator.text-center{align-items:center}:host .progress-indicator.text-left{align-items:flex-start}:host .progress-indicator.text-right{align-items:flex-end}:host .progress-indicator{--ix-progress-indicator-margin:var(--ix-progress-indicator--margin);height:100%}:host .progress-indicator.xs{--ix-progress-indicator-height:var(--ix-progress-indicator-xs--height);--ix-progress-indicator-margin:var(     --ix-progress-indicator-extra-small--margin   )}:host .progress-indicator.sm{--ix-progress-indicator-height:var(--ix-progress-indicator-sm--height);--ix-progress-indicator-margin:var(     --ix-progress-indicator-small--margin   )}:host .progress-indicator.md{--ix-progress-indicator-height:var(--ix-progress-indicator-md--height)}:host .progress-indicator.lg{--ix-progress-indicator-height:var(--ix-progress-indicator-lg--height)}:host .progress-indicator.xl{--ix-progress-indicator-height:var(--ix-progress-indicator-xl--height)}:host .progress-indicator{--ix-progress-indicator-color:var(     --ix-progress-indicator-fill--background   )}:host .progress-indicator.success{--ix-progress-indicator-color:var(     --ix-progress-indicator-fill-success--background   )}:host .progress-indicator.error{--ix-progress-indicator-color:var(     --ix-progress-indicator-fill-error--background   )}:host .progress-indicator.info{--ix-progress-indicator-color:var(     --ix-progress-indicator-fill-info--background   )}:host .progress-indicator.warning{--ix-progress-indicator-color:var(     --ix-progress-indicator-fill-warning--background   )}:host .progress-indicator.paused{--ix-progress-indicator-color:var(     --ix-progress-indicator-fill-paused--background   )}:host(.linear) .progress-indicator.xs{--ix-progress-indicator-height:var(--ix-progress-indicator-xs--height)}:host(.linear) .progress-indicator.sm{--ix-progress-indicator-height:var(--ix-progress-indicator-sm--height)}:host(.linear) .progress-indicator.md{--ix-progress-indicator-height:var(--ix-progress-indicator-md--height)}:host(.linear) .progress-indicator.lg{--ix-progress-indicator-height:var(--ix-progress-indicator-lg--height)}:host(.linear) .progress-indicator.xl{--ix-progress-indicator-height:var(--ix-progress-indicator-xl--height)}:host(.linear) .linear-progress-container{width:100%;height:var(--ix-progress-indicator-height);background-color:var(--ix-progress-indicator-track--background);border-radius:var(--ix-progress-indicator-linear-progress-container--border-radius);overflow:hidden;margin:var(--ix-progress-indicator-margin, var(--ix-progress-indicator-progress-container--margin))}:host(.linear) .linear-progress-container.success{background-color:var(--ix-progress-indicator-track-success--background)}:host(.linear) .linear-progress-container.error{background-color:var(--ix-progress-indicator-track-error--background)}:host(.linear) .linear-progress-container.info{background-color:var(--ix-progress-indicator-track-info--background)}:host(.linear) .linear-progress-container.warning{background-color:var(--ix-progress-indicator-track-warning--background)}:host(.linear) .linear-progress-container.paused{background-color:var(--ix-progress-indicator-track-paused--background)}:host(.linear) .progress{width:100%;height:100%;position:relative}:host(.linear) .progress-bar{height:100%;background-color:var(--ix-progress-indicator-color);transition:width var(--ix-progress-indicator-progress-bar--transition-duration) ease}:host(.linear) .linear-slot{min-width:var(--ix-progress-indicator-linear-slot--min-width)}:host(.circular) .circular-progress-container{--ix-progress-indicator-track-color:var(     --ix-progress-indicator-track--background   );display:flex;align-items:center;width:100%;gap:var(--ix-progress-indicator-progress-container--gap);margin:var(--ix-progress-indicator-margin, var(--ix-progress-indicator-progress-container--margin))}:host(.circular) .circular-progress-container.align-left{justify-content:flex-start}:host(.circular) .circular-progress-container.align-center{justify-content:center}:host(.circular) .circular-progress-container.align-right{justify-content:flex-end}:host(.circular) .circular-progress-container.success{--ix-progress-indicator-track-color:var(     --ix-progress-indicator-track-success--background   )}:host(.circular) .circular-progress-container.error{--ix-progress-indicator-track-color:var(     --ix-progress-indicator-track-error--background   )}:host(.circular) .circular-progress-container.info{--ix-progress-indicator-track-color:var(     --ix-progress-indicator-track-info--background   )}:host(.circular) .circular-progress-container.warning{--ix-progress-indicator-track-color:var(     --ix-progress-indicator-track-warning--background   )}:host(.circular) .circular-progress-container.paused{--ix-progress-indicator-track-color:var(     --ix-progress-indicator-track-paused--background   )}:host(.circular) .slotted-container{height:100%}:host(.circular) .slotted-container.slotted-container-inside{display:flex;align-items:center;justify-content:center;width:100%;height:100%}`;
const ProgressIndicator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * The type of progress indicator to use.
   */
  type = "linear";
  /**
   * Size of the progress indicator.
   *
   * For **circular**, diameters are:
   * - **xs**: 16px.
   * - **sm**: 20px.
   * - **md**: 32px (default).
   * - **lg**: 48px.
   * - **xl**: 64px.
   */
  size = "md";
  /**
   * The value of the progress indicator.
   */
  value = 0;
  /**
   * The minimum value of the progress indicator.
   */
  min = 0;
  /**
   * The maximum value of the progress indicator.
   */
  max = 100;
  /**
   * The state of the progress indicator.
   * This is used to indicate the current state of the progress indicator.
   */
  status = "default";
  /**
   * The label for the progress indicator.
   */
  label;
  /**
   * The helper text for the progress indicator.
   */
  helperText;
  /**
   * The text alignment for the helper text.
   * Can be 'left', 'center', or 'right'.
   */
  textAlignment = "left";
  /**
   * Show the helper text as a tooltip
   */
  showTextAsTooltip = false;
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
    return h(Host, { key: "a9cec48531c12ab2567c6cb3816b856f2ffcda09", class: {
      linear: this.type === "linear",
      circular: this.type === "circular"
    }, tabIndex: -1 }, h("div", { key: "6f0276cc93ba94b1c3ccb97c757368d01191012d", class: {
      "progress-indicator": true,
      [this.size]: true,
      [this.status]: true,
      ["text-center"]: this.textAlignment === "center",
      ["text-left"]: this.textAlignment === "left",
      ["text-right"]: this.textAlignment === "right"
    } }, this.label && h("ix-typography", { key: "0a1cae653752b08520b219ff33039ca385c71e29", format: "body", textColor: this.status === "error" ? "alarm" : "soft", class: "label" }, this.label), h("div", { key: "0e6520fc77fd4f4fba057c4fec5775c949103bd7", class: "progress-container" }, this.type === "linear" ? h(Fragment, null, h(LinearBar, { value: clampedValue, status: this.status }), h("div", { class: "linear-slot" }, h("slot", null))) : h(CircularProgress, { status: this.status, alignment: this.textAlignment, value: clampedValue, size: this.size }, h("slot", null))), this.showTextAsTooltip === true && this.helperText ? h("ix-tooltip", { for: this.hostElement, showDelay: 500, placement: "bottom" }, this.getHelperText()) : this.getHelperText()));
  }
};
ProgressIndicator.style = progressIndicatorCss();
export {
  ProgressIndicator as ix_progress_indicator
};
