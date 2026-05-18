---
'@siemens/ix': major
---

Remove pre-v5 deprecated components, properties, and the `showModalLoading` string overload.

**Removed components:** `ix-input-group` (use `ix-input`); `ix-validation-tooltip` (use built-in validation on `ix-input` / `ix-select`); `ix-drawer` (use `ix-pane`).

**Removed properties:** `ariaLabelMenuExpandIconButton` on `ix-application-header`; `a11yLabel` on `ix-avatar`; `ariaLabelButton` on `ix-breadcrumb-item`; `ariaLabelChevronDownIconButton` on `ix-select`; `error` on `ix-slider` (use `class="ix-invalid"` and `invalid-text` instead).

**Removed util overload:** `showModalLoading(message: string)` — use `showModalLoading({ message: '...' })` instead.

See `BREAKING_CHANGES/v5.md` (section **Removed deprecated components and APIs**) for migration details.
