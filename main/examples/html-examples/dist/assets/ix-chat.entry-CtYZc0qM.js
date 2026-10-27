import { r as registerInstance, h, H as Host } from "./global-BxNSnRpR.js";
const chatCss = () => `@charset "UTF-8";:host{--ix-chat--min-width:var(--si-sys-sizing-size-170);--ix-chat--max-width:calc(     var(--si-sys-sizing-size-200) + var(--si-sys-sizing-spacing-x-90)   );--ix-chat-messages--max-width:var(--si-sys-sizing-size-200);--ix-chat-messages--gap:var(--si-sys-sizing-spacing-y-90);--ix-chat-messages--padding:var(--si-sys-sizing-spacing-y-90) var(--si-sys-sizing-spacing-x-90);--ix-chat-prompt--max-width:var(--si-sys-sizing-size-200);--ix-chat-prompt--padding:var(--si-sys-sizing-spacing-y-90) var(--si-sys-sizing-spacing-x-90)}:host{display:flex;flex-direction:column;width:100%;height:100%;min-height:0;min-width:var(--ix-chat--min-width);max-width:var(--ix-chat--max-width);box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .messages{display:flex;flex:1 1 auto;flex-direction:column;align-items:center;gap:var(--ix-chat-messages--gap);min-height:0;width:100%;padding:var(--ix-chat-messages--padding);box-sizing:border-box;overflow-y:auto}:host .messages ::slotted(*){width:100%;max-width:var(--ix-chat-messages--max-width);flex:0 0 auto}:host .prompt{display:none;flex:0 0 auto;width:100%;padding:var(--ix-chat-prompt--padding);box-sizing:border-box}:host .prompt ::slotted(*){width:100%;max-width:var(--ix-chat-prompt--max-width)}:host(.has-prompt) .prompt{display:flex;justify-content:center}`;
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
    return h(Host, { key: "b80bc1e8f1d87ff82f25df78e23235a81a75ae29", class: {
      "has-prompt": this.hasPrompt
    } }, h("div", { key: "97e21a8a3344fa5ee83c9cb160eedaa758e14b32", class: "messages", part: "messages" }, h("slot", { key: "064b6729cac5d58194628836f686759bc2835517" })), h("div", { key: "c7c6e8ddf8efc0d904395408e10992bfaf405f46", class: "prompt", part: "prompt" }, h("slot", { key: "dfa5de2a0267f38b3342e06d927dcbdf5c73fd4d", name: "prompt", onSlotchange: (event) => this.handlePromptSlotChange(event) })));
  }
};
Chat.style = chatCss();
export {
  Chat as ix_chat
};
