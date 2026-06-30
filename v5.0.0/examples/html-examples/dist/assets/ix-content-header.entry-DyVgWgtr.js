import { r as registerInstance, c as createEvent, h, H as Host } from "./global-F68Qu5y3.js";
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
    return h(Host, { key: "bb5a5946a34e948cd6745fe44cf6c47ad1c0699f" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "45fc225088b93dc313a53607f69bb6cc92a28790", class: "titleGroup" }, h("div", { key: "94b04fd9e375eb423c89d0540d7aa549258a70de", class: "headerTitleRow" }, h("ix-typography", { key: "e5436983e26363ba01f79405ad0f9674421e4a61", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "faa99a8c8b9391d5b5212814275867aebda98c27", class: "headerSlot" }, h("slot", { key: "564495f59beef2b38a67839456ffaa54ad764882", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "c425b7cd29bbf662277ba402e439fa73166f1513", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "4219c3f2746a26a5dd2511c54723ddc838d3a9d8", class: "buttons" }, h("slot", { key: "1d8b363039d7f881ef10cbfcce0c74aa4e99db23" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
