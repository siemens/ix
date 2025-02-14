import { r as registerInstance, c as createEvent, h, H as Host } from "./global.7dd975c7.js";
const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0}:host .titleGroup .secondary{padding:0.25rem 0}:host .subtitle{margin-top:-0.125rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";
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
    return h(Host, { key: "05d59f8a62e29a886537cd2249a91cbaca560a42" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "primary", icon: "arrow-left", ghost: true, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "eb02e3fc080a29379290e77b5db2049f77c990cb", class: "titleGroup" }, h("ix-typography", { key: "de9edd86198e18414247d584f7cdb0f1e98243a3", format: this.variant === "secondary" ? "h4" : "h3", class: this.variant === "secondary" ? "secondary" : "" }, this.headerTitle), !!this.headerSubtitle && h("ix-typography", { key: "debacfac59173251d1a53dda88cba8d96021e78e", format: "h6", color: "soft", class: this.variant === "secondary" ? "subtitle" : "" }, this.headerSubtitle)), h("div", { key: "1726ad1632965b087a49052c698ddea09dd38017", class: "buttons" }, h("slot", { key: "bc275ead0f7e070a60dfb5c94fbc786fdda36fc3" })));
  }
};
ContentHeader.style = IxContentHeaderStyle0;
export {
  ContentHeader as ix_content_header
};
