# ix-menu

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/application-menu/guide.md

## Figma IDs

- 20977:55554

## Related examples

- about-and-legal
- about-and-legal-legacy
- application
- application-advanced
- application-app-switch
- application-breakpoints
- menu-category
- menu-with-bottom-tabs
- popover-news
- settings
- settings-legacy
- vertical-tabs
- vertical-tabs-with-avatar

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `applicationDescription`; attr: `application-description`; type: `string`; default: `''` - Should only be set if you use ix-menu standalone
- `applicationName`; attr: `application-name`; type: `string | undefined` - Should only be set if you use ix-menu standalone
- `enableToggleTheme`; attr: `enable-toggle-theme`; type: `boolean`; default: `false` - Show toggle between light and dark variant. Only if the provided theme have implemented both!
- `expand`; attr: `expand`; type: `boolean`; default: `false` - Toggle the expand state of the menu
- `i18nCollapse`; attr: `i18n-collapse`; type: `string`; default: `'Collapse'` - i18n label for 'Collapse' button
- `i18nExpand`; attr: `i18n-expand`; type: `string`; default: `'Expand'` - i18n label for 'Expand' button
- `i18nLegal`; attr: `i18n-legal`; type: `string`; default: `'About & legal information'` - i18n label for 'About & legal information' button
- `i18nSettings`; attr: `i18n-settings`; type: `string`; default: `'Settings'` - i18n label for 'Settings' button
- `i18nToggleTheme`; attr: `i18n-toggle-theme`; type: `string`; default: `'Toggle theme'` - i18n label for 'Toggle theme' button
- `pinned`; attr: `pinned`; type: `boolean`; default: `false` - Menu stays pinned to the left
- `showAbout`; attr: `show-about`; type: `boolean`; default: `false` - Is about tab visible
- `showSettings`; attr: `show-settings`; type: `boolean`; default: `false` - Is settings tab visible
- `startExpanded`; attr: `start-expanded`; type: `boolean`; default: `false` - If set the menu will be expanded initially. This will only take effect at the breakpoint 'lg'.

## Events

- `expandChange` - Menu expanded
- `mapExpandChange` - Map Sidebar expanded
- `openAbout` - Event emitted when the about button is clicked
- `openAppSwitch` - Event emitted when the app switch button is clicked
- `openSettings` - Event emitted when the settings button is clicked

## Slots

- None
