---
'@siemens/ix': major
---

Rename Siemens semantic color custom properties from `--theme-si-sys-*` to the grouped `--si-sys-color-*` names and reference custom properties from `--theme-si-classic-ref-*` or `--theme-si-ref-*` to `--si-ref-*`. Sass consumers must use the corresponding `$si-sys-color-*` variables.

Generated `--theme-<component>-*` aliases are no longer included in the standard IX styles and no longer customize migrated components. Replace component overrides with the corresponding scoped `--ix-*` custom properties. The `@siemens/ix/scss/deprecated/components` Sass mixin remains available for downstream styles that temporarily require the generated aliases.

Color-valued component properties, including `iconColor` and event-list `itemColor`, now require a complete CSS custom-property name such as `--si-sys-color-text-danger`. The exported `NotificationColor` values include the leading `--`.

Components now use the SI Theme 6 system color mappings. Warning, critical, and neutral states and component shadows can therefore render differently. See `BREAKING_CHANGES/v6.md` for migration guidance.
