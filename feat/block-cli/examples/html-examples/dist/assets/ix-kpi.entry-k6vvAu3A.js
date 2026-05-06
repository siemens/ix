import { r as registerInstance, h, H as Host } from "./global-Dfa5QLOG.js";
import { a as iconWarning, w as iconAlarm } from "./index-DLhpBBEI-C3tPjcQ4.js";
const kpiCss = () => `:host{display:flex;flex-grow:1;height:2.5rem;border-radius:var(--theme-kpi--border-radius);padding:0.375rem 0.25rem;min-width:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .kpi-container{display:flex;height:100%;width:100%;border-block-end:2px solid grey}:host .kpi-container.alarm{border-block-end-color:var(--theme-color-alarm)}:host .kpi-container.warning{border-block-end-color:var(--theme-color-warning)}:host .kpi-container .kpi-label{display:flex;align-items:center;color:var(--theme-kpi-display-label--color);flex-grow:1;flex-shrink:9999}:host .kpi-container .kpi-label ix-icon{margin-inline-end:0.25rem}:host .kpi-container .kpi-value-container{display:flex;align-items:flex-end}:host .kpi-container .kpi-value{color:var(--theme-kpi-display-value--color);font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .kpi-container .kpi-unit{margin-inline-start:0.5rem;color:var(--theme-kpi-display-units--color)}:host .kpi-container .kpi-label,:host .kpi-container .kpi-unit{margin-block-start:0.125rem}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):hover,:host:not(.disabled):not(:disabled).hover{background-color:var(--theme-kpi-display--background--hover)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):active,:host:not(.disabled):not(:disabled).active{background-color:var(--theme-kpi-display--background--active)}:host:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--focus--border-color)}:host(.stacked){height:3.75rem}:host(.stacked) .kpi-container{justify-content:center;flex-wrap:wrap}:host(.stacked) .kpi-container .kpi-label{width:100%;justify-content:center}`;
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
        return h("ix-icon", { color: "kpi-display-icon--color", name: iconAlarm, size: "16", "aria-label": this.ariaLabelAlarmIcon });
      case "warning":
        return h("ix-icon", { color: "kpi-display-icon--color", name: iconWarning, size: "16", "aria-label": this.ariaLabelWarningIcon });
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
    return h(Host, { key: "1657fdd2ef36b8c1fba7b5bf14540737f15154e0", title: this.getTooltipText(), tabindex: "1", class: {
      stacked: this.orientation === "vertical"
    } }, h("div", { key: "7c3af26d05bd85a80a8acbdebbc2d5ae00b304c5", class: {
      "kpi-container": true,
      alarm: this.state === "alarm",
      warning: this.state === "warning"
    } }, h("span", { key: "356dd476f7f91a837b5e4f3d1bee4c4956113d12", class: "kpi-label" }, this.getStateIcon(), h("span", { key: "5a5c3043ec2c54ac2bddbf70e54220c80d0772a9", class: "kpi-label-text" }, this.label)), h("span", { key: "fa675d517c49b4617cb02c06efc2ce5fad11a6d6", class: "kpi-value-container" }, h("span", { key: "56bda8257733a117d89a4bcc57b4264115c8271e", class: "kpi-value" }, this.value), this.unit ? h("span", { class: "kpi-unit" }, this.unit) : "")));
  }
};
Kpi.style = kpiCss();
export {
  Kpi as ix_kpi
};
