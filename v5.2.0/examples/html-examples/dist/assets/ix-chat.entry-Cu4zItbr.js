import { r as registerInstance, h, H as Host } from "./global-CSIWS5Ku.js";
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
    return h(Host, { key: "b4d659f28fb34320f986c5b046ff794c9b2a0742", class: {
      "has-prompt": this.hasPrompt
    } }, h("div", { key: "0790bede975ba3cba978ec9425d80195fa380b83", class: "messages", part: "messages" }, h("slot", { key: "f3a2c8f7e337fb3b93a19098a3f3556377692f7c" })), h("div", { key: "4975b7ed690b957d87307fcde8c8c785883bb2b0", class: "prompt", part: "prompt" }, h("slot", { key: "d99a7efca4cff53916781d3bb1c089ba63f356c0", name: "prompt", onSlotchange: (event) => this.handlePromptSlotChange(event) })));
  }
};
Chat.style = chatCss();
export {
  Chat as ix_chat
};
