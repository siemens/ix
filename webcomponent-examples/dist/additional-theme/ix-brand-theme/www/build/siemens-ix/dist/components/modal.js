import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { A as Animation } from './animation.js';
import { d as defineCustomElement$1 } from './icon.js';

const modalCss = ".sc-ix-modal-h{position:relative;width:100vw;height:100vh}.sc-ix-modal-h .modal.sc-ix-modal{display:flex}.sc-ix-modal-h .modal.animation.sc-ix-modal{animation:modal-fade 300ms ease-in-out}.sc-ix-modal-h .modal.backdrop.sc-ix-modal{background-color:var(--theme-color-lightbox);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition:none}.sc-ix-modal-h .modal.backdrop.animation.sc-ix-modal{transition:-webkit-backdrop-filter 0ms ease-in-out;transition:backdrop-filter 0ms ease-in-out;transition:backdrop-filter 0ms ease-in-out, -webkit-backdrop-filter 0ms ease-in-out}.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal{flex-grow:1}.sc-ix-modal-h .modal.scrollable.sc-ix-modal .modal-content.sc-ix-modal{max-height:100%}.sc-ix-modal-h .modal.scrollable.sc-ix-modal .modal-content.sc-ix-modal .modal-body.sc-ix-modal{overflow-y:auto}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal{box-shadow:var(--theme-modal--box-shadow);flex-direction:row;background-color:var(--theme-modal--background);border:var(--modal--border-thickness) solid var(--theme-modal--border-color);padding:1.5rem;max-height:100vh}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal .state-icon-container.sc-ix-modal{-webkit-margin-end:1rem;margin-inline-end:1rem}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal .slot-container.sc-ix-modal{flex-grow:1}@media (min-width: 576px){.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal:not(.modal-dialog-centered){margin:2.5rem auto}}@media (max-width: 575.98px){.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal{height:100%;margin:0}.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal .modal-content.sc-ix-modal{height:100%;border-radius:0}}@keyframes modal-fade{from{opacity:0%}to{opacity:100%}}@keyframes slide-down{from{top:-100%}to{top:32px}}";

const Modal = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.closed = createEvent(this, "closed", 7);
    this.dismissed = createEvent(this, "dismissed", 7);
    this.onKeydown = this.handleKeydown.bind(this);
    this.animation = true;
    this.ariaDescribedBy = undefined;
    this.ariaLabelledBy = 'modal-title';
    this.backdrop = true;
    this.backdropClass = undefined;
    this.beforeDismiss = undefined;
    this.centered = false;
    this.content = undefined;
    this.keyboard = true;
    this.icon = undefined;
    this.iconColor = 'color-std-text';
    this.modalDialogClass = undefined;
    this.scrollable = true;
    this.size = 'sm';
    this.headerTitle = undefined;
    this.windowClass = undefined;
  }
  get modal() {
    return this.hostElement.querySelector('.modal');
  }
  get modalDialog() {
    return this.modal.querySelector('.modal-dialog');
  }
  get modalContent() {
    return this.modalDialog.querySelector('.modal-content');
  }
  get modalBackdrop() {
    return this.hostElement.querySelector('.backdrop');
  }
  slideDown(modal) {
    const duration = this.animation ? Animation.mediumTime : 0;
    anime({
      targets: modal,
      duration,
      opacity: [0, 1],
      translateY: ['-100%', 0],
      easing: 'easeOutSine',
    });
  }
  slideUp(modal, completeCallback) {
    const duration = this.animation ? Animation.mediumTime : 0;
    anime({
      targets: modal,
      duration,
      opacity: [1, 0],
      translateY: [0, '-100%'],
      easing: 'easeInSine',
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      },
    });
  }
  onBackdropClick(event) {
    const target = event.target;
    if (target.classList.contains('backdrop')) {
      this.dismiss(event);
    }
  }
  componentDidLoad() {
    if (this.backdrop === 'static') {
      this.modalBackdrop.addEventListener('click', (event) => this.onBackdropClick(event));
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
      window.addEventListener('keydown', this.onKeydown);
    }
    this.slideDown(this.modalContent);
  }
  handleKeydown(ev) {
    if (ev.key === 'Escape') {
      this.dismiss(ev.key);
    }
  }
  disconnectedCallback() {
    window.removeEventListener('keydown', this.onKeydown);
  }
  /**
   * Dismiss modal instance
   * @param reason
   */
  async dismiss(reason) {
    if (this.beforeDismiss) {
      const result = await this.beforeDismiss(reason);
      if (result !== false) {
        this.slideUp(this.modalContent, () => this.dismissed.emit(reason));
      }
    }
    else {
      this.slideUp(this.modalContent, () => this.dismissed.emit(reason));
    }
  }
  /**
   * Close modal
   * @param result
   */
  async close(result) {
    this.slideUp(this.modalContent, () => this.closed.emit(result));
  }
  render() {
    return (h(Host, null, h("div", { class: {
        animation: this.animation,
        modal: true,
        backdrop: this.backdrop === 'static' || this.backdrop,
        'align-items-center': this.centered,
        scrollable: this.scrollable,
      }, "aria-describedby": this.ariaDescribedBy, "aria-labelledby": this.ariaLabelledBy }, h("div", { class: {
        'modal-dialog': true,
        'modal-sm': this.size === 'sm',
        'modal-lg': this.size === 'lg',
        'modal-xl': this.size === 'xl',
      } }, h("div", { class: "modal-content" }, this.icon === undefined || this.icon === '' ? ('') : (h("div", { class: "state-icon-container" }, h("ix-icon", { name: this.icon, size: "32", color: this.iconColor }))), h("div", { class: "slot-container" }, h("slot", null)))))));
  }
  get hostElement() { return this; }
  static get style() { return modalCss; }
}, [6, "ix-modal", {
    "animation": [4],
    "ariaDescribedBy": [1, "aria-described-by"],
    "ariaLabelledBy": [1, "aria-labelled-by"],
    "backdrop": [8],
    "backdropClass": [1, "backdrop-class"],
    "beforeDismiss": [16],
    "centered": [4],
    "content": [1],
    "keyboard": [4],
    "icon": [1],
    "iconColor": [1, "icon-color"],
    "modalDialogClass": [1, "modal-dialog-class"],
    "scrollable": [4],
    "size": [1],
    "headerTitle": [1, "header-title"],
    "windowClass": [1, "window-class"],
    "dismiss": [64],
    "close": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-modal", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Modal);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Modal as M, defineCustomElement as d };
