# ix-menu

> Primary side navigation menu of the application shell.

- Web component: `<ix-menu>`
- React/Vue: `IxMenu` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-menu>` (`IxModule` from `@siemens/ix-angular` or `IxMenu` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/application-menu/guide.md

## Figma IDs

- 20977:55554

## Properties

- `applicationDescription`; attr: `application-description`; type: `string`; default: `''` - Should only be set if you use ix-menu standalone
- `applicationName`; attr: `application-name`; type: `string | undefined` - Should only be set if you use ix-menu standalone
- `enableToggleTheme`; attr: `enable-toggle-theme`; type: `boolean`; default: `false` - Show toggle between light and dark variant. Only if the provided theme have implemented both!
- `expand`; attr: `expand`; type: `boolean`; default: `false` - Toggle the expand state of the menu
- `i18nAriaLabelMenu`; attr: `i18n-aria-label-menu`; type: `string`; default: `'Application Navigation'` - i18n aria-label for menu. Gets read out by screen readers when first focusing the menu
- `i18nCollapse`; attr: `i18n-collapse`; type: `string`; default: `'Collapse'` - i18n label for 'Collapse' button
- `i18nExpand`; attr: `i18n-expand`; type: `string`; default: `'Expand'` - i18n label for 'Expand' button
- `i18nLegal`; attr: `i18n-legal`; type: `string`; default: `'About & legal information'` - i18n label for 'About & legal information' button
- `i18nNavigationHint`; attr: `i18n-navigation-hint`; type: `string`; default: `'Use Up and Down arrow keys to navigate between menu items'` - i18n description for menu keyboard navigation hint, read by screen readers when focusing the menu
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

## Methods

- `toggleAbout(show: boolean) => Promise<void>` - Toggle About tabs
- `toggleMapExpand(show?: boolean) => Promise<void>` - Toggle map sidebar expand
- `toggleMenu(show?: boolean) => Promise<void>` - Toggle menu
- `toggleSettings(show: boolean) => Promise<void>` - Toggle Settings tabs

## Slots

- `` - Menu items.
- `bottom` - Menu items displayed at the bottom.
- `home` - Menu item displayed in the home position.
- `ix-menu-about` - About menu content.
- `ix-menu-avatar` - Avatar displayed in the menu header.
- `ix-menu-settings` - Settings menu content.

## Dependencies

- Renders: `ix-icon-button`, `ix-menu-expand-icon`, `ix-menu-item`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- about-and-legal (angular, angular-standalone, html, react, vue)
- about-and-legal-legacy (angular, angular-standalone, html, react, vue)
- application (angular, angular-standalone, html, react, vue)
- application-advanced (angular, angular-standalone, html, react, vue)
- application-app-switch (angular, angular-standalone, html, react, vue)
- application-breakpoints (angular, angular-standalone, html, react, vue)
- menu-category (angular, angular-standalone, html, react, vue)
- menu-with-bottom-tabs (angular, angular-standalone, html, react, vue)
- popover-news (angular, angular-standalone, html, react, vue)
- settings (angular, angular-standalone, html, react, vue)
- settings-legacy (angular, angular-standalone, html, react, vue)
- vertical-tabs (angular, angular-standalone, html, react, vue)
- vertical-tabs-with-avatar (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
