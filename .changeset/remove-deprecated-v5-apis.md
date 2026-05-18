---
'@siemens/ix': major
---

Remove deprecated components, properties, and `showModalLoading` string overload for v5.

**Removed components:** `ix-input-group`, `ix-validation-tooltip`, `ix-drawer`.

**Removed properties:** `ariaLabelMenuExpandIconButton` on `ix-application-header`; `a11yLabel` on `ix-avatar`; `ariaLabelButton` on `ix-breadcrumb-item`; `ariaLabelChevronDownIconButton` on `ix-select`.

**Removed util overload:** `showModalLoading(message: string)` — use `showModalLoading({ message: '...' })` instead.

See `BREAKING_CHANGES/v5.md` for migration details.
