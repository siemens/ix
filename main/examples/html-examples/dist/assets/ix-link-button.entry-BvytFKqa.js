import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-CwYAT1Wh.js";
import { A as iconArrowRight, B as iconDocument, k as iconOpenExternal, m as iconChevronRightSmall } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const linkButtonCss = () => `@charset "UTF-8";:host{--ix-link-button--color:var(--si-sys-color-text-accent);--ix-link-button--color--hover:var(--si-sys-color-text-accent-hover);--ix-link-button--color--active:var(--si-sys-color-text-accent-active);--ix-link-button--color--disabled:var(--si-sys-color-text-disabled);--ix-link-button--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-link-button--height:var(--si-sys-sizing-size-80);--ix-link-button--min-width:var(--si-sys-sizing-size-80);--ix-link-button--padding:0 var(--si-sys-sizing-spacing-x-20) 0 0;--ix-link-button-icon--margin:var(--si-sys-sizing-spacing-x-20);--ix-link-button-link--text-underline-offset:0.2rem;--ix-link-button-link--text-underline-thickness:var(--si-sys-sizing-size-10);--ix-link-button--outline-width--focus:var(--si-sys-sizing-focus-ring-width)}:host{display:inline-flex;height:var(--ix-link-button--height);min-width:var(--ix-link-button--min-width)}:host .link-button{display:inline-flex;position:relative;width:100%;padding:var(--ix-link-button--padding);align-items:center;justify-content:flex-start;background-color:transparent;color:var(--ix-link-button--color);cursor:pointer}:host .link-button .icon:first-child{margin-right:var(--ix-link-button-icon--margin)}:host .link-button .icon:last-child{margin-left:var(--ix-link-button-icon--margin)}:host .link-button .link{display:block;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-decoration:underline}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):hover,:host .link-button:not(.disabled):not(:disabled).hover{color:var(--ix-link-button--color--hover)}:host .link-button:not(.disabled):not(:disabled):hover .link,:host .link-button:not(.disabled):not(:disabled).hover .link{text-decoration-thickness:var(--ix-link-button-link--text-underline-thickness)}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):active,:host .link-button:not(.disabled):not(:disabled).active{color:var(--ix-link-button--color--active)}:host .link-button:not(.disabled):not(:disabled):active .link,:host .link-button:not(.disabled):not(:disabled).active .link{text-decoration-thickness:var(--ix-link-button-link--text-underline-thickness)}:host .link-button.disabled{cursor:default;color:var(--ix-link-button--color--disabled)}:host .link-button a{all:unset}:host :focus-visible{outline:var(--ix-link-button--outline-width--focus) solid var(--ix-link-button--outline-color--focus)}`;
const linkIcons = {
  internal: iconChevronRightSmall,
  external: iconOpenExternal,
  file: iconDocument,
  action: iconArrowRight
};
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
   *
   * The value is forwarded unchanged to the `href` of the native anchor. URL schemes such as
   * `javascript:` or `data:` are not rejected. Do not bind untrusted input; validate destinations
   * against an allowlist (for example `https:` and relative URLs).
   */
  url;
  /**
   * Specifies where to open the link
   *
   * https://www.w3schools.com/html/html_links.asp
   */
  target = "_self";
  /**
   * Icon displayed alongside the link label. Defaults to `none`.
   * @since 6.0.0
   */
  icon = "none";
  /**
   * Position of the icon relative to the link label.
   * @since 6.0.0
   */
  iconPosition = "start";
  handleClick(event) {
    if (this.disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
  render() {
    const icon = this.icon !== "none" && h("ix-icon", { key: "6f785fec5568cbc23bbb925784d50b121b5a0b19", class: "icon", name: linkIcons[this.icon], size: "16", "aria-hidden": "true" });
    return h(Host, { key: "8ed907584706261ab172d81492b02df8051eb05d" }, h("a", { key: "2a07b5eb04ec7a06458b0a8e4ddbcafc18b25ea6", "aria-disabled": a11yBoolean(this.disabled), tabindex: this.disabled ? -1 : void 0, class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target, role: this.disabled ? "link" : void 0 }, this.iconPosition === "start" && icon, h("div", { key: "4ceb88292196b2699adcbeb802f4e1a64bb839c5", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "33553ee2ba967003bad9f7c52e78d2c383df1c08" })), this.iconPosition === "end" && icon));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
