import { r as registerInstance, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { f as iconApps, g as iconOpenExternal } from "./index-BeX6RWvV-CXzUIwMU.js";
import { d as dismissModal } from "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const applicationSwitchModalCss = () => `@charset "UTF-8";:host{--ix-application-switch-modal-app-entry--background--selected:var(--si-sys-background-active);--ix-application-switch-modal-app-entry--border-color--focus:var(--si-sys-effects-focus)}:host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .content{padding:2rem;padding-right:0}:host .content-apps{display:flex;position:relative;flex-wrap:wrap;justify-content:space-evenly;max-height:50vh;margin-right:0.25rem;gap:1.5rem}:host .loading{display:flex;flex-direction:row;align-items:center}:host .loading ix-spinner{margin-right:1rem}:host .AppEntry{all:unset;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0.4375rem;padding-inline-end:0.9375rem;flex:1 1 45%;cursor:pointer;border:0.0625rem solid transparent}:host .AppEntry.Selected{background-color:var(--ix-application-switch-modal-app-entry--background--selected)}:host .AppEntry:not(.disabled):not(:disabled).hover,:host .AppEntry:not(.disabled):not(:disabled):hover{background-color:var(--si-sys-background-hover)}:host .AppEntry:not(.disabled):not(:disabled).active,:host .AppEntry:not(.disabled):not(:disabled):active{background-color:var(--si-sys-background-active)}:host .AppEntry:focus-visible{border:1px solid var(--ix-application-switch-modal-app-entry--border-color--focus)}:host .AppName{display:flex;flex-direction:column}:host .AppName ix-icon{margin-left:1rem}:host .AppIcon{width:3rem;height:3rem;border-radius:0.25rem}`;
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
  } }, h("img", { class: "AppIcon", src: props.iconSrc, alt: "" }), h("div", { class: "AppName" }, h("ix-typography", { format: "h4" }, props.name, isExternal(props.target) && h("ix-icon", { size: "12", name: iconOpenExternal, color: "--si-sys-text-secondary" })), h("ix-typography", { format: "label-sm", textColor: "soft" }, props.description)));
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
    return h(Host, { key: "e39fe6e3db5bc96a797e1730ea246c92434aac04" }, h("ix-modal-header", { key: "d29767aafd2303030fdcf2963f0fa885c863cda6", icon: iconApps }, this.config?.i18nAppSwitch || "Switch to application"), h("ix-modal-content", { key: "d6ce8c51f16729a8301067d316fcf77200675911", class: "content" }, h("div", { key: "795c6c6544cf2daa88874df8cafe6a07bf71c7c7", class: "content-apps" }, (!this.config || this.config?.apps.length === 0) && h("div", { key: "0f34006b2b8b1c1dbd7cf535152e20eb831b9070", class: "loading" }, h("ix-spinner", { key: "adab193384e14eddedb10d10858744966dfc2af4", size: "medium", variant: "primary" }), h("span", { key: "88d032d572046123668770a930c4eeb2c3f7a6e6" }, this.config?.i18nLoadingApps || "Loading available applications...")), this.config?.apps.map((appEntry) => h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === this.config?.currentAppId })))));
  }
};
ApplicationSwitchModal.style = applicationSwitchModalCss();
export {
  ApplicationSwitchModal as ix_application_switch_modal
};
