import { r as registerInstance, c as createEvent, h, H as Host } from "./global-BlVZeLef.js";
import { n as iconArrowLeft } from "./index-8HpPmDK_-DinFJk0z.js";
const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0;min-width:0;white-space:nowrap;margin-right:0.5rem}:host .titleGroup .titleOverflow{overflow:hidden;text-overflow:ellipsis}:host .titleGroup .headerTitleRow{display:flex}:host .titleGroup .headerTitleRow .headerSlot{display:inline-flex;margin-left:0.5rem}:host .titleGroup .secondary{padding:0.25rem 0}:host .subtitle{margin-top:-0.125rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";
const ContentHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backButtonClick = createEvent(this, "backButtonClick", 7);
    this.variant = "primary";
    this.headerSubtitle = void 0;
    this.hasBackButton = false;
  }
  render() {
    return h(Host, { key: "4da480f75eca86a5c012d89d74080a98aa7c5ce1" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "7e1b03ab253ad3443a66defff5a05587557e8299", class: "titleGroup" }, h("div", { key: "9c08999ce27dcaf3dbf69efc3fa838f413077243", class: "headerTitleRow" }, h("ix-typography", { key: "dcaee6948d4cf3933e2ebc4604138cf1355cf4d6", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "fde1406c9d4ec1a5ed1223143c74413ebfe49433", class: "headerSlot" }, h("slot", { key: "6500465bb7692f383f292e9b6c89c14e37e5287a", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "2b9f59725fd249dc5b0adab648a3be71d84358c4", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "37803368aa60496fe8a2abeca5ec08b8e80b1d0b", class: "buttons" }, h("slot", { key: "4da54774a27e570e899f5a13fe96333d3c1d47b6" })));
  }
};
ContentHeader.style = contentHeaderCss;
export {
  ContentHeader as ix_content_header
};
