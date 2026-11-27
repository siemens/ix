---
'@siemens/ix': patch
---

Floating surfaces (dropdown, tooltip, popover, toast, standalone date-time card, About & news, and floating pane) now use `--si-sys-color-effects-shadow-30` instead of `-40`, in line with the SI Theme 6 elevation spec. Modal and list drag preview stay on `-40`. The popover spike shadow now uses the popover box-shadow token, so it matches the popover in every theme, including dark. The undocumented `--theme-popover--elevation-filter` variable is removed.
