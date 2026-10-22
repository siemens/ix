---
'@siemens/ix': minor
---

Add `clear()` to input, number-input, textarea, and date-input to empty their values and reset touched validation feedback. Number-input clearing respects `allowEmptyValueChange`.

Add `getValidityState()` to number-input and textarea for consistent access to native validation.

Keep programmatic values, form values, and validation feedback synchronized while preserving decimal entry in number-input and removing stale error-message references after clearing.

Fixes #1799.
