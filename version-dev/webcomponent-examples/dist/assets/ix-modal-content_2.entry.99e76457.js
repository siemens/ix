import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from "./index.e885955d.js";
import { a as closestPassShadow } from "./shadow-dom-60e9243d.05aee9aa.js";
const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0.125rem 0.625rem 0.125rem 0.625rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
ModalContent.style = modalContentCss;
const modalHeaderCss = ":host{display:flex;padding:2px 16px 16px 10px;align-items:center;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-close{margin-left:auto;margin-right:-20px}:host .modal-icon{margin-right:1rem}";
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
    return h(Host, null, this.icon ? h("ix-icon", { class: "modal-icon", name: this.icon, color: this.iconColor }) : null, h("ix-typography", { variant: "default-title" }, h("slot", null)), !this.hideClose ? h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: "modal-close" }) : null);
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
ModalHeader.style = modalHeaderCss;
export {
  ModalContent as ix_modal_content,
  ModalHeader as ix_modal_header
};
