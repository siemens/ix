import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
import { q as iconClose, a as iconWarning, c as iconSuccess, b as iconError, i as iconInfo } from "./index-8HpPmDK_-DinFJk0z.js";
const toastCss = ":host{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius, var(--theme-toast--border-radus));box-shadow:var(--theme-toast--box-shadow);--animate-duration:var(--theme-medium-time)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:3.5rem;width:100%;flex-grow:1;padding:0.75rem 0.75rem 0.25rem}:host .toast-body .toast-icon{display:flex;align-items:flex-start;padding:0.25rem}:host .toast-body .toast-content{overflow:hidden;min-width:0;width:100%;padding:0.25rem}:host .toast-body .toast-content .toast-title{min-width:0;margin:0.25rem 0px;overflow-wrap:break-word;word-break:break-word}:host .toast-body .toast-content .toast-message{min-width:0;overflow-wrap:break-word;word-break:break-word;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .toast-body .toast-content .toast-action{margin-top:0.5rem}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px;opacity:0.6}:host .toast-close:hover{opacity:1}:host .toast-progress-bar{position:absolute;bottom:0;height:0.125rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}";
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
    this.type = "info";
    this.autoCloseDelay = 5e3;
    this.preventAutoClose = false;
    this.hideIcon = false;
    this.progress = 0;
    this.touched = false;
    this.paused = false;
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
        return h("ix-icon", { "data-testid": "toast-icon", name: iconWarning, size: "24", color: "color-warning-text" });
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
  /**
   * Pause the toast's auto-close progress bar and timer.
   */
  async pause() {
    this.paused = true;
  }
  /**
   * Resume the toast's auto-close progress bar and timer if previously paused.
   */
  async resume() {
    this.paused = false;
  }
  /**
   * Returns whether the toast is currently paused (auto-close is paused).
   */
  async isPaused() {
    return this.paused || this.touched;
  }
  render() {
    let progressBarStyle = {};
    const progressBarClass = ["toast-progress-bar"];
    progressBarStyle = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched || this.paused ? "paused" : "running"
    };
    progressBarClass.push("toast-progress-bar--animated");
    return h(Host, { key: "0e762b008a6695e9ecae1ffb288e606d9e9794c4", class: "animate__animated animate__fadeIn" }, h("div", { key: "da513d7fec310d67a020044650517f0e5a38d578", class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, (this.type || this.icon) && !this.hideIcon ? h("div", { class: "toast-icon" }, this.getIcon()) : null, h("div", { key: "56a6a8392b19e151c3f44b677168f105fe4a8114", class: "toast-content" }, this.toastTitle ? h("ix-typography", { class: "toast-title", format: "h5" }, this.toastTitle) : null, h("div", { key: "6607138845d5f8eda23d06cbe65e785495a1c714", class: "toast-message" }, h("slot", { key: "2a8e839c3d68287873498585f06e84854f6a3d77" })), h("div", { key: "1522e81b25a84de92ca8857bb3689bea7ae303bb", class: "toast-action" }, h("slot", { key: "95cd3cefd6035ea710926d7c34eb38501b0de4fb", name: "action" }))), h("div", { key: "bc7fd1c5f9adf6b8fd4d3b0aefc6a493afa0db54", class: "toast-close" }, h("ix-icon-button", { key: "d9014f1d8561ebeeadd747772cfcfe287ebb30c1", icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => this.closeToast.emit(), "aria-label": this.ariaLabelCloseIconButton }))), !this.preventAutoClose && h("div", { key: "851ff267cb3d1973c648d53709f45acbc4005306", class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
      this.close();
    }, onTransitionEnd: () => {
      if (this.progress === 0) {
        this.close();
      }
    } }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Toast.style = toastCss;
export {
  Toast as ix_toast
};
