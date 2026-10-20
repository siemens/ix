import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DzKOIL47.js";
import { z as iconArrowLeft } from "./index-GHlVc4OJ-sCaZA1R3.js";
const contentHeaderCss = () => `@charset "UTF-8";:host{--ix-content-header-title-group--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-content-header-header-slot--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-content-header-secondary--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-content-header-back-button--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-content-header-subtitle--margin-top:calc(     var(--si-sys-sizing-spacing-y-10) * -1   )}:host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0;min-width:0;margin-right:var(--ix-content-header-title-group--margin-right)}:host .titleGroup .headerText{min-width:0;overflow-wrap:anywhere}:host .titleGroup .headerText.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .titleGroup .header-title{font:inherit;margin:0;padding:0}:host .titleGroup .header-title.secondary{padding:var(--ix-content-header-secondary--padding)}:host .titleGroup .header-title.truncate ix-typography{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .titleGroup .headerTitleRow{display:flex}:host .titleGroup .headerTitleRow .headerText{flex:0 1 auto}:host .titleGroup .headerTitleRow .headerSlot{display:inline-flex;flex:0 0 auto;align-self:flex-start;margin-left:var(--ix-content-header-header-slot--margin-left)}:host .subtitle{margin-top:var(--ix-content-header-subtitle--margin-top)}:host .backButton{margin-right:var(--ix-content-header-back-button--margin-right)}:host .buttons{flex:0 0 auto}`;
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
    return h(Host, { key: "8160f0d8c0d9ca0d514de930d4ca55a4a8c90bac" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "c955ed00ac2c930e8a6165d502bff868f243735f", class: "titleGroup" }, h("div", { key: "9dd99e5416256dbd27c86d05f33ce61a30a034b4", class: "headerTitleRow" }, this.headerTitle && h("h2", { key: "4e4031f146bbb9f68643111c8965063160eb969d", class: {
      "header-title": true,
      secondary: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, h("ix-typography", { key: "56076378c60006e254fdb4fd67cbf99032941dbd", format: this.variant === "secondary" ? "h4" : "h3", class: {
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerTitle)), h("div", { key: "79221936cb1486168350d1a119986c4b2cf9edf6", class: "headerSlot" }, h("slot", { key: "81837f85a9cd9616a86e73e7b74f7ab9b59125ae", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "6f521663edb7ba4d6d06ce66dfdeac3c633ea1d9", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerSubtitle)), h("div", { key: "4b0f3c6d11345cf9e5f3e322d435885497646302", class: "buttons" }, h("slot", { key: "42be1284b4777a97215ac3534278e6f5c4cc68df" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
