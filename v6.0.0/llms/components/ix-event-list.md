# ix-event-list

> List that displays a sequence of events or status entries.

- Web component: `<ix-event-list>`
- React/Vue: `IxEventList` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-event-list>` (`IxModule` from `@siemens/ix-angular` or `IxEventList` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/event-list/code.md

## Figma IDs

- 1433:43161

## Properties

- `animated`; attr: `animated`; type: `boolean`; default: `false` - Animate state change transitions. Defaults to 'false'.
- `chevron`; attr: `chevron`; type: `boolean`; default: `false` - Display a chevron icon in list items. Defaults to 'false'
- `compact`; attr: `compact`; type: `boolean`; default: `false` - Make event-list items more compact
- `itemHeight`; attr: `item-height`; type: `"L" | "S" | number`; default: `'S'` - Determines the height of list items. This can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value. In case a number is supplied it will get converted to rem internally. Defaults to 'S'.

## Events

- None

## Methods

- None

## Slots

- `` - Event list items.

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
