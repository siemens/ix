---
'@siemens/ix': major
---

Update the public theme-switcher API to support explicit `system` color schema handling and unified theme change events.

Consumers using `themeSwitcher.themeChanged`, `themeSwitcher.schemaChanged`, `setTheme()`, or `ThemeVariant` must update to the new event detail payload and consolidated color-schema behavior. Existing listeners expecting a string event payload or relying on `schemaChanged` will need to be migrated.
