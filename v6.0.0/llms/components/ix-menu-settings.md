# ix-menu-settings

> Settings overlay opened from the application menu.

- Web component: `<ix-menu-settings>`
- React/Vue: `IxMenuSettings` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-menu-settings>` (`IxModule` from `@siemens/ix-angular` or `IxMenuSettings` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/settings/guide.md

## Figma IDs

- None

## Properties

- `activeTabKey`; attr: `active-tab-key`; type: `string | undefined` - Active tab used for legacy ix-menu-settings-item integrations
- `ariaLabelCloseButton`; attr: `aria-label-close-button`; type: `string`; default: `'Close Settings'` - Aria label for close button
- `label`; attr: `label`; type: `string`; default: `'Settings'` - Label of first tab
- `suppressLegacyTabs`; attr: `suppress-legacy-tabs`; type: `boolean`; default: `false` - Whether to suppress legacy tabs (ix-menu-settings-item) and use slotted tabs (ix-tab-item) instead

## Events

- `close` - Popover closed
- `tabChange` - Active tab changed

## Methods

- None

## Slots

- `` - Settings menu content.

## Dependencies

- Renders: `ix-icon-button`, `ix-tab-item`, `ix-tab-set`, `ix-tabs`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application-advanced (angular, angular-standalone, html, react, vue)
- settings (angular, angular-standalone, html, react, vue)
- settings-legacy (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
