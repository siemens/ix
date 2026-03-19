import { r as registerInstance, c as createEvent, h, H as Host } from "./global-C_dy4gBz.js";
import { o as iconArrowLeft } from "./index-DFdo1y_u-D_8X33yw.js";
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
    return h(Host, { key: "a23fc0a343116d655593784d0be077f1b63cfe37" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "4f440169bff4f6a21b733f7325e63a047d9783ca", class: "titleGroup" }, h("div", { key: "a56c593d34240aa4323814bfbc9ee06470747f18", class: "headerTitleRow" }, h("ix-typography", { key: "44fb372bc184bba4257d67fb3baf90c9c971ce4d", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "e0421ea7b61629b26cf53288f529fa77fcfa38a5", class: "headerSlot" }, h("slot", { key: "c7fc44892288cb76736a1f99dd68af5a56e53fcd", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "5c30be3eff2353c18b9782b71fd18d7e3f2cd609", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "d36aa2d486f097b4da46ba675dff02e0feb1d077", class: "buttons" }, h("slot", { key: "7d80dd698f48571f1c35220ca5d34d872f0a1872" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
