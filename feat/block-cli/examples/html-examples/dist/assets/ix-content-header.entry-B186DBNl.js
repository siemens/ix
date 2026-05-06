import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Dfa5QLOG.js";
import { o as iconArrowLeft } from "./index-DLhpBBEI-C3tPjcQ4.js";
const contentHeaderCss = () => `:host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0;min-width:0;white-space:nowrap;margin-right:0.5rem}:host .titleGroup .titleOverflow{overflow:hidden;text-overflow:ellipsis}:host .titleGroup .headerTitleRow{display:flex}:host .titleGroup .headerTitleRow .headerSlot{display:inline-flex;margin-left:0.5rem}:host .titleGroup .secondary{padding:0.25rem 0}:host .subtitle{margin-top:-0.125rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}`;
const ContentHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backButtonClick = createEvent(this, "backButtonClick", 7);
  }
  /**
   * Variant of content header
   */
  variant = "primary";
  /**
   * Title of Header
   */
  headerTitle;
  /**
   * Subtitle of Header
   */
  headerSubtitle = void 0;
  /**
   * Display a back button
   */
  hasBackButton = false;
  /**
   * Triggered when back button is clicked
   */
  backButtonClick;
  render() {
    return h(Host, { key: "783bdd2708e78179a56e73f8f58100f4e318e3f9" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "9828addc99040b52edd725b0954fc56a851f1e27", class: "titleGroup" }, h("div", { key: "1d70d7389b11a62871c7e383ed8f3e333a9984b7", class: "headerTitleRow" }, h("ix-typography", { key: "65970360f1055111839b677115c61f5b30e2d196", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "4c6f4e5b0ffe94b2689955a6a10ae6dbd3641804", class: "headerSlot" }, h("slot", { key: "85575ed0cd0f9bb55bcccdbc133d9fa3d804385b", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "6fb3f7f8e6a8de24b336769cea3ec27d276d556b", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "de679e0c1c57484b828862d825608c4acca4e792", class: "buttons" }, h("slot", { key: "4a47e02d7772f1b8820fd6f2fa7a37bc6e704388" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
