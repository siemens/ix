import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-DzKOIL47.js";
import { M as iconClose, c as iconWarning, a as iconSuccess, b as iconError, d as iconInfo } from "./index-GHlVc4OJ-sCaZA1R3.js";
const toastCss = () => `@charset "UTF-8";:host{--ix-toast--background:var(--si-sys-color-background-1);--ix-toast--border-color:rgba(0, 0, 0, 0);--ix-toast--box-shadow:var(--si-sys-color-effects-shadow-4);--ix-toast-timer-value--background:var(--si-sys-color-border-3)}:host{--ix-toast--animation-duration:var(--theme-medium-time);--ix-toast--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-toast--border-width:var(--si-sys-sizing-border-width-none);--ix-toast--min-width:calc(     var(--si-sys-sizing-size-160) + var(--si-sys-sizing-spacing-x-100)   );--ix-toast--max-width:calc(     var(--si-sys-sizing-size-160) + var(--si-sys-sizing-spacing-x-100)   );--ix-toast--min-height:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-y-40)   );--ix-toast-body--min-height:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-y-40)   );--ix-toast-body--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50)     var(--si-sys-sizing-spacing-y-20);--ix-toast-icon--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-20);--ix-toast-content--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-20);--ix-toast-title--margin:var(--si-sys-sizing-spacing-y-20) 0;--ix-toast-action--margin-top:var(--si-sys-sizing-spacing-y-40);--ix-toast-close--opacity:0.6;--ix-toast-progress-bar--height:var(--si-sys-sizing-size-10)}:host{display:flex;flex-direction:column;position:relative;min-width:var(--ix-toast--min-width);max-width:var(--ix-toast--max-width);min-height:var(--ix-toast--min-height);pointer-events:all;background-color:var(--ix-toast--background);border:var(--ix-toast--border-width) solid var(--ix-toast--border-color);border-radius:var(--ix-toast--border-radius);box-shadow:var(--ix-toast--box-shadow);animation-name:toast-fade-in;animation-duration:var(--ix-toast--animation-duration);animation-fill-mode:both}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:var(--ix-toast-body--min-height);width:100%;flex-grow:1;padding:var(--ix-toast-body--padding)}:host .toast-body .toast-icon{display:flex;align-items:flex-start;padding:var(--ix-toast-icon--padding)}:host .toast-body .toast-content{overflow:hidden;min-width:0;width:100%;padding:var(--ix-toast-content--padding)}:host .toast-body .toast-content .toast-title{min-width:0;margin:var(--ix-toast-title--margin);overflow-wrap:break-word;word-break:break-word}:host .toast-body .toast-content .toast-message{min-width:0;overflow-wrap:break-word;word-break:break-word;font:var(--si-sys-typography-body-paragraph);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .toast-body .toast-content .toast-action{margin-top:var(--ix-toast-action--margin-top)}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px;opacity:var(--ix-toast-close--opacity)}:host .toast-close:hover{opacity:1}:host .toast-progress-bar{position:absolute;bottom:0;height:var(--ix-toast-progress-bar--height);width:100%;background-color:var(--ix-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}:host(.toast-fade-out){animation-name:toast-fade-out}@keyframes toast-fade-in{from{opacity:0}to{opacity:1}}@keyframes toast-fade-out{from{opacity:1}to{opacity:0}}`;
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
  }
  /**
   * Toast type
   */
  type = "info";
  /**
   * Toast title
   */
  toastTitle;
  /**
   * Autoclose title after delay
   */
  autoCloseDelay = 5e3;
  /**
   * Autoclose behavior
   */
  preventAutoClose = false;
  /**
   * Icon of toast
   */
  icon;
  /**
   * Icon color as a CSS custom property name, for example
   * `--si-sys-color-text-primary`.
   */
  iconColor;
  /**
   * Allows to hide the icon in the toast.
   */
  hideIcon = false;
  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelCloseIconButton = "Close toast";
  /**
   * Toast closed
   */
  closeToast;
  progress = 0;
  touched = false;
  paused = false;
  get hostElement() {
    return getElement(this);
  }
  getIcon() {
    if (this.icon) {
      return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: this.icon, color: this.iconColor });
    }
    switch (this.type) {
      case "info":
        return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: iconInfo, color: "--si-sys-color-background-information" });
      case "error":
        return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: iconError, color: "--si-sys-color-text-danger" });
      case "success":
        return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: iconSuccess, color: "--si-sys-color-text-success" });
      case "warning":
        return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: iconWarning, color: "--si-sys-color-text-warning" });
      default:
        return "";
    }
  }
  isClosing = false;
  close() {
    if (this.isClosing) {
      return;
    }
    this.isClosing = true;
    let closed = false;
    const emitClose = () => {
      if (closed) {
        return;
      }
      closed = true;
      this.hostElement.removeEventListener("animationend", onAnimationEnd);
      this.closeToast.emit();
    };
    const onAnimationEnd = (event) => {
      if (event.target === this.hostElement && event.animationName === "toast-fade-out") {
        emitClose();
      }
    };
    this.hostElement.addEventListener("animationend", onAnimationEnd);
    this.hostElement.classList.add("toast-fade-out");
    const fallbackMs = this.getAnimationDurationMs() + 50;
    setTimeout(emitClose, fallbackMs);
  }
  getAnimationDurationMs() {
    const { animationDuration } = window.getComputedStyle(this.hostElement);
    const value = parseFloat(animationDuration);
    if (!Number.isFinite(value)) {
      return 0;
    }
    return animationDuration.trim().endsWith("ms") ? value : value * 1e3;
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
    return h(Host, { key: "902d9a8c7af0e83641786121af8a2cf4b679d591", role: "alert", "aria-live": "polite", "aria-atomic": "true" }, h("div", { key: "87a6c55c45086f05d84d06b12271a6963c644a29", class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, (this.type || this.icon) && !this.hideIcon ? h("div", { class: "toast-icon" }, this.getIcon()) : null, h("div", { key: "b7b26f23082c5ea9913c8dae99eb8a42ec4d04a1", class: "toast-content" }, this.toastTitle ? h("ix-typography", { class: "toast-title", format: "h5" }, this.toastTitle) : null, h("div", { key: "fc3926437816f1d7dec8bad11d1a5d699bc1e4f5", class: "toast-message" }, h("slot", { key: "04e43cc23bdbf626ec35ab5289b757a36e7a3a7d" })), h("div", { key: "c0a22edd31202bc3c8e13e236056c4e1cbd2e4cf", class: "toast-action" }, h("slot", { key: "6fbe561963171538a2f6cb83997123987fecb599", name: "action" }))), h("div", { key: "1dcf430d3c1e3f79f9e6a6f33d8d4f33c3ac70f0", class: "toast-close" }, h("ix-icon-button", { key: "d4089867ba2fdce0d4fe39c928f9e6b5e1397371", icon: iconClose, iconColor: "--si-sys-color-text-secondary", variant: "tertiary", onClick: () => this.closeToast.emit(), "aria-label": this.ariaLabelCloseIconButton }))), !this.preventAutoClose && h("div", { key: "79b1ab7747e96183a92950ef633d7f11c067c298", class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
      this.close();
    }, onTransitionEnd: () => {
      if (this.progress === 0) {
        this.close();
      }
    } }));
  }
};
Toast.style = toastCss();
export {
  Toast as ix_toast
};
