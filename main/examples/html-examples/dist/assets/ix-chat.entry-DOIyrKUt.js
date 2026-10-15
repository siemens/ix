import { r as registerInstance, h, H as Host } from "./global-D3pEBlWT.js";
const chatCss = () => `@charset "UTF-8";:host{--ix-chat--min-width:calc(     var(--si-sys-sizing-size-170) + var(--si-sys-sizing-size-140) - var(--si-sys-sizing-spacing-x-40)   );--ix-chat--max-width:calc(     var(--si-sys-sizing-size-200) + var(--si-sys-sizing-spacing-x-90)   );--ix-chat-messages--max-width:var(--si-sys-sizing-size-200);--ix-chat-messages--gap:var(--si-sys-sizing-spacing-y-90);--ix-chat-messages--padding:var(--si-sys-sizing-spacing-y-90) var(--si-sys-sizing-spacing-x-90);--ix-chat-prompt--max-width:var(--si-sys-sizing-size-200);--ix-chat-prompt--padding:var(--si-sys-sizing-spacing-y-90) var(--si-sys-sizing-spacing-x-90)}:host{display:flex;flex-direction:column;width:100%;height:100%;min-height:0;min-width:var(--ix-chat--min-width);max-width:var(--ix-chat--max-width);box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .messages{display:flex;flex:1 1 auto;flex-direction:column;align-items:center;gap:var(--ix-chat-messages--gap);min-height:0;width:100%;padding:var(--ix-chat-messages--padding);box-sizing:border-box;overflow-y:auto}:host .messages ::slotted(*){width:100%;max-width:var(--ix-chat-messages--max-width);flex:0 0 auto}:host .prompt{display:none;flex:0 0 auto;width:100%;padding:var(--ix-chat-prompt--padding);box-sizing:border-box}:host .prompt ::slotted(*){width:100%;max-width:var(--ix-chat-prompt--max-width)}:host(.has-prompt) .prompt{display:flex;justify-content:center}`;
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
    return h(Host, { key: "8a4638dc9c4b15e40fb8d298c755391696e03b60", class: {
      "has-prompt": this.hasPrompt
    } }, h("div", { key: "26b55f0b0fc47715b80c90f49b3e95e8ac48e0dd", class: "messages", part: "messages" }, h("slot", { key: "6625fc423710b0721d251daeefc1bd5bd7992051" })), h("div", { key: "dbad39cdd81ac99f2bd146118f8fc9f583e3fe5f", class: "prompt", part: "prompt" }, h("slot", { key: "e8ea077f1b608ee6e063f5d1248314f85e6f575f", name: "prompt", onSlotchange: (event) => this.handlePromptSlotChange(event) })));
  }
};
Chat.style = chatCss();
export {
  Chat as ix_chat
};
