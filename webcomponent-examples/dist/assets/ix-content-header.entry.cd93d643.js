import { r as registerInstance, c as createEvent, h, H as Host } from "./index.8b3d29f9.js";
const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0px}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0%}:host .subtitle{margin-top:0.5rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";
const IxContentHeaderStyle0 = contentHeaderCss;
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
    return h(Host, { key: "9376b89cd7ea2f1a169e0b2fce2e2a7aa8e5f46a" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "primary", icon: "arrow-left", ghost: true, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "6141d3d548f39bff6176fcefd6149fe044792626", class: "titleGroup" }, h("ix-typography", { key: "5f97d37172b511b47b7c803beea7e99c15203757", variant: this.variant === "secondary" ? "large-single" : "h2" }, this.headerTitle), this.headerSubtitle !== void 0 ? h("ix-typography", { variant: "caption", color: "soft", class: "subtitle" }, this.headerSubtitle) : null), h("div", { key: "38152287e955d5b149ac6c4bd5df99d4920ca587", class: "buttons" }, h("slot", { key: "1d1bcc39278e91ff5da85460149ed76399ccbb1c" })));
  }
};
ContentHeader.style = IxContentHeaderStyle0;
export {
  ContentHeader as ix_content_header
};
