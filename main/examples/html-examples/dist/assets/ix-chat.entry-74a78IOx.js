import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
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
    return h(Host, { key: "de8b5910456f112310aa2e2d5d81937038180409", class: {
      "has-prompt": this.hasPrompt
    } }, h("div", { key: "b6bd2ee6ce62c4f45a60637272151188171a675d", class: "messages", part: "messages" }, h("slot", { key: "d4efb60af73843eee4e544fa436cbf2b39113fe2" })), h("div", { key: "f89cd9bfbc0c9dc3e03399e019b7430129b5e2a5", class: "prompt", part: "prompt" }, h("slot", { key: "e3a49bfb5694a00c0273d886228d17edd6846247", name: "prompt", onSlotchange: (event) => this.handlePromptSlotChange(event) })));
  }
};
Chat.style = chatCss();
export {
  Chat as ix_chat
};
