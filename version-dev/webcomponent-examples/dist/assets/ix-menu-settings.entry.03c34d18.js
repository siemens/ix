import { r as registerInstance, c as createEvent, h, f as forceUpdate, H as Host, g as getElement } from "./index.ed9c6cc1.js";
const menuSettingsCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .settings-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .settings-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}:host .settings-tabs{margin-bottom:1.5rem}";
const MenuAbout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.close = createEvent(this, "close", 7);
    this.activeTabLabel = void 0;
    this.label = "Settings";
    this.show = false;
    this.settingsItems = void 0;
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.settingsItems.forEach((i) => {
      i.style.display = "none";
      if (i.label === this.activeTabLabel) {
        i.style.display = "block";
      }
    });
  }
  getTabItems() {
    return this.settingsItems.map(({ label }) => {
      return h("ix-tab-item", { selected: label === this.activeTabLabel, onClick: () => this.setTab(label) }, label);
    });
  }
  componentWillLoad() {
    this.settingsItems = Array.from(this.el.querySelectorAll("ix-menu-settings-item"));
    if (this.settingsItems.length) {
      this.setTab(this.activeTabLabel || this.settingsItems[0].label);
    }
    this.settingsItems.forEach((item) => {
      item.addEventListener("labelChange", (e) => {
        this.settingsItems = Array.from(this.el.querySelectorAll("ix-menu-settings-item"));
        if (e.detail.oldLabel === this.activeTabLabel) {
          this.activeTabLabel = e.detail.newLabel;
        }
      });
    });
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  watchActiveTabLabel(value) {
    this.setTab(value);
  }
  render() {
    return h(Host, { slot: "ix-menu-settings", class: {
      show: this.show
    } }, h("div", { class: "settings-header" }, h("h2", { class: "text-h2" }, this.label), h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit({
      name: "ix-menu-settings",
      nativeEvent: e
    }) })), h("ix-tabs", null, this.getTabItems()), h("slot", null));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "activeTabLabel": ["watchActiveTabLabel"]
    };
  }
};
MenuAbout.style = menuSettingsCss;
export {
  MenuAbout as ix_menu_settings
};
