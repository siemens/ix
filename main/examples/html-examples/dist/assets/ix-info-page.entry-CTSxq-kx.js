import { r as registerInstance, h, H as Host } from "./global-DzKOIL47.js";
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
    return h(Host, { key: "b14a32c395293875c5bbfd60fc936d1c24699ef6", class: { infoPage: true, "infoPage--hasActions": this.hasActions } }, h("div", { key: "fa1ef7693142981c0dbd2e168dc2048612d064f5", class: "infoPage__content" }, h("div", { key: "e8d0b6a3c4be809cbf74b0b5a4c99430403bd119", class: "content__image" }, h("slot", { key: "fb0994d26ffdd8d2c22df2a4b06da068c15a46e8", name: "image" }, h("ix-icon", { key: "3e01cca8f8dd7ffb1158c0feefa237d1a99499da", name: this.icon, color: this.iconColor, size: "32", "aria-hidden": a11yBoolean(true) }))), h("div", { key: "348cb55045ff694a7865f406ffa45461181885b7", class: "content__message" }, h("h1", { key: "d9afd5424c8f03d795e46116fb00c0f6218dcd7e" }, h("ix-typography", { key: "781c5d6b595766f69deeaebd53fd74bfc09ba5f3", format: "h1" }, this.titleText)), this.copyText && h("ix-typography", { key: "9bb4177f8579a4439482c683b13349ae49be7df5", class: "message__copy", format: "body-lg" }, this.copyText), this.instructions && h("ix-typography", { key: "14ec55708ac289a760a870a2a535e863bd241801", class: "message__instructions", "text-color": "soft" }, this.instructions)), h("div", { key: "993953adaaab2e6ecd3464b4620b01449f921b8f", class: "content__action" }, h("slot", { key: "0956e5553aef1bae3a88ca83d52309d3c5bfe440", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) }))));
  }
};
InfoPage.style = infoPageCss();
export {
  InfoPage as ix_info_page
};
