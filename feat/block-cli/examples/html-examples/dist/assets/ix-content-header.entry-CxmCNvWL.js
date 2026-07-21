import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CRrZCTD3.js";
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
    return h(Host, { key: "62630a46f03d6012662600069d96b44fd3a9cbc9" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "24197765a936dd3c528ce7afdd49fc270f40544a", class: "titleGroup" }, h("div", { key: "e51ba022637aace9c3a790b2bb2a48c39f098d86", class: "headerTitleRow" }, h("ix-typography", { key: "5bb695c6fa4e3a1909c129cd2d3fdb2360418e5a", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "16315269ef11f48a7b8548183849cf12d7da47c0", class: "headerSlot" }, h("slot", { key: "588000773bb01176397f0633dfaa0c01d4bc09bd", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "8bed50073aaabf3a1916e5dcd48a54c13936e78c", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "6fa6b7b764bb4478d4096f0f33c2a3a0869ad32d", class: "buttons" }, h("slot", { key: "d8d7b16b17dd892fbb3ccadb183243665a0713be" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
