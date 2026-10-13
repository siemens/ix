import { r as registerInstance, c as createEvent, h, H as Host } from "./global-uYf8zSPS.js";
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
    return h(Host, { key: "4710a833ab1205f5d76a4d8aa154b5f9ff35061c" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, size: "24", onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "f1b0504283a99243fe11072540ec7fc519e85ca3", class: "titleGroup" }, h("div", { key: "ad4eb2e71a7f4c0aef51350dfc38acd0787870ca", class: "headerTitleRow" }, h("ix-typography", { key: "62d55dfa047ac2123c30dcfa3c1dd8962763f7c9", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerTitle), h("div", { key: "1dac1f43938f868aa517926c75cf55b83b5596cc", class: "headerSlot" }, h("slot", { key: "3d9127b8a08d5d1970c24fc38f6ff76be18ac2d5", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "1935f0e7b33799309ed5ba88451fdc3d66f947dc", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerSubtitle)), h("div", { key: "e3e5f530ca44ae86ea0485536bec03dd88b82b7f", class: "buttons" }, h("slot", { key: "22bec7ff94e5b526697ebeae02199e30c1c0fc24" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
