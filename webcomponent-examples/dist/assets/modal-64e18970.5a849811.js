import { r as registerInstance, h, g as getElement, c as createEvent, H as Host } from "./index.352cb90e.js";
import { T as TypedEvent } from "./typed-event-a230184a.ccfb44d2.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
import { A as Animation } from "./animation-268dce50.df0d8da4.js";
const modalContainerCss = ".sc-ix-modal-container-h{position:absolute;top:0;left:0;z-index:9999}";
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const ModalContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async showModal(config) {
    const onClose = new TypedEvent();
    const onDismiss = new TypedEvent();
    const modal = document.createElement("ix-modal");
    let { title, content } = config, modifiedConfig = __rest(config, ["title", "content"]);
    Object.assign(modal, Object.assign({ headerTitle: title }, modifiedConfig));
    if (typeof content === "string") {
      const template = document.createElement("template");
      content = content.trim();
      template.innerHTML = content;
      modal.appendChild(template.content.firstChild);
    } else {
      modal.appendChild(content);
    }
    this.hostElement.appendChild(modal);
    modal.addEventListener("closed", (event) => {
      this.hostElement.removeChild(modal);
      onClose.emit(event.detail);
    });
    modal.addEventListener("dismissed", (event) => {
      this.hostElement.removeChild(modal);
      onDismiss.emit(event.detail);
    });
    return {
      htmlElement: modal,
      onClose,
      onDismiss
    };
  }
  render() {
    return h(Host, null);
  }
  get hostElement() {
    return getElement(this);
  }
};
ModalContainer.style = modalContainerCss;
const modalCss = ".sc-ix-modal-h{position:relative;width:100vw;height:100vh}.sc-ix-modal-h .modal.sc-ix-modal{display:flex}.sc-ix-modal-h .modal.animation.sc-ix-modal{animation:modal-fade 300ms ease-in-out}.sc-ix-modal-h .modal.backdrop.sc-ix-modal{background-color:var(--theme-color-lightbox);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition:none}.sc-ix-modal-h .modal.backdrop.animation.sc-ix-modal{transition:-webkit-backdrop-filter 0ms ease-in-out;transition:backdrop-filter 0ms ease-in-out;transition:backdrop-filter 0ms ease-in-out, -webkit-backdrop-filter 0ms ease-in-out}.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal{flex-grow:1}.sc-ix-modal-h .modal.scrollable.sc-ix-modal .modal-content.sc-ix-modal{max-height:100%}.sc-ix-modal-h .modal.scrollable.sc-ix-modal .modal-content.sc-ix-modal .modal-body.sc-ix-modal{overflow-y:auto}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal{box-shadow:var(--theme-modal--box-shadow);flex-direction:row;background-color:var(--theme-modal--background);border:var(--modal--border-thickness) solid var(--theme-modal--border-color);padding:1.5rem;max-height:100vh}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal .state-icon-container.sc-ix-modal{-webkit-margin-end:1rem;margin-inline-end:1rem}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal .slot-container.sc-ix-modal{flex-grow:1}@media (min-width: 576px){.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal:not(.modal-dialog-centered){margin:2.5rem auto}}@media (max-width: 575.98px){.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal{height:100%;margin:0}.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal .modal-content.sc-ix-modal{height:100%;border-radius:0}}@keyframes modal-fade{from{opacity:0%}to{opacity:100%}}@keyframes slide-down{from{top:-100%}to{top:32px}}";
const Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closed = createEvent(this, "closed", 7);
    this.dismissed = createEvent(this, "dismissed", 7);
    this.onKeydown = this.handleKeydown.bind(this);
    this.animation = true;
    this.ariaDescribedBy = void 0;
    this.ariaLabelledBy = "modal-title";
    this.backdrop = true;
    this.backdropClass = void 0;
    this.beforeDismiss = void 0;
    this.centered = false;
    this.content = void 0;
    this.keyboard = true;
    this.icon = void 0;
    this.iconColor = "color-std-text";
    this.modalDialogClass = void 0;
    this.scrollable = true;
    this.size = "sm";
    this.headerTitle = void 0;
    this.windowClass = void 0;
  }
  get modal() {
    return this.hostElement.querySelector(".modal");
  }
  get modalDialog() {
    return this.modal.querySelector(".modal-dialog");
  }
  get modalContent() {
    return this.modalDialog.querySelector(".modal-content");
  }
  get modalBackdrop() {
    return this.hostElement.querySelector(".backdrop");
  }
  slideDown(modal) {
    const duration = this.animation ? Animation.mediumTime : 0;
    anime({
      targets: modal,
      duration,
      opacity: [0, 1],
      translateY: ["-100%", 0],
      easing: "easeOutSine"
    });
  }
  slideUp(modal, completeCallback) {
    const duration = this.animation ? Animation.mediumTime : 0;
    anime({
      targets: modal,
      duration,
      opacity: [1, 0],
      translateY: [0, "-100%"],
      easing: "easeInSine",
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      }
    });
  }
  onBackdropClick(event) {
    const target = event.target;
    if (target.classList.contains("backdrop")) {
      this.dismiss(event);
    }
  }
  componentDidLoad() {
    if (this.backdrop === "static") {
      this.modalBackdrop.addEventListener("click", (event) => this.onBackdropClick(event));
    }
    if (this.backdropClass) {
      this.modalBackdrop.classList.add(this.backdropClass);
    }
    if (this.modalDialogClass) {
      this.modalDialog.classList.add(this.modalDialogClass);
    }
    if (this.windowClass) {
      this.modal.classList.add(this.windowClass);
    }
    if (this.keyboard) {
      window.addEventListener("keydown", this.onKeydown);
    }
    this.slideDown(this.modalContent);
  }
  handleKeydown(ev) {
    if (ev.key === "Escape") {
      this.dismiss(ev.key);
    }
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this.onKeydown);
  }
  async dismiss(reason) {
    if (this.beforeDismiss) {
      const result = await this.beforeDismiss(reason);
      if (result !== false) {
        this.slideUp(this.modalContent, () => this.dismissed.emit(reason));
      }
    } else {
      this.slideUp(this.modalContent, () => this.dismissed.emit(reason));
    }
  }
  async close(result) {
    this.slideUp(this.modalContent, () => this.closed.emit(result));
  }
  render() {
    return h(Host, null, h("div", { class: {
      animation: this.animation,
      modal: true,
      backdrop: this.backdrop === "static" || this.backdrop,
      "align-items-center": this.centered,
      scrollable: this.scrollable
    }, "aria-describedby": this.ariaDescribedBy, "aria-labelledby": this.ariaLabelledBy }, h("div", { class: {
      "modal-dialog": true,
      "modal-sm": this.size === "sm",
      "modal-lg": this.size === "lg",
      "modal-xl": this.size === "xl"
    } }, h("div", { class: "modal-content" }, this.icon === void 0 || this.icon === "" ? "" : h("div", { class: "state-icon-container" }, h("ix-icon", { name: this.icon, size: "32", color: this.iconColor })), h("div", { class: "slot-container" }, h("slot", null))))));
  }
  get hostElement() {
    return getElement(this);
  }
};
Modal.style = modalCss;
export {
  Modal as M,
  ModalContainer as a
};
