import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from "./index-CgUi6DzV-DmPVhzFD.js";
import { c as closestPassShadow } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { G as iconClose } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import "./preload-helper-UZRgTS1n.js";
const modalContentCss = () => `@charset "UTF-8";:host{--ix-modal-content--padding:0 var(--si-sys-sizing-spacing-x-40) var(--si-sys-sizing-spacing-y-40)}:host{display:block;position:relative;overflow:auto;padding:var(--ix-modal-content--padding);font:var(--si-sys-typography-body-paragraph);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "fd657f774b8ca0bab9f80d4bc9ac1c56e6fbbbd0" }, h("slot", { key: "52d2e23d40a24fdc6fa732caacbd467824b28000" }));
  }
};
ModalContent.style = modalContentCss();
const modalHeaderCss = () => `@charset "UTF-8";:host{--ix-modal-header--padding:var(--si-sys-sizing-spacing-y-40) 0 var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-modal-header--gap:var(--si-sys-sizing-spacing-x-60)}:host{display:flex;padding:var(--ix-modal-header--padding);align-items:center;gap:var(--ix-modal-header--gap)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .modal-title{flex-grow:1;overflow-wrap:anywhere}:host .modal-close{align-self:flex-start}`;
const ModalHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Hide the close button
   */
  hideClose = false;
  /**
   * Icon of the header
   */
  icon;
  /**
   * ARIA label for the icon
   */
  ariaLabelIcon;
  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelCloseIconButton = "Close modal";
  onIconChange(icon) {
    if (this.parentDialog) {
      if (icon) {
        this.parentDialog.classList.add("with-icon");
      } else {
        this.parentDialog.classList.remove("with-icon");
      }
    }
  }
  /**
   * Icon color as a CSS custom property name, for example
   * `--si-sys-color-text-primary`.
   *
   * @breaking-change 6.0.0 Requires the full CSS custom property name
   */
  iconColor;
  /**
   * Emits when the close icon is clicked and closes the modal
   * Can be prevented, in which case only the event is triggered, and the modal remains open
   */
  closeClick;
  parentDialog;
  componentDidLoad() {
    this.parentDialog = closestPassShadow(this.hostElement, "ix-modal");
    this.onIconChange(this.icon);
  }
  onCloseClick(event) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }
    this.parentDialog?.dismissModal();
  }
  render() {
    return h(Host, { key: "e04bf98c6414db291c036fce7bc47e3d663b4189" }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "d537fa4837d738f85e6c1f870f676778597d7bd5", class: "modal-title" }, h("ix-typography", { key: "da7207605f7fb15b8c2f9ecc9c9d7dc8f37dcaaa", format: "h5" }, h("slot", { key: "3b9e888e7bbaa56706abc8653fa42c0bd6326aa0" }))), !this.hideClose ? h("ix-icon-button", { class: "modal-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, iconColor: "--si-sys-color-text-secondary", "aria-label": this.ariaLabelCloseIconButton }) : null);
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "icon": [{
        "onIconChange": 0
      }]
    };
  }
};
ModalHeader.style = modalHeaderCss();
export {
  ModalContent as ix_modal_content,
  ModalHeader as ix_modal_header
};
