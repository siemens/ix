---
'@siemens/ix': minor
---

Add the `ix-chat-shell` component for composing chat layouts with messages and a prompt input, add the `ix-chat-user-message` component for displaying right-aligned user messages in chat interfaces with optional contextual actions and sent attachments, and add the `ix-chat-ai-message` component for displaying slotted AI-generated responses with optional actions and sources. The existing `ix-chat-prompt-attachment` component now also supports a compact `sent` variant, preview-enabled attachments with `previewSupported`, and emits `attachmentClick` only for those preview interactions. `ix-prompt-input` can display wrapped attachment overflow with `ix-dropdown-button` and slotted `ix-dropdown-item` entries, and now provides a `follow-up` slot for follow-up prompt actions.
