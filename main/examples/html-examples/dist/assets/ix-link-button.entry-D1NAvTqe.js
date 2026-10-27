import { r as registerInstance, h, H as Host } from "./global-CiP_aNzx.js";
import { M as iconArrowRight, N as iconDocument, g as iconOpenExternal, y as iconChevronRightSmall } from "./index-DwLtFbui-Caa0eG-T.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-DCMEdep1.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const linkButtonCss = () => `@charset "UTF-8";:host{--ix-link-button--color:var(--si-sys-color-text-accent);--ix-link-button--color--hover:var(--si-sys-color-text-accent-hover);--ix-link-button--color--active:var(--si-sys-color-text-accent-active);--ix-link-button--color--disabled:var(--si-sys-color-text-disabled);--ix-link-button--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-link-button--height:var(--si-sys-sizing-size-80);--ix-link-button--min-width:var(--si-sys-sizing-size-80);--ix-link-button--padding:0 var(--si-sys-sizing-spacing-x-20) 0 0;--ix-link-button-icon--margin:var(--si-sys-sizing-spacing-x-20);--ix-link-button-link--text-underline-offset:0.2rem;--ix-link-button-link--text-underline-thickness:var(--si-sys-sizing-size-10);--ix-link-button--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:inline-flex;height:var(--ix-link-button--height);min-width:var(--ix-link-button--min-width)}:host .link-button{display:inline-flex;position:relative;width:100%;padding:var(--ix-link-button--padding);align-items:center;justify-content:flex-start;background-color:transparent;color:var(--ix-link-button--color);cursor:pointer}:host .link-button .icon:first-child{margin-right:var(--ix-link-button-icon--margin)}:host .link-button .icon:last-child{margin-left:var(--ix-link-button-icon--margin)}:host .link-button .link{display:block;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-decoration:underline}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):hover,:host .link-button:not(.disabled):not(:disabled).hover{color:var(--ix-link-button--color--hover)}:host .link-button:not(.disabled):not(:disabled):hover .link,:host .link-button:not(.disabled):not(:disabled).hover .link{text-decoration-thickness:var(--ix-link-button-link--text-underline-thickness)}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):active,:host .link-button:not(.disabled):not(:disabled).active{color:var(--ix-link-button--color--active)}:host .link-button:not(.disabled):not(:disabled):active .link,:host .link-button:not(.disabled):not(:disabled).active .link{text-decoration-thickness:var(--ix-link-button-link--text-underline-thickness)}:host .link-button.disabled{cursor:default;color:var(--ix-link-button--color--disabled)}:host .link-button a{all:unset}:host :focus-visible{outline:var(--ix-link-button--outline-width--focus) solid var(--ix-link-button--outline-color--focus)}`;
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
    const icon = this.icon !== "none" && h("ix-icon", { key: "10e23b4384fbf1b18772b1903c69fee3378b769b", class: "icon", name: linkIcons[this.icon], size: "16", "aria-hidden": "true" });
    return h(Host, { key: "523256249b02d0fd8b72d6474f3ba5fb191c2869" }, h("a", { key: "3157429b66c34d8980b6065eabdf050733622cb9", "aria-disabled": a11yBoolean(this.disabled), tabindex: this.disabled ? -1 : void 0, class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target, role: this.disabled ? "link" : void 0 }, this.iconPosition === "start" && icon, h("div", { key: "2491a0e5393e1d9b23535ca453bb4ed085cfb0ec", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "d93f39360860eeec4ffc7a10d1f27caee266e8be" })), this.iconPosition === "end" && icon));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
