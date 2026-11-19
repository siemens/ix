import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-C-hoZ9qs.js";
import { f as iconWarning } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const infoPageCss = () => `@charset "UTF-8";:host{--ix-info-page-icon--size:var(--si-sys-sizing-size-110);--ix-info-page--padding:var(--si-sys-sizing-spacing-y-90) var(--si-sys-sizing-spacing-x-60);--ix-info-page-content--max-width:calc(var(--si-sys-sizing-size-200) + var(--si-sys-sizing-spacing-x-130));--ix-info-page-content-image--margin-block-end:var(--si-sys-sizing-spacing-y-100);--ix-info-page-content-message--max-width:calc(var(--si-sys-sizing-size-190) + var(--si-sys-sizing-spacing-x-100));--ix-info-page-content-message--margin-block-end:var(--si-sys-sizing-spacing-y-60);--ix-info-page-message-description--margin-block-start:var(--si-sys-sizing-spacing-y-60);--ix-info-page-content-action--margin-block-start:var(--si-sys-sizing-spacing-y-90);--ix-info-page--gap:var(--si-sys-sizing-spacing-x-40);--ix-info-page--padding--mobile:var(--si-sys-sizing-spacing-y-80) var(--si-sys-sizing-spacing-x-60)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host{box-sizing:border-box;display:flex;width:100%;min-height:100%;padding:var(--ix-info-page--padding)}.infoPage__content{display:flex;flex:1;flex-direction:column;align-items:center;max-width:var(--ix-info-page-content--max-width);margin:auto;text-align:center}.content__image{display:flex;align-items:end;justify-content:center;max-width:100%;margin-block-end:var(--ix-info-page-content-image--margin-block-end)}.content__image ix-icon{width:var(--ix-info-page-icon--size);height:var(--ix-info-page-icon--size);min-width:var(--ix-info-page-icon--size);min-height:var(--ix-info-page-icon--size)}::slotted([slot=image]){max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.content__message{display:flex;flex-direction:column;align-items:center;max-width:var(--ix-info-page-content-message--max-width)}h1{margin:0}:host(:not(.infoPage--hasActions)) .content__message h1:last-child{margin-block-end:var(--ix-info-page-content-message--margin-block-end)}.message__description{margin-block-start:var(--ix-info-page-message-description--margin-block-start)}.content__action{display:none;justify-content:center;width:100%;margin-block-start:var(--ix-info-page-content-action--margin-block-start)}:host(.infoPage--hasActions) .content__action{display:flex}slot[name=actions]{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--ix-info-page--gap)}@media only screen and (max-width: 48em){:host{padding:var(--ix-info-page--padding--mobile)}}`;
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
   * Optional description explaining the topic, e.g. its cause and how it can be resolved.
   *
   * @since 6.0.0
   */
  description;
  handleActionsSlotChange(event) {
    const slot = event.target;
    this.hasActions = slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }
  render() {
    return h(Host, { key: "24cfe30a3bea1fe8cd21034e9964317b6aa56d18", class: { infoPage: true, "infoPage--hasActions": this.hasActions } }, h("div", { key: "3960dfdb91b8ea3a69a9484cdc547a07bcc74cac", class: "infoPage__content" }, h("div", { key: "54baeb1e32431b8288ab3c5e6a0214a9c87deb1f", class: "content__image" }, h("slot", { key: "1ed14de1c1968feeade83921af3812dc015735c8", name: "image" }, h("ix-icon", { key: "2f87517489f8d11388d1e461734a0c034bacdb1e", name: this.icon, color: this.iconColor, size: "32", "aria-hidden": a11yBoolean(true) }))), h("div", { key: "df897abbe6178a9e3b601fa98ed6b3dada03b79b", class: "content__message" }, h("h1", { key: "8d1f00fbde8118471b9382d1a1b38a8ae9b68220" }, h("ix-typography", { key: "cb5f68b3f616ba639980c9ee367ecb8ddca8c70f", format: "h1" }, this.titleText)), this.description && h("ix-typography", { key: "5fabaddf08799290e9478b61147c63cbd66e5605", class: "message__description", "text-color": "secondary" }, this.description)), h("div", { key: "94423d3320392a7e11598cc44ff4ef5559d55709", class: "content__action" }, h("slot", { key: "5c9b5292597a0f00b0caebdd55debc26e8dc2216", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) }))));
  }
};
InfoPage.style = infoPageCss();
export {
  InfoPage as ix_info_page
};
