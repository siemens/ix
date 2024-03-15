import { r as registerInstance, c as createEvent, h, H as Host } from "./index.8b3d29f9.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .message-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}";
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
    return h(Host, { key: "e1350add30f2d87705fc16b1e6f7a6ea2b603dd5" }, h("div", { key: "b77fe18adb2fafc06747cde826ddd9a0d3cc2272", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "df61bfb940d43f774189a42d52816dcbd6f0531a", color: this.color, name: this.icon }), h("div", { key: "20e182ace70357fe23c3d2c2f55244549293ecdd", class: "message-content" }, h("slot", { key: "cf2149772aa7be336a3c53b956a992b9ceffcc58" })), this.dismissible ? h("ix-icon-button", { icon: "close", size: "24", ghost: true, onClick: () => {
      this.closeAlert(this.divElement);
    }, "data-testid": "close-btn" }) : ""));
  }
};
MessageBar.duration = 300;
MessageBar.style = IxMessageBarStyle0;
export {
  MessageBar as ix_message_bar
};
