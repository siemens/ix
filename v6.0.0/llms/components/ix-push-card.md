# ix-push-card

> Card that highlights a notification or push message with an icon and value.

- Web component: `<ix-push-card>`
- React: `IxPushCard` from `@siemens/ix-react`
- Vue: `IxPushCard` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/card/guide.md

## Figma IDs

- 104612:25695

## Properties

- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `clickable`; attr: `clickable`; type: `boolean`; default: `false` - Enable pointer interaction on the upper card region. Default is `false`; only the accordion control is interactive.
- `expanded`; attr: `expanded`; type: `boolean`; default: `false` - Expand the card
- `heading`; attr: `heading`; type: `string | undefined` - Card heading
- `icon`; attr: `icon`; type: `string | undefined` - Card icon
- `notification`; attr: `notification`; type: `string | undefined` - Card KPI value
- `outline`; attr: `outline`; type: `boolean | undefined` - Show the card with outline chrome. When omitted, outline chrome is used (`true`). When `false`, uses a filled surface; status variants then show a top color strip.
- `subheading`; attr: `subheading`; type: `string | undefined` - Card subheading
- `variant`; attr: `variant`; type: `"accent" | "base" | "caution" | "critical" | "danger" | "information" | "neutral" | "success" | "warning"`; default: `'base'` - Card status variant

## Events

- None

## Methods

- None

## Slots

- `` - Card content.
- `title-action` - Action displayed next to the title.

## Dependencies

- Renders: `ix-card`, `ix-card-accordion`, `ix-card-content`, `ix-card-title`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- card-list (angular, angular-standalone, html, react, vue)
- push-card (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
