import { r as registerInstance, h, H as Host } from "./global-DSse0xVy.js";
import { u as iconChevronRightSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
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
    return h(Host, { key: "3bceeadfd2b66e184d7c287e0d720d8093e571fa" }, h("a", { key: "d34f30154e28d5fcef8010d68b3769cb75a073cb", title: this.url, tabindex: "0", class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target }, h("ix-icon", { key: "562e1d0c6db4a508ec3c851c9f07e8f25b12bb61", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "032a8414f6e575d7db2868fc111c915b5d68a17a", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "ed9bd657ba3ea99b91500efc6e9a52c249e5ed37" }))));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
