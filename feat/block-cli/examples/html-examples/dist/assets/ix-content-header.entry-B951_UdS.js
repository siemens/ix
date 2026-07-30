import { r as registerInstance, c as createEvent, h, H as Host } from "./global-J1r-v9CX.js";
import { o as iconArrowLeft } from "./index-BcWSlcx_-DijX28Uj.js";
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
    return h(Host, { key: "d337894af2636b1bd80c5054a1c59659575b54c1" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "eca9213a6057a6bbfc9cc1ee00ee9b661df3907c", class: "titleGroup" }, h("div", { key: "496942a8a961fbc696331aa36557ac35c609b0e2", class: "headerTitleRow" }, h("ix-typography", { key: "c09f70b9b8ebb998787749307b9bbf370df50f62", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "46dc2f78c35d50a77f13f1ec3e76997e7c884fdd", class: "headerSlot" }, h("slot", { key: "164b57b584d9c7e5f49d3eda2fd6290c35ca9139", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "89df5cd499c52101133bcc0b0072a0c188f84926", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "b29bd1cc8e880f1b0bc87d2910a02655c8a1f3bf", class: "buttons" }, h("slot", { key: "6b68916f2d443f8d22ce3dc5c7073be2b916fe6e" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
