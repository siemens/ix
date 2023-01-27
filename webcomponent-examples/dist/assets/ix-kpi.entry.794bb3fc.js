import { r as registerInstance, h, H as Host } from "./index.e66f90c3.js";
const kpiCss = ".sc-ix-kpi-h{display:flex;flex-grow:1;height:2.5rem;border-radius:var(--theme-kpi--border-radius);padding:0.375rem 0.25rem;min-width:0}.sc-ix-kpi-h span.sc-ix-kpi{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-kpi-h .kpi-container.sc-ix-kpi{display:flex;height:100%;width:100%;-webkit-border-after:2px solid grey;border-block-end:2px solid grey}.sc-ix-kpi-h .kpi-container.alarm.sc-ix-kpi{border-block-end-color:var(--theme-color-alarm)}.sc-ix-kpi-h .kpi-container.warning.sc-ix-kpi{border-block-end-color:var(--theme-color-warning)}.sc-ix-kpi-h .kpi-container.sc-ix-kpi .kpi-label.sc-ix-kpi{display:flex;align-items:center;color:var(--theme-kpi-display-label--color);flex-grow:1;flex-shrink:9999}.sc-ix-kpi-h .kpi-container.sc-ix-kpi .kpi-label.sc-ix-kpi ix-icon.sc-ix-kpi{-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}.sc-ix-kpi-h .kpi-container.sc-ix-kpi .kpi-value-container.sc-ix-kpi{display:flex;align-items:flex-end}.sc-ix-kpi-h .kpi-container.sc-ix-kpi .kpi-value.sc-ix-kpi{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);color:var(--theme-kpi-display-value--color)}.sc-ix-kpi-h .kpi-container.sc-ix-kpi .kpi-unit.sc-ix-kpi{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem;color:var(--theme-kpi-display-units--color)}.sc-ix-kpi-h .kpi-container.sc-ix-kpi .kpi-label.sc-ix-kpi,.sc-ix-kpi-h .kpi-container.sc-ix-kpi .kpi-unit.sc-ix-kpi{-webkit-margin-before:0.125rem;margin-block-start:0.125rem}.stacked.sc-ix-kpi-h{height:3.75rem}.stacked.sc-ix-kpi-h .kpi-container.sc-ix-kpi{justify-content:center;flex-wrap:wrap}.stacked.sc-ix-kpi-h .kpi-container.sc-ix-kpi .kpi-label.sc-ix-kpi{width:100%;justify-content:center}.sc-ix-kpi-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-kpi-h:not(.disabled):not(:disabled):hover{background-color:var(--theme-kpi-display--background--hover)}.sc-ix-kpi-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-kpi-h:not(.disabled):not(:disabled):active{background-color:var(--theme-kpi-display--background--active)}.sc-ix-kpi-h:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--focus--border-color)}";
const Kpi = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
    this.value = void 0;
    this.unit = void 0;
    this.state = "neutral";
    this.orientation = "horizontal";
  }
  getStateIcon() {
    switch (this.state) {
      case "alarm":
        return h("ix-icon", { color: "kpi-display-icon--color", name: "alarm", size: "16" });
      case "warning":
        return h("ix-icon", { color: "kpi-display-icon--color", name: "warning", size: "16" });
      default:
        return "";
    }
  }
  getTooltipText() {
    let tooltip = `${this.label}: ${this.value}`;
    if (this.unit) {
      tooltip = tooltip.concat(` ${this.unit}`);
    }
    return tooltip;
  }
  render() {
    return h(Host, { title: this.getTooltipText(), tabindex: "1", class: {
      stacked: this.orientation === "vertical"
    } }, h("div", { class: {
      "kpi-container": true,
      alarm: this.state === "alarm",
      warning: this.state === "warning"
    } }, h("span", { class: "kpi-label" }, this.getStateIcon(), h("span", { class: "kpi-label-text" }, this.label)), h("span", { class: "kpi-value-container" }, h("span", { class: "kpi-value" }, this.value), this.unit ? h("span", { class: "kpi-unit" }, this.unit) : "")));
  }
};
Kpi.style = kpiCss;
export {
  Kpi as ix_kpi
};
