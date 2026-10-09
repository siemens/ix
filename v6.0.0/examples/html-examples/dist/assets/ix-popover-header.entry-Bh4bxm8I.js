import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { K as iconClose } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { c as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-UgUryLm8-DN5Sb8-s.js";
import { c as closestPassShadow } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
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
    return h(Host, { key: "b5b9c7acb5c57edb332f1ffc1b4bb97bea591a55", [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, "aria-hidden": a11yBoolean(true) }) : null, h("div", { key: "f6f0e977475e0624f5c2f01d6d12450e535c0379", class: "popover-title" }, h("ix-typography", { key: "b4b73c4c6ce82920e76a89705f2454683a9bd4ad", format: "h5" }, h("slot", { key: "2edf28a42a97b10f41c3a02bbe4c44ad8d012cfc" }))), h("div", { key: "83c9a59c7270068873bd3a810b095104f74dee7c", class: "additional-items" }, h("slot", { key: "efedfa7996fff49ebc6fd2250ea0acdcc2a703ef", name: "additional-items" })), this.hideClose ? null : h("ix-icon-button", { class: "popover-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, "aria-label": this.ariaLabelCloseIconButton }));
  }
  static get delegatesFocus() {
    return true;
  }
};
PopoverHeader.style = popoverHeaderCss();
export {
  PopoverHeader as ix_popover_header
};
