import { r as registerInstance, h, H as Host } from "./global-J1r-v9CX.js";
const chatCss = () => `:host{display:flex;flex-direction:column;width:100%;height:100%;min-height:0;min-width:27rem;max-width:calc(45rem + var(--theme-space-5));box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .messages{display:flex;flex:1 1 auto;flex-direction:column;align-items:center;gap:var(--theme-space-5);min-height:0;width:100%;padding:var(--theme-space-5);box-sizing:border-box;overflow-y:auto}:host .messages ::slotted(*){width:100%;max-width:45rem;flex:0 0 auto}:host .prompt{display:none;flex:0 0 auto;width:100%;padding:var(--theme-space-5);box-sizing:border-box}:host .prompt ::slotted(*){width:100%;max-width:45rem}:host(.has-prompt) .prompt{display:flex;justify-content:center}`;
const Chat = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  hasPrompt = false;
  hasAssignedContent(slot) {
    return slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }
  handlePromptSlotChange(event) {
    this.hasPrompt = this.hasAssignedContent(event.target);
  }
  render() {
    return h(Host, { key: "a62dc11b965e03cec0232501a0bb00ce8b8fe6bc", class: {
      "has-prompt": this.hasPrompt
    } }, h("div", { key: "38ea1466cb866be561e816c6cc1abd969742c7b1", class: "messages", part: "messages" }, h("slot", { key: "89343a8a22eaf85b4faf9be56922c02254e79ae1" })), h("div", { key: "4d0210a0c5434a45cf4a21470e07356bcecfead2", class: "prompt", part: "prompt" }, h("slot", { key: "9f1382d61924687f6f94a9147e63fbf4e9ec6491", name: "prompt", onSlotchange: (event) => this.handlePromptSlotChange(event) })));
  }
};
Chat.style = chatCss();
export {
  Chat as ix_chat
};
