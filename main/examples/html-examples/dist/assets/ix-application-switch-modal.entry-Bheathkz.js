import { r as registerInstance, g as getElement, h, H as Host } from "./global-D3FU0h8K.js";
import { f as iconApps, g as iconOpenExternal } from "./index-DwLtFbui-Caa0eG-T.js";
import { d as dismissModal } from "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const applicationSwitchModalCss = () => `@charset "UTF-8";:host{--ix-application-switch-modal-app-entry--background--selected:var(--si-sys-color-background-selected);--ix-application-switch-modal-app-entry--border-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-application-switch-modal-content--padding:var(--si-sys-sizing-spacing-y-90);--ix-application-switch-modal-content-apps--max-height:50vh;--ix-application-switch-modal-content-apps--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-application-switch-modal-content-apps--gap:var(--si-sys-sizing-spacing-x-80);--ix-application-switch-modal-loading--margin-right:var(--si-sys-sizing-spacing-x-60);--ix-application-switch-modal-app-entry--gap:var(--si-sys-sizing-spacing-x-60);--ix-application-switch-modal-app-entry--flex-basis:45%;--ix-application-switch-modal-app-entry--border-width:var(--si-sys-sizing-border-width-default);--ix-application-switch-modal-app-entry--padding:calc(     var(--si-sys-sizing-spacing-y-40) - var(--ix-application-switch-modal-app-entry--border-width)   );--ix-application-switch-modal-app-entry--padding-inline-end:calc(     var(--si-sys-sizing-spacing-x-60) - var(--ix-application-switch-modal-app-entry--border-width)   );--ix-application-switch-modal-icon--margin-left:var(--si-sys-sizing-spacing-x-60);--ix-application-switch-modal-app-icon--icon-size:var(--si-sys-sizing-size-100);--ix-application-switch-modal-app-icon--border-radius:var(--si-sys-sizing-border-radius-sm)}:host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .content{padding:var(--ix-application-switch-modal-content--padding);padding-right:0}:host .content-apps{display:flex;position:relative;flex-wrap:wrap;justify-content:space-evenly;max-height:var(--ix-application-switch-modal-content-apps--max-height);margin-right:var(--ix-application-switch-modal-content-apps--margin-right);gap:var(--ix-application-switch-modal-content-apps--gap)}:host .loading{display:flex;flex-direction:row;align-items:center}:host .loading ix-spinner{margin-right:var(--ix-application-switch-modal-loading--margin-right)}:host .AppEntry{all:unset;display:flex;flex-direction:row;align-items:center;gap:var(--ix-application-switch-modal-app-entry--gap);padding:var(--ix-application-switch-modal-app-entry--padding);padding-inline-end:var(--ix-application-switch-modal-app-entry--padding-inline-end);flex:1 1 var(--ix-application-switch-modal-app-entry--flex-basis);cursor:pointer;border:var(--ix-application-switch-modal-app-entry--border-width) solid transparent}:host .AppEntry.Selected{background-color:var(--ix-application-switch-modal-app-entry--background--selected)}:host .AppEntry:not(.disabled):not(:disabled).hover,:host .AppEntry:not(.disabled):not(:disabled):hover{background-color:var(--si-sys-color-background-hover)}:host .AppEntry:not(.disabled):not(:disabled).active,:host .AppEntry:not(.disabled):not(:disabled):active{background-color:var(--si-sys-color-background-active)}:host .AppEntry:focus-visible{border:var(--ix-application-switch-modal-app-entry--border-width) solid var(--ix-application-switch-modal-app-entry--border-color--focus)}:host .AppName{display:flex;flex-direction:column}:host .AppName ix-icon{margin-left:var(--ix-application-switch-modal-icon--margin-left)}:host .AppIcon{width:var(--ix-application-switch-modal-app-icon--icon-size);height:var(--ix-application-switch-modal-app-icon--icon-size);border-radius:var(--ix-application-switch-modal-app-icon--border-radius)}`;
function ApplicationItem(props) {
  function isExternal(target) {
    if (target !== "_blank" && target !== "_parent" && target !== "_self" && target !== "_top") {
      return true;
    }
    if (target === "_blank") {
      return true;
    }
    return false;
  }
  return h("button", { class: {
    AppEntry: true,
    Selected: props.selected
  }, onClick: () => {
    dismissModal(props.host);
    window.open(props.url, props.target);
  } }, h("img", { class: "AppIcon", src: props.iconSrc, alt: "" }), h("div", { class: "AppName" }, h("ix-typography", { format: "h4" }, props.name, isExternal(props.target) && h("ix-icon", { size: "12", name: iconOpenExternal, color: "--si-sys-color-text-secondary" })), h("ix-typography", { format: "body-sm", textColor: "soft" }, props.description)));
}
const ApplicationSwitchModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /** @internal */
  config;
  componentWillLoad() {
    if (!this.config) {
      throw Error("ApplicationConfig not provided");
    }
  }
  render() {
    return h(Host, { key: "40595184a972878f48e5f23b874c8e49f5cfb1ad" }, h("ix-modal-header", { key: "e9ff93cbad3dea8ead1b6abd9f9dd04b910c4e07", icon: iconApps }, this.config?.i18nAppSwitch || "Switch to application"), h("ix-modal-content", { key: "b7cbb3ee88ee346737cb0b8f9e709de0cb2c3add", class: "content" }, h("div", { key: "61f45f692d8573f0d188da6dba347f6aa9bd1ea6", class: "content-apps" }, (!this.config || this.config?.apps.length === 0) && h("div", { key: "923e213160090ce92604bb0720cfc7174c6a459f", class: "loading" }, h("ix-spinner", { key: "a82e196594a46a35b53714c24c2dbddca2579336", size: "md", variant: "primary" }), h("span", { key: "bef337395b95fb89f6a92b6a954d4b19c937eed6" }, this.config?.i18nLoadingApps || "Loading available applications...")), this.config?.apps.map((appEntry) => h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === this.config?.currentAppId })))));
  }
};
ApplicationSwitchModal.style = applicationSwitchModalCss();
export {
  ApplicationSwitchModal as ix_application_switch_modal
};
