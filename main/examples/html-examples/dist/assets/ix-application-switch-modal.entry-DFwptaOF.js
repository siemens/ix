import { r as registerInstance, g as getElement, h, H as Host } from "./global-Bs2gnYtf.js";
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
    return h(Host, { key: "6cb05ef2fe7b2a3cabe530ed97fc048e24816e55" }, h("ix-modal-header", { key: "2a737651141cfa633c10f1fef32410212b40f5ec", icon: iconApps }, this.config?.i18nAppSwitch || "Switch to application"), h("ix-modal-content", { key: "29f5dee95fa65f72a817dec07ac193a125037cea", class: "content" }, h("div", { key: "d23298fb54e5c621fd7368945822516f7785651e", class: "content-apps" }, (!this.config || this.config?.apps.length === 0) && h("div", { key: "5d85c320e72f27d8654df889ae74260b80201881", class: "loading" }, h("ix-spinner", { key: "de84a41e637665db2b2dd78e2692b56dfd290305", size: "md", variant: "primary" }), h("span", { key: "fa5b2f43f00f5066ae72d22e8e4e9db3c3e66827" }, this.config?.i18nLoadingApps || "Loading available applications...")), this.config?.apps.map((appEntry) => h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === this.config?.currentAppId })))));
  }
};
ApplicationSwitchModal.style = applicationSwitchModalCss();
export {
  ApplicationSwitchModal as ix_application_switch_modal
};
