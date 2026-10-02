---
'@siemens/ix': major
---

Remove obsolete common sizing, spacing, text-decoration, effects, and typography metric variables from generated themes, along with their unused legacy typography and shadow definitions. The common compatibility layer now retains only timing, focus offset, border radii, and border widths.

Migrate removed references to purpose-specific `--si-sys-*` and `--si-ref-*` tokens as described in `BREAKING_CHANGES/v6.md`. Remaining chat, checkbox, and event-list consumers use system tokens; default spacing and chat font sizes are preserved, while compact density also applies to the migrated spacing and typography.
