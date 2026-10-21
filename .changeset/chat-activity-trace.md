---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add an Activity trace to `ix-chat-ai-message` that shows how the AI produced a response.

- `ix-chat-ai-message` has a new `trace` slot rendered above the message content. If only a trace is slotted, the message shows the trace alone (for example while the AI is still working).
- New `ix-chat-activity-trace` lists the steps as Trace items. Without `summary` the items are shown flat. With `summary` a toggle header shows the summary and controls the visibility of the items (`expanded` / `expandedChange`). Use the `summary-meta` slot for metadata such as the duration or the number of steps. Items keep their focus when the summary appears; if the items are collapsed while one of them has focus, focus moves to the summary toggle.
- New `ix-chat-trace-item` shows one step with a `label`, a type `icon` and a `state` (`running`, `completed`, `warning` or `failed`). A running item shows a spinner and sets `aria-busy`. The state is part of the accessible name and can be localized with `i18nStateRunning`, `i18nStateCompleted`, `i18nStateWarning` and `i18nStateFailed`. Items with detail content can be expanded (`expanded` / `expandedChange`), and items without detail are static text.
- New `ix-chat-trace-item-section` structures the detail of a Trace item into an optional `heading` and content, optionally `collapsible` (`expanded` / `expandedChange`).

The components are controlled: the application decides when to set the summary, which items to expand and when to collapse the trace. The `expandedChange` events do not bubble, so a nested section or item does not trigger the listener of its parent.
