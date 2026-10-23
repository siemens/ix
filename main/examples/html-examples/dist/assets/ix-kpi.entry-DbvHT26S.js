import { r as registerInstance, h, H as Host } from "./global-D3FU0h8K.js";
import { c as iconWarning, v as iconAlarm } from "./index-DwLtFbui-Caa0eG-T.js";
const kpiCss = () => `@charset "UTF-8";:host{--ix-kpi--outline-color--focus:var(--focus--border-color);--ix-kpi-display--border-color--default:var(--si-sys-color-border-2);--ix-kpi-display--border-color--alarm:var(--si-sys-color-border-danger);--ix-kpi-display--border-color--warning:var(--si-sys-color-border-warning);--ix-kpi-display--background--active:var(--si-sys-color-background-selected);--ix-kpi-display--background--hover:var(--si-sys-color-background-hover);--ix-kpi-display-icon--color:var(--si-sys-color-text-primary);--ix-kpi-display-label--color:var(--si-sys-color-text-secondary);--ix-kpi-display-units--color:var(--si-sys-color-text-primary);--ix-kpi-display-value--color:var(--si-sys-color-text-primary);--ix-kpi-container--border-block-end-color:grey}:host{--ix-kpi--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-kpi--height:var(--si-sys-sizing-size-90);--ix-kpi--padding:var(--si-sys-sizing-spacing-y-30) var(--si-sys-sizing-spacing-x-20);--ix-kpi-icon--margin-inline-end:var(--si-sys-sizing-spacing-x-20);--ix-kpi-unit--margin-inline-start:var(--si-sys-sizing-spacing-x-40);--ix-kpi-stacked--height:var(--si-sys-sizing-size-110);--ix-kpi-container--border-width:var(--si-sys-sizing-border-width-selected);--ix-kpi-label--margin-block-start:var(--si-sys-sizing-spacing-y-10);--ix-kpi--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:flex;flex-grow:1;height:var(--ix-kpi--height);border-radius:var(--ix-kpi--border-radius);padding:var(--ix-kpi--padding);min-width:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .kpi-container{display:flex;height:100%;width:100%;border-block-end:var(--ix-kpi-container--border-width) solid var(--ix-kpi-container--border-block-end-color)}:host .kpi-container.alarm{border-block-end-color:var(--ix-kpi-display--border-color--alarm)}:host .kpi-container.warning{border-block-end-color:var(--ix-kpi-display--border-color--warning)}:host .kpi-container .kpi-label{display:flex;align-items:center;color:var(--ix-kpi-display-label--color);flex-grow:1;flex-shrink:9999}:host .kpi-container .kpi-label ix-icon{margin-inline-end:var(--ix-kpi-icon--margin-inline-end)}:host .kpi-container .kpi-value-container{display:flex;align-items:flex-end}:host .kpi-container .kpi-value{color:var(--ix-kpi-display-value--color);font:var(--si-sys-typography-h3);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .kpi-container .kpi-unit{margin-inline-start:var(--ix-kpi-unit--margin-inline-start);color:var(--ix-kpi-display-units--color)}:host .kpi-container .kpi-label,:host .kpi-container .kpi-unit{margin-block-start:var(--ix-kpi-label--margin-block-start)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):hover,:host:not(.disabled):not(:disabled).hover{background-color:var(--ix-kpi-display--background--hover)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):active,:host:not(.disabled):not(:disabled).active{background-color:var(--ix-kpi-display--background--active)}:host:not(.disabled):not(:disabled):focus-visible{outline:var(--ix-kpi--outline-width--focus) solid var(--ix-kpi--outline-color--focus)}:host(.stacked){height:var(--ix-kpi-stacked--height)}:host(.stacked) .kpi-container{justify-content:center;flex-wrap:wrap}:host(.stacked) .kpi-container .kpi-label{width:100%;justify-content:center}`;
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
    return h(Host, { key: "08238584cf2d747e170413a97eb21d60f2075c7b", title: this.getTooltipText(), tabindex: "1", class: {
      stacked: this.orientation === "vertical"
    } }, h("div", { key: "421f7928f603024a3821f45efcd2ffeb06fa6567", class: {
      "kpi-container": true,
      alarm: this.state === "alarm",
      warning: this.state === "warning"
    } }, h("span", { key: "20ae407c4da19097885fd38c68c9b41ac4b2e95f", class: "kpi-label" }, this.getStateIcon(), h("span", { key: "41270d462fb3de8b5e3eb95cf77f63ed57344c83", class: "kpi-label-text" }, this.label)), h("span", { key: "a2801ae0ef2d60c0477221fb17aca70d23a83184", class: "kpi-value-container" }, h("span", { key: "5e34f2ad384dc07cd8c3df0514b846955bececee", class: "kpi-value" }, this.value), this.unit ? h("span", { class: "kpi-unit" }, this.unit) : "")));
  }
};
Kpi.style = kpiCss();
export {
  Kpi as ix_kpi
};
