import { r as registerInstance, h, H as Host } from "./global-B1t25MFd.js";
import { j as iconChevronRightSmall } from "./index-CwfZ4aN6-mXhHymhu.js";
const linkButtonCss = () => `:host{display:inline-flex;height:2rem;font-size:0.875rem;font-weight:400;min-width:2rem}:host .link-button{display:inline-flex;position:relative;width:100%;padding:0 0.25rem 0 0;align-items:center;justify-content:center;background-color:transparent;color:var(--theme-color-primary);cursor:pointer;text-decoration:none}:host .link-button .link{display:block;position:relative;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-decoration:underline;text-underline-offset:0.2rem}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):hover,:host .link-button:not(.disabled):not(:disabled).hover{color:var(--theme-color-dynamic--hover)}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):active,:host .link-button:not(.disabled):not(:disabled).active{color:var(--theme-color-dynamic--active)}:host .link-button.disabled{cursor:default;color:var(--theme-color-weak-text)}:host .link-button a{all:unset}:host :focus-visible{outline:1px solid var(--theme-color-focus-bdr)}`;
const LinkButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Disable the link button
   */
  disabled = false;
  /**
   * Url for the link button
   */
  url;
  /**
   * Specifies where to open the link
   *
   * https://www.w3schools.com/html/html_links.asp
   */
  target = "_self";
  render() {
    return h(Host, { key: "a0650d7ef5101d0ff04f7c2564f42d0442290a7e" }, h("a", { key: "b42d76a8aa2df4d010e55c95a201ca7d15e0c0ef", title: this.url, tabindex: "0", class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target }, h("ix-icon", { key: "156852aec4f27a98cc1d31b3cccceb1d0b4e0408", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "a929e82179dbf074dda274c5f0eae9fbaf627725", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "666cf7ad5e733ddc040b8176460563f73cd6cee8" }))));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
