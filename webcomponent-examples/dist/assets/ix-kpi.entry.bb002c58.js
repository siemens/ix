import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
const kpiCss = ":host{display:flex;flex-grow:1;height:2.5rem;border-radius:var(--theme-kpi--border-radius);padding:0.375rem 0.25rem;min-width:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .kpi-container{display:flex;height:100%;width:100%;border-block-end:2px solid grey}:host .kpi-container.alarm{border-block-end-color:var(--theme-color-alarm)}:host .kpi-container.warning{border-block-end-color:var(--theme-color-warning)}:host .kpi-container .kpi-label{display:flex;align-items:center;color:var(--theme-kpi-display-label--color);flex-grow:1;flex-shrink:9999}:host .kpi-container .kpi-label ix-icon{margin-inline-end:0.25rem}:host .kpi-container .kpi-value-container{display:flex;align-items:flex-end}:host .kpi-container .kpi-value{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);color:var(--theme-kpi-display-value--color)}:host .kpi-container .kpi-unit{margin-inline-start:0.5rem;color:var(--theme-kpi-display-units--color)}:host .kpi-container .kpi-label,:host .kpi-container .kpi-unit{margin-block-start:0.125rem}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):hover{background-color:var(--theme-kpi-display--background--hover)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):active,:host:not(.disabled):not(:disabled).active{background-color:var(--theme-kpi-display--background--active)}:host:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--focus--border-color)}:host(.stacked){height:3.75rem}:host(.stacked) .kpi-container{justify-content:center;flex-wrap:wrap}:host(.stacked) .kpi-container .kpi-label{width:100%;justify-content:center}";
const IxKpiStyle0 = kpiCss;
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
    return h(Host, { key: "a15aba9d140c89b2072909e2518c344da4c93a5d", title: this.getTooltipText(), tabindex: "1", class: {
      stacked: this.orientation === "vertical"
    } }, h("div", { key: "5116d6ee8bf39c59b5a75de087e819544e5d55d7", class: {
      "kpi-container": true,
      alarm: this.state === "alarm",
      warning: this.state === "warning"
    } }, h("span", { key: "55034df17c563c3d11d8b04fbd09417dbc33aa39", class: "kpi-label" }, this.getStateIcon(), h("span", { key: "7034420124a2120271bbde7b36012de65aecb2e1", class: "kpi-label-text" }, this.label)), h("span", { key: "2985854b162f37b387f3f9d7a1a2ad07d42cd8bd", class: "kpi-value-container" }, h("span", { key: "a3ef308e885ddd1c2b521a76afa2af8ea9a5562d", class: "kpi-value" }, this.value), this.unit ? h("span", { class: "kpi-unit" }, this.unit) : "")));
  }
};
Kpi.style = IxKpiStyle0;
export {
  Kpi as ix_kpi
};
