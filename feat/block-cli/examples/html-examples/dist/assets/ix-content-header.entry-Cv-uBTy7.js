import { r as registerInstance, c as createEvent, h, H as Host } from "./global-C8IWpzMv.js";
import { m as iconArrowLeft } from "./index-DgUGsIlh-CLxQRaVd.js";
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
    return h(Host, { key: "a61d7b6c2fd5acb235309d305415ad65f5ce7973" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "2335d2ecc251ac597ba44ed4a2118f55a9aee0b1", class: "titleGroup" }, h("div", { key: "5ee6f5ff0190db5eabcef408f2a6dd7d33e849f4", class: "headerTitleRow" }, h("ix-typography", { key: "d28f71094ff9ce884244550ad38c5102a69204b1", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "2d9220da2dde3daa97cb840142a800fee6b9ab46", class: "headerSlot" }, h("slot", { key: "d2499c8e87aee3df6d0f1cac3d988028f7b3e9a8", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "3662affb55aa59855698023c61569d0677dae616", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "4ca4cf12383e46d6fd0e293ecbfd6111062ba3fe", class: "buttons" }, h("slot", { key: "ea3a32226d5f9d5383c93fa123e01b07744d64e5" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
