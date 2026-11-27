---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add a Welcome screen and Prompt suggestions to the chat.

- `ix-chat` has a new `welcome` slot that is shown only while the chat has no messages. It is hidden automatically as soon as a message element is added to the default slot and shown again when all messages are removed.
- New `ix-chat-welcome` shows a `heading`, free content in the default slot and Prompt suggestions in the `suggestions` slot.
- New `ix-chat-prompt-suggestion` renders a button with the suggestion text as accessible name and emits `suggestionSelect` with the suggestion text when the user picks it, so the application decides whether to fill the input or submit the prompt directly. It can also be used as a Follow-up prompt in the `follow-up` slot of `ix-chat-input`; plain `ix-button`s keep working there.
- The `actions` slots of `ix-chat-ai-message` and `ix-chat-user-message` document the message-actions pattern: subtle tertiary icon buttons for copy, regenerate and feedback, and an overflow menu via `ix-dropdown`.
