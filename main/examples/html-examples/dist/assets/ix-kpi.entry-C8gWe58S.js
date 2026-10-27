import { r as registerInstance, h, H as Host } from "./global-Bs2gnYtf.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-DCMEdep1.js";
import { c as iconWarningOctagon, d as iconInfo, b as iconSuccess, e as iconWarningRhomb, g as iconAlarm, f as iconWarning } from "./index-Bj5Kmzp6-B1fOSLOf.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const KPI_STATE_ICONS = {
  warning: iconWarning,
  danger: iconAlarm,
  caution: iconWarningRhomb,
  success: iconSuccess,
  information: iconInfo,
  critical: iconWarningOctagon
};
const kpiCss = () => `@charset "UTF-8";:host{--ix-kpi--outline-color--focus:var(--focus--border-color);--ix-kpi-display--border-color--accent:var(--si-sys-color-border-accent);--ix-kpi-display--border-color--caution:var(--si-sys-color-border-caution);--ix-kpi-display--border-color--critical:var(--si-sys-color-border-critical);--ix-kpi-display--border-color--danger:var(--si-sys-color-border-danger);--ix-kpi-display--border-color--information:var(--si-sys-color-border-information);--ix-kpi-display--border-color--success:var(--si-sys-color-border-success);--ix-kpi-display--border-color--warning:var(--si-sys-color-border-warning);--ix-kpi-display--background--active:var(--si-sys-color-background-selected);--ix-kpi-display--background--hover:var(--si-sys-color-background-hover);--ix-kpi-display-icon--color:var(--si-sys-color-text-primary);--ix-kpi-display-label--color:var(--si-sys-color-text-secondary);--ix-kpi-display-units--color:var(--si-sys-color-text-primary);--ix-kpi-display-value--color:var(--si-sys-color-text-primary);--ix-kpi-container--border-block-end-color:var(--si-sys-color-border-2)}:host{--ix-kpi--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-kpi--height:var(--si-sys-sizing-size-90);--ix-kpi--padding:var(--si-sys-sizing-spacing-y-30) var(--si-sys-sizing-spacing-x-20);--ix-kpi-icon--margin-inline-end:var(--si-sys-sizing-spacing-x-20);--ix-kpi-unit--margin-inline-start:var(--si-sys-sizing-spacing-x-40);--ix-kpi-stacked--height:var(--si-sys-sizing-size-110);--ix-kpi-container--border-width:var(--si-sys-sizing-border-width-selected);--ix-kpi-label--margin-block-start:var(--si-sys-sizing-spacing-y-10);--ix-kpi--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:flex;flex-grow:1;height:var(--ix-kpi--height);border-radius:var(--ix-kpi--border-radius);padding:var(--ix-kpi--padding);min-width:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .kpi-container{display:flex;height:100%;width:100%;border-block-end:var(--ix-kpi-container--border-width) solid var(--ix-kpi-container--border-block-end-color)}:host .kpi-container.warning{border-block-end-color:var(--ix-kpi-display--border-color--warning)}:host .kpi-container.danger{border-block-end-color:var(--ix-kpi-display--border-color--danger)}:host .kpi-container.caution{border-block-end-color:var(--ix-kpi-display--border-color--caution)}:host .kpi-container.success{border-block-end-color:var(--ix-kpi-display--border-color--success)}:host .kpi-container.information{border-block-end-color:var(--ix-kpi-display--border-color--information)}:host .kpi-container.accent{border-block-end-color:var(--ix-kpi-display--border-color--accent)}:host .kpi-container.critical{border-block-end-color:var(--ix-kpi-display--border-color--critical)}:host .kpi-container .kpi-label{display:flex;align-items:center;color:var(--ix-kpi-display-label--color);flex-grow:1;flex-shrink:9999}:host .kpi-container .kpi-label ix-icon{margin-inline-end:var(--ix-kpi-icon--margin-inline-end)}:host .kpi-container .kpi-value-container{display:flex;align-items:flex-end}:host .kpi-container .kpi-value{color:var(--ix-kpi-display-value--color);font:var(--si-sys-typography-h3);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .kpi-container .kpi-unit{margin-inline-start:var(--ix-kpi-unit--margin-inline-start);color:var(--ix-kpi-display-units--color)}:host .kpi-container .kpi-label,:host .kpi-container .kpi-unit{margin-block-start:var(--ix-kpi-label--margin-block-start)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):hover,:host:not(.disabled):not(:disabled).hover{background-color:var(--ix-kpi-display--background--hover)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):active,:host:not(.disabled):not(:disabled).active{background-color:var(--ix-kpi-display--background--active)}:host:not(.disabled):not(:disabled):focus-visible{outline:var(--ix-kpi--outline-width--focus) solid var(--ix-kpi--outline-color--focus)}:host(.stacked){height:var(--ix-kpi-stacked--height)}:host(.stacked) .kpi-container{justify-content:center;flex-wrap:wrap}:host(.stacked) .kpi-container .kpi-label{width:100%;justify-content:center}`;
const Kpi = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   *
   */
  label;
  /**
   *
   */
  value;
  /**
   *
   */
  unit;
  /**
   * Status of the KPI.
   * `neutral` and `accent` show no status icon.
   * Status icons are decorative (`aria-hidden`); convey status in visible text or the host accessible name when it matters for assistive technology.
   */
  state = "neutral";
  /**
   *
   */
  orientation = "horizontal";
  getStateIcon() {
    const icon = KPI_STATE_ICONS[this.state];
    if (!icon) {
      return "";
    }
    return h("ix-icon", { color: "--ix-kpi-display-icon--color", name: icon, size: "16", "aria-hidden": a11yBoolean(true) });
  }
  getTooltipText() {
    let tooltip = `${this.label}: ${this.value}`;
    if (this.unit) {
      tooltip = tooltip.concat(` ${this.unit}`);
    }
    return tooltip;
  }
  render() {
    return h(Host, { key: "2b029f64ee7d62c862d90a3ab2bc0dfbb58f8937", title: this.getTooltipText(), tabindex: "1", class: {
      stacked: this.orientation === "vertical"
    } }, h("div", { key: "9312ff59961197e5077a38be864bc462795672ba", class: { "kpi-container": true, [this.state]: true } }, h("span", { key: "1a9fde0267eb2dd2fe47519d832a4967caa193ea", class: "kpi-label" }, this.getStateIcon(), h("span", { key: "6dadd27a79fe597ca2601b79ee9d15a61b68939f", class: "kpi-label-text" }, this.label)), h("span", { key: "13ec8af79ad683a33a5c796dbd0b70cd6a895242", class: "kpi-value-container" }, h("span", { key: "09fcc1f3249c20155fd4387b9ec22b4ca5e993bc", class: "kpi-value" }, this.value), this.unit ? h("span", { class: "kpi-unit" }, this.unit) : "")));
  }
};
Kpi.style = kpiCss();
export {
  Kpi as ix_kpi
};
