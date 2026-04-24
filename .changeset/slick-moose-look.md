---
'@siemens/ix-angular': major
'@siemens/ix-aggrid': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

Renamed `enableTopLayer` to `suppressTopLayer` on `ix-dropdown` with inverted semantics: the top layer is now **on by default**. Set `suppress-top-layer` to keep legacy stacking. The same rename applies to all components that forward to `ix-dropdown` (`ix-select`, `ix-dropdown-button`, `ix-split-button`, `ix-breadcrumb`, `ix-application-header`, `ix-category-filter`, `ix-menu-avatar`, `ix-date-picker`, `ix-date-input`, `ix-time-input`, `ix-datetime-input`, `ix-date-dropdown`).

See [Breaking changes v5](../BREAKING_CHANGES/v5.md#ix-dropdown-enabletoplayer--suppresstoplayer) for migration.

Alongside fixes:

- Added shared `TopLayerMixin` for consistent `suppressTopLayer` behavior across components.
- Fixed phantom spacing block behind the dropdown panel in top-layer mode via a `:host(.top-layer)` style reset.
- Replaced unsafe `Object.assign(dialogRef, config)` in `showModal`/`showMessage` with `assignModalPropsFromConfig`, which applies only supported props and maps `animation`/`backdrop` to `disableAnimation`/`hideBackdrop`.
- `ix-menu-category` pins `suppressTopLayer={true}` to preserve nested-menu stacking under the new default.
