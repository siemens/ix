---
'@siemens/ix': major
---

Remove deprecated components, properties, and `showModalLoading` string overload for v5.

**Removed components:** `ix-input-group`, `ix-validation-tooltip`, `ix-drawer`, `ix-menu-about-item`, `ix-menu-settings-item`.

**Removed properties:** `ariaLabelMenuExpandIconButton` on `ix-application-header`; `a11yLabel` on `ix-avatar`; `ariaLabelButton` on `ix-breadcrumb-item`; `ariaLabelChevronDownIconButton` on `ix-select`; `activeTabKey` on `ix-menu-about` and `ix-menu-settings`.

**Removed util overload:** `showModalLoading(message: string)` — use `showModalLoading({ message: '...' })` instead.

**Menu:** `suppressLegacyTabs` now defaults to `true`. Slotted `ix-tabs` / `ix-tab-item` is required. `tabChange` on `ix-menu-about` and `ix-menu-settings` is re-emitted from the slotted `ix-tabs` instance.

See `BREAKING_CHANGES/v5.md` for migration details.
