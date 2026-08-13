---
"@siemens/ix-aggrid": minor
---

Add optional theme configuration to `getIxTheme` and `getIxThemeAsync` with `stripedRows` for API-based striped row styling.

AG Grid now defaults to a uniform row background, while striped rows can be enabled with:

`getIxTheme(agGridCommunity, { stripedRows: true })`
