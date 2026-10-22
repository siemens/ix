---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add Interrupt support to `ix-chat-input`.

- Set the new `interruptible` property to enable the stop button while `state` is `processing`. Activating it (click, Enter or Space) emits the new `promptInterrupt` event so the application can cancel the running request. Without `interruptible`, the stop button stays disabled as before.
- Use the new `interrupting` value of `state` while the Interrupt is being processed. The stop button is disabled and shows progress, and the prompt cannot be submitted, as in `processing`.
- Localize the stop button's accessible name with the new `i18nStopGenerating` property (default "Stop generating", previously the fixed label "Stop processing").
