import { r as registerInstance, g as getElement, h, H as Host } from "./global-B0StzMye.js";
import { j as iconApps, k as iconOpenExternal } from "./index-Bj5Kmzp6-B1fOSLOf.js";
import { e as dismissModal } from "./modal-CT9wuOLE-HnuYCO1-.js";
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
    if (isExternal(props.target)) {
      window.open(props.url, props.target, "noopener,noreferrer");
      return;
    }
    window.open(props.url, props.target);
  } }, h("img", { class: "AppIcon", src: props.iconSrc, alt: "" }), h("div", { class: "AppName" }, h("ix-typography", { format: "h4" }, props.name, isExternal(props.target) && h("ix-icon", { size: "12", name: iconOpenExternal, color: "--si-sys-color-text-secondary" })), h("ix-typography", { format: "body-sm", textColor: "secondary" }, props.description)));
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
    return h(Host, { key: "4f93b363232e49d630eb9a0d9ecce709eafe8925" }, h("ix-modal-header", { key: "2fb8221c2c92dfde16122aa1c3425ff50d74bbc5", icon: iconApps }, this.config?.i18nAppSwitch || "Switch to application"), h("ix-modal-content", { key: "222642da9ef543b73771e70abb249134a87b2c06", class: "content" }, h("div", { key: "0ab2a92a481abb08d89d833d5e4c1b96aeb3db5d", class: "content-apps" }, (!this.config || this.config?.apps.length === 0) && h("div", { key: "2c9fddbf3c3f07c3c203c4d4783164f5635caef6", class: "loading" }, h("ix-spinner", { key: "bbc5ac7847bd3cf241a0c730a2a5987bdb3fb97e", size: "md", variant: "primary" }), h("span", { key: "c61a62502a4a125d589e6376d2e3b2caf86b43a9" }, this.config?.i18nLoadingApps || "Loading available applications...")), this.config?.apps.map((appEntry) => h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === this.config?.currentAppId })))));
  }
};
ApplicationSwitchModal.style = applicationSwitchModalCss();
export {
  ApplicationSwitchModal as ix_application_switch_modal
};
