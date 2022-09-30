import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as Popover } from './popover.util.js';
import { d as defineCustomElement$5 } from './dropdown.js';
import { d as defineCustomElement$4 } from './dropdown-item.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './menu-avatar-item.js';

const menuAvatarCss = ".sc-ix-menu-avatar-h{display:block;position:relative;margin-bottom:0.5rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar{display:flex;align-items:center;height:2.5rem;max-height:2.5rem;padding-left:0.25rem;margin-left:0.75rem;margin-right:0.75rem;transition:0.15s;border-radius:1.25rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar>svg.sc-ix-menu-avatar{height:2rem;width:2rem;min-height:2rem;min-width:2rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar #avatar-path-background.sc-ix-menu-avatar{fill:var(--theme-avatar--background)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar #avatar-path-person.sc-ix-menu-avatar{fill:var(--theme-avatar--person)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar .avatar-name.sc-ix-menu-avatar{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar .avatar-name.sc-ix-menu-avatar .text-default-single.sc-ix-menu-avatar{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled):active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}";

const MenuAvatar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.logoutClick = createEvent(this, "logoutClick", 7);
    /**
     *
     */
    this.i18nLogout = 'Logout';
  }
  toggleMenu() {
    this.outsideListener.open();
    this.displayMenu = !this.displayMenu;
  }
  componentDidLoad() {
    this.outsideListener = new Popover(this.hostElement, this.hostElement.querySelector('ix-dropdown'), () => {
      this.displayMenu = false;
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.outsideListener) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    return (h(Host, null, h("li", { class: "nav-item top-item avatar no-hover", title: this.top }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32" }, h("g", { fill: "none", "fill-rule": "evenodd" }, h("path", { id: "avatar-path-background", d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n                    16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z" }), h("path", { id: "avatar-path-person", d: "M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n                  6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n                  9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n                  6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z" }))), h("div", { class: "avatar-name" }, h("span", { class: "text-default-single", title: this.top }, this.top), h("span", { class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { show: this.displayMenu }, h("slot", null), h("ix-menu-avatar-item", { label: this.i18nLogout, icon: "log-out", onClick: (e) => {
        this.logoutClick.emit(e);
      } }))));
  }
  get hostElement() { return this; }
  static get style() { return menuAvatarCss; }
}, [6, "ix-menu-avatar", {
    "top": [1],
    "bottom": [1],
    "i18nLogout": [1, "i-1-8n-logout"],
    "displayMenu": [32]
  }, [[1, "click", "toggleMenu"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu-avatar", "ix-dropdown", "ix-dropdown-item", "ix-icon", "ix-menu-avatar-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu-avatar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuAvatar);
      }
      break;
    case "ix-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-dropdown-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-menu-avatar-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxMenuAvatar = MenuAvatar;
const defineCustomElement = defineCustomElement$1;

export { IxMenuAvatar, defineCustomElement };
