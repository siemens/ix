import { r as registerInstance, c as createEvent, h, H as Host } from "./global.aa474cf6.js";
import { a as anime } from "./anime.es-Ou74PMQs.d39ae9b1.js";
import { l as iconClose, p as iconError, y as iconWarningRhomb, q as iconWarning, s as iconSuccess, r as iconInfo, z as iconNotification } from "./index-CrTP-icT.451e0ae2.js";
const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .alarm{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .critical{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-critical)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .success{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-success)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .neutral{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-neutral)}:host .primary{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-primary)}:host .message-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}:host .message-bar-hidden{display:none}";
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.closeAnimationCompleted = createEvent(this, "closeAnimationCompleted", 7);
    this.type = "info";
    this.dismissible = true;
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
      anime({
        targets: el,
        duration: MessageBar.duration,
        opacity: [1, 0],
        easing: "easeOutSine",
        complete: () => {
          el.classList.add("message-bar-hidden");
          this.closeAnimationCompleted.emit();
        }
      });
    }
  }
  render() {
    return h(Host, { key: "d4c459da3c13935d7b220fa16c69a1e83e07a265" }, h("div", { key: "3437dc7d4e4d06b6a7ae1eb88d77926a9aec5281", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "65d013368d9c75a8662a9cf5882f883683f11c2b", color: this.color, name: this.icon }), h("div", { key: "3a2dcc32c2cda27873ca0efefdf568d932c88951", class: "message-content" }, h("slot", { key: "55c27362c491e1f66e87903a956c8c68a227c856" })), this.dismissible ? h("ix-icon-button", { icon: iconClose, size: "24", ghost: true, onClick: () => {
      if (this.divElement) {
        this.closeAlert(this.divElement);
      }
    }, "data-testid": "close-btn" }) : ""));
  }
};
MessageBar.duration = 300;
MessageBar.messageTypeConfigs = {
  alarm: { icon: iconError, color: "color-alarm" },
  danger: { icon: iconError, color: "color-alarm" },
  critical: { icon: iconWarningRhomb, color: "color-critical" },
  warning: { icon: iconWarning, color: "color-warning" },
  success: { icon: iconSuccess, color: "color-success" },
  info: { icon: iconInfo, color: "color-info" },
  neutral: { icon: iconNotification, color: "color-neutral" },
  primary: { icon: iconNotification, color: "color-primary" }
};
MessageBar.style = messageBarCss;
export {
  MessageBar as ix_message_bar
};
