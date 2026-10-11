---
'@siemens/ix': major
---

Date and time components now behave consistently when picking, confirming and closing.

- New `requireConfirmation` property on `ix-date-dropdown`, `ix-date-input`, `ix-datetime-input`, `ix-date-picker` and `ix-datetime-picker`: a selection is applied only on **Confirm**; **Cancel**, Escape or an outside click discards it. New `i18nConfirm`/`i18nCancel` labels and `dateCancel` event.

**Breaking changes:**

- There are breaking changes for `ix-time-picker`, `ix-date-dropdown`, `ix-datetime-input` and `ix-datetime-picker` components.
See `BREAKING_CHANGES/v6.md` for deatils and migration instructions.

