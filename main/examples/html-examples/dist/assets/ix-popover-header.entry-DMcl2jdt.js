import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-P-1aad6e.js";
import { G as iconClose } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { d as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-wdvfXiKy-B0gJlu0v.js";
import { c as closestPassShadow } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
const popoverHeaderCss = () => `@charset "UTF-8";:host{--ix-popover-header-close-button--border-radius:var(--si-sys-sizing-border-radius-xs)}:host{--ix-popover-header--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50);--ix-popover-header--gap:var(--si-sys-sizing-spacing-x-40);--ix-popover-header-additional-items--gap:var(--si-sys-sizing-spacing-x-20)}:host{display:flex;padding:var(--ix-popover-header--padding);align-items:center;gap:var(--ix-popover-header--gap)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .popover-title{flex-grow:1}:host .additional-items{display:flex;align-items:center;gap:var(--ix-popover-header-additional-items--gap)}:host .popover-close{align-self:flex-start;border-radius:var(--ix-popover-header-close-button--border-radius);--ix-icon-button--color:var(--ix-popover-close--color);--ix-button--color--tertiary:var(--ix-popover-close--color);--ix-button--color--tertiary--hover:var(--ix-popover-close--color);--ix-button--color--tertiary--active:var(--ix-popover-close--color);--ix-button--background--tertiary:var(--ix-popover-close-button--background);--ix-button--background--tertiary--hover:var(--ix-popover-close-button--background--hover);--ix-button--background--tertiary--active:var(--ix-popover-close-button--background--active);--ix-button--border-color--tertiary:transparent;--ix-button--border-color--tertiary--hover:transparent;--ix-button--border-color--tertiary--active:transparent}`;
const PopoverHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Icon name displayed before the title.
   * The icon is decorative; provide context in the default slot heading.
   *
   * @since 5.1.0
   */
  icon;
  /**
   * Icon color as a CSS custom property name, for example
   * `--si-sys-color-text-primary`.
   *
   * @since 5.1.0
   * @breaking-change 6.0.0 Requires the full CSS custom property name
   */
  iconColor;
  /**
   * Hide the close (X) button
   *
   * @since 5.1.0
   */
  hideClose = false;
  /**
   * ARIA label for the close icon button.
   * Will be set as aria-label on the nested HTML button element.
   *
   * @since 5.1.0
   */
  ariaLabelCloseIconButton = "Close";
  /**
   * Fires when close button is clicked.
   * Cancel to prevent closing.
   *
   * @since 5.1.0
   */
  closeClick;
  parentPopover;
  componentDidLoad() {
    this.parentPopover = closestPassShadow(this.hostElement, "ix-popover");
  }
  onCloseClick(event) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }
    this.parentPopover?.hidePopover();
  }
  render() {
    return h(Host, { key: "02a130d01f224d8b2e5d1174af1c6756bee0afeb", [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, "aria-hidden": a11yBoolean(true) }) : null, h("div", { key: "8d95ba1a66991a7b7e281cb82ea09d915cdd9c35", class: "popover-title" }, h("ix-typography", { key: "15a300764e18c73b0160ecf70af11fb06ac2104e", format: "h5" }, h("slot", { key: "9d07cf85ff3217dfecd4153de4fdbaee92499845" }))), h("div", { key: "343595a717633085416b3e31d9ec11f2cacf58a7", class: "additional-items" }, h("slot", { key: "4e41f51a1fafdcba140bbf61cb230a9de2cc212d", name: "additional-items" })), this.hideClose ? null : h("ix-icon-button", { class: "popover-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, "aria-label": this.ariaLabelCloseIconButton }));
  }
  static get delegatesFocus() {
    return true;
  }
};
PopoverHeader.style = popoverHeaderCss();
export {
  PopoverHeader as ix_popover_header
};
