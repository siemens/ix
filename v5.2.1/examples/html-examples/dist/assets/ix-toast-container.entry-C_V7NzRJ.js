import { r as registerInstance, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
const toastContainerCss = () => `@charset "UTF-8";:host{--ix-toast-container--z-index:var(--theme-z-index-toast)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host{display:block;position:fixed;z-index:var(--ix-toast-container--z-index)}:host ::slotted(*:not(:last-child)){margin-block-end:1rem}:host(.toast-container--top-right){right:1rem;top:2rem}:host(.toast-container--bottom-right){right:1rem;bottom:2rem}`;
const ToastContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Position of the toast container. Determines where the toasts will be displayed on the screen.
   */
  position = "bottom-right";
  /**
   * Display a toast message
   * @param config
   */
  async showToast(config) {
    const toast = document.createElement("ix-toast");
    const onClose = new TypedEvent();
    function removeToast(result) {
      toast.remove();
      onClose.emit(result);
    }
    toast.toastTitle = config.title;
    toast.type = config.type ?? "info";
    toast.preventAutoClose = config.autoClose === false;
    toast.autoCloseDelay = config.autoCloseDelay ?? 5e3;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
    toast.hideIcon = config.hideIcon ?? false;
    toast.addEventListener("closeToast", (event) => {
      const { detail } = event;
      removeToast(detail);
    });
    if (config.message) {
      if (typeof config.message === "string") {
        toast.innerText = config.message;
      } else {
        toast.appendChild(config.message);
      }
    }
    if (config.action && config.action instanceof HTMLElement) {
      config.action.slot = "action";
      toast.appendChild(config.action);
    }
    this.hostElement.appendChild(toast);
    return {
      onClose,
      close: (result) => {
        removeToast(result);
      },
      pause: () => {
        toast.pause();
      },
      resume: () => {
        toast.resume();
      },
      isPaused: () => {
        return toast.isPaused();
      }
    };
  }
  render() {
    return h(Host, { key: "0714306212fd7ed07817ff763ac52168bac282f0", class: {
      "toast-container--bottom-right": this.position === "bottom-right",
      "toast-container--top-right": this.position === "top-right"
    } }, h("slot", { key: "7f004ee96ceb72f42dccfc7cab775566df77b4db" }));
  }
};
ToastContainer.style = toastContainerCss();
export {
  ToastContainer as ix_toast_container
};
