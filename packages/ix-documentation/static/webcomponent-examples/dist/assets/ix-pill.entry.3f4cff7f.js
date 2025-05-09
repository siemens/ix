import { r as registerInstance, h, H as Host, g as getElement } from "./global.7dd975c7.js";
const pillCss = ":host{display:inline-block;position:relative;height:1.25rem;max-height:1.25rem;margin-left:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.container{display:inline-flex;width:inherit;box-sizing:border-box;position:relative;align-items:center;border-radius:100px;padding:0.5rem;height:2rem;max-height:2rem;cursor:default}.container .with-icon{margin-right:0.25rem}.container .hidden{display:none;width:0;margin-right:0}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:0.5rem}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.outline.icon{padding-left:calc(0.75rem - 1px)}.container.outline:not(.icon){padding-left:calc(0.5rem - 1px)}.container.outline.closable:not(.inactive){padding-right:calc(0.25rem - 1px)}.container.outline.closable.inactive,.container.outline:not(.closable){padding-right:calc(0.5rem - 1px)}.container.outline.icon:not(.closable){padding-right:calc(0.75rem - 1px)}.container:not(.outline).icon{padding-left:0.75rem}.container:not(.outline):not(.icon){padding-left:0.5rem}.container:not(.outline).closable:not(.inactive){padding-right:0.25rem}.container:not(.outline).closable.inactive{padding-right:0.5rem}.container:not(.outline):not(.closable).icon{padding-right:0.75rem}.container:not(.outline):not(.closable):not(.icon){padding-right:0.5rem}.container.primary{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}.container.primary .close-button{color:var(--theme-chip-primary--color);--ix-icon-button-color:var(--theme-chip-primary--color);pointer-events:auto}.container.primary.outline{color:var(--theme-chip-primary-outline--color);background-color:transparent;border:solid 1px var(--theme-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--theme-chip-primary-outline--color);--ix-icon-button-color:var(--theme-chip-primary-outline--color)}.container.outline{border-width:1px;border-style:solid}.container.alarm{color:var(--theme-color-alarm--contrast)}.container.alarm:not(.outline){background-color:var(--theme-color-alarm)}.container.alarm:not(.outline) .close-button{color:var(--theme-color-alarm--contrast);--ix-icon-button-color:var(--theme-color-alarm--contrast)}.container.alarm.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-alarm)}.container.critical{color:var(--theme-color-critical--contrast)}.container.critical:not(.outline){background-color:var(--theme-color-critical)}.container.critical:not(.outline) .close-button{color:var(--theme-color-critical--contrast);--ix-icon-button-color:var(--theme-color-critical--contrast)}.container.critical.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-critical)}.container.warning{color:var(--theme-color-warning--contrast)}.container.warning:not(.outline){background-color:var(--theme-color-warning)}.container.warning:not(.outline) .close-button{color:var(--theme-color-warning--contrast);--ix-icon-button-color:var(--theme-color-warning--contrast)}.container.warning.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-warning)}.container.info{color:var(--theme-color-info--contrast)}.container.info:not(.outline){background-color:var(--theme-color-info)}.container.info:not(.outline) .close-button{color:var(--theme-color-info--contrast);--ix-icon-button-color:var(--theme-color-info--contrast)}.container.info.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-info)}.container.neutral{color:var(--theme-color-neutral--contrast)}.container.neutral:not(.outline){background-color:var(--theme-color-neutral)}.container.neutral:not(.outline) .close-button{color:var(--theme-color-neutral--contrast);--ix-icon-button-color:var(--theme-color-neutral--contrast)}.container.neutral.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-neutral)}.container.success{color:var(--theme-color-success--contrast)}.container.success:not(.outline){background-color:var(--theme-color-success)}.container.success:not(.outline) .close-button{color:var(--theme-color-success--contrast);--ix-icon-button-color:var(--theme-color-success--contrast)}.container.success.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-success)}:host .container{height:100%;justify-content:center}:host .container .with-icon{margin-right:0}:host .container.outline.icon{padding-left:0.4375rem;padding-right:0.4375rem}:host .container:not(.outline).icon{padding-left:0.5rem;padding-right:0.5rem}:host .with-gap{gap:0.25rem}:host(.align-left) .container{justify-content:flex-start}";
const IxPillStyle0 = pillCss;
const Pill = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "primary";
    this.outline = false;
    this.icon = void 0;
    this.background = void 0;
    this.color = void 0;
    this.pillColor = void 0;
    this.alignLeft = false;
    this.iconOnly = false;
  }
  componentWillLoad() {
    this.checkIfContentAvailable();
  }
  checkIfContentAvailable() {
    const hasChildren = this.hostElement.children.length > 0;
    const hasTextContent = !!this.hostElement.textContent;
    this.iconOnly = !hasChildren && !hasTextContent;
  }
  render() {
    var _a, _b;
    let customStyle = {};
    if (this.variant === "custom") {
      customStyle = {
        color: (_a = this.pillColor) !== null && _a !== void 0 ? _a : this.color,
        [this.outline ? "borderColor" : "backgroundColor"]: this.background
      };
    }
    return h(Host, { key: "cf932b24a24c809c20ea8bc85cc71c6b2202c975", style: this.variant === "custom" ? {
      "--ix-icon-button-color": (_b = this.pillColor) !== null && _b !== void 0 ? _b : this.color
    } : {}, title: this.hostElement.textContent, class: {
      "align-left": this.alignLeft
    } }, h("div", { key: "362019713872b5b86e0652ec6abaf839601812e0", style: Object.assign({}, customStyle), class: {
      container: true,
      outline: this.outline,
      inactive: false,
      alarm: this.variant === "alarm",
      critical: this.variant === "critical",
      info: this.variant === "info",
      neutral: this.variant === "neutral",
      primary: this.variant === "primary",
      success: this.variant === "success",
      warning: this.variant === "warning",
      custom: this.variant === "custom",
      closable: false,
      icon: !!this.icon,
      "with-gap": !this.iconOnly
    } }, h("ix-icon", { key: "1373ff2c8bdc7efb83c4b29f6ee33aec624f408d", class: {
      "with-icon": true,
      hidden: this.icon === void 0 || this.icon === ""
    }, name: this.icon, size: "16" }), h("span", { key: "29b1e6315c5a2a65c0c9fc35b86ead8e7f69bfe7", class: "slot-container" }, h("slot", { key: "a43419e4efbdcdf54318fb261c1db932c1e08d92", onSlotchange: () => this.checkIfContentAvailable() }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
Pill.style = IxPillStyle0;
export {
  Pill as ix_pill
};
