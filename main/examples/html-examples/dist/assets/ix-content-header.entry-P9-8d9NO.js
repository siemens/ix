import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DWZvlbOg.js";
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
    return h(Host, { key: "dfa342e3adb24523aea6213840f4532610ec1e31" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "03c9e94e7ccb13429bd74a206001a22fc76a99ca", class: "titleGroup" }, h("div", { key: "3d3d4ab63c2db4840e498cd2714e33c32b5a6c7c", class: "headerTitleRow" }, this.headerTitle && h("h2", { key: "9aadd54a9f8d962e2a72a0047d217fbda7d06f6b", class: {
      "header-title": true,
      secondary: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, h("ix-typography", { key: "3141b63fcacc28515268d449ea75ea6e0be6cdcd", format: this.variant === "secondary" ? "h4" : "h3", class: {
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerTitle)), h("div", { key: "da1b6b3f5bde8f4997a296051317ed568d4fc787", class: "headerSlot" }, h("slot", { key: "248614fff18598131b1ab52cc7f0a51f228949da", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "dc5ba583127e474a6b099b0fae72c1c80b31a933", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerSubtitle)), h("div", { key: "f4526c14672eed261e1e534736cc675d967c4a14", class: "buttons" }, h("slot", { key: "b12a0359d2fbb243385c2ab2761656fad6f9d03f" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
