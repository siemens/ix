import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const menuItemCss = "ix-menu-item{position:relative;display:block}ix-menu-item .tab{display:flex;position:relative;align-items:center;height:3rem;z-index:500;padding-left:1.25rem}ix-menu-item .tab:not(.selected){cursor:pointer}ix-menu-item .tab:not(.selected):not(.disabled):not(:disabled).hover,ix-menu-item .tab:not(.selected):not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}ix-menu-item .tab:not(.selected):not(.disabled):not(:disabled).active,ix-menu-item .tab:not(.selected):not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}ix-menu-item i.glyph{color:var(--theme-nav-item-primary-icon--color);position:relative}ix-menu-item .tab:focus{outline:none}ix-menu-item:focus{outline:none}ix-menu-item .tab:not(:last-child){margin-bottom:0.5rem}ix-menu-item .notification{display:inline-flex;position:absolute;top:-0.5rem;right:-50%}ix-menu-item .notification .pill{display:inline-flex;justify-content:center;align-items:center;height:1rem;min-width:1rem;position:relative;border-radius:6.25rem;background-color:var(--theme-color-primary);border-radius:6.25rem;font-size:0.75rem;font-weight:bold;line-height:1;font-family:Siemens Sans, Arial, sans-serif;color:var(--theme-color-primary--contrast);padding:0.25rem}ix-menu-item .tab-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-nav-item-primary--color);margin:0 1.25rem}ix-menu-item.active .tab,ix-menu-item.selected .tab{background-color:var(--theme-nav-item-primary--background--selected)}ix-menu-item.active .tab::before,ix-menu-item.selected .tab::before{content:\"\";background-color:var(--theme-nav-item-primary--border-color--selected);height:3rem;width:0.25rem;left:0;position:absolute}ix-menu-item.active .tab>.glyph,ix-menu-item.selected .tab>.glyph{color:var(--theme-nav-item-primary-icon--color--selected)}ix-menu-item.disabled{color:var(--theme-color-weak-text);pointer-events:none;cursor:default}ix-menu-item.disabled .tab>.glyph{color:var(--theme-color-weak-text)}ix-menu-item.disabled .tab-text{color:var(--theme-color-weak-text)}ix-menu-item.home-tab,ix-menu-item[slot=home]{margin-bottom:1.5rem}ix-menu-item.bottom-tab,ix-menu-item[slot=bottom]{height:2.25rem}ix-menu-item.bottom-tab .tab,ix-menu-item[slot=bottom] .tab{height:2.25rem}ix-menu-item.bottom-tab .tab::before,ix-menu-item[slot=bottom] .tab::before{height:2.25rem}ix-menu-item.bottom-tab.active .tab,ix-menu-item.bottom-tab.selected .tab,ix-menu-item[slot=bottom].active .tab,ix-menu-item[slot=bottom].selected .tab{background-color:var(--theme-color-1)}";

const MenuItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * Move the Tab to a top position.
     */
    this.home = false;
    /**
     * Place tab on bottom
     */
    this.bottom = false;
    /**
     * Icon name from @siemens/ix-icons
     */
    this.tabIcon = 'document';
  }
  get tabLabel() {
    return this.hostElement.querySelector('.tab-text');
  }
  componentDidRender() {
    const spanElement = this.tabLabel;
    const newTitle = spanElement.innerHTML.replace('&amp;', '&');
    if (this.title !== newTitle) {
      this.title = newTitle;
    }
  }
  render() {
    return (h(Host, { class: {
        disabled: this.disabled,
        'home-tab': this.home,
        'bottom-tab': this.bottom,
        active: this.active,
      } }, h("li", { class: "tab", title: this.title }, h("i", { class: `glyph glyph-${this.tabIcon}` }, h("div", { class: "notification" }, this.notifications ? (h("div", { class: "pill" }, this.notifications)) : null)), h("span", { class: "tab-text text-default" }, h("slot", null)))));
  }
  get hostElement() { return this; }
  static get style() { return menuItemCss; }
}, [4, "ix-menu-item", {
    "home": [4],
    "bottom": [4],
    "tabIcon": [1, "tab-icon"],
    "notifications": [2],
    "active": [4],
    "disabled": [4],
    "title": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuItem);
      }
      break;
  } });
}

export { MenuItem as M, defineCustomElement as d };
