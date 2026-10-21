import { r as registerInstance, h, H as Host } from "./global-D_olgeRE.js";
import { c as iconWarning } from "./index-GHlVc4OJ-sCaZA1R3.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
const infoPageCss = () => `@charset "UTF-8";:host{--ix-info-page-image-width:calc(     var(--si-sys-sizing-size-160) + var(--si-sys-sizing-spacing-x-70)   );--ix-info-page-image-height:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-90) + var(--si-sys-sizing-spacing-y-20)   )}:host{--ix-info-page--padding:var(--si-sys-sizing-spacing-y-90) var(--si-sys-sizing-spacing-x-60);--ix-info-page-content--max-width:calc(     var(--si-sys-sizing-size-200) + var(--si-sys-sizing-spacing-x-130)   );--ix-info-page-content-image--margin-block-end:calc(     var(--si-sys-sizing-spacing-y-90) + var(--si-sys-sizing-spacing-y-40)   );--ix-info-page-content-message--max-width:calc(     var(--si-sys-sizing-size-190) + var(--si-sys-sizing-spacing-x-100)   );--ix-info-page-content-message--margin-block-end:var(--si-sys-sizing-spacing-y-60);--ix-info-page-message-copy--margin-block-start:var(--si-sys-sizing-spacing-y-60);--ix-info-page-message-instructions--margin-block-start:var(--si-sys-sizing-spacing-y-60);--ix-info-page-content-action--margin-block-start:var(--si-sys-sizing-spacing-y-90);--ix-info-page--gap:var(--si-sys-sizing-spacing-x-40);--ix-info-page--padding--mobile:var(--si-sys-sizing-spacing-y-80) var(--si-sys-sizing-spacing-x-60)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host{box-sizing:border-box;display:flex;width:100%;min-height:100%;padding:var(--ix-info-page--padding)}.infoPage__content{display:flex;flex:1;flex-direction:column;align-items:center;max-width:var(--ix-info-page-content--max-width);margin:auto;text-align:center}.content__image{display:flex;align-items:end;justify-content:center;width:var(--ix-info-page-image-width);height:var(--ix-info-page-image-height);max-width:100%;margin-block-end:var(--ix-info-page-content-image--margin-block-end)}.content__image ix-icon{transform:scale(2)}::slotted([slot=image]){max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.content__message{display:flex;flex-direction:column;align-items:center;max-width:var(--ix-info-page-content-message--max-width)}h1{margin:0}:host(:not(.infoPage--hasActions)) .content__message h1:last-child{margin-block-end:var(--ix-info-page-content-message--margin-block-end)}.message__copy{margin-block-start:var(--ix-info-page-message-copy--margin-block-start)}.message__instructions{margin-block-start:var(--ix-info-page-message-instructions--margin-block-start)}.content__action{display:none;justify-content:center;width:100%;margin-block-start:var(--ix-info-page-content-action--margin-block-start)}:host(.infoPage--hasActions) .content__action{display:flex}slot[name=actions]{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--ix-info-page--gap)}@media only screen and (max-width: 48em){:host{padding:var(--ix-info-page--padding--mobile)}}`;
const InfoPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  hasActions = false;
  /**
   * Icon displayed above the title.
   *
   * @since 6.0.0
   */
  icon = iconWarning;
  /**
   * Color of the default icon.
   *
   * @since 6.0.0
   */
  iconColor = "--si-sys-color-background-warning";
  /**
   * Short and concise title describing the topic.
   *
   * @since 6.0.0
   */
  titleText;
  /**
   * Optional explanation of the topic and how it can be resolved.
   *
   * @since 6.0.0
   */
  copyText;
  /**
   * Optional instructions describing what the user should do next.
   *
   * @since 6.0.0
   */
  instructions;
  handleActionsSlotChange(event) {
    const slot = event.target;
    this.hasActions = slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }
  render() {
    return h(Host, { key: "a9e707c1172f71b772e96924ba4d5db13f5c2a50", class: { infoPage: true, "infoPage--hasActions": this.hasActions } }, h("div", { key: "2332ae77dccc06db7157b82cacc2f6128901852b", class: "infoPage__content" }, h("div", { key: "a676f523f01a4dc3b934271908805d9baefca446", class: "content__image" }, h("slot", { key: "1a9178b6222dacab08d509c6227250aec113201a", name: "image" }, h("ix-icon", { key: "1bdd84b80fb9c4805c4f35376e42ad7cce7421ff", name: this.icon, color: this.iconColor, size: "32", "aria-hidden": a11yBoolean(true) }))), h("div", { key: "7ad7f82d8447d43ca4eb0bd4a30590112fe4368f", class: "content__message" }, h("h1", { key: "60842971568dd8cd752b266ebd8ff581ed91ac77" }, h("ix-typography", { key: "f6c3fd5d746e48f4821a70fc95ade3aa03f71da8", format: "h1" }, this.titleText)), this.copyText && h("ix-typography", { key: "c4ddb865e8a89b67dc2bcfaaba215814234b2c59", class: "message__copy", format: "body-lg" }, this.copyText), this.instructions && h("ix-typography", { key: "20ef0cfb3440b93a279f479388a1641dc5e0160a", class: "message__instructions", "text-color": "soft" }, this.instructions)), h("div", { key: "0a99adddf874d1752a1c549279b2824e64fb128e", class: "content__action" }, h("slot", { key: "a3d8f0afbcd8239e57167ecbe014d4c2bdf1855f", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) }))));
  }
};
InfoPage.style = infoPageCss();
export {
  InfoPage as ix_info_page
};
