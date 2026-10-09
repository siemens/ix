# ix-push-card

> Card that highlights a notification or push message with an icon and value.

- Web component: `<ix-push-card>`
- React/Vue: `IxPushCard` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-push-card>` (`IxModule` from `@siemens/ix-angular` or `IxPushCard` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/card/guide.md

## Figma IDs

- 104612:25695

## Properties

- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `expanded`; attr: `expanded`; type: `boolean`; default: `false` - Expand the card
- `heading`; attr: `heading`; type: `string | undefined` - Card heading
- `icon`; attr: `icon`; type: `string | undefined` - Card icon
- `notification`; attr: `notification`; type: `string | undefined` - Card KPI value
- `passive`; attr: `passive`; type: `boolean`; default: `false` - If true, disables hover and active styles and changes cursor to default
- `subheading`; attr: `subheading`; type: `string | undefined` - Card subheading
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "filled" | "info" | "neutral" | "outline" | "primary" | "success" | "warning"`; default: `'outline'` - Card variant

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
