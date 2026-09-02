import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
import { c as iconWarning, r as iconAlarm } from "./index-BeX6RWvV-CXzUIwMU.js";
const kpiCss = () => `@charset "UTF-8";:host{--ix-kpi-display--border-color--default:var(--si-sys-border-2);--ix-kpi-display--border-color--alarm:var(--si-sys-border-danger);--ix-kpi-display--border-color--warning:var(--si-sys-border-warning);--ix-kpi--border-radius:var(--theme-default-border-radius);--ix-kpi-display--background--active:var(--si-sys-background-active);--ix-kpi-display--background--hover:var(--si-sys-background-hover);--ix-kpi-display-icon--color:var(--si-sys-text-primary);--ix-kpi-display-label--color:var(--si-sys-text-secondary);--ix-kpi-display-units--color:var(--si-sys-text-primary);--ix-kpi-display-value--color:var(--si-sys-text-primary)}:host{display:flex;flex-grow:1;height:2.5rem;border-radius:var(--ix-kpi--border-radius);padding:0.375rem 0.25rem;min-width:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .kpi-container{display:flex;height:100%;width:100%;border-block-end:2px solid grey}:host .kpi-container.alarm{border-block-end-color:var(--ix-kpi-display--border-color--alarm)}:host .kpi-container.warning{border-block-end-color:var(--ix-kpi-display--border-color--warning)}:host .kpi-container .kpi-label{display:flex;align-items:center;color:var(--ix-kpi-display-label--color);flex-grow:1;flex-shrink:9999}:host .kpi-container .kpi-label ix-icon{margin-inline-end:0.25rem}:host .kpi-container .kpi-value-container{display:flex;align-items:flex-end}:host .kpi-container .kpi-value{color:var(--ix-kpi-display-value--color);font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .kpi-container .kpi-unit{margin-inline-start:0.5rem;color:var(--ix-kpi-display-units--color)}:host .kpi-container .kpi-label,:host .kpi-container .kpi-unit{margin-block-start:0.125rem}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):hover,:host:not(.disabled):not(:disabled).hover{background-color:var(--ix-kpi-display--background--hover)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):active,:host:not(.disabled):not(:disabled).active{background-color:var(--ix-kpi-display--background--active)}:host:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--focus--border-color)}:host(.stacked){height:3.75rem}:host(.stacked) .kpi-container{justify-content:center;flex-wrap:wrap}:host(.stacked) .kpi-container .kpi-label{width:100%;justify-content:center}`;
const Kpi = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   *
   */
  label;
  /**
   * ARIA label for the alarm icon
   *
   * @since 3.2.0
   */
  ariaLabelAlarmIcon;
  /**
   * ARIA label for the warning icon
   *
   * @since 3.2.0
   */
  ariaLabelWarningIcon;
  /**
   *
   */
  value;
  /**
   *
   */
  unit;
  /**
   *
   */
  state = "neutral";
  /**
   *
   */
  orientation = "horizontal";
  getStateIcon() {
    switch (this.state) {
      case "alarm":
        return h("ix-icon", { style: { color: "var(--ix-kpi-display-icon--color)" }, name: iconAlarm, size: "16", "aria-label": this.ariaLabelAlarmIcon });
      case "warning":
        return h("ix-icon", { style: { color: "var(--ix-kpi-display-icon--color)" }, name: iconWarning, size: "16", "aria-label": this.ariaLabelWarningIcon });
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
    return h(Host, { key: "d8c3f3b3a4c84b6f4a6ba289c7fc05112fd3eb9f", title: this.getTooltipText(), tabindex: "1", class: {
      stacked: this.orientation === "vertical"
    } }, h("div", { key: "54112d67a74f9e1de9f7393a25becac047f604eb", class: {
      "kpi-container": true,
      alarm: this.state === "alarm",
      warning: this.state === "warning"
    } }, h("span", { key: "81afb8b71c5ef7d6566240334e6bf0269a5a808f", class: "kpi-label" }, this.getStateIcon(), h("span", { key: "a44cf977578cd54a860387364ed0556fe56f8717", class: "kpi-label-text" }, this.label)), h("span", { key: "77d560d18f3f9f8bf0f7c9ab74d032a173c3e0a8", class: "kpi-value-container" }, h("span", { key: "86a7c11af57100324503f109c076e6fdbbf7291e", class: "kpi-value" }, this.value), this.unit ? h("span", { class: "kpi-unit" }, this.unit) : "")));
  }
};
Kpi.style = kpiCss();
export {
  Kpi as ix_kpi
};
