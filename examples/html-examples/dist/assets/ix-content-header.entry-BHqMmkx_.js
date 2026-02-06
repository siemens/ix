import { r as registerInstance, c as createEvent, h, H as Host } from "./global-wi9VneMU.js";
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
    return h(Host, { key: "b422be3706aac399ed76b4c491d61e2da8561b24" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "7606ba97f834f591a78fc2cca74bdaf3b3a09feb", class: "titleGroup" }, h("div", { key: "df174e297a1b2075bcab0182a80f626162d1c319", class: "headerTitleRow" }, h("ix-typography", { key: "d8ab10dc801306dafe0f3e6e39ed93e0fa162ca1", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "e24d6b450426931aaead3732fa20161bc5aab4e2", class: "headerSlot" }, h("slot", { key: "e9a471492f2693fc6abe546d1febbc06834fef1c", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "5fdb5ebce68a3aae09df3299093bca156468933c", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "6648f93246d2e8d79cc2d3e7eae65009d578632c", class: "buttons" }, h("slot", { key: "1c3ee8084521a9a799e3b2444b1edc0c1cee5066" })));
  }
};
ContentHeader.style = contentHeaderCss;
export {
  ContentHeader as ix_content_header
};
