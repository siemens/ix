---
'@siemens/ix-aggrid': major
---

Use `--si-sys-sizing-border-width-default` for AG Grid border and focus-border parameters while preserving their existing width and disabled column borders.

Overrides of `--theme-border-width-default` and `--theme-focus-border-thickness` no longer customize these defaults. Migrate to the system border-width token or override the corresponding AG Grid theme parameter.
