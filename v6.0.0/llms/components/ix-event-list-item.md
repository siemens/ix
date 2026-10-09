# ix-event-list-item

> A single entry within an event list.

- Web component: `<ix-event-list-item>`
- React/Vue: `IxEventListItem` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-event-list-item>` (`IxModule` from `@siemens/ix-angular` or `IxEventListItem` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/event-list/code.md

## Figma IDs

- 1433:41688

## Properties

- `chevron`; attr: `chevron`; type: `boolean`; default: `false` - Show chevron on right side of the event list item
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable event list item
- `itemColor`; attr: `item-color`; type: `string | undefined` - Color of the status indicator. You can find a list of all available colors in our documentation. Example value: `--si-sys-color-background-danger` {@link https://ix.siemens.io/docs/styles/colors}
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Show event list item as selected
- `variant`; attr: `variant`; type: `"filled" | "outline"`; default: `'outline'` - Variant of the event list item

## Events

- `itemClick` - Event list item click

## Methods

- None

## Slots

- `` - Event list item content.

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- event-list (angular, angular-standalone, html, react, vue)
- event-list-compact (angular, angular-standalone, html, react, vue)
- event-list-custom-item-height (angular, angular-standalone, html, react, vue)
- event-list-custom-item-height-in-number (angular, html, react, vue)
- event-list-filled (angular, angular-standalone, html, react, vue)
- event-list-selected (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
