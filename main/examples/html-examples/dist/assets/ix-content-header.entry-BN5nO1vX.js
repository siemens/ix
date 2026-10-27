import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DtRSe4QO.js";
import { D as iconArrowLeft } from "./index-DwLtFbui-Caa0eG-T.js";
const contentHeaderCss = () => `@charset "UTF-8";:host{--ix-content-header-title-group--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-content-header-header-slot--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-content-header-secondary--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-content-header-back-button--margin-right:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0;min-width:0;margin-right:var(--ix-content-header-title-group--margin-right)}:host .titleGroup .headerText{min-width:0;overflow-wrap:anywhere}:host .titleGroup .headerText.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .titleGroup .header-title{font:inherit;margin:0;padding:0}:host .titleGroup .header-title.secondary{padding:var(--ix-content-header-secondary--padding)}:host .titleGroup .header-title.truncate ix-typography{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .titleGroup .headerTitleRow{display:flex}:host .titleGroup .headerTitleRow .headerText{flex:0 1 auto}:host .titleGroup .headerTitleRow .headerSlot{display:inline-flex;flex:0 0 auto;align-self:flex-start;margin-left:var(--ix-content-header-header-slot--margin-left)}:host .backButton{margin-right:var(--ix-content-header-back-button--margin-right)}:host .buttons{flex:0 0 auto}`;
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
    return h(Host, { key: "c3ea304d0b217d615e1b2f7721796aa77175dc62" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "b27f3efd15f0b84bd392ee3c025b4f7be9509f12", class: "titleGroup" }, h("div", { key: "ff47820416f971c9fbba4250b6b6c16e3e218c6e", class: "headerTitleRow" }, this.headerTitle && h("h2", { key: "000e087a46e38fa1c657705e1dec2f7fcbac8172", class: {
      "header-title": true,
      secondary: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, h("ix-typography", { key: "66d8d2a3fc6fd6f70a5e4f196914a940cbc2816e", format: this.variant === "secondary" ? "h4" : "h3", class: {
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerTitle)), h("div", { key: "789725589a79f4ec98c986c4f6f4a16a00b804d7", class: "headerSlot" }, h("slot", { key: "508a422c5a8b29216a695f4388d6c25735153376", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "39fb2712aef57475b41fe0ac98cb95d1ee47dfac", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerSubtitle)), h("div", { key: "6f0b6969d10df5cad50bcd6847d37c02e71ebf5b", class: "buttons" }, h("slot", { key: "ae68d377c5c95fad5a8eddc52ec360b5f855521f" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
