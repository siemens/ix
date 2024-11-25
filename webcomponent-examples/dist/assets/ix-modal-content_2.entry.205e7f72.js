import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from "./global.2bfd6008.js";
import { a as closestPassShadow } from "./shadow-dom-cc0bc152.fe0cdd32.js";
const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0 0.5rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalContentStyle0 = modalContentCss;
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "a9138b068e31e29e69d65a77ff670504fc80b99f" }, h("slot", { key: "3b97af0889d2b483ad0d3b9a37da195a5aba331a" }));
  }
};
ModalContent.style = IxModalContentStyle0;
const modalHeaderCss = ":host{display:flex;padding:0.5rem 0 0.5rem 0.5rem;align-items:center;gap:1rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-title{flex-grow:1}:host .modal-close{align-self:flex-start}";
const IxModalHeaderStyle0 = modalHeaderCss;
const ModalHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
    this.hideClose = false;
    this.icon = void 0;
    this.iconColor = void 0;
  }
  onIconChange(icon) {
    if (this.parentDialog) {
      if (icon) {
        this.parentDialog.classList.add("with-icon");
      } else {
        this.parentDialog.classList.remove("with-icon");
      }
    }
  }
  componentDidLoad() {
    this.parentDialog = closestPassShadow(this.hostElement, "ix-modal");
    this.onIconChange(this.icon);
  }
  onCloseClick(event) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }
    this.parentDialog.dismissModal();
  }
  render() {
    return h(Host, { key: "eac3267570af0578a96e5d3f229c739e22b8f71e" }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, size: "32" }) : null, h("div", { key: "824929ed3b5362eaf28084d84ae87a9837f44d57", class: "modal-title" }, h("ix-typography", { key: "97bd809f9ffd90d8d87bc6ee46c488892ae950b5", format: "h5" }, h("slot", { key: "52b95892d06e0247096362dc40e1afd296392170" }))), !this.hideClose ? h("ix-icon-button", { class: "modal-close", onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close" }) : null);
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "icon": ["onIconChange"]
    };
  }
};
ModalHeader.style = IxModalHeaderStyle0;
export {
  ModalContent as ix_modal_content,
  ModalHeader as ix_modal_header
};
