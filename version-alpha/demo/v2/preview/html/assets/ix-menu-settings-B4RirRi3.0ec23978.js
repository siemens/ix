import { r as registerInstance, c as createEvent, f as forceUpdate, h, g as getElement, H as Host } from "./global.bff64ac3.js";
import { l as iconClose } from "./index-CrTP-icT.451e0ae2.js";
const menuSettingsCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .settings-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .settings-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}:host .settings-tabs{margin-bottom:1.5rem}";
const MenuSettings = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabChange = createEvent(this, "tabChange", 7);
    this.close = createEvent(this, "close", 7);
    this.label = "Settings";
    this.show = false;
  }
  updateTab(label) {
    setTab(this, label);
  }
  componentWillLoad() {
    initialize(this);
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  render() {
    return h(MenuTabs, { key: "1fb5cef13f2054942a1bfb1b16f7ef8d36863cf0", context: this });
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
function getItems(context) {
  return Array.from(context.el.querySelectorAll(context instanceof MenuSettings ? "ix-menu-settings-item" : "ix-menu-about-item"));
}
function setTab(context, label) {
  const { defaultPrevented } = context.tabChange.emit(label);
  if (defaultPrevented) {
    return;
  }
  context.activeTabLabel = label;
  context.items.forEach((i) => {
    i.style.display = "none";
    if (i.label === context.activeTabLabel) {
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
  return h(
    Host,
    { slot: context instanceof MenuSettings ? "ix-menu-settings" : "ix-menu-about", class: {
      show: context.show
    } },
    h(
      "div",
      { class: context instanceof MenuSettings ? "settings-header" : "about-header" },
      h("h2", { class: "text-h2" }, context.label),
      h("ix-icon-button", { ghost: true, size: "24", icon: iconClose, onClick: (e) => context.close.emit({
        name: context instanceof MenuSettings ? "ix-menu-settings" : "ix-menu-about",
        nativeEvent: e
      }) })
    ),
    h("ix-tabs", { selected: selectedIndex !== -1 ? selectedIndex : 0 }, getTabItems(context)),
    h("slot", null)
  );
};
export {
  MenuTabs as M,
  MenuSettings as a,
  initialize as i,
  setTab as s
};
