---
'@siemens/ix': minor
---

Add the `ix-chat` component for composing chat layouts with messages and a chat input, add the `ix-chat-user-message` component for displaying right-aligned user messages in chat interfaces with optional contextual actions and sent attachments, and add the `ix-chat-ai-message` component for displaying slotted AI-generated responses with optional actions and sources. The existing `ix-chat-prompt-attachment` component now renders with `ix-chip`, supports a compact `sent` variant, supports preview-enabled attachments with `previewSupported`, emits `attachmentClick` only for those preview interactions, and no longer exposes a retry action for failed attachments. `ix-chat-input` can display prompt attachments and now provides a `follow-up` slot for follow-up prompt actions.
