# ix-card

> Flexible container that groups related content and actions.

- Web component: `<ix-card>`
- React: `IxCard` from `@siemens/ix-react`
- Vue: `IxCard` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/card/guide.md

## Figma IDs

- 104612:25530

## Properties

- `clickable`; attr: `clickable`; type: `boolean`; default: `false` - Enable pointer cursor and hover/active surface styles. Default is `false` (non-clickable).
- `outline`; attr: `outline`; type: `boolean | undefined` - Show the card with outline chrome. When omitted, outline chrome is used (`true`). When `false`, uses a filled surface; status variants then show a top color strip.
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Show card in selected state
- `variant`; attr: `variant`; type: `"accent" | "base" | "caution" | "critical" | "danger" | "information" | "neutral" | "success" | "warning"`; default: `'base'` - Card status variant

## Events

- None

## Methods

- None

## Slots

- `` - Card content.
- `card-accordion` - Accordion content displayed at the bottom of the card.

## Dependencies

- Renders: None
- Rendered by: `ix-action-card`, `ix-card-list`, `ix-push-card`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- card (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
