import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.bff64ac3.js";
import { l as iconClose, q as iconWarning, s as iconSuccess, p as iconError, r as iconInfo } from "./index-CrTP-icT.451e0ae2.js";
const toastCss = ":host{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius);box-shadow:var(--theme-toast--box-shadow);--animate-duration:300ms}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:3.5rem;width:100%;flex-grow:1;padding:0.75rem}:host .toast-body .toast-icon{display:flex;align-items:flex-start;margin-right:1rem}:host .toast-body .toast-content{overflow:hidden;text-overflow:ellipsis;min-width:0;width:100%}:host .toast-body .toast-content .toast-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);margin:0.25rem 0px}:host .toast-body .toast-content .toast-message{min-width:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}:host .toast-body .toast-icon+.toast-content{max-width:10.25rem}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px}:host .toast-progress-bar{position:absolute;bottom:0;height:0.25rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}";
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
    this.type = "info";
    this.autoCloseDelay = 5e3;
    this.autoClose = true;
    this.progress = 0;
    this.touched = false;
  }
  getIcon() {
    if (this.icon) {
      return h("ix-icon", { "data-testid": "toast-icon", name: this.icon, color: this.iconColor, size: "24" });
    }
    switch (this.type) {
      case "info":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconInfo, size: "24", color: "color-std-text" });
      case "error":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconError, size: "24", color: "color-alarm" });
      case "success":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconSuccess, size: "24", color: "color-success" });
      case "warning":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconWarning, size: "24", color: "color-warning" });
      default:
        return "";
    }
  }
  close() {
    if (this.hostElement) {
      this.hostElement.classList.add("animate__fadeOut");
    }
    setTimeout(() => {
      this.closeToast.emit();
    }, 250);
  }
  render() {
    let progressBarStyle = {};
    const progressBarClass = ["toast-progress-bar"];
    progressBarStyle = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched ? "paused" : "running"
    };
    progressBarClass.push("toast-progress-bar--animated");
    return h(Host, { key: "51e1a200c41b72474d393a3f1f92cc89bb934206", class: "animate__animated animate__fadeIn" }, h("div", { key: "621a9594ddac07f6b83896669d36323912385e49", class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, this.type || this.icon ? h("div", { class: "toast-icon" }, this.getIcon()) : null, h("div", { key: "73ab69115e35e14101cbf8ca6f66c4e6cae90bd8", class: "toast-content" }, this.toastTitle ? h("div", { class: "toast-title" }, this.toastTitle) : null, h("div", { key: "b61964bc78afafb65bb7e01759670ef6bcc7b47b", class: "toast-message" }, h("slot", { key: "ce26d93715d5986f59ccfe6c912d7cf39b21b837" }))), h("div", { key: "3c3f8a693582dd3dbc1ec2f3a8bfa67876f5c02c", class: "toast-close" }, h("ix-icon-button", { key: "56eef282b5a419ce52be6b4f3b5456f889c219e6", icon: iconClose, size: "24", ghost: true, onClick: () => this.closeToast.emit() }))), this.autoClose ? h("div", { class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
      this.close();
    }, onTransitionEnd: () => {
      if (this.progress === 0) {
        this.close();
      }
    } }) : null);
  }
  get hostElement() {
    return getElement(this);
  }
};
Toast.style = toastCss;
export {
  Toast as ix_toast
};
