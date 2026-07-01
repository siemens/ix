import { r as registerInstance, g as getElement, h, H as Host } from "./global-C8IWpzMv.js";
import { f as iconApps, g as iconOpenExternal } from "./index-DgUGsIlh-CLxQRaVd.js";
import { d as dismissModal } from "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const applicationSwitchModalCss = () => `:host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{padding:2rem;padding-right:0}:host .content-apps{display:flex;position:relative;flex-wrap:wrap;justify-content:space-evenly;max-height:50vh;margin-right:0.25rem;gap:1.5rem}:host .loading{display:flex;flex-direction:row;align-items:center}:host .loading ix-spinner{margin-right:1rem}:host .AppEntry{all:unset;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0.4375rem;padding-inline-end:0.9375rem;flex:1 1 45%;cursor:pointer;border:0.0625rem solid transparent}:host .AppEntry.Selected{background-color:var(--theme-color-ghost--selected)}:host .AppEntry:not(.disabled):not(:disabled).hover,:host .AppEntry:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .AppEntry:not(.disabled):not(:disabled).active,:host .AppEntry:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .AppEntry:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host .AppName{display:flex;flex-direction:column}:host .AppName ix-icon{margin-left:1rem}:host .AppIcon{width:3rem;height:3rem;border-radius:0.25rem}`;
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
  } }, h("img", { class: "AppIcon", src: props.iconSrc, alt: "" }), h("div", { class: "AppName" }, h("ix-typography", { format: "h4" }, props.name, isExternal(props.target) && h("ix-icon", { size: "12", name: iconOpenExternal, color: "color-soft-text" })), h("ix-typography", { format: "label-sm", textColor: "soft" }, props.description)));
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
    return h(Host, { key: "f6b743a8bad3618c56d2578aaa17892e3749f2f9" }, h("ix-modal-header", { key: "2d16dff9256f0cf2aa836f4fcff225c1f65889b0", icon: iconApps }, this.config?.i18nAppSwitch || "Switch to application"), h("ix-modal-content", { key: "b71e3f1bdfa6d0e190a3ec6c87aa86381c3a9cec", class: "content" }, h("div", { key: "fdb4be03f72882aa6e04c0d539086bf7e4c4c533", class: "content-apps" }, (!this.config || this.config?.apps.length === 0) && h("div", { key: "bce66adb87f2bcbf54837d36779207292e5f6dbe", class: "loading" }, h("ix-spinner", { key: "3a41dd74b22cfab688af5242638ec52fa41768d1", size: "medium", variant: "primary" }), h("span", { key: "226973548958f54b9499319d31e5e5520afe3d1c" }, this.config?.i18nLoadingApps || "Loading available applications...")), this.config?.apps.map((appEntry) => h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === this.config?.currentAppId })))));
  }
};
ApplicationSwitchModal.style = applicationSwitchModalCss();
export {
  ApplicationSwitchModal as ix_application_switch_modal
};
