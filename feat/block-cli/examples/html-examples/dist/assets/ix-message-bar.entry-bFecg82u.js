import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Cn4dOqNA.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { q as iconClose, z as iconNotification, i as iconInfo, c as iconSuccess, a as iconWarning, A as iconWarningRhomb, b as iconError } from "./index-8HpPmDK_-DinFJk0z.js";
const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .alarm{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .critical{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-critical)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .success{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-success)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .neutral{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-neutral)}:host .primary{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-primary)}:host .message-content{flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}:host .message-bar-hidden{display:none}";
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.closeAnimationCompleted = createEvent(this, "closeAnimationCompleted", 7);
    this.type = "info";
    this.persistent = false;
  }
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
    return h(Host, { key: "77cde4e0a2aa39b0838ccef1fe84dcd85a99f0e1" }, h("div", { key: "319882aba72c886393d8162442a56dc8404ed386", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "a204e1952605dc54532a3a862c8d00f9c049727d", color: this.color, name: this.icon }), h("div", { key: "a1870021581d39097b24fae111a0f3418516cc1b", class: "message-content" }, h("slot", { key: "96e9f8283842a5ef183e62b0b49ea879a61f303e" })), !this.persistent && h("ix-icon-button", { key: "a136f9c0b1b557c3f789b569bbef64802f70cc26", icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => {
      if (this.divElement) {
        this.closeAlert(this.divElement);
      }
    }, "data-testid": "close-btn" })));
  }
};
MessageBar.duration = 300;
MessageBar.messageTypeConfigs = {
  //TODO(IX-3400): Replace icon colors with proper CSS variables when available
  alarm: { icon: iconError, color: "color-alarm" },
  critical: { icon: iconWarningRhomb, color: "color-critical" },
  warning: { icon: iconWarning, color: "color-warning-text" },
  success: { icon: iconSuccess, color: "color-success" },
  info: { icon: iconInfo, color: "color-info" },
  neutral: { icon: iconNotification, color: "color-neutral" },
  primary: { icon: iconNotification, color: "color-primary" }
};
MessageBar.style = messageBarCss;
export {
  MessageBar as ix_message_bar
};
