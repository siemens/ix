import { r as registerInstance, h, H as Host } from "./global-F68Qu5y3.js";
import { j as iconChevronRightSmall } from "./index-DgUGsIlh-CLxQRaVd.js";
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
    return h(Host, { key: "c5dab1d77ac185244a9131098ce10745567ebffd" }, h("a", { key: "530b5756bb5fbf396f7fc374102573c39cc06d63", title: this.url, tabindex: "0", class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target }, h("ix-icon", { key: "f44f9f85c5e52ac3ace6436c6eb9ee03b02c52ca", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "b860e06ea8bd64829c4548faf30906dca434a33b", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "82b2680df36e838df20e4815c555a97aa3e8e52f" }))));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
