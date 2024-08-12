import { r as registerInstance, h, H as Host, g as getElement } from "./global.9430376f.js";
import "./animation-4a73b1c3.59b7eda0.js";
import { d as dismissModal } from "./modal-54740f80.103c72e0.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const applicationSwitchModalCss = ":host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{padding:2rem;padding-right:0}:host .content-apps{display:flex;position:relative;flex-wrap:wrap;justify-content:space-evenly;max-height:50vh;margin-right:0.25rem;gap:1.5rem}:host .loading{display:flex;flex-direction:row;align-items:center}:host .loading ix-spinner{margin-right:1rem}:host .AppEntry{all:unset;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0.5rem;flex:1 1 45%;cursor:pointer;border:0.0625rem solid transparent}:host .AppEntry.Selected{background-color:var(--theme-color-ghost--selected);border:var(--theme-dynamic-bdr-1)}:host .AppEntry:not(.disabled):not(:disabled).hover,:host .AppEntry:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .AppEntry:not(.disabled):not(:disabled).active,:host .AppEntry:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .AppEntry:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host .AppName{display:flex;flex-direction:column}:host .AppName ix-icon{margin-left:1rem}:host .AppIcon{width:3rem;height:3rem;border-radius:0.25rem}";
const IxApplicationSwitchModalStyle0 = applicationSwitchModalCss;
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
  } }, h("div", null, h("img", { class: "AppIcon", src: props.iconSrc })), h("div", { class: "AppName" }, h("ix-typography", { format: "h4" }, props.name, isExternal(props.target) && h("ix-icon", { size: "12", name: "open-external", color: "color-soft-text" })), h("ix-typography", { format: "label-sm", color: "soft" }, props.description)));
}
const ApplicationSwitchModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.config = void 0;
  }
  componentWillLoad() {
    if (!this.config) {
      throw Error("ApplicationConfig not provided");
    }
  }
  render() {
    var _a, _b, _c, _d;
    return h(Host, { key: "2c9a4d11f697563924effefae0ca86ca826fa9c1" }, h("ix-modal-header", { key: "09586fc6d884b175ea95e8f4f42e9017c2874ef4", icon: "apps" }, ((_a = this.config) === null || _a === void 0 ? void 0 : _a.i18nAppSwitch) || "Switch to application"), h("ix-modal-content", { key: "44be3f676830e44c4450ac9a85280829d2570004", class: "content" }, h("div", { key: "d15e8b91de03f40013cfe94cde3159619b8ee8cc", class: "content-apps" }, (!this.config || ((_b = this.config) === null || _b === void 0 ? void 0 : _b.apps.length) === 0) && h("div", { key: "5d8cc548c1c7adaa83c89ac329d04be5e6f7a59c", class: "loading" }, h("ix-spinner", { key: "80c9c4adb4546028848d2b47929527b613152651", size: "medium", variant: "primary" }), h("span", { key: "c06fc0f909d940df03402e360e2a3d64bd9decc4" }, ((_c = this.config) === null || _c === void 0 ? void 0 : _c.i18nLoadingApps) || "Loading available applications...")), (_d = this.config) === null || _d === void 0 ? void 0 : _d.apps.map((appEntry) => {
      var _a2;
      return h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === ((_a2 = this.config) === null || _a2 === void 0 ? void 0 : _a2.currentAppId) });
    }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ApplicationSwitchModal.style = IxApplicationSwitchModalStyle0;
export {
  ApplicationSwitchModal as ix_application_switch_modal
};
