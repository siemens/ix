import { r as registerInstance, h, H as Host } from "./global-BTJSiofB.js";
import { c as iconWarning } from "./index-BeX6RWvV-CXzUIwMU.js";
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
    return h(Host, { key: "2c2bf796c1b6344209be98487f7a1d2f332db051", class: { infoPage: true, "infoPage--hasActions": this.hasActions } }, h("div", { key: "04a78a63e4b18092d23e22555510669f67ed0690", class: "infoPage__content" }, h("div", { key: "ffe160ae045f63b289312d24559c10e6d557100a", class: "content__image" }, h("slot", { key: "d2e1ed4430f9dbad29d36dfb15a5c0f894078d74", name: "image" }, h("ix-icon", { key: "dbc977bb221cd71bbc2f2131b7d55e842e1b2c86", name: this.icon, color: this.iconColor, size: "32", "aria-hidden": a11yBoolean(true) }))), h("div", { key: "d26d8c8809073f36e053c0d174d72dd3c6abb8af", class: "content__message" }, h("h1", { key: "01a4b3d5aa559a5b51aae35b8437463ba2176d66" }, h("ix-typography", { key: "0ffedb87abd065741e0289091d05d44e6736b92b", format: "h1" }, this.titleText)), this.copyText && h("ix-typography", { key: "2e205eeda38d659cebc93778892a90013a691e08", class: "message__copy", format: "body-lg" }, this.copyText), this.instructions && h("ix-typography", { key: "3b35815838fdd29fbc74964bb2699ec0b522ca85", class: "message__instructions", "text-color": "soft" }, this.instructions)), h("div", { key: "1bbd9299b4bf75dd915a0f0aea86cf84480ef6c5", class: "content__action" }, h("slot", { key: "7f696defd2ff6b91ede04ecb8736297733e9c37d", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) }))));
  }
};
InfoPage.style = infoPageCss();
export {
  InfoPage as ix_info_page
};
