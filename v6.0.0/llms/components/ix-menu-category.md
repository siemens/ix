# ix-menu-category

> Expandable category that groups related items in the side menu.

- Web component: `<ix-menu-category>`
- React/Vue: `IxMenuCategory` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-menu-category>` (`IxModule` from `@siemens/ix-angular` or `IxMenuCategory` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/application-menu/guide.md

## Figma IDs

- 4533:132499

## Properties

- `disableTooltip`; attr: `disable-tooltip`; type: `boolean`; default: `false` - Disable the tooltip for this menu category.
- `icon`; attr: `icon`; type: `string | undefined` - Icon of the category
- `label`; attr: `label`; type: `string | undefined` - Display name of the category
- `notifications`; attr: `notifications`; type: `number | undefined` - Show notification count on the category
- `tooltipText`; attr: `tooltip-text`; type: `string | undefined` - Will be shown as tooltip text, if not provided menu text content will be used.

## Events

- None

## Methods

- None

## Slots

- `` - Menu category items.

## Dependencies

- Renders: `ix-divider`, `ix-dropdown`, `ix-dropdown-item`, `ix-menu-item`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application-advanced (angular, angular-standalone, html, react, vue)
- menu-category (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
