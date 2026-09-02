import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { K as iconClose } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { b as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-IK9ialav-eKMhumbj.js";
import { c as closestPassShadow } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const popoverHeaderCss = () => `@charset "UTF-8";:host{--ix-popover-header-close-button--border-radius:var(     --theme-small-border-radius   )}:host{display:flex;padding:0.75rem;align-items:center;gap:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .popover-title{flex-grow:1}:host .additional-items{display:flex;align-items:center;gap:0.25rem}:host .popover-close{align-self:flex-start;border-radius:var(--ix-popover-header-close-button--border-radius);--ix-icon-button-color:var(--ix-popover-close--color);--ix-button-tertiary--color:var(--ix-popover-close--color);--ix-button-tertiary--color--hover:var(--ix-popover-close--color);--ix-button-tertiary--color--active:var(--ix-popover-close--color);--ix-button-tertiary--background:var(     --ix-popover-close-button--background   );--ix-button-tertiary--background--hover:var(     --ix-popover-close-button--background--hover   );--ix-button-tertiary--background--active:var(     --ix-popover-close-button--background--active   );--ix-button-tertiary--border-color:transparent;--ix-button-tertiary--border-color--hover:transparent;--ix-button-tertiary--border-color--active:transparent}`;
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
   * `--si-sys-text-primary`.
   *
   * @since 5.1.0
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
    return h(Host, { key: "40c93c55122c7cb605cc0883e89025d18397ee7e", [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, size: "24", "aria-hidden": a11yBoolean(true) }) : null, h("div", { key: "381421a55c80b6782da3c9ad4af328f6cedbb653", class: "popover-title" }, h("ix-typography", { key: "02dc87ba523b53d35f15f3bd91e5e3cd119129b8", format: "h5" }, h("slot", { key: "3b6628005b70cca99fdae36f5c1889b0aaec7422" }))), h("div", { key: "527cae83335a9d7b3718305580cb803cdbf9304e", class: "additional-items" }, h("slot", { key: "55ef5c874de329c448f419e54eea3e255112a30d", name: "additional-items" })), this.hideClose ? null : h("ix-icon-button", { class: "popover-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, "aria-label": this.ariaLabelCloseIconButton }));
  }
  static get delegatesFocus() {
    return true;
  }
};
PopoverHeader.style = popoverHeaderCss();
export {
  PopoverHeader as ix_popover_header
};
