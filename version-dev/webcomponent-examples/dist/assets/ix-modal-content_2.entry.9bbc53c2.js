import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from "./index.7c90662d.js";
import { a as closestPassShadow } from "./shadow-dom-60e9243d.05aee9aa.js";
const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0.25rem 0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalContentStyle0 = modalContentCss;
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "7d65ee586b3d78c89cc6f6a90689eaa1d98f4ec2" }, h("slot", { key: "a2cb0a30400cf62e782a0fbb9e2926f4127ace4f" }));
  }
};
ModalContent.style = IxModalContentStyle0;
const modalHeaderCss = ":host{display:flex;padding:0.5rem;align-items:center;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-close{margin-left:auto;margin-right:-1rem}:host .modal-icon{margin-right:1rem}";
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
    return h(Host, { key: "93f0022e034724d55e1ef5d158e26c3c52f187ea" }, this.icon ? h("ix-icon", { class: "modal-icon", name: this.icon, color: this.iconColor }) : null, h("ix-typography", { key: "da388b084f8a380c731a45ae72d9b40fce7b2ef5", variant: "default-title" }, h("slot", { key: "425ec3dd532be2169aa3782e01e923c0518646bb" })), !this.hideClose ? h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: "modal-close" }) : null);
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
