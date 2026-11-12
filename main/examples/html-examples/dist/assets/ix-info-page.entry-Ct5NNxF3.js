import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-BfsU3hSZ.js";
import { f as iconWarning } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import "./preload-helper-UZRgTS1n.js";
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
    return h(Host, { key: "01d589e9613ecdbb3c92a3ad2ecb52cbd5c62c8f", class: { infoPage: true, "infoPage--hasActions": this.hasActions } }, h("div", { key: "3789d15e7931b02c0db5b2721bf7f0c536385700", class: "infoPage__content" }, h("div", { key: "f70c482be6172afb6e74ab14cdbe7e0a450c1b5d", class: "content__image" }, h("slot", { key: "0b4f81a84041af208bd38780816e88fccac3d34e", name: "image" }, h("ix-icon", { key: "205dc83ddf46b468209a5f7b6226789eb8419425", name: this.icon, color: this.iconColor, size: "32", "aria-hidden": a11yBoolean(true) }))), h("div", { key: "03628497a69c7f89d064b44c6cc9ad322bbff0a2", class: "content__message" }, h("h1", { key: "9105f4141057719ef7a5d59bdb7f71c48ea52a69" }, h("ix-typography", { key: "5693f60af8ca45d09f75f388f2388a3a838984b7", format: "h1" }, this.titleText)), this.copyText && h("ix-typography", { key: "9c7e9cd3583cea91866a09305549355b26989631", class: "message__copy", format: "body-lg" }, this.copyText), this.instructions && h("ix-typography", { key: "d073d865da3bf51256365bb418e5a77608abf3d0", class: "message__instructions", "text-color": "secondary" }, this.instructions)), h("div", { key: "fe853d480b032d9462e0c7b9aaeb7ce2e1753262", class: "content__action" }, h("slot", { key: "9d9a8d90c1d62c49148eee94bbd154c28b6af30a", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) }))));
  }
};
InfoPage.style = infoPageCss();
export {
  InfoPage as ix_info_page
};
