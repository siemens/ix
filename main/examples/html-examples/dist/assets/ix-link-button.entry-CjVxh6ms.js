import { r as registerInstance, h, H as Host } from "./global-DZv3C4wT.js";
import { I as iconArrowRight, J as iconDocument, g as iconOpenExternal, u as iconChevronRightSmall } from "./index-GHlVc4OJ-sCaZA1R3.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
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
  render() {
    const icon = this.icon !== "none" && h("ix-icon", { key: "455bbeece25ac96126c077cfc9337a18288fd92d", class: "icon", name: linkIcons[this.icon], size: "16", "aria-hidden": "true" });
    return h(Host, { key: "f90d48a7765b0f0c45efbc2b055770bbc5c7fe94" }, h("a", { key: "1d37333c94db3578f6800fdcee1fea24e094dc1d", "aria-disabled": a11yBoolean(this.disabled), tabindex: this.disabled ? -1 : void 0, class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target, role: this.disabled ? "link" : void 0 }, this.iconPosition === "start" && icon, h("div", { key: "85f8745862ce32a26be58bd0954050b1b4553314", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "d6ca80b1273e475d21ea76a0d2f011a1cd09abbe" })), this.iconPosition === "end" && icon));
  }
};
LinkButton.style = linkButtonCss();
export {
  LinkButton as ix_link_button
};
