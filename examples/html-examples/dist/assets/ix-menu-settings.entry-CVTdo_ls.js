import { r as registerInstance, c as createEvent, f as forceUpdate, h, g as getElement, H as Host } from "./global-wi9VneMU.js";
import { q as iconClose } from "./index-8HpPmDK_-DinFJk0z.js";
function getItems(context) {
  return Array.from(context.el.querySelectorAll(context instanceof MenuSettings ? "ix-menu-settings-item" : "ix-menu-about-item"));
}
function setTab(context, label) {
  if (context.activeTabLabel === label) {
    return;
  }
  const { defaultPrevented } = context.tabChange.emit(label);
  if (defaultPrevented) {
    return;
  }
  context.activeTabLabel = label;
}
function syncTabDisplay(context, label) {
  context.items.forEach((i) => {
    i.style.display = "none";
    if (i.label === label) {
      i.style.display = "block";
    }
  });
}
function initialize(context) {
  context.items = getItems(context);
  if (context.items.length) {
    const selectedLabel = context.activeTabLabel || context.items[0].label;
    if (selectedLabel) {
      setTab(context, selectedLabel);
    }
  }
  context.items.forEach((item) => {
    item.addEventListener("labelChange", (e) => {
      context.items = getItems(context);
      if (e.detail.oldLabel === context.activeTabLabel) {
        context.activeTabLabel = e.detail.newLabel;
      }
    });
  });
}
const menuSettingsCss = ".text-xs{font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-s{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption-single{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-h2{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-xl{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .settings-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .settings-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}:host .settings-tabs{margin-bottom:1.5rem}";
const MenuSettings = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabChange = createEvent(this, "tabChange", 7);
    this.close = createEvent(this, "close", 7);
    this.label = "Settings";
    this.ariaLabelCloseButton = "Close Settings";
    this.show = false;
  }
  updateTab(newLabel, oldLabel) {
    if (newLabel !== oldLabel) {
      syncTabDisplay(this, newLabel);
    }
  }
  componentWillLoad() {
    initialize(this);
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  render() {
    return h(MenuTabs, { key: "eefc53f1fa300794513f41b1bc80ac9fd00e295e", context: this });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "activeTabLabel": ["updateTab"]
    };
  }
};
MenuSettings.style = menuSettingsCss;
const getTabItems = (context) => {
  return context.items.map(({ label }) => {
    return h("ix-tab-item", { selected: label === context.activeTabLabel, onTabClick: (e) => e.preventDefault(), onClick: () => {
      if (label) {
        setTab(context, label);
      }
    } }, label);
  });
};
const MenuTabs = ({ context }) => {
  const selectedIndex = context.items.findIndex((item) => item.label === context.activeTabLabel);
  return h(Host, { slot: context instanceof MenuSettings ? "ix-menu-settings" : "ix-menu-about", class: {
    show: context.show
  } }, h("div", { class: context instanceof MenuSettings ? "settings-header" : "about-header" }, h("h2", { class: "text-h2" }, context.label), h("ix-icon-button", { variant: "tertiary", size: "24", icon: iconClose, iconColor: "color-soft-text", "aria-label": context.ariaLabelCloseButton, onClick: (e) => context.close.emit({
    name: context instanceof MenuSettings ? "ix-menu-settings" : "ix-menu-about",
    nativeEvent: e
  }) })), h("ix-tabs", { selected: selectedIndex !== -1 ? selectedIndex : 0 }, getTabItems(context)), h("slot", null));
};
const ixMenuSettings_entry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ix_menu_settings: MenuSettings
}, Symbol.toStringTag, { value: "Module" }));
export {
  MenuTabs as M,
  ixMenuSettings_entry as a,
  initialize as i,
  syncTabDisplay as s
};
