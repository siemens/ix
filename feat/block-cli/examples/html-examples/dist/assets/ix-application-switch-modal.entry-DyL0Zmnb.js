import { r as registerInstance, g as getElement, h, H as Host } from "./global-F68Qu5y3.js";
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
    return h(Host, { key: "226a8d868dfa1b4966a6986411fbccf158ce5fd0" }, h("ix-modal-header", { key: "e97d4db2a7348a684e9f331f1b1063b3e3eb8545", icon: iconApps }, this.config?.i18nAppSwitch || "Switch to application"), h("ix-modal-content", { key: "9c5c07abe9c00b56b249c67bc9a953a86259a1be", class: "content" }, h("div", { key: "247523af373c9e993d802726fc730f376a0b59eb", class: "content-apps" }, (!this.config || this.config?.apps.length === 0) && h("div", { key: "aae93e9213ce69226070630a5898d5f18d017621", class: "loading" }, h("ix-spinner", { key: "fcf98cf75e03996dfe32adbba584d7e5db0358c7", size: "medium", variant: "primary" }), h("span", { key: "10994f575664ece14255adacc1aaa87bdf66eb60" }, this.config?.i18nLoadingApps || "Loading available applications...")), this.config?.apps.map((appEntry) => h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === this.config?.currentAppId })))));
  }
};
ApplicationSwitchModal.style = applicationSwitchModalCss();
export {
  ApplicationSwitchModal as ix_application_switch_modal
};
