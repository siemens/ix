import { r as registerInstance, c as createEvent, f as forceUpdate, h, H as Host, g as getElement } from "./index.18e27e15.js";
const menuAboutCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host .about-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .about-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}:host ix-menu-about-item{display:none}";
const IxMenuAboutStyle0 = menuAboutCss;
const MenuAbout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.close = createEvent(this, "close", 7);
    this.activeTabLabel = void 0;
    this.label = "About & legal information";
    this.show = false;
    this.labels = [];
  }
  get aboutItems() {
    return Array.from(this.el.querySelectorAll("ix-menu-about-item"));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.aboutItems.forEach((i) => {
      i.style.display = "none";
      if (i.label === this.activeTabLabel) {
        i.style.display = "block";
      }
    });
  }
  componentWillLoad() {
    if (this.aboutItems.length) {
      this.setTab(this.activeTabLabel || this.aboutItems[0].label);
    }
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  componentWillRender() {
    this.updateLabels();
  }
  updateLabels() {
    this.labels = this.aboutItems.map((i) => i.label);
  }
  watchActiveTabLabel(value) {
    setTimeout(() => this.setTab(value));
  }
  getSelectedTabIndex(label) {
    const selectedItem = this.aboutItems.find((item) => item.label === label);
    return this.aboutItems.indexOf(selectedItem);
  }
  getTabItems() {
    return this.aboutItems.map(({ label }) => {
      return h("ix-tab-item", { class: {
        active: label === this.activeTabLabel
      }, onClick: () => this.setTab(label) }, label);
    });
  }
  render() {
    return h(Host, { key: "7001e478726514ba90ae4095882c4c73d8333e1d", slot: "ix-menu-about", class: {
      show: this.show
    } }, h("div", { key: "9d2d9deda3ae10fd0c3732ff7a32ace8f5074c89", class: "about-header" }, h("h2", { key: "b1ddcb77eb135ff7706985403bf29dae0a941ade", class: "text-h2" }, this.label), h("ix-icon-button", { key: "7ecaba5605fa6133e719dbc8a799ddaeaa700981", ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit({
      name: "ix-menu-about",
      nativeEvent: e
    }) })), h("ix-tabs", { key: "3a82d3bf4b270e29e1b25f94e0a60af026e14950", selected: this.getSelectedTabIndex(this.activeTabLabel) }, this.getTabItems()), h("div", { key: "43c70d034b979bfce2fdcdc62069791ed39d461b", class: "about-items" }, h("slot", { key: "74a6faf6f30a2f9a036d527fbf8c5e5ab3c8cfd8" })));
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
MenuAbout.style = IxMenuAboutStyle0;
export {
  MenuAbout as ix_menu_about
};
