import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.9430376f.js";
import { a as anime } from "./anime.es-a5520566.eae0a8f1.js";
import { b as a11yHostAttributes, a as a11yBoolean } from "./a11y-d5444a76.05d6fe5e.js";
import { A as Animation } from "./animation-4a73b1c3.59b7eda0.js";
import { O as OnListener } from "./listener-4f3baab5.980f869c.js";
function waitForElement(selector, doc, timeout = 3e3) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkIfElementExist = () => {
      const dialog = doc.querySelector(selector);
      if (dialog) {
        resolve(dialog);
      } else {
        if (Date.now() - startTime < timeout) {
          setTimeout(checkIfElementExist);
        } else {
          reject();
        }
      }
    };
    checkIfElementExist();
  });
}
const modalCss = "::backdrop{--ix-dialog-backdrop:var(--theme-color-lightbox, #0000008c)}:focus-visible{outline:none !important}:host{display:none}:host dialog{margin:0;padding:1rem;left:50%}:host dialog::backdrop{-webkit-backdrop-filter:blur(2.7182817459px);backdrop-filter:blur(2.7182817459px)}:host .modal{display:flex;flex-direction:column;position:relative;border:none;border-radius:var(--theme-default-border-radius);background:var(--theme-modal--background);box-shadow:var(--theme-shadow-4);color:var(--theme-color-std-text);overflow:visible;max-height:80vh;pointer-events:all}:host .modal-size-360{width:22.5rem}:host .modal-size-480{width:30rem}:host .modal-size-600{width:37.5rem}:host .modal-size-720{width:45rem}:host .modal-size-840{width:52.5rem}:host .modal-size-full-width{width:95%}:host .modal-size-full-screen{left:0 !important;top:0 !important;transform:none !important;width:calc(100% - 28px);min-width:calc(100% - 28px);max-width:calc(100% - 28px);height:calc(100% - 28px);min-height:calc(100% - 28px);max-height:calc(100% - 28px)}:host .dialog-backdrop{display:block;position:fixed;width:100vw;height:100vh;top:0;left:0;pointer-events:none}:host ::slotted(ix-modal-footer){margin-top:auto}:host(.visible){display:block}:host(.align-center) dialog{margin:0;left:50%;top:50%}:host(.no-backdrop) dialog::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}:host(.with-icon) ::slotted(ix-modal-footer),:host(.with-icon) ::slotted(ix-modal-content){margin-left:2.5rem}";
const IxModalStyle0 = modalCss;
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dialogClose = createEvent(this, "dialogClose", 7);
    this.dialogDismiss = createEvent(this, "dialogDismiss", 7);
    this.ariaAttributes = {};
    this.size = "360";
    this.animation = true;
    this.backdrop = true;
    this.closeOnBackdropClick = false;
    this.beforeDismiss = void 0;
    this.centered = false;
    this.keyboard = true;
    this.closeOnEscape = true;
    this.modalVisible = false;
  }
  onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  }
  get dialog() {
    return this.hostElement.shadowRoot.querySelector("dialog");
  }
  slideInModal() {
    const duration = this.animation ? Animation.mediumTime : 0;
    let transformY = this.centered ? "-50%" : 40;
    anime({
      targets: this.dialog,
      duration,
      opacity: [0, 1],
      translateY: [0, transformY],
      translateX: ["-50%", "-50%"],
      easing: "easeOutSine"
    });
  }
  slideOutModal(completeCallback) {
    const duration = this.animation ? Animation.mediumTime : 0;
    let transformY = this.centered ? "-50%" : 40;
    anime({
      targets: this.dialog,
      duration,
      opacity: [1, 0],
      translateY: [transformY, 0],
      translateX: ["-50%", "-50%"],
      easing: "easeInSine",
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      }
    });
  }
  onModalClick(event) {
    if (event.target !== this.dialog) {
      return;
    }
    const rect = this.dialog.getBoundingClientRect();
    const isClickOutside = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
    if (!isClickOutside && this.closeOnBackdropClick) {
      this.dismissModal();
    }
  }
  async showModal() {
    try {
      const dialog = await waitForElement("dialog", this.hostElement.shadowRoot);
      this.modalVisible = true;
      dialog.showModal();
    } catch (e) {
      console.error("HTMLDialogElement not existing");
    }
  }
  async dismissModal(reason) {
    let allowDismiss = true;
    if (this.beforeDismiss !== void 0) {
      allowDismiss = await this.beforeDismiss(reason);
    }
    if (!allowDismiss) {
      return;
    }
    this.slideOutModal(() => {
      this.modalVisible = false;
      this.dialog.close(JSON.stringify({
        type: "dismiss",
        reason
      }, null, 2));
      this.dialogDismiss.emit(reason);
    });
  }
  async closeModal(reason) {
    this.slideOutModal(() => {
      this.dialog.close(JSON.stringify({
        type: "close",
        reason
      }, null, 2));
      this.dialogClose.emit(reason);
    });
  }
  componentDidLoad() {
    this.slideInModal();
  }
  componentWillLoad() {
    this.ariaAttributes = a11yHostAttributes(this.hostElement);
  }
  render() {
    return h(Host, { key: "e7e27615541ea127c4d9608a71f447f169cde5d3", class: {
      visible: this.modalVisible,
      "no-backdrop": this.backdrop === false,
      "align-center": this.centered
    } }, h("div", { key: "3a4e1950295bec70cfdf1a332a9e9e4ab3186472", class: "dialog-backdrop" }, h("dialog", { key: "4455ba17c66dc4d03a792a9aeea11d1380c31674", "aria-modal": a11yBoolean(true), "aria-describedby": this.ariaAttributes["aria-describedby"], "aria-labelledby": this.ariaAttributes["aria-labelledby"], class: {
      modal: true,
      [`modal-size-${this.size}`]: true
    }, onClose: () => this.dismissModal(), onClick: (event) => this.onModalClick(event), onCancel: (e) => {
      e.preventDefault();
      this.dismissModal();
    } }, h("slot", { key: "383eae1fa01e4159ca2d512f477532f51c56664a" }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
__decorate([
  OnListener("keydown", (self) => !self.closeOnEscape || !self.keyboard)
], Modal.prototype, "onKey", null);
Modal.style = IxModalStyle0;
export {
  Modal as ix_modal
};
