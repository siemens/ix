import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CU4RCWGK.js";
import { z as iconArrowLeft } from "./index-BeX6RWvV-CXzUIwMU.js";
const contentHeaderCss = () => `@charset "UTF-8";:host{--ix-content-header-title-group--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-content-header-header-slot--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-content-header-secondary--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-content-header-back-button--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-content-header-subtitle--margin-top:calc(     var(--si-sys-sizing-spacing-y-10) * -1   )}:host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0;min-width:0;margin-right:var(--ix-content-header-title-group--margin-right)}:host .titleGroup .headerText{min-width:0;overflow-wrap:anywhere}:host .titleGroup .headerText.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .titleGroup .headerTitleRow{display:flex}:host .titleGroup .headerTitleRow .headerText{flex:0 1 auto}:host .titleGroup .headerTitleRow .headerSlot{display:inline-flex;flex:0 0 auto;align-self:flex-start;margin-left:var(--ix-content-header-header-slot--margin-left)}:host .titleGroup .secondary{padding:var(--ix-content-header-secondary--padding)}:host .subtitle{margin-top:var(--ix-content-header-subtitle--margin-top)}:host .backButton{margin-right:var(--ix-content-header-back-button--margin-right)}:host .buttons{flex:0 0 auto}`;
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
    return h(Host, { key: "c35101eaf04775594f6dee311d1006ea89e79dbc" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, size: "24", onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "7689f5379e22176eaea632aa916ff48993fea9f1", class: "titleGroup" }, h("div", { key: "afffea7210699c0d9f0a127c8ebc41206fc59e6a", class: "headerTitleRow" }, h("ix-typography", { key: "589ec9d94a86a2cefc8f766ddf0e6bf2a4556055", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerTitle), h("div", { key: "e17270a3dd4e6b57968912e911974c283ffd3909", class: "headerSlot" }, h("slot", { key: "5180a511b0f9f421aae0f46c0cbabf5d3fafeb11", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "ebc79ebd9f3ff911fd6ebdb49a1f41af68713321", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerSubtitle)), h("div", { key: "3835408d5c5946f406035cea3b6776887cd18917", class: "buttons" }, h("slot", { key: "417fc141b645b8fd61ea6ff8f2158b1b4b64f055" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
