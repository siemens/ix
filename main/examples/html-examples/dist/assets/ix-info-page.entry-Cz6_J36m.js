import { r as registerInstance, h, H as Host } from "./global-CqiPKlnE.js";
import { c as iconWarning } from "./index-DwLtFbui-Caa0eG-T.js";
import { a as a11yBoolean } from "./a11y-ANrt3bGr-C77I4wL-.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const infoPageCss = () => `@charset "UTF-8";:host{--ix-info-page-icon--size:var(--si-sys-sizing-size-110);--ix-info-page--padding:var(--si-sys-sizing-spacing-y-90) var(--si-sys-sizing-spacing-x-60);--ix-info-page-content--max-width:calc(     var(--si-sys-sizing-size-200) + var(--si-sys-sizing-spacing-x-130)   );--ix-info-page-content-image--margin-block-end:var(--si-sys-sizing-spacing-y-100);--ix-info-page-content-message--max-width:calc(     var(--si-sys-sizing-size-190) + var(--si-sys-sizing-spacing-x-100)   );--ix-info-page-content-message--margin-block-end:var(--si-sys-sizing-spacing-y-60);--ix-info-page-message-copy--margin-block-start:var(--si-sys-sizing-spacing-y-60);--ix-info-page-message-instructions--margin-block-start:var(--si-sys-sizing-spacing-y-60);--ix-info-page-content-action--margin-block-start:var(--si-sys-sizing-spacing-y-90);--ix-info-page--gap:var(--si-sys-sizing-spacing-x-40);--ix-info-page--padding--mobile:var(--si-sys-sizing-spacing-y-80) var(--si-sys-sizing-spacing-x-60)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host{box-sizing:border-box;display:flex;width:100%;min-height:100%;padding:var(--ix-info-page--padding)}.infoPage__content{display:flex;flex:1;flex-direction:column;align-items:center;max-width:var(--ix-info-page-content--max-width);margin:auto;text-align:center}.content__image{display:flex;align-items:end;justify-content:center;max-width:100%;margin-block-end:var(--ix-info-page-content-image--margin-block-end)}.content__image ix-icon{width:var(--ix-info-page-icon--size);height:var(--ix-info-page-icon--size);min-width:var(--ix-info-page-icon--size);min-height:var(--ix-info-page-icon--size)}::slotted([slot=image]){max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.content__message{display:flex;flex-direction:column;align-items:center;max-width:var(--ix-info-page-content-message--max-width)}h1{margin:0}:host(:not(.infoPage--hasActions)) .content__message h1:last-child{margin-block-end:var(--ix-info-page-content-message--margin-block-end)}.message__copy{margin-block-start:var(--ix-info-page-message-copy--margin-block-start)}.message__instructions{margin-block-start:var(--ix-info-page-message-instructions--margin-block-start)}.content__action{display:none;justify-content:center;width:100%;margin-block-start:var(--ix-info-page-content-action--margin-block-start)}:host(.infoPage--hasActions) .content__action{display:flex}slot[name=actions]{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--ix-info-page--gap)}@media only screen and (max-width: 48em){:host{padding:var(--ix-info-page--padding--mobile)}}`;
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
    return h(Host, { key: "a535d30ef1b0e017b61fe1fa4d9ca529e505905e", class: { infoPage: true, "infoPage--hasActions": this.hasActions } }, h("div", { key: "fd96e8b1b730e1fc150d22ca902e4947049a0130", class: "infoPage__content" }, h("div", { key: "0b2f2483f15b7cbba03a242bf2a4c82145c40e49", class: "content__image" }, h("slot", { key: "357abee2c72714b69fcc179507cc860a0b4c2683", name: "image" }, h("ix-icon", { key: "0a497d0f8b0b5730773da2e444bbe44288bba15c", name: this.icon, color: this.iconColor, size: "32", "aria-hidden": a11yBoolean(true) }))), h("div", { key: "1ec85d41ebc930ffb82ade1bb4b9f565081811c6", class: "content__message" }, h("h1", { key: "8d0076b342693c530136d97ad3a56566728ebb38" }, h("ix-typography", { key: "a1fb1ae8d706a7bab02a7f9a24444d964ccffb75", format: "h1" }, this.titleText)), this.copyText && h("ix-typography", { key: "18ccc779d1ce6094487f0bbb8b5d56dae53445ba", class: "message__copy", format: "body-lg" }, this.copyText), this.instructions && h("ix-typography", { key: "51ae1e7fd97eaf6f3b4549a86261658462a7156c", class: "message__instructions", "text-color": "soft" }, this.instructions)), h("div", { key: "96c52b6407bf22e3a5800fadca3dc87e4061ab2e", class: "content__action" }, h("slot", { key: "5e17cd52e295b7379810e60e28614704cd66b998", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) }))));
  }
};
InfoPage.style = infoPageCss();
export {
  InfoPage as ix_info_page
};
