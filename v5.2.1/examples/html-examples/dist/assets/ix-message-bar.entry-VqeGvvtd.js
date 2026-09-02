import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { N as iconNotification, d as iconInfo, a as iconSuccess, c as iconWarning, o as iconWarningRhomb, b as iconError, K as iconClose } from "./index-BeX6RWvV-CXzUIwMU.js";
const messageBarCss = () => `@charset "UTF-8";:host{--ix-message-bar--border-color--alarm:var(--si-sys-border-danger);--ix-message-bar--border-color--critical:var(--si-sys-border-critical);--ix-message-bar--border-color--warning:var(--si-sys-border-warning);--ix-message-bar--border-color--success:var(--si-sys-border-success);--ix-message-bar--border-color--info:var(--si-sys-border-information);--ix-message-bar--border-color--neutral:var(--si-sys-border-neutral);--ix-message-bar--border-color--primary:var(--si-sys-border-accent);--ix-message-bar--border-radius:var(--theme-default-border-radius);--ix-message-bar--border-width:var(--theme-border-width-thick);--ix-message-bar--background:var(--si-sys-background-accent-secondary)}:host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--ix-message-bar--border-width)) 0.75rem calc(0.75rem - var(--ix-message-bar--border-width)) 1rem;border-radius:var(--ix-message-bar--border-radius);background-color:var(--ix-message-bar--background)}:host .alarm{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--alarm)}:host .danger{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--alarm)}:host .critical{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--critical)}:host .warning{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--warning)}:host .success{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--success)}:host .info{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--info)}:host .neutral{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--neutral)}:host .primary{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--primary)}:host .message-content{flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}:host .message-bar-hidden{display:none}`;
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.closeAnimationCompleted = createEvent(this, "closeAnimationCompleted", 7);
  }
  /**
   * Specifies the type of the alert.
   */
  type = "info";
  /**
   * If true, close button is disabled and alert cannot be dismissed by the user
   */
  persistent = false;
  /**
   * An event emitted when the close button is clicked
   */
  closedChange;
  /**
   * An event emitted when the close animation is completed
   */
  closeAnimationCompleted;
  icon;
  color;
  static duration = 300;
  static messageTypeConfigs = {
    alarm: { icon: iconError, color: "--si-sys-text-danger" },
    critical: { icon: iconWarningRhomb, color: "--si-sys-text-critical" },
    warning: { icon: iconWarning, color: "--si-sys-text-warning" },
    success: { icon: iconSuccess, color: "--si-sys-text-success" },
    info: { icon: iconInfo, color: "--si-sys-text-information" },
    neutral: { icon: iconNotification, color: "--si-sys-text-secondary" },
    primary: { icon: iconNotification, color: "--si-sys-text-accent" }
  };
  divElement;
  componentWillRender() {
    const config = MessageBar.messageTypeConfigs[this.type];
    if (config) {
      this.icon = config.icon;
      this.color = config.color;
    }
  }
  closeAlert(el) {
    const { defaultPrevented } = this.closedChange.emit();
    if (!defaultPrevented) {
      animate(el, {
        duration: MessageBar.duration,
        opacity: [1, 0],
        easing: "easeOutSine",
        onComplete: () => {
          el.classList.add("message-bar-hidden");
          this.closeAnimationCompleted.emit();
        }
      });
    }
  }
  render() {
    return h(Host, { key: "701e774bda97b435040474ff7991b64cf2578dbf" }, h("div", { key: "cb31c45554d8aedb885dc09f84cd8c9811905e39", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "6eea63bc8c93cd5af2df454b6ef3f4d53c482de7", color: this.color, name: this.icon }), h("div", { key: "90585f7b9ae03d7f4f2b00f8951eb173b70b06b4", class: "message-content" }, h("slot", { key: "fc61ef9e364e4815ab19c7c424713a78f8a87949" })), !this.persistent && h("ix-icon-button", { key: "5d9540b64465f5803cf2b85a940fa2ca2a8b17b8", icon: iconClose, iconColor: "--si-sys-text-secondary", size: "24", variant: "tertiary", onClick: () => {
      if (this.divElement) {
        this.closeAlert(this.divElement);
      }
    }, "data-testid": "close-btn" })));
  }
};
MessageBar.style = messageBarCss();
export {
  MessageBar as ix_message_bar
};
