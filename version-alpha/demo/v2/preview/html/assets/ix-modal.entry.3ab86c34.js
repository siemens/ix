import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.23f98c2e.js";
import { a as anime } from "./anime.es-Ou74PMQs.d39ae9b1.js";
import { b as a11yHostAttributes, a as a11yBoolean } from "./a11y-Bb7pDeaQ.1f74cdb9.js";
import { A as Animation } from "./animation-Dp15M30K.7b5f0f8a.js";
import { O as OnListener } from "./listener-CNnvvup1.e2f281be.js";
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
const modalCss = "::backdrop{--ix-dialog-backdrop:var(--theme-color-lightbox, #0000008c)}:focus-visible{outline:none !important}:host{display:none}:host dialog{--ix-dialog-padding:1rem;margin:0;padding:var(--ix-dialog-padding);padding-top:calc(var(--ix-dialog-padding) + var(--ix-safe-area-inset-top));padding-bottom:calc(var(--ix-dialog-padding) + var(--ix-safe-area-inset-bottom));left:50%}:host dialog::backdrop{-webkit-backdrop-filter:blur(2.7182817459px);backdrop-filter:blur(2.7182817459px)}:host .modal{display:flex;flex-direction:column;position:relative;border:none;border-radius:var(--theme-default-border-radius);background:var(--theme-modal--background);box-shadow:var(--theme-shadow-4);color:var(--theme-color-std-text);overflow:visible;max-height:80vh;pointer-events:all}:host .modal-size-360{width:22.5rem}:host .modal-size-480{width:30rem}:host .modal-size-600{width:37.5rem}:host .modal-size-720{width:45rem}:host .modal-size-840{width:52.5rem}:host .modal-size-full-width{width:95%}:host .modal-size-full-screen{border-radius:0;left:0 !important;top:0 !important;transform:none !important;box-shadow:none;--ix-dialog-full-screen-height:calc(\n    var(--ix-safe-area-inset-top) + var(--ix-safe-area-inset-bottom)\n  );width:calc(100% - var(--ix-dialog-padding) * 2);min-width:calc(100% - var(--ix-dialog-padding) * 2);max-width:calc(100% - var(--ix-dialog-padding) * 2);min-height:calc(100% - var(--ix-dialog-padding) * 2 - var(--ix-dialog-full-screen-height));max-height:calc(100% - var(--ix-dialog-padding) * 2 - var(--ix-dialog-full-screen-height))}:host dialog.modal-size-full-screen::backdrop{background:var(--theme-modal--background)}:host .dialog-backdrop{display:block;position:fixed;width:100vw;height:100vh;top:0;left:0;pointer-events:none}:host ::slotted(ix-modal-footer){margin-top:auto}:host(.visible){display:block}:host(.align-center) dialog{margin:0;left:50%;top:50%}:host(.no-backdrop) dialog::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}:host(.with-icon) ::slotted(ix-modal-footer),:host(.with-icon) ::slotted(ix-modal-content){margin-left:3rem}";
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
    this.centered = false;
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
    if (!this.modalVisible) {
      return;
    }
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
    if (!this.modalVisible) {
      return;
    }
    this.slideOutModal(() => {
      this.modalVisible = false;
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
    return h(Host, { key: "2eb4265e1340e363f2fad727ce537166e871c455", class: {
      visible: this.modalVisible,
      "no-backdrop": this.backdrop === false,
      "align-center": this.centered
    } }, h("div", { key: "0ad32150a4e68a653531d20124fef022c348570f", class: "dialog-backdrop" }, h("dialog", { key: "424c214d86b57d7001e4af7bd3894bf5024cc94c", "aria-modal": a11yBoolean(true), "aria-describedby": this.ariaAttributes["aria-describedby"], "aria-labelledby": this.ariaAttributes["aria-labelledby"], class: {
      modal: true,
      [`modal-size-${this.size}`]: true
    }, onClose: () => this.dismissModal(), onClick: (event) => this.onModalClick(event), onCancel: (e) => {
      e.preventDefault();
      this.dismissModal();
    } }, h("slot", { key: "4aa40b5224d791540c8a62f6412bb8b60ce0482c" }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
__decorate([
  OnListener("keydown", (self) => !self.closeOnEscape)
], Modal.prototype, "onKey", null);
Modal.style = modalCss;
export {
  Modal as ix_modal
};
