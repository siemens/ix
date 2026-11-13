import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-Dp-uZHvv.js";
import { G as iconClose } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { d as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-wdvfXiKy-B0gJlu0v.js";
import { c as closestPassShadow } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
const popoverHeaderCss = () => `@charset "UTF-8";:host{--ix-popover-header-close-button--border-radius:var(--si-sys-sizing-border-radius-xs)}:host{--ix-popover-header--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50);--ix-popover-header--gap:var(--si-sys-sizing-spacing-x-40);--ix-popover-header-additional-items--gap:var(--si-sys-sizing-spacing-x-20)}:host{display:flex;padding:var(--ix-popover-header--padding);align-items:center;gap:var(--ix-popover-header--gap)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .popover-title{flex-grow:1}:host .additional-items{display:flex;align-items:center;gap:var(--ix-popover-header-additional-items--gap)}:host .popover-close{align-self:flex-start;border-radius:var(--ix-popover-header-close-button--border-radius);--ix-icon-button-color:var(--ix-popover-close--color);--ix-button-tertiary--color:var(--ix-popover-close--color);--ix-button-tertiary--color--hover:var(--ix-popover-close--color);--ix-button-tertiary--color--active:var(--ix-popover-close--color);--ix-button-tertiary--background:var(     --ix-popover-close-button--background   );--ix-button-tertiary--background--hover:var(     --ix-popover-close-button--background--hover   );--ix-button-tertiary--background--active:var(     --ix-popover-close-button--background--active   );--ix-button-tertiary--border-color:transparent;--ix-button-tertiary--border-color--hover:transparent;--ix-button-tertiary--border-color--active:transparent}`;
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
    return h(Host, { key: "490bb6bebf56a10bddecc6a35977040dfd782eb9", [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, "aria-hidden": a11yBoolean(true) }) : null, h("div", { key: "bae112a470f0b2c82790c970eaae0f2b021f10e4", class: "popover-title" }, h("ix-typography", { key: "e2e3f2cd33d4aa5187212aa8cc1e0d80aeb34756", format: "h5" }, h("slot", { key: "aed19438a892a15ad61f6a04288ffb48c66390a8" }))), h("div", { key: "8f76f11af731da88ad5e7cee2ef2dc3d6f81a6fe", class: "additional-items" }, h("slot", { key: "3816fef017c1232566bac2f1c3c54c46fa9fdbbe", name: "additional-items" })), this.hideClose ? null : h("ix-icon-button", { class: "popover-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, "aria-label": this.ariaLabelCloseIconButton }));
  }
  static get delegatesFocus() {
    return true;
  }
};
PopoverHeader.style = popoverHeaderCss();
export {
  PopoverHeader as ix_popover_header
};
