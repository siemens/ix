---
'@siemens/ix': major
---

Remove obsolete common sizing, spacing, text-decoration, effects, and typography metric variables from generated themes, along with their unused legacy typography and shadow definitions. The common compatibility layer now retains only the five timing variables.

Also remove the remaining 196 legacy color, chart-color, border-shorthand, font-family, and branding tokens from generated themes. Built-in IX styling is unchanged because it already uses system/reference tokens; applications must migrate their own usages instead of relying on the removed exports.

Migrate removed references to purpose-specific `--si-sys-*` and `--si-ref-*` tokens as described in `BREAKING_CHANGES/v6.md`. Remaining chat, checkbox, and event-list consumers use system tokens; default spacing and chat font sizes are preserved, while compact density also applies to the migrated spacing and typography.
