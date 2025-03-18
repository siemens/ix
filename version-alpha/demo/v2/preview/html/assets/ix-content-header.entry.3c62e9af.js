import { r as registerInstance, c as createEvent, h, H as Host } from "./global.78f61b49.js";
import { h as iconArrowLeft } from "./index-CrTP-icT.451e0ae2.js";
const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0}:host .titleGroup .secondary{padding:0.25rem 0}:host .subtitle{margin-top:-0.125rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";
const ContentHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backButtonClick = createEvent(this, "backButtonClick", 7);
    this.variant = "primary";
    this.headerSubtitle = void 0;
    this.hasBackButton = false;
  }
  render() {
    return h(Host, { key: "928efa217011fe719ae85f242af1a6a53dd9f9a0" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "primary", icon: iconArrowLeft, ghost: true, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "9ea073b90b1b71caa19ffd417a49eed7c4308061", class: "titleGroup" }, h("ix-typography", { key: "961dced5d7117a17efe8f1830968796d1d864be3", format: this.variant === "secondary" ? "h4" : "h3", class: this.variant === "secondary" ? "secondary" : "" }, this.headerTitle), !!this.headerSubtitle && h("ix-typography", { key: "9bf3c18838430fdffbbc146b1577f5d2251dc3e4", format: "h6", "text-color": "soft", class: this.variant === "secondary" ? "subtitle" : "" }, this.headerSubtitle)), h("div", { key: "8952391cb6163493dc5ab27b690c4375ef535ac4", class: "buttons" }, h("slot", { key: "afa8f83adfda8f12a5ac50a1bde46d1e1ba60671" })));
  }
};
ContentHeader.style = contentHeaderCss;
export {
  ContentHeader as ix_content_header
};
