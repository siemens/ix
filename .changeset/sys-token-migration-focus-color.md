---
'@siemens/ix': major
---

Rename Siemens system custom properties from `--theme-si-sys-*` to `--si-sys-*` and reference custom properties from `--theme-si-classic-ref-*` or `--theme-si-ref-*` to `--si-ref-*`.

Generated `--theme-<component>-*` aliases are no longer included in the standard IX styles and no longer customize migrated components. Replace component overrides with the corresponding scoped `--ix-*` custom properties. The `@siemens/ix/scss/deprecated/components` Sass mixin remains available for downstream styles that temporarily require the generated aliases.

Color-valued component properties, including `iconColor` and event-list `itemColor`, now require a complete CSS custom-property name such as `--si-sys-text-danger`. The exported `NotificationColor` values include the leading `--`.

Components now use the SI Theme 6 system mappings. Warning, critical, and neutral states and component shadows can therefore render differently. See `BREAKING_CHANGES/v6.md` for migration guidance.
