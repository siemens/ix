import { r as registerInstance, h, H as Host } from "./global-CU4RCWGK.js";
import { u as iconChevronRightSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
const linkButtonCss = () => `@charset "UTF-8";:host{--ix-link-button--color:var(--si-sys-color-text-accent);--ix-link-button--color--hover:var(--si-sys-color-text-accent-hover);--ix-link-button--color--active:var(--si-sys-color-text-accent-active);--ix-link-button--color--disabled:var(--si-sys-color-text-disabled);--ix-link-button--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-link-button--height:var(--si-sys-sizing-size-80);--ix-link-button--min-width:var(--si-sys-sizing-size-80);--ix-link-button--padding:0 var(--si-sys-sizing-spacing-x-20) 0 0;--ix-link-button-link--text-underline-offset:0.2rem;--ix-link-button--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:inline-flex;height:var(--ix-link-button--height);min-width:var(--ix-link-button--min-width)}:host .link-button{display:inline-flex;position:relative;width:100%;padding:var(--ix-link-button--padding);align-items:center;justify-content:center;background-color:transparent;color:var(--ix-link-button--color);cursor:pointer;text-decoration:none}:host .link-button .link{display:block;position:relative;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-decoration:underline;text-underline-offset:var(--ix-link-button-link--text-underline-offset)}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):hover,:host .link-button:not(.disabled):not(:disabled).hover{color:var(--ix-link-button--color--hover)}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):active,:host .link-button:not(.disabled):not(:disabled).active{color:var(--ix-link-button--color--active)}:host .link-button.disabled{cursor:default;color:var(--ix-link-button--color--disabled)}:host .link-button a{all:unset}:host :focus-visible{outline:var(--ix-link-button--outline-width--focus) solid var(--ix-link-button--outline-color--focus)}`;
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
    return h(Host, { key: "11416650a5c3fd10155477a6ea6b32cdefe71c79" }, h("a", { key: "569adcbbf199119293c3f8d3eba0eaa0677e7806", "aria-disabled": a11yBoolean(this.disabled), tabindex: this.disabled ? -1 : void 0, class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target, role: this.disabled ? "link" : void 0 }, h("ix-icon", { key: "19869a28e70d38ecd918d981ebe3e038f8535ac3", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "667cd534b74880ba9b9d6bf0d1931d57c283c293", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "a4c615d688920fdbf33381836a4c29b7a20ffaf5" }))));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
