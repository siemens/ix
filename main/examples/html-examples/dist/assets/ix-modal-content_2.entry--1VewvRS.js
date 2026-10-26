import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from "./global-CqiPKlnE.js";
import { c as closestPassShadow } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { R as iconClose } from "./index-DwLtFbui-Caa0eG-T.js";
const modalContentCss = () => `@charset "UTF-8";:host{--ix-modal-content--padding:0 var(--si-sys-sizing-spacing-x-40) var(--si-sys-sizing-spacing-y-40)}:host{display:block;position:relative;overflow:auto;padding:var(--ix-modal-content--padding);font:var(--si-sys-typography-body-paragraph);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "b8d796e6dd424843baaf4d77c5424be5adc0dde2" }, h("slot", { key: "108b59f21a75fac68c5aa4f69741d4776d9e6dcc" }));
  }
};
ModalContent.style = modalContentCss();
const modalHeaderCss = () => `@charset "UTF-8";:host{--ix-modal-header--padding:var(--si-sys-sizing-spacing-y-40) 0 var(--si-sys-sizing-spacing-y-40)     var(--si-sys-sizing-spacing-x-40);--ix-modal-header--gap:var(--si-sys-sizing-spacing-x-60)}:host{display:flex;padding:var(--ix-modal-header--padding);align-items:center;gap:var(--ix-modal-header--gap)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .modal-title{flex-grow:1;overflow-wrap:anywhere}:host .modal-close{align-self:flex-start}`;
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
   *
   * @since 3.2.0
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
    return h(Host, { key: "1622edde5e50da1849b800b30b7a18a7f851eeab" }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "c2a6b2922dff4ef72e3b3a5086ee800a93503e36", class: "modal-title" }, h("ix-typography", { key: "ca13e032cf5bd937e54e4ed15ca160148a6f67a2", format: "h5" }, h("slot", { key: "9f27ff78e4477367769081cac3d81cbdb2d0a1f6" }))), !this.hideClose ? h("ix-icon-button", { class: "modal-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, iconColor: "--si-sys-color-text-secondary", "aria-label": this.ariaLabelCloseIconButton }) : null);
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
