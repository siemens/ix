import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { c as a11yHostAttributes, a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { A as Animation } from "./animation-BqeSHO6C-CazTJry4.js";
import { t as tryFocusElement } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { I as IX_MODAL_AUTOFOCUS_SELECTOR } from "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
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
const modalCss = () => `@charset "UTF-8";:host{--ix-modal-backdrop--background:var(--si-sys-effects-backdrop);--ix-modal--border-radius:var(--theme-default-border-radius);--ix-modal--box-shadow:var(--si-sys-effects-shadow-4);--ix-modal--color:var(--si-sys-text-primary);--ix-modal--background:var(--si-sys-background-3)}::backdrop{background:var(--ix-modal-backdrop--background, rgba(0, 0, 0, 0.5490196078))}:focus-visible{outline:none !important}:host{display:none}:host dialog{--ix-dialog-padding:1rem;margin:0;padding:var(--ix-dialog-padding);padding-top:calc(var(--ix-dialog-padding) + var(--ix-safe-area-inset-top));padding-bottom:calc(var(--ix-dialog-padding) + var(--ix-safe-area-inset-bottom));left:50%}:host .modal{display:flex;flex-direction:column;position:fixed;border:none;border-radius:var(--ix-modal--border-radius);background:var(--ix-modal--background);box-shadow:var(--ix-modal--box-shadow);color:var(--ix-modal--color);overflow:visible;max-height:80vh;pointer-events:all;overflow-wrap:break-word}:host .modal-size-360{width:22.5rem}:host .modal-size-480{width:30rem}:host .modal-size-600{width:37.5rem}:host .modal-size-720{width:45rem}:host .modal-size-840{width:52.5rem}:host .modal-size-full-width{width:95%}:host .modal-size-full-screen{border-radius:0;left:0 !important;top:0 !important;transform:none !important;box-shadow:none;--ix-dialog-full-screen-height:calc(     var(--ix-safe-area-inset-top) + var(--ix-safe-area-inset-bottom)   );width:calc(100% - var(--ix-dialog-padding) * 2);min-width:calc(100% - var(--ix-dialog-padding) * 2);max-width:calc(100% - var(--ix-dialog-padding) * 2);min-height:calc(100% - var(--ix-dialog-padding) * 2 - var(--ix-dialog-full-screen-height));max-height:calc(100% - var(--ix-dialog-padding) * 2 - var(--ix-dialog-full-screen-height))}:host dialog.modal-size-full-screen::backdrop{background:var(--ix-modal--background)}:host .dialog-backdrop{display:block;position:fixed;width:100vw;height:100vh;top:0;left:0;pointer-events:none}:host ::slotted(ix-modal-footer){margin-top:auto}:host(.visible){display:block}:host(.align-center) dialog{margin:0;left:50%;top:50%}:host(.no-backdrop) dialog::backdrop,:host(.non-blocking) dialog::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}:host(.with-icon) ::slotted(ix-modal-footer),:host(.with-icon) ::slotted(ix-modal-content){margin-left:3rem}`;
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
   * Dismiss modal on backdrop click (outside the dialog panel).
   * Ignored when **isNonBlocking** is `true`.
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
   * Non-modal dialog: page stays interactive, no lightbox or focus trap; `aria-modal` is `false`.
   * Set before calling `showModal()`; changing while open is unsupported.
   */
  isNonBlocking = false;
  /**
   * Dialog close
   */
  dialogClose;
  /**
   * Dialog cancel
   */
  dialogDismiss;
  modalVisible = false;
  get dialog() {
    return this.hostElement.shadowRoot.querySelector("dialog");
  }
  getDialogElement() {
    const dialog = this.dialog;
    if (!dialog) {
      throw new Error("Modal dialog element not found");
    }
    return dialog;
  }
  slideInModal() {
    const dialog = this.getDialogElement();
    dialog.classList.remove("modal-open-settled");
    const duration = this.disableAnimation ? 0 : Animation.mediumTime;
    const translateY = this.centered ? ["-90%", "-50%"] : [0, 40];
    const markEntranceSettled = () => dialog.classList.add("modal-open-settled");
    animate(dialog, {
      duration,
      opacity: [0, 1],
      translateY,
      translateX: ["-50%", "-50%"],
      easing: "easeOutSine",
      complete: markEntranceSettled
    });
    if (duration === 0) {
      markEntranceSettled();
    }
  }
  slideOutModal(completeCallback) {
    const dialog = this.getDialogElement();
    dialog.classList.remove("modal-open-settled");
    const duration = this.disableAnimation ? 0 : Animation.mediumTime;
    const translateY = this.centered ? ["-50%", "-90%"] : [40, 0];
    animate(dialog, {
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
  closeDialog(type, reason, emitter) {
    this.slideOutModal(() => {
      this.modalVisible = false;
      this.getDialogElement().close(JSON.stringify({ type, reason }, null, 2));
      emitter.emit(reason);
    });
  }
  isInsideDialog(event) {
    if (!this.dialog) {
      return false;
    }
    const path = event.composedPath();
    if (!path.includes(this.dialog)) {
      return false;
    }
    if (event.target !== this.dialog) {
      return true;
    }
    const rect = this.dialog.getBoundingClientRect();
    const { clientX, clientY } = event;
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  }
  onMouseDown(event) {
    this.isMouseDownInsideDialog = this.isInsideDialog(event);
  }
  onMouseUp(event) {
    const isMouseUpInsideDialog = this.isInsideDialog(event);
    if (this.closeOnBackdropClick && !this.isNonBlocking && !this.isMouseDownInsideDialog && !isMouseUpInsideDialog) {
      void this.dismissModal();
    }
  }
  async scheduleInitialAutofocus() {
    await new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const direct = this.hostElement.querySelector(IX_MODAL_AUTOFOCUS_SELECTOR);
          if (direct) {
            tryFocusElement(direct, { focusVisible: true });
          }
          resolve();
        });
      });
    });
  }
  /**
   * Show the dialog
   */
  async showModal() {
    try {
      const dialog = await waitForElement("dialog", this.hostElement.shadowRoot);
      this.modalVisible = true;
      if (this.isNonBlocking) {
        dialog.show();
      } else {
        dialog.showModal();
      }
      this.slideInModal();
      await this.scheduleInitialAutofocus();
    } catch {
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
    this.closeDialog("dismiss", reason, this.dialogDismiss);
  }
  /**
   * Close the dialog
   */
  async closeModal(reason) {
    if (!this.modalVisible) {
      return;
    }
    this.closeDialog("close", reason, this.dialogClose);
  }
  componentWillLoad() {
    this.ariaAttributes = a11yHostAttributes(this.hostElement);
  }
  render() {
    return h(Host, { key: "a9b364670435eaccaf0053677aa375736d19fdc2", class: {
      visible: this.modalVisible,
      "no-backdrop": this.hideBackdrop,
      "align-center": this.centered,
      "non-blocking": this.isNonBlocking
    } }, h("div", { key: "ec40c266676dc3ddd08dc7343a7b4108e2f1fb0f", class: "dialog-backdrop" }, h("dialog", { key: "ddfa94e7814ca3472f3d77e63c6aa30c5994a976", "aria-modal": a11yBoolean(!this.isNonBlocking), "aria-describedby": this.ariaAttributes["aria-describedby"], "aria-labelledby": this.ariaAttributes["aria-labelledby"], class: {
      modal: true,
      [`modal-size-${this.size}`]: true
    }, onClose: () => this.dismissModal(), onMouseDown: (event) => this.onMouseDown(event), onMouseUp: (event) => this.onMouseUp(event), onKeyDown: (e) => {
      if (this.isNonBlocking && e.key === "Escape") {
        e.preventDefault();
        void this.dismissModal();
      }
    }, onCancel: (e) => {
      e.preventDefault();
      void this.dismissModal();
    } }, h("slot", { key: "52934528bd2a9eb640e45d3581ce1e3ceccf299c" }))));
  }
};
Modal.style = modalCss();
export {
  Modal as ix_modal
};
