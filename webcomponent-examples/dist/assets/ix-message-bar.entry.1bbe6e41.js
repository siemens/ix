import { r as registerInstance, c as createEvent, h, H as Host } from "./global.8b5b8f81.js";
import { a as anime } from "./anime.es-a5520566.eae0a8f1.js";
const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .message-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}";
const IxMessageBarStyle0 = messageBarCss;
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.type = "info";
    this.dismissible = true;
    this.icon = void 0;
    this.color = void 0;
  }
  componentWillRender() {
    if (this.type === "danger") {
      this.icon = "error";
      this.color = "color-alarm";
    }
    if (this.type === "info") {
      this.icon = "info";
      this.color = "color-info";
    }
    if (this.type === "warning") {
      this.icon = "warning";
      this.color = "color-warning";
    }
  }
  closeAlert(el) {
    anime({
      targets: el,
      duration: MessageBar.duration,
      opacity: [1, 0],
      easing: "easeOutSine",
      complete: () => {
        el.classList.add("d-none");
      }
    });
    this.closedChange.emit();
  }
  render() {
    return h(Host, { key: "1e6b060fd39fb008c5ce8e56553b7ee235d5db2d" }, h("div", { key: "a0f00d550a6c2e2f61918bbccd2c342100e73dcd", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "5bbfa1b8fcd0025b4d2fa0b488c604458fc4e131", color: this.color, name: this.icon }), h("div", { key: "78e83b8a02ea46b6b3ba65690d5939f00a63ca78", class: "message-content" }, h("slot", { key: "b5813c317b7ea1b0c0e6919488016a43140dd68f" })), this.dismissible ? h("ix-icon-button", { icon: "close", size: "24", ghost: true, onClick: () => {
      this.closeAlert(this.divElement);
    }, "data-testid": "close-btn" }) : ""));
  }
};
MessageBar.duration = 300;
MessageBar.style = IxMessageBarStyle0;
export {
  MessageBar as ix_message_bar
};
