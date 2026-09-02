import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
import { u as iconChevronRightSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
const linkButtonCss = () => `@charset "UTF-8";:host{--ix-link-button--color:var(--si-sys-text-accent);--ix-link-button--color--hover:var(--si-sys-text-accent-hover);--ix-link-button--color--active:var(--si-sys-text-accent-active);--ix-link-button--color--disabled:var(--si-sys-text-disabled);--ix-link-button--outline-color--focus:var(--si-sys-effects-focus)}:host{display:inline-flex;height:2rem;font-size:0.875rem;font-weight:400;min-width:2rem}:host .link-button{display:inline-flex;position:relative;width:100%;padding:0 0.25rem 0 0;align-items:center;justify-content:center;background-color:transparent;color:var(--ix-link-button--color);cursor:pointer;text-decoration:none}:host .link-button .link{display:block;position:relative;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-decoration:underline;text-underline-offset:0.2rem}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):hover,:host .link-button:not(.disabled):not(:disabled).hover{color:var(--ix-link-button--color--hover)}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):active,:host .link-button:not(.disabled):not(:disabled).active{color:var(--ix-link-button--color--active)}:host .link-button.disabled{cursor:default;color:var(--ix-link-button--color--disabled)}:host .link-button a{all:unset}:host :focus-visible{outline:1px solid var(--ix-link-button--outline-color--focus)}`;
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
    return h(Host, { key: "1a09459f4de2cfe24ef0bcf22b1f692cd8880afb" }, h("a", { key: "80c678a38bac96c779eca0a12538e17866459467", title: this.url, tabindex: "0", class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target }, h("ix-icon", { key: "4646564fe1588bb7198d3779105389ad6020fa0a", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "63e4eca305f2a9875191b9a2d664551594b1225f", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "630720b7532595bc7abd23d39d31caeb6d99e901" }))));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
