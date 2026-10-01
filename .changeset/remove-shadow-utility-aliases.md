---
'@siemens/ix': major
---

Remove the legacy shadow utility module and its `--theme-box-shadow-lvl-*`, `--theme-box-shadow-level-*`, and `--theme-box-shadow-insert` CSS aliases from the utilities, globals, and legacy stylesheets.

Use `--si-sys-color-effects-shadow-1` through `--si-sys-color-effects-shadow-4` directly for elevation shadows. The removed inset alias, based on `--theme-inset-shadow-1`, has no system-token successor; remove its use or provide an application-defined inset shadow.
