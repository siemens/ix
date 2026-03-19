import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { b as a11yHostAttributes, a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { A as Animation } from "./animation-CZUo7Z4G-DSUp_D74.js";
import { O as OnListener } from "./listener-BbsE7RRY-Cle3lpCC.js";
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
const modalCss = () => `::backdrop{background:var(--theme-color-lightbox, rgba(0, 0, 0, 0.5490196078))}:focus-visible{outline:none !important}:host{display:none}:host dialog{--ix-dialog-padding:1rem;margin:0;padding:var(--ix-dialog-padding);padding-top:calc(var(--ix-dialog-padding) + var(--ix-safe-area-inset-top));padding-bottom:calc(var(--ix-dialog-padding) + var(--ix-safe-area-inset-bottom));left:50%}:host .modal{display:flex;flex-direction:column;position:fixed;border:none;border-radius:var(--theme-default-border-radius);background:var(--theme-modal--background);box-shadow:var(--theme-shadow-4);color:var(--theme-color-std-text);overflow:visible;max-height:80vh;pointer-events:all;overflow-wrap:break-word}:host .modal-size-360{width:22.5rem}:host .modal-size-480{width:30rem}:host .modal-size-600{width:37.5rem}:host .modal-size-720{width:45rem}:host .modal-size-840{width:52.5rem}:host .modal-size-full-width{width:95%}:host .modal-size-full-screen{border-radius:0;left:0 !important;top:0 !important;transform:none !important;box-shadow:none;--ix-dialog-full-screen-height:calc(     var(--ix-safe-area-inset-top) + var(--ix-safe-area-inset-bottom)   );width:calc(100% - var(--ix-dialog-padding) * 2);min-width:calc(100% - var(--ix-dialog-padding) * 2);max-width:calc(100% - var(--ix-dialog-padding) * 2);min-height:calc(100% - var(--ix-dialog-padding) * 2 - var(--ix-dialog-full-screen-height));max-height:calc(100% - var(--ix-dialog-padding) * 2 - var(--ix-dialog-full-screen-height))}:host dialog.modal-size-full-screen::backdrop{background:var(--theme-modal--background)}:host .dialog-backdrop{display:block;position:fixed;width:100vw;height:100vh;top:0;left:0;pointer-events:none}:host ::slotted(ix-modal-footer){margin-top:auto}:host(.visible){display:block}:host(.align-center) dialog{margin:0;left:50%;top:50%}:host(.no-backdrop) dialog::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}:host(.with-icon) ::slotted(ix-modal-footer),:host(.with-icon) ::slotted(ix-modal-content){margin-left:3rem}`;
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
  }
  ariaAttributes = {};
  isMouseDownInsideDialog = false;
  get hostElement() {
    return getElement(this);
  }
  /**
   * Modal size
   */
  size = "360";
  /**
   * Should the modal animation be disabled
   */
  disableAnimation = false;
  /**
   * Hide the backdrop behind the modal dialog
   */
  hideBackdrop = false;
  /**
   * Dismiss modal on backdrop click
   */
  closeOnBackdropClick = false;
  /**
   * Is called before the modal is dismissed.
   *
   * - Return `true` to proceed in dismissing the modal
   * - Return `false` to abort in dismissing the modal
   */
  beforeDismiss;
  /**
   * Centered modal
   */
  centered = false;
  /**
   * If set to true the modal cannot be closed by pressing the Escape key
   */
  disableEscapeClose = false;
  /**
   * Dialog close
   */
  dialogClose;
  /**
   * Dialog cancel
   */
  dialogDismiss;
  modalVisible = false;
  onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  }
  get dialog() {
    return this.hostElement.shadowRoot.querySelector("dialog");
  }
  slideInModal() {
    const duration = this.disableAnimation ? 0 : Animation.mediumTime;
    const translateY = this.centered ? ["-90%", "-50%"] : [0, 40];
    animate(this.dialog, {
      duration,
      opacity: [0, 1],
      translateY,
      translateX: ["-50%", "-50%"],
      easing: "easeOutSine"
    });
  }
  slideOutModal(completeCallback) {
    const duration = this.disableAnimation ? 0 : Animation.mediumTime;
    const translateY = this.centered ? ["-50%", "-90%"] : [40, 0];
    animate(this.dialog, {
      duration,
      opacity: [1, 0],
      translateY,
      translateX: ["-50%", "-50%"],
      easing: "easeInSine",
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      }
    });
  }
  onMouseDown(event) {
    this.isMouseDownInsideDialog = this.isPointInsideDialog(event.clientX, event.clientY);
  }
  onMouseUp(event) {
    const isMouseUpInsideDialog = this.isPointInsideDialog(event.clientX, event.clientY);
    if (this.closeOnBackdropClick && !this.isMouseDownInsideDialog && !isMouseUpInsideDialog) {
      this.dismissModal();
    }
  }
  isPointInsideDialog(x, y) {
    const rect = this.dialog.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  }
  /**
   * Show the dialog
   */
  async showModal() {
    try {
      const dialog = await waitForElement("dialog", this.hostElement.shadowRoot);
      this.modalVisible = true;
      dialog.showModal();
      this.slideInModal();
    } catch (e) {
      console.error("HTMLDialogElement not existing");
    }
  }
  /**
   * Dismiss the dialog
   */
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
  /**
   * Close the dialog
   */
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
  componentWillLoad() {
    this.ariaAttributes = a11yHostAttributes(this.hostElement);
  }
  render() {
    return h(Host, { key: "06823888e2849ee1617263e0ca71d1e352e677c6", class: {
      visible: this.modalVisible,
      "no-backdrop": this.hideBackdrop,
      "align-center": this.centered
    } }, h("div", { key: "b94f23cb2f3520c24830ee7ce6140231b180e259", class: "dialog-backdrop" }, h("dialog", { key: "6d37d1a251c7b495e0a9243ef33c2d94f2e4ccac", "aria-modal": a11yBoolean(true), "aria-describedby": this.ariaAttributes["aria-describedby"], "aria-labelledby": this.ariaAttributes["aria-labelledby"], class: {
      modal: true,
      [`modal-size-${this.size}`]: true
    }, onClose: () => this.dismissModal(), onMouseDown: (event) => this.onMouseDown(event), onMouseUp: (event) => this.onMouseUp(event), onCancel: (e) => {
      e.preventDefault();
      this.dismissModal();
    } }, h("slot", { key: "bf6fd09ab0cf2fb3eac78ae493449d40161f2619" }))));
  }
};
__decorate([
  OnListener("keydown", (self) => self.disableEscapeClose)
], Modal.prototype, "onKey", null);
Modal.style = modalCss();
export {
  Modal as ix_modal
};
