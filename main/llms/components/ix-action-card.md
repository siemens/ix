# ix-action-card

> Card that represents a selectable action or option to start a task or workflow.

- Web component: `<ix-action-card>`
- React: `IxActionCard` from `@siemens/ix-react`
- Vue: `IxActionCard` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/card/guide.md

## Figma IDs

- 104612:25269

## Properties

- `ariaLabelCard`; attr: `aria-label-card`; type: `string | undefined` - ARIA label for the card
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `clickable`; attr: `clickable`; type: `boolean | undefined` - Enable pointer interaction on the action card. When omitted, the card is clickable (`true`). When `false`, the wrapping button is disabled.
- `heading`; attr: `heading`; type: `string | undefined` - Card heading
- `icon`; attr: `icon`; type: `string | undefined`; default: `undefined` - Card icon
- `outline`; attr: `outline`; type: `boolean | undefined` - Show the card with outline chrome. When omitted, outline chrome is used (`true`). When `false`, uses a filled surface; status variants then show a top color strip.
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Card selection
- `subheading`; attr: `subheading`; type: `string | undefined` - Card subheading
- `variant`; attr: `variant`; type: `"accent" | "base" | "caution" | "critical" | "danger" | "information" | "neutral" | "success" | "warning"`; default: `'base'` - Card status variant

## Events

- None

## Methods

- None

## Slots

- `` - Card content.

## Dependencies

- Renders: `ix-card`, `ix-card-content`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- action-card (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
