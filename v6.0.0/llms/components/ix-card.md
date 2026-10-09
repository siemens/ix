# ix-card

> Flexible container that groups related content and actions.

- Web component: `<ix-card>`
- React/Vue: `IxCard` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-card>` (`IxModule` from `@siemens/ix-angular` or `IxCard` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/card/guide.md

## Figma IDs

- 104612:25530

## Properties

- `passive`; attr: `passive`; type: `boolean`; default: `false` - If true, disables hover and active styles and changes cursor to default
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Show card in selected state
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "filled" | "info" | "neutral" | "outline" | "primary" | "success" | "warning"`; default: `'outline'` - Card variant

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
