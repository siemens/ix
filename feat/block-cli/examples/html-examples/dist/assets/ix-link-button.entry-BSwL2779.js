import { a as registerInstance, h, H as Host } from "./global-B8nXsUf-.js";
import { h as iconChevronRightSmall } from "./index-DgUGsIlh-FNhczk6p.js";
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
    return h(Host, { key: "b49c73a2ded12a079fe2ea5deb87ea084582238a" }, h("a", { key: "c276b3108316a4631e9db4fbab664d69c83ddc48", title: this.url, tabindex: "0", class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target }, h("ix-icon", { key: "1ddbebc97e0e653dd3f1842601a8b02627ffda54", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "da0d5d6c07d64390b1396f0a9e6b8e08405b7609", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "b2e16bb14ef3d1941e0b293568a5bb75886d89c1" }))));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
