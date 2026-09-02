import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
import { z as iconArrowLeft } from "./index-BeX6RWvV-CXzUIwMU.js";
const contentHeaderCss = () => `:host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0;min-width:0;margin-right:0.5rem}:host .titleGroup .headerText{min-width:0;overflow-wrap:anywhere}:host .titleGroup .headerText.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .titleGroup .headerTitleRow{display:flex}:host .titleGroup .headerTitleRow .headerText{flex:0 1 auto}:host .titleGroup .headerTitleRow .headerSlot{display:inline-flex;flex:0 0 auto;align-self:flex-start;margin-left:0.5rem}:host .titleGroup .secondary{padding:0.25rem 0}:host .subtitle{margin-top:-0.125rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}`;
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
   * Controls how the title and subtitle handle limited horizontal space.
   * Ellipsis visually truncates the text without adding a tooltip.
   *
   * @since 6.0.0
   */
  textOverflow = "wrap";
  /**
   * Display a back button
   */
  hasBackButton = false;
  /**
   * Triggered when back button is clicked
   */
  backButtonClick;
  render() {
    return h(Host, { key: "c35101eaf04775594f6dee311d1006ea89e79dbc" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "9296e5195740e78f2805189b98b4e1a6df53a59e", class: "titleGroup" }, h("div", { key: "860c38e8915448bda67989b2c56b4c9aca201625", class: "headerTitleRow" }, h("ix-typography", { key: "ac84efa66fd458ccab61401bbdc462aee750be92", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerTitle), h("div", { key: "8befe0074d65ee08dfbe3122842a1fc85b1e3663", class: "headerSlot" }, h("slot", { key: "67a23af3377e0bbcba8b84676f1504f8b98adb45", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "dec31856079604286061ec954ad8eb4c65503317", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerSubtitle)), h("div", { key: "c14dc38b605bb9f80eabf55b17284895c1de199d", class: "buttons" }, h("slot", { key: "853f837b184c24c93d3d7eff9152eca57669bbdd" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
