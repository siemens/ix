# ix-pill

> Compact label that highlights a status, count, or category.

- Web component: `<ix-pill>`
- React: `IxPill` from `@siemens/ix-react`
- Vue: `IxPill` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/pill/guide.md

## Figma IDs

- 312:1219

## Properties

- `alignLeft`; attr: `align-left`; type: `boolean`; default: `false` - Align pill content left
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `background`; attr: `background`; type: `string | undefined` - Custom color for pill. Only working for `variant='custom'`
- `icon`; attr: `icon`; type: `string | undefined` - Show icon
- `outline`; attr: `outline`; type: `boolean`; default: `false` - Show pill as outline
- `pillColor`; attr: `pill-color`; type: `string | undefined` - Custom font color for pill. Only working for `variant='custom'`
- `tooltipText`; attr: `tooltip-text`; type: `boolean | string`; default: `false` - Display a tooltip. By default, no tooltip will be displayed. Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
- `variant`; attr: `variant`; type: `"accent" | "caution" | "critical" | "custom" | "danger" | "information" | "neutral" | "success" | "warning"`; default: `'accent'` - Pill variant. Defaults to `accent`. When unset or set to an unknown value the pill falls back to `accent` styling.

## Events

- None

## Methods

- None

## Slots

- `` - Pill content.

## Dependencies

- Renders: `ix-tooltip`, `ix-typography`
- Rendered by: `ix-tab-item`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- content-header-with-slot (angular, angular-standalone, html, react, vue)
- pill (angular, angular-standalone, html, react, vue)
- pill-variants (angular, angular-standalone, html, react, vue)
- popover (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
