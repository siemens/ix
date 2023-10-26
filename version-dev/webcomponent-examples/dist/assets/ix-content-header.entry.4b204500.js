import { r as registerInstance, c as createEvent, h, H as Host } from "./index.7af07fa6.js";
const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0px}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0%}:host .subtitle{margin-top:0.5rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";
const ContentHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backButtonClick = createEvent(this, "backButtonClick", 7);
    this.variant = "primary";
    this.headerTitle = void 0;
    this.headerSubtitle = void 0;
    this.hasBackButton = false;
  }
  render() {
    return h(Host, null, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "primary", icon: "arrow-left", ghost: true, onClick: () => this.backButtonClick.emit() }) : null, h("div", { class: "titleGroup" }, h("ix-typography", { variant: this.variant === "secondary" ? "large-single" : "h2" }, this.headerTitle), this.headerSubtitle !== void 0 ? h("ix-typography", { variant: "caption", color: "soft", class: "subtitle" }, this.headerSubtitle) : null), h("div", { class: "buttons" }, h("slot", null)));
  }
};
ContentHeader.style = contentHeaderCss;
export {
  ContentHeader as ix_content_header
};
