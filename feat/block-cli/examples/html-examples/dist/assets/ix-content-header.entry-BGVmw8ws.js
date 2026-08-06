import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CSIWS5Ku.js";
import { z as iconArrowLeft } from "./index-BeX6RWvV-CXzUIwMU.js";
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
    return h(Host, { key: "96c26f4ac22115bf74310e5b5452835a2004cf37" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "b08df463e801b642ce28385a8efdc4780fc9d157", class: "titleGroup" }, h("div", { key: "370221800073908fe6df955e06c0ba12505d63c1", class: "headerTitleRow" }, h("ix-typography", { key: "9a2d907bda03e160cdee524cfddeda8aafb22d04", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "1eaa70392595402fd22bb1c00bf4db12475e9159", class: "headerSlot" }, h("slot", { key: "7288b57402f99b88864f6484d18600ddb9dc43e0", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "98718625450a8a07bf8fbe738302ec28ae5cbefe", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "2c3b97e3246f8c430658f02532937144cd6e7c59", class: "buttons" }, h("slot", { key: "02a1573eab2d2cd9088ec0fcf3ebfb6b43fb1fcb" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
